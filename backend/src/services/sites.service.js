const logEvent = require('../events/logging.listener');
const Sites = require('../models/sites.model');

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
    async getSitesByAlias(alias_name) {
        let result;
        try {
            result = await Sites.findOne({where: {alias_name : alias_name}});
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-SITES-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    };
    async newSites(newSites){
        let result;
        try{
            result = await Sites.create(newSites);
        }catch (e){
            logEvent.emit('APP-ERROR',{
                logTitle: 'CREATE-SITES-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    };
    async updateSites(updatedSites){
        let result;
        const site = await Sites.findOne({where : {alias_name: updatedSites.alias_name}})
        site.location = updatedSites.location
        try{
            result = await site.save()
        }catch (e){
            logEvent.emit('APP-ERROR',{
                logTitle: 'UPDATE-SITES-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    };
    async deleteSite(deleted){
        const site = await Sites.findOne({where : {alias_name: deleted.alias_name}});
        let result;
        try{
            result = await site.destroy();
        }catch (e){
            logEvent.emit('APP-ERROR',{
                logTitle: 'DELETE-SITES-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
};

module.exports = SitesService;