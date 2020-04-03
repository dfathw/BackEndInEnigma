const express= require('express');
const router = express.Router();

const absentRoutes = require('./absent.routes');
const noRoute = require('./no.route');
const logRoute = require('./log.route');

router.use(logRoute);
router.use('/attendance', absentRoutes);
router.use(noRoute);

module.exports = router;