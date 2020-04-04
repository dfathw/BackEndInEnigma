const express = require('express');
const router = express.Router();
const SiteService = require('../services/sites.service');
const { getAllSites } = require('../controller/site.controller');
const siteService = new SiteService();

router.get('/all', (req, res, next) => getAllSites(req, res, siteService));
// router.get('/:name', (req, res, next) => getEmployeeByName(req, res, attendService));
// router.post('/', (req, res, next) => createAttendance(req, res, attendService));
// router.delete('/:date', (req, res, next) => deleteAttendance(req, res, attendService));
// router.put('/', (req, res, next) => updateAttendance(req, res, attendService));

module.exports = router;