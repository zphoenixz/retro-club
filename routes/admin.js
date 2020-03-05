const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

//GETS -----------------------------------------------------------
router.get('/persons/all', adminController.getPersons);
router.get('/customers/all', adminController.getCustomers);
router.get('/employees/all', adminController.getEmployees);


//POSTS -----------------------------------------------------------
//Add - Create
router.get('/employees/add', adminController.postEmployee);
router.get('/customers/add', adminController.postCustomer);
router.get('/movies/add', adminController.postMovie);

router.get('/loan/add', adminController.postLoan);

module.exports = router;