const express = require('express');
const router = express.Router();

const absentRoutes = require('./absent.routes');
const employeeRoutes = require('./employee.routes');
const adminRoutes = require('./admin.routes');
const noRoute = require('./no.route');
const logRoute = require('./log.route');

router.use(logRoute);
router.use('/attendance', absentRoutes);
router.use('/employee', employeeRoutes);
router.use('/admin', adminRoutes);
router.use(noRoute);

module.exports = router;