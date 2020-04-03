const Sequelize = require('sequelize');
const connection = require('../../config/dbConn');
const UUID = require('uuid');


const Employee = connection.define('employee', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
    },
    gender: {
        type: Sequelize.ENUM('male', 'female')
    },
    blood_type: {
        type: Sequelize.ENUM('A', 'B', 'AB', 'O')
    },
    image: {
        type: Sequelize.BLOB('long')
    },
    phone_number: {
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING
    },
    birth_place: {
        type: Sequelize.STRING
    },
    birth_date: {
        type: Sequelize.DATEONLY
    },
    identity: {
        type: Sequelize.ENUM('Simper', 'ID Card')
    },
    distant_relative: {
        type: Sequelize.STRING
    },
    place: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    tableName: 'Employee',
    paranoid: true,
});

module.exports = Employee;