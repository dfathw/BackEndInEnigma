const logEvent = require('../events/logging.listener');
const Employee = require('../models/employee.model');
const Site = require('../models/site_master.model');

class EmployeeService {
    async getAllEmployee() {
        let result;
        try {
            result = await Employee.findAll({ include: Site });
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-EMPLOYEE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async getEmployeeBySite(site) {
        let result;
        try {
            result = await Employee.findAll({
                include: {
                    model: Site,
                    where: { alias_name: site }
                }
            })
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-EMPLOYEE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async getEmployeeByName(name) {
        let result;
        try {
            result = await Employee.findOne({ where: { name: name }, include: Site })
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-EMPLOYEE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async createEmployee(newEmployee) {
        let result;
        try {
            result = await Employee.create(newEmployee);
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'CREATE-EMPLOYEE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async updateEmployee(newEmployee) {
        const employee = await Employee.findOne({ where: { name: newEmployee.name } });
        employee.identity = newEmployee.identity;
        let result;
        try {
            result = await employee.save();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-EMPLOYEE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async deleteEmployee(id) {
        const employee = await employee.findByPk(id)
        let result;
        try {
            result = await employee.destroy();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'DELETE-EMPLOYEE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
};
module.exports = EmployeeService;
