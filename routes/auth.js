const path = require('path');

const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();


//GETS -----------------------------------------------------------
router.get('/', authController.loginPage);



router.post('/admin/home', authController.authEmployee);

module.exports = router;