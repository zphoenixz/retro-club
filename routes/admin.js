const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');
const router = express.Router();

//GETS -----------------------------------------------------------
router.get('/persons/all', isAuth, adminController.getPersons);
router.get('/customers/all', isAuth, adminController.getCustomers);
router.get('/employees/all', isAuth, adminController.getEmployees);


//POSTS -----------------------------------------------------------
//Add - Create
router.get('/employees/add', isAuth, adminController.postEmployee);
router.get('/customers/add', isAuth, adminController.postCustomer);
router.get('/movies/add', isAuth, adminController.postMovie);

router.get('/loan/add', isAuth, adminController.postLoan);

router.get('/home', isAuth, adminController.getHome)
router.get('/', isAuth, adminController.getHome)


module.exports = router;