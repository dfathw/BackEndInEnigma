const Sequelize = require ('sequelize');
const connection = require('../../config/dbConn');

const Admin = connection.define('admin',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_name:{
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
},{
    freezeTableName: true,
    tableName: 'admin',
    paranoid: true,
});

module.exports = Admin;