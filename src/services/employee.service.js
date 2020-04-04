const logEvent = require('../events/logging.listener');
const Employee = require('../models/employee.model');
const Attendace = require('../models/attendance.model')
const bcrypt = require('bcrypt');

async function hashPassword(password) {
    return await bcrypt.hash(password, 10)
}

class EmployeeService {
    async getAllEmployee() {
        let result;
        try {
            result = await Employee.findAll();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-EMPLOYEE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
    }
    async getEmployeeByName(name) {
        let result;
        try {
            result = await Employee.findOne({ where: { name: name }, include: Attendace })
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-EMPLOYEE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
    }
    async createEmployee(newEmployee) {
        let result;
        try {
            const { password } = newEmployee
            await hashPassword(password);
            result = await Employee.create(newEmployee);
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'CREATE-EMPLOYEE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
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
    }
    async deleteEmployee(deleted) {
        const employee = await employee.findOne({ where: { name: deleted.name } });
        let result;
        try {
            result = await employee.destroy();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-PRODUCT-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
    }
};
module.exports = EmployeeService;