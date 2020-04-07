const logEvent = require('../events/myEmitter');
const Employee = require('../models/employee.model')
const Attendance = require('../models/attendance.model')
const Site = require('../models/site_master.model');
const EmpAtt = require('../models/employeeAttendance.model');
const Op = require('sequelize').Op;

class AttendanceService {
    async getAllAttendance() {
        let result;
        try {
            result = await Employee.findAll({
                include: [Site, Attendance]
            });
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-ATTENDANCE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async getAttendanceByDate(date) {
        let result;
        try {
            result = await Employee.findAll({
                include: [{
                    model: Site
                }, {
                    model: Attendance,
                    where: {
                        date: date
                    }
                }]
            })
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-ATTENDANCE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async getAttendanceDateBetween(date1, date2) {
        let result;
        try {
            result = await Employee.findAll({
                include: [{
                    model: Site
                }, {
                    model: Attendance,
                    where: {
                        date: {
                            [Op.between]: [date1, date2]
                        }
                    }
                }]
            })
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-ATTENDANCE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async getAttendaceBySite(site) {
        let result;
        try {
            result = await Employee.findAll({
                include: [{
                        model: Site,
                        where: {
                            alias_name: site
                        }
                    },
                    {
                        model: Attendance,
                    }
                ]
            })
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-ATTENDANCE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async getAttendanceByName(name) {
        let result;
        try {
            result = await Employee.findOne({
                where: { name: name },
                attributes: { exclude: ['SiteMasterId'] },
                include: [
                    { model: Site },
                    { model: Attendance }
                ]
            })
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-ATTENDANCE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async getAttendanceByEmployeeID(employeeID) {
        let result;
        try {
            result = await Employee.findOne({
                where: { id: employeeID },
                attributes: { exclude: ['SiteMasterId'] },
                include: [
                    { model: Site },
                    { model: Attendance }
                ]
            })
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-ATTENDANCE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async createAttendance(attendance) {
        let result;
        const employeeID = attendance.employeeID;
        const site = attendance.site;
        try {
            const getEmployee = await Employee.findAll({ where: { id: employeeID } });
            result = await Attendance.create({
                "enter_at": attendance.enter_at,
                "out_at": attendance.out_at,
                "date": attendance.date,
            });
            result.addEmployee(getEmployee);
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'CREATE-ATTENDANCE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async updateAttendance(newAttendance) {
        const attendance = await Attendance.findOne({ where: { date: newAttendance.date, employeeId: newAttendance.employeeId } });
        attendance.out_at = newAttendance.out_at;
        let result;
        try {
            result = await attendance.save();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-ATTENDANCE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async deleteAttendance(deleted) {
        const attendance = await Attendance.findOne({ where: { date: deleted.date } });
        let result;
        try {
            result = await attendance.destroy();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'DELETE-ATTENDANCE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
}
module.exports = AttendanceService;