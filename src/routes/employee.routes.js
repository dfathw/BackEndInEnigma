const express = require('express');
const router = express.Router();
const EmployeeService = require('../services/employee.service');
const { getAllEmployee, getEmployeeList,createEmployee, updateEmployee, deleteEmployee } = require('../controller/employee.controller')
const employeeService = new EmployeeService();


router.get('/all', (req, res, next) => getAllEmployee(req, res, employeeService));
router.get('/', (req, res, nect) => getEmployeeList(req, res, employeeService));
router.post('/', (req, res, next) => createEmployee(req, res, employeeService));
router.delete('/:id', (req, res, next) => deleteEmployee(req, res, employeeService));
router.put('/', (req, res, next) => updateEmployee(req, res, employeeService));

module.exports = router;