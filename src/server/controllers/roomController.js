const RoomModel = require('../model/index');

class roomController {

    //[GET] /room
    index(req, res, next) {
        RoomModel.find({})
            .then(rooms => res.render('room/index', { rooms }))
            .catch(next);
    }

    //[GET] /room/create
    create(req, res) {
        res.render('room/add_room')
    }

    //[POST] /room
    insertData(req, res) {
        const newResult = new RoomModel(req.body);
        newResult.save().then(() => res.redirect("/room"))
    }

    //[GET] /room/edit/:_id
    edit(req, res, next) {
        RoomModel.findById(req.params.id)
            .then(room => res.render('room/edit_room', { room }))
            .catch(next)
    }

    //[PUT] /room/:id
    update(req, res, next) {
        RoomModel.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/room'))
            .catch(next)
    }

    //[delete] /delete/:id
    delete(req, res, next) {
        RoomModel.findByIdAndRemove({ _id: req.params.id })
            .then(() => res.redirect('/room'))
            .catch(next)
    }
}

module.exports = new roomController;