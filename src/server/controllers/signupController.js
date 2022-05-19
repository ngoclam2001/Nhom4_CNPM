const SignUp = require('../model/signup');
const bcrypt = require('bcrypt');

class signupController {
    index(req, res) {
        res.render('Register/signup', { layout: false })
    }

    //POST
    async signup(req, res) {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const newResult =  await new SignUp({
            name: req.body.name,
            account: req.body.account,
            password: hashPassword
        });
        newResult.save().then(() => res.redirect('/'))
    }
}

module.exports = new signupController;