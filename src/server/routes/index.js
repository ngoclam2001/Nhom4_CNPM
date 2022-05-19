const roomRouter = require('./room');
const loginRouter = require('./login');
const signupRouter = require('./signup');

function route(app) {
    app.use('/room', roomRouter);
    app.use('/signup', signupRouter);
    app.use('/', loginRouter);
    app.use('/error', (req, res) => {
        res.render('register/error', {layout: false})
    })
}

module.exports = route;