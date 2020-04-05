const logEvent = require('../events/logging.listener');
const Sites = require('../models/site_master.model');

class SitesService {
    async getAllSites() {
        let result;
        try {
            result = await Sites.findAll();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-SITES-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async getSiteById(id) {
        let result;
        try {
            result = await Sites.findByPk(id);
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-SITES-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    };
    async addNewSite(newSite) {
        let result;
        try {
            result = await Sites.create(newSite);
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'CREATE-SITES-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    };
    async updateSites(updatedSites) {
        let result;
        const site = await Sites.findByPk(updatedSites.id);
        site.location = updatedSites.location;
        try {
            result = await site.save()
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-SITES-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    };
    async deleteSite(id) {
        const site = await Sites.findOneByPk(id);
        let result;
        try {
            result = await site.destroy();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'DELETE-SITES-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
};

module.exports = SitesService;