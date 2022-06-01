const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const admin = new Schema({
    id: {type:Schema.Types.ObjectId}, 
    name_admin: {type: String, unique: true},
    account: {type: String},
    password: String
});

module.exports = mongoose.model('admin', admin);