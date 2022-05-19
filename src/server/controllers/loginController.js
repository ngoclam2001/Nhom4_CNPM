const loginModel = require('../model/signup');
const bcrypt = require('bcrypt');

class loginController {
    index(req, res) {
        res.render('register/login', { layout: false })
    }

    //[POST] 
    async login(req, res, next) {
        try {
            const {account, password } = req.body;
            const user = await loginModel.findOne({account});
            if (!user) return res.status(400).send("User not found");
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) return res.status(400).render('error');
            if(validPassword) res.redirect(`/room/${user.name}`)
        } catch (error) {
            res.status(500).redirect('/error')
        }
    }
}

module.exports = new loginController;