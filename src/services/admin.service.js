const logEvent = require('../events/logging.listener');
const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');

async function hashPassword(password) {
    return await bcrypt.hash(password, 8);
}

class AdminService {
    async getAllAdmin() {
        let result;
        try {
            result = await Admin.findAll();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-ALL-ADMIN-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async getAdminById(id) {
        let result;
        try {
            result = await Admin.findByPk(id);
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-ADMIN-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async createAdmin(newAdmin) {
        let result;
        try {
            const hashedPassword = await hashPassword(newAdmin.password);
            newAdmin.password = hashedPassword;
            result = await Admin.create(newAdmin);
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'CREATE-ADMIN-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
}
module.exports = AdminService