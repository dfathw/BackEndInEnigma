const express = require('express');
const router = express.Router();
const AttendanceService = require('../services/attendance.service');
const { getAllAttendance, updateAttendance, getEmployeeByName, createAttendance, deleteAttendance } = require('../controller/attendance.controller');
const attendService = new AttendanceService();

router.get('/all', (req, res, next) => getAllAttendance(req, res, attendService));
router.get('/:name', (req, res, next) => getEmployeeByName(req, res, attendService));
router.post('/', (req, res, next) => createAttendance(req, res, attendService));
router.delete('/:date', (req, res, next) => deleteAttendance(req, res, attendService));
router.put('/', (req, res, next) => updateAttendance(req, res, attendService));

module.exports = router;