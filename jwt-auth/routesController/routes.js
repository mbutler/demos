const express = require('express');
const router = express.Router();

const { signUp } = require('../authController/signUp');
const { login } = require('../authController/login');





router.route('/login').get(login);
router.route('/signUp').get(signUp);



module.exports = router;