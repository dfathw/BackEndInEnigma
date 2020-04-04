const Sequelize = require ('sequelize');
const connection = require('../../config/dbConn');
const UUID = require('uuid');

const EmployeeAttendance = connection.define('EmployeeAttendance',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false,
    },
},{
    freezeTableName: true,
    tableName: 'employee_attendance',
    paranoid: false,
    timestamp: false
})

module.exports = EmployeeAttendance;