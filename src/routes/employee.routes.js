const express = require('express');
const router = express.Router();

const EmployeeService = require('../services/employee.service');
const { getAllEmployee } = require('../controller/employee.controller')
const employeeService = new EmployeeService();


router.get('/all', (req, res, next) => getAllEmployee(req, res, employeeService));
// router.get('/:name', (req, res, next) => getEmployeeByName(req, res, attendService));
// router.post('/', (req, res, next) => createAttendance(req, res, attendService));
// router.delete('/:date', (req, res, next) => deleteAttendance(req, res, attendService));
// router.put('/', (req, res, next) => updateAttendance(req, res, attendService));

module.exports = router;