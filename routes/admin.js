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

router.get('/home', isAuth, adminController.getHomeview);
router.get('/', isAuth, adminController.getHomeview);

router.get('/cart', isAuth, adminController.getCartview);
router.get('/customers', isAuth, adminController.getCustomerview);
router.get('/customers/search', isAuth, adminController.getSearchCustomerview);
router.get('/customers/edit', isAuth, adminController.getSearchCustomerview);
router.get('/customers/new', isAuth, adminController.getAddCustomerview);

router.get('/loans', isAuth, adminController.getLoanview);
router.get('/loans/search', isAuth, adminController.getLoanSearchview);

router.get('/movies', isAuth, adminController.getMovieview);
router.get('/movies/search', isAuth, adminController.getMovieSearchview);
router.get('/movies/new', isAuth, adminController.getMovieAddview);

router.get('/rules', isAuth, adminController.getRulesview);
router.post('/rules', isAuth, adminController.postRulesnew);
router.post('/movies/search', isAuth, adminController.postMovieSearchview);
module.exports = router;