const Employee = require('./employee.model');
const Attendance = require('./attendance.model');
const dbAssociation = function dbAssociation(){
    Employee.hasMany(Attendance);
    Attendance.belongsTo(Employee);
}

module.exports = dbAssociation;