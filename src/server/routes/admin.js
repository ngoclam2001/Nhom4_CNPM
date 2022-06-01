const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

//Add data
router.get('/add_employyer', adminController.create);
router.post('/', adminController.insertData);


//Update data
router.get('/edit_employyer/:id', adminController.edit)
router.put('/:id', adminController.update)

//delete
router.delete('/delete/:id', adminController.delete)
router.get('/', adminController.index);

module.exports = router;