const express = require('express');
const router = express.Router();
const billController = require('../controllers/billController');

//Add data
router.get('/', billController.index);


module.exports = router;