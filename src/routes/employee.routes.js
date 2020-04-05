const express = require('express');
const router = express.Router();
const EmployeeService = require('../services/employee.service');
const { getAllEmployee, getEmployeeByName, createEmployee, updateEmployee, deleteEmployee } = require('../controller/employee.controller')
const employeeService = new EmployeeService();


router.get('/all', (req, res, next) => getAllEmployee(req, res, employeeService));
router.get('/:name', (req, res, next) => getEmployeeByName(req, res, attendService));
router.post('/', (req, res, next) => createEmployee(req, res, attendService));
router.delete('/:id', (req, res, next) => deleteEmployee(req, res, attendService));
router.put('/', (req, res, next) => updateEmployee(req, res, attendService));

module.exports = router;