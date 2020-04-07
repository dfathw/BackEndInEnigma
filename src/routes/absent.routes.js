const express = require('express');
const router = express.Router();
const AttendanceService = require('../services/attendance.service');
const { getAllAttendance, getAttendanceList, updateAttendance, createAttendance, deleteAttendance, getAttendanceDateBetween } = require('../controller/attendance.controller');
const attendService = new AttendanceService();

router.get('/all', (req, res, next) => getAllAttendance(req, res, attendService));
router.get('/range/', (req, res, next) => getAttendanceDateBetween(req, res, attendService));
router.get('/', (req, res, next) => getAttendanceList(req, res, attendService));
router.post('/', (req, res, next) => createAttendance(req, res, attendService));
router.delete('/:date', (req, res, next) => deleteAttendance(req, res, attendService));
router.put('/', (req, res, next) => updateAttendance(req, res, attendService));

module.exports = router;