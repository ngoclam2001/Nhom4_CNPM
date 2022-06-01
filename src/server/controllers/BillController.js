const billModel = require('../model/index');

class BillController {

    //[GET] /room
    async index(req, res, next) {
        await billModel.find({})
            .then(rooms => res.render('bill/bill', {rooms}))
            .catch(next)
        
    }


}

module.exports = new BillController;