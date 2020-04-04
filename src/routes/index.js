const express = require('express');
const router = express.Router();

const absentRoutes = require('./absent.routes');
const siteRoutes = require('./site.routes');
const employeeRoutes = require('./employee.routes');
const noRoute = require('./no.route');
const logRoute = require('./log.route');

router.use(logRoute);
router.use('/attendance', absentRoutes);
router.use('/sites', siteRoutes);
router.use('/employees', employeeRoutes);
router.use(noRoute);

module.exports = router;