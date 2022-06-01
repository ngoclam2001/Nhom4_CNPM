const roomRouter = require('./room');
const loginRouter = require('./login');
const signupRouter = require('./signup');
const billRouter = require('./bill');
const adminRouter = require('./admin');

function route(app) {
    app.use('/room', roomRouter);
    app.use('/employyer', adminRouter);
    app.use('/bill', billRouter);
    app.use('/signup', signupRouter);
    app.use('/', loginRouter);
    app.use('/contract', (req, res) => res.render('contract/contract'));
    // app.use('/error', (req, res) => {
    //     res.render('register/error', {layout: false})
    // })
}

module.exports = route;