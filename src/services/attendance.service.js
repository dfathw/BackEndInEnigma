const logEvent = require('../events/myEmitter');
const Employee = require('../models/employee.model')
const Attendance = require('../models/attendance.model')
const Site = require('../models/site_master.model');
const EmpAtt = require('../models/employeeAttendance.model');

class AttendanceService {
    async getAllAttendance() {
        let result;
        try {
            result = await Attendance.findAll({
                include: {
                    model: Employee,
                    include: {
                        model: Site,
                        attributes: {
                            exclude: ["SiteMasterId",]
                        }
                    }
                }
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
    async getAttendaceBySite(site) {
        let result;
        try {
            result = await Attendance.findAll({
                include: {
                    model: Employee,
                    include: {
                        model: Site,
                        where: { alias_name: site },
                        attributes: {
                            exclude: ['SiteMasterId']
                        }
                    }
                }
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
    async getEmployeeByName(name) {
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
    async createAttendance(attendance) {
        let result;
        try {
            result = await Attendance.create(attendance);
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