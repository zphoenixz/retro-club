const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/persons/all', adminController.getPersons);
router.get('/customers/all', adminController.getCustomers);
router.get('/employees/all', adminController.getEmployees);

module.exports = router;