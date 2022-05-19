const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signupController');

router.post('/', signupController.signup)
router.get('/', signupController.index);

module.exports = router;