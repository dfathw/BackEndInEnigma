const Employee = require('./employee.model');
const Attendance = require('./attendance.model');
const EmployeeAttendance = require('./employeeAttendance.model');
const Site_master = require('./site_master.model');

const dbAssociation = function dbAssociation() {
    Site_master.hasMany(Employee);
    Employee.belongsTo(Site_master);

    // Employee.hasMany(Attendance);
    // Attendance.belongsTo(Employee);

    Employee.belongsToMany(Attendance, {through: EmployeeAttendance})
    // Site_master.belongsToMany(Attendance, {through: EmployeeAttendance})
    Attendance.belongsToMany(Employee, {through: EmployeeAttendance})
    // Site_master.belongsToMany(Attendance, {through:Employee})

    // Employee.belongsToMany(Attendance, { through: EmployeeAttendance });
    // Attendance.belongsToMany(Employee, { through: EmployeeAttendance });
}

module.exports = dbAssociation;