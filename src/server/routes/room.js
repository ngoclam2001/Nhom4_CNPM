const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

//Add data
router.get('/add_room', roomController.create);
router.post('/', roomController.insertData);


//Update data
router.get('/edit_room/:id', roomController.edit)
router.put('/:id', roomController.update)

//delete
router.delete('/delete/:id', roomController.delete)
router.get('/', roomController.index);

module.exports = router;