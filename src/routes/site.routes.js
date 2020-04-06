const express = require('express');
const router = express.Router();
const Authentication = require('../middlewares/token-validation');
const SiteService = require('../services/sites.service');
const { getAllSites, getSiteById, addNewSite, updateSite, deleteSite } = require('../controller/site.controller');
const siteService = new SiteService();

router.use(Authentication);
router.get('/all', (req, res, next) => getAllSites(req, res, siteService));
router.get('/:id', (req, res, next) => getSiteById(req, res, attendService));
router.post('/', (req, res, next) => addNewSite(req, res, attendService));
router.delete('/:id', (req, res, next) => deleteSite(req, res, attendService));
router.put('/', (req, res, next) => updateSite(req, res, attendService));

module.exports = router;