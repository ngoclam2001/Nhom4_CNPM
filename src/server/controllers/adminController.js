const Employyeer = require('../model/employer');

class adminController {

    //[GET] /employeer
    index(req, res, next) {
        Employyeer.find({})
            .then(employyer => res.render('admin/admin', { employyer }))
            .catch(next);
    }

    //[GET] /employyer/create
    create(req, res) {
        res.render('admin/add_employyer')
    }

    //[POST] /room
    insertData(req, res) {
        const newResult = new Employyeer(req.body);
        newResult.save().then(() => res.redirect("/employyer"))
    }

    //[GET] /room/edit/:_id
    edit(req, res, next) {
        Employyeer.findById(req.params.id)
            .then(employyer => res.render('admin/edit_admin', { employyer }))
            .catch(next)
    }

    //[PUT] /room/:id
    update(req, res, next) {
        Employyeer.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/employyer'))
            .catch(next)
    }

    //[delete] /delete/:id
    delete(req, res, next) {
        Employyeer.findByIdAndRemove({ _id: req.params.id })
            .then(() => res.redirect('/employyer'))
            .catch(next)
    }
}

module.exports = new adminController;