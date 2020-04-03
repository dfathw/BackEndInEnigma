const Employee = require('../src/models/employee.model');
const Attendance = require('../src/models/attendance.model');
const dbAssociation = require('../src/models/index');
const connection = require('./dbConn');

async function migration(){
    dbAssociation();
    await connection.sync({force:true});
    await dataDummy();
};

async function dataDummy(){
    let employee01 = await Employee.create({
        name: 'Afgan',
        image: null,
        phone_number: '087892837164',
        address: 'Jln. nuri 15 rt:01/rw:02 jakjak',
        birth_place: 'Bekasi',
        birth_date: '1998-11-29',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'B',
        place: 'MSIG Tower'
    });
    let employee02 = await Employee.create({
        name: 'Banu',
        image: null,
        phone_number: '087892839291',
        address: 'Jln. bangsa 15 rt:01/rw:02 jakjak',
        birth_place: 'Banten',
        birth_date: '1998-11-28',
        identity: 'Simper',
        gender: 'male',
        blood_type: 'O',
        place: 'MSIG Tower'
    });

    let attendance01 = await Attendance.create({
        enter_at: '08:00:00', out_at: '17:00:00', date:'2020-03-16'});
    let attendance02 = await Attendance.create({
        enter_at: '08:00:00', out_at: '17:00:00', date:'2020-03-16'});
    attendance01.setEmployee(employee01);
    attendance02.setEmployee(employee02);
}

migration();