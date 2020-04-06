const Sequelize = require('sequelize');
const connection = require('../../config/dbConn');

const Admin = connection.define('admin', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false,
    }, 
    user_name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
},{
    freezeTableName: true,
    tableName: 'admin',
    paranoid: true
});

module.exports = Admin;