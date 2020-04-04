const Sequelize = require('sequelize');
const connection = require('../../config/dbConn');
const UUID = require('uuid');

const Site_master = connection.define('SiteMaster', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false,
    },
    site_name: {
        type: Sequelize.STRING
    },
    alias_name: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    tableName: 'site_master',
    paranoid: true,

})

module.exports = Site_master;