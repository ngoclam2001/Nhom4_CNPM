const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignUp = new Schema({
    id: {type:Schema.Types.ObjectId}, 
    name: String,
    account: String,
    password: String,
});

module.exports = mongoose.model('SignUp', SignUp);