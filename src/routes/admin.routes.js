const express = require('express');
const router = express.Router();
const Authentication = require('../middlewares/token-validation')
const AdminService = require('../services/admin.service');
const { getAllAdmin, getAdminById, createAdmin } = require('../controller/admin.controller');
const adminService = new AdminService();

router.use(Authentication);
router.get('/all', (req, res, next) => getAllAdmin(req, res, adminService));
router.get('/:id', (req, res, next) => getAdminById(req, res, adminService));
router.post('/', (req, res, next) => createAdmin(req, res, adminService));
// router.delete('/:id', (req, res, next) => deleteAdmin(req, res, attendService));
// router.put('/', (req, res, next) => updateAdmin(req, res, attendService));

module.exports = router;