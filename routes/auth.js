const path = require('path');

const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();


// -----------------------------------------------------------
router.get('/', authController.getLog);
router.get('/:customError', authController.getLoginError);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.post('/logout', authController.postLogout);

module.exports = router;