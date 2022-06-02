const billModel = require('../model/index');

class BillController {

    //[GET] /bill
    async index(req, res, next) {
        const bills = await billModel.find({});
        const data = await bills.map(person => ({
            ...person._doc,
            elec: person._doc.elec * 100,
            total: person._doc.elec * 100 + person._doc.water + 1500
        }))

        data ? res.render('bill/bill', { data }) : console.log('error')
    }


}

module.exports = new BillController;