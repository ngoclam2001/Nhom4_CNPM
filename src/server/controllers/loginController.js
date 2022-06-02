const loginModel = require('../model/signup');
const loginAdmin = require('../model/admin');
const bcrypt = require('bcrypt');

class loginController {
    index(req, res) {
        res.render('register/login', { layout: false })
    }

    //[POST] 
    async login(req, res, next) {
        try {
            const { account, password } = req.body;
            const user = await loginModel.findOne({ account })
            const adminLogin = await loginAdmin.findOne({ account });

            /// chua fix dc
            if (adminLogin.password === password) {
                res.redirect('/employyer');
            } else if (user) {
                const validPassword = await bcrypt.compare(password, user.password);
                (validPassword) ? res.redirect('/room') : res.status(400).send('error');
            }
        } catch (error) {
            res.status(500).redirect('/error');
        }
    }
}

module.exports = new loginController;