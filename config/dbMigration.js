const Employee = require('../src/models/employee.model');
const Attendance = require('../src/models/attendance.model');
const Admin = require('../src/models/admin.model');
const Site_master = require('../src/models/site_master.model');
const dbAssociation = require('../src/models/index');
const connection = require('./dbConn');
const bcrypt = require('bcrypt');

async function migration() {
    dbAssociation();
    await connection.sync({ force: true });
    await dataDummy();
};

async function dataDummy() {
    // let employee01 = await Employee.create({
    //     name: 'Afgan',
    //     image: null,
    //     phone_number: '087892837164',
    //     address: 'Jln. nuri 15 rt:01/rw:02 jakjak',
    //     birth_place: 'Bekasi',
    //     birth_date: '1998-11-29',
    //     identity: 'ID Card',
    //     gender: 'male',
    //     blood_type: 'B',
    //     place: 'MSIG Tower'
    // });
    // let employee02 = await Employee.create({
    //     name: 'Banu',
    //     image: null,
    //     phone_number: '087892839291',
    //     address: 'Jln. bangsa 15 rt:01/rw:02 jakjak',
    //     birth_place: 'Banten',
    //     birth_date: '1998-11-28',
    //     identity: 'Simper',
    //     gender: 'male',
    //     blood_type: 'O',
    //     place: 'MSIG Tower'
    // });
    //
    // let attendance01 = await Attendance.create({
    //     enter_at: '08:00:00', out_at: '17:00:00', date:'2020-03-16'});
    // let attendance02 = await Attendance.create({
    //     enter_at: '08:00:00', out_at: '17:00:00', date:'2020-03-16'});
    // attendance01.setEmployee(employee01);
    // attendance02.setEmployee(employee02);

    let adm1 = await Admin.create(
        { user_name: "rifqempul", password: bcrypt.hashSync('password', 8) }
    )
    let adm2 = await Admin.create(
        { user_name: "putraindrawan", password: bcrypt.hashSync('password', 8) }
    )
    let adm3 = await Admin.create(
        { user_name: 'kafkhaka', password: bcrypt.hashSync('password', 8) }
    )

    let site01 = await Site_master.create({
        site_name: "Berau Coal Kaltim Site A",
        alias_name: "berau1",
        location: "Kalimantan Timur",
    })
    let site02 = await Site_master.create({
        site_name: "Berau Coal Kaltim Site B",
        alias_name: "berau2",
        location: "Kalimantan Timur",
    })
    let site03 = await Site_master.create({
        site_name: "Berau Coal Kaltim Site C",
        alias_name: "berau3",
        location: "Kalimantan Timur",
    })
    let site04 = await Site_master.create({
        site_name: "Berau Coal Kaltim Site D",
        alias_name: "berau4",
        location: "Kalimantan Timur",
    })
    let site05 = await Site_master.create({
        site_name: "Berau Coal Kaltim Site E",
        alias_name: "berau5",
        location: "Kalimantan Timur",
    })
    let em1 = await Employee.create({
        name: 'Banu',
        image: null,
        phone_number: '087892839291',
        address: 'Jln. bangsa 15 rt:01/rw:02 jakjak',
        birth_place: 'Banten',
        birth_date: '1998-11-28',
        identity: 'Simper',
        gender: 'male',
        blood_type: 'O',
        distant_relative: "Karno",
        place: 'Mine B'
    });
    let em2 = await Employee.create({
        name: 'Juan',
        image: null,
        phone_number: '087892839012',
        address: 'Jln. nusa 69 rt:06/rw:09 bekbek',
        birth_place: 'Lampung',
        birth_date: '1989-08-11',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'AB',
        distant_relative: null,
        place: 'Mine A'
    });
    let em3 = await Employee.create({
        name: 'Joshua',
        image: null,
        phone_number: '081392832212',
        address: 'Jln. bunga 57 rt:13/rw:04 simpang',
        birth_place: 'Jakarta',
        birth_date: '1993-03-03',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'B',
        distant_relative: null,
        place: 'Mine B'
    });
    let em4 = await Employee.create({
        name: 'Karno',
        image: null,
        phone_number: '080190277312',
        address: 'Jln. bangsa 14 rt:01/rw:02 jakjak',
        birth_place: 'Banten',
        birth_date: '1992-04-15',
        identity: 'Simper',
        gender: 'male',
        blood_type: 'A',
        distant_relative: 'Banu',
        place: 'Mine B'
    }); 
    let em5 = await Employee.create({
        name: 'Adina',
        image: null,
        phone_number: '085590739012',
        address: 'Jln. Muara 11 rt:01/rw:02 bekate',
        birth_place: 'Bandung',
        birth_date: '1997-12-01',
        identity: 'ID Card',
        gender: 'female',
        blood_type: 'B',
        distant_relative: null,
        place: 'Mine B'
    });
    let em6 = await Employee.create({
        name: 'Emina',
        image: null,
        phone_number: '085590982712',
        address: 'Jln. Juana 99 rt:02/rw:03 liang',
        birth_place: 'Aceh',
        birth_date: '2000-04-21',
        identity: 'ID Card',
        gender: 'female',
        blood_type: 'O',
        distant_relative: null,
        place: 'Mine A'
    });
    let em7 = await Employee.create({
        name: 'Kunta',
        image: null,
        phone_number: '089973859012',
        address: 'Jln. Badak 09 rt:03/rw:01 kanal',
        birth_place: 'Jogja',
        birth_date: '1995-08-13',
        identity: 'Simper',
        gender: 'male',
        blood_type: 'O',
        distant_relative: null,
        place: 'Mine C'
    });
    let em8 = await Employee.create({
        name: 'Malaka',
        image: null,
        phone_number: '085512639073',
        address: 'Jln. Sorong 54 rt:07/rw:06 lontar',
        birth_place: 'Medan',
        birth_date: '1992-04-22',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'A',
        distant_relative: null,
        place: 'Mine C'
    });
    let em9 = await Employee.create({
        name: 'Mirna',
        image: null,
        phone_number: '081290709112',
        address: 'Jln. Elang 62 rt:03/rw:01 bacana',
        birth_place: 'Bogor',
        birth_date: '1999-08-04',
        identity: 'Simper',
        gender: 'female',
        blood_type: 'O',
        distant_relative: null,
        place: 'Mine A'
    });
    let em10 = await Employee.create({
        name: 'Andhika',
        image: null,
        phone_number: '081290783712',
        address: 'Jln. Raffless 01 rt:11/rw:05 Simpangan',
        birth_place: 'Bandung',
        birth_date: '2001-03-11',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'A',
        distant_relative: null,
        place: 'Mine A'
    });
    let em11 = await Employee.create({
        name: 'Kristian',
        image: null,
        phone_number: '081240783713',
        address: 'Jln. Mutiara 13 rt:09/rw:06 Klusian',
        birth_place: 'Bekasi',
        birth_date: '1994-11-12',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'B',
        distant_relative: null,
        place: 'Mine C'
    });
    let em12 = await Employee.create({
        name: 'Intan',
        image: null,
        phone_number: '081290593717',
        address: 'Jln. Rajawali 17 rt:02/rw:05 bekate',
        birth_place: 'Balik Papan',
        birth_date: '1997-12-01',
        identity: 'ID Card',
        gender: 'female',
        blood_type: 'O',
        distant_relative: null,
        place: 'Mine B'
    });
    let em13 = await Employee.create({
        name: 'Dimas',
        image: null,
        phone_number: '081290593683',
        address: 'Jln. Jeruk 8C rt:01/rw:01 bekate',
        birth_place: 'Depok',
        birth_date: '1997-04-28',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'B',
        distant_relative: null,
        place: 'Mine C'
    });
    let em14 = await Employee.create({
        name: 'Bagas',
        image: null,
        phone_number: '081293593683',
        address: 'Jln. Semangka 1A rt:01/rw:01 bekate',
        birth_place: 'Jakarta',
        birth_date: '1989-10-07',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'O',
        distant_relative: null,
        place: 'Mine B'
    });
    let em15 = await Employee.create({
        name: 'Munawan',
        image: null,
        phone_number: '081291793683',
        address: 'Jln. Buaya 11 rt:12/rw:07 muara',
        birth_place: 'Jakarta',
        birth_date: '1998-12-09',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'O',
        distant_relative: null,
        place: 'Mine A'
    });
    let em16 = await Employee.create({
        name: 'Edward',
        image: null,
        phone_number: '081290593872',
        address: 'Jln. Kamboja 18 rt:01/rw:01 bekate',
        birth_place: 'Bekasi',
        birth_date: '1992-05-05',
        identity: 'Simper',
        gender: 'male',
        blood_type: 'B',
        distant_relative: null,
        place: 'Mine A'
    });
    let em17 = await Employee.create({
        name: 'Kuma',
        image: null,
        phone_number: '081264593683',
        address: 'Jln. Miramar 8 rt:13/rw:05 muara',
        birth_place: 'Subang',
        birth_date: '1988-04-22',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'O',
        distant_relative: null,
        place: 'Mine A'
    });
    let em18 = await Employee.create({
        name: 'Miara',
        image: null,
        phone_number: '089910593683',
        address: 'Jln. Pahlawan 15 rt:09/rw:04 jakjak',
        birth_place: 'Aceh',
        birth_date: '1999-03-15',
        identity: 'ID Card',
        gender: 'female',
        blood_type: 'AB',
        distant_relative: null,
        place: 'Mine B'
    });
    let em19 = await Employee.create({
        name: 'Lina',
        image: null,
        phone_number: '081293673683',
        address: 'Jln. Sumawa 11 rt:05/rw:04 bekbek',
        birth_place: 'Jakarta',
        birth_date: '1994-10-08',
        identity: 'Simper',
        gender: 'female',
        blood_type: 'O',
        distant_relative: null,
        place: 'Mine A'
    });
    let em20 = await Employee.create({
        name: 'Maliki',
        image: null,
        phone_number: '081290598721',
        address: 'Jln. Muara 12 rt:01/rw:02 bekbek',
        birth_place: 'Jakrta',
        birth_date: '2000-05-11',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'A',
        distant_relative: null,
        place: 'Mine A'
    });
    let em21 = await Employee.create({
        name: 'Michelle',
        image: null,
        phone_number: '081290821683',
        address: 'Jln. Kopi 14 rt:02/rw:03 muara',
        birth_place: 'Banten',
        birth_date: '1994-01-13',
        identity: 'Simper',
        gender: 'female',
        blood_type: 'B',
        distant_relative: null,
        place: 'Mine C'
    });
    let em22 = await Employee.create({
        name: 'Kunta',
        image: null,
        phone_number: '081290597514',
        address: 'Jln. Beringin 17 rt:06/rw:07 jakjak',
        birth_place: 'Depok',
        birth_date: '1999-02-21',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'A',
        distant_relative: null,
        place: 'Mine C'
    });
    let em23 = await Employee.create({
        name: 'Bayu',
        image: null,
        phone_number: '081290596781',
        address: 'Jln. Angoa 8 rt:08/rw:02 muara',
        birth_place: 'Jakarta',
        birth_date: '1992-01-30',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'O',
        distant_relative: null,
        place: 'Mine A'
    });
    let em24 = await Employee.create({
        name: 'Lucas',
        image: null,
        phone_number: '081290597477',
        address: 'Jln. Lucaka 22 rt:09/rw:11 loana',
        birth_place: 'Medan',
        birth_date: '1994-08-14',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'B',
        distant_relative: null,
        place: 'Mine C'
    });
    let em25 = await Employee.create({
        name: 'Amanda',
        image: null,
        phone_number: '08129059316',
        address: 'Jln. Jakuan 1A rt:02/rw:05 menteng',
        birth_place: 'Jakarta',
        birth_date: '1994-03-18',
        identity: 'ID Card',
        gender: 'male',
        blood_type: 'A',
        distant_relative: null,
        place: 'Mine A'
    });
    // 
    em1.setSiteMaster(site01);
    let att1 = await Attendance.create({
        date: '2020-08-01',
        enter_at: '08:01:05',
        out_at: '20:21:11',
    });
    let att2 = await Attendance.create({
        date: '2020-08-01',
        enter_at: '08:12:20',
        out_at: '19:21:11',
    });
    let att3 = await Attendance.create({
        date: '2020-08-01',
        enter_at: '08:00:05',
        out_at: '18:34:00',
    });
    let att4 = await Attendance.create({
        date: '2020-08-01',
        enter_at: '09:15:47',
        out_at: '22:00:47',
    });
    let att5 = await Attendance.create({
        date: '2020-08-01',
        enter_at: '09:01:12',
        out_at: '17:20:13',
    });
    let att6 = await Attendance.create({
        date: '2020-08-01',
        enter_at: '08:11:29',
        out_at: '18:10:21',
    });
    let att7 = await Attendance.create({
        date: '2020-08-01',
        enter_at: '08:12:10',
        out_at: '18:12:21',
    });
    let att8 = await Attendance.create({
        date: '2020-08-01',
        enter_at: '08:34:19',
        out_at: '18:14:47',
    });
    let att9 = await Attendance.create({
        date: '2020-08-01',
        enter_at: '08:11:29',
        out_at: '18:10:21',
    });
    let att10 = await Attendance.create({
        date: '2020-08-01',
        enter_at: '08:20:39',
        out_at: '19:24:07',
    });
    let att20 = await Attendance.create({
        date: '2020-08-02',
        enter_at: '08:02:13',
        out_at: '19:24:00',
    });
    let att21 = await Attendance.create({
        date: '2020-08-02',
        enter_at: '08:01:05',
        out_at: '20:21:11',
    });
    let att22 = await Attendance.create({
        date: '2020-08-02',
        enter_at: '08:40:08',
        out_at: '20:19:10',
    });
    let att23 = await Attendance.create({
        date: '2020-08-02',
        enter_at: '08:01:05',
        out_at: '18:41:09',
    });
    let att24 = await Attendance.create({
        date: '2020-08-02',
        enter_at: '08:36:11',
        out_at: '19:24:00',
    });
    let att25 = await Attendance.create({
        date: '2020-08-02',
        enter_at: '09:01:30',
        out_at: '18:30:45',
    });
    let att26 = await Attendance.create({
        date: '2020-08-02',
        enter_at: '09:13:21',
        out_at: '18:20:27',
    });
    let att27 = await Attendance.create({
        date: '2020-08-02',
        enter_at: '08:21:11',
        out_at: '20:21:12',
    });
    let att28 = await Attendance.create({
        date: '2020-08-02',
        enter_at: '08:12:37',
        out_at: '18:42:12',
    });
    let att29 = await Attendance.create({
        date: '2020-08-02',
        enter_at: '07:13:21',
        out_at: '20:21:20',
    });
    em1.setSiteMaster(site01);
    em2.setSiteMaster(site02);
    em3.setSiteMaster(site01);
    em4.setSiteMaster(site04);
    em5.setSiteMaster(site05);
    em6.setSiteMaster(site01);
    em7.setSiteMaster(site02);
    em8.setSiteMaster(site03);
    em9.setSiteMaster(site03);
    em10.setSiteMaster(site04);
    em11.setSiteMaster(site05);
    em12.setSiteMaster(site01);
    em13.setSiteMaster(site02);
    em14.setSiteMaster(site04);
    em15.setSiteMaster(site02);
    em16.setSiteMaster(site01);
    em17.setSiteMaster(site03);
    em18.setSiteMaster(site05);
    em19.setSiteMaster(site03);
    em20.setSiteMaster(site04);
    em21.setSiteMaster(site01);
    em22.setSiteMaster(site01);
    em23.setSiteMaster(site04);
    em24.setSiteMaster(site03);
    em25.setSiteMaster(site05);
    att1.addEmployee(em1);
    att2.addEmployee(em2);
    att3.addEmployee(em3);
    att4.addEmployee(em4);
    att5.addEmployee(em5);
    att6.addEmployee(em6);
    att7.addEmployee(em7);
    att8.addEmployee(em8);
    att9.addEmployee(em9);
    att10.addEmployee(em10);
    att1.addEmployee(em11);
    att2.addEmployee(em12);
    att3.addEmployee(em13);
    att4.addEmployee(em14);
    att5.addEmployee(em15);
    att6.addEmployee(em16);
    att7.addEmployee(em17);
    att8.addEmployee(em18);
    att9.addEmployee(em19);
    att10.addEmployee(em20);
    att1.addEmployee(em21);
    att2.addEmployee(em22);
    att3.addEmployee(em23);
    att4.addEmployee(em24);
    att5.addEmployee(em25);
    att21.addEmployee(em1);
    att22.addEmployee(em2);
    att23.addEmployee(em3);
    att24.addEmployee(em4);
    att25.addEmployee(em5);
    att26.addEmployee(em6);
    att27.addEmployee(em7);
    att28.addEmployee(em8);
    att29.addEmployee(em9);
    att20.addEmployee(em10);
    att21.addEmployee(em11);
    att22.addEmployee(em12);
    att23.addEmployee(em13);
    att24.addEmployee(em14);
    att25.addEmployee(em15);
    att26.addEmployee(em16);
    att27.addEmployee(em17);
    att28.addEmployee(em18);
    att29.addEmployee(em19);
    att20.addEmployee(em20);
    att21.addEmployee(em21);
    att22.addEmployee(em22);
    att23.addEmployee(em23);
    att24.addEmployee(em24);
    att25.addEmployee(em25);
    // site01.addSiteMaster(site01);
    // em1.setSiteMaster(site01);
    // site01.addEmployee(em1);


}

migration();