const Sequelize = require ('sequelize');
const connection = require('../../config/dbConn');

const Sites = connection.define('sites',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    site_name:{
        type: Sequelize.STRING
    },
    alias_name:{
        type: Sequelize.STRING
    },
    location:{
        type: Sequelize.STRING
    }
},{
    freezeTableName: true,
    tableName: 'sites',
    paranoid: true
})

module.exports = Sites;