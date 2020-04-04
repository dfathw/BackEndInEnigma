const Sequelize = require('sequelize');
const connection = require('../../config/dbConn');

const Attendance = connection.define('attendance', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    enter_at: {
        type: Sequelize.TIME
    },
    out_at: {
        type: Sequelize.TIME
    },
    date: {
        type: Sequelize.DATEONLY
    }
},{
    freezeTableName: true,
    tableName: 'attendance',
    paranoid: true
})

module.exports = Attendance;