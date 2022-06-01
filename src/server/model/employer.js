const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employyeer = new Schema({
    id: {type:Schema.Types.ObjectId}, 
    name: {type: String, unique: true},
    email: {type: String},
    address: String,
    phone: Number,
    sex: String
});

module.exports = mongoose.model('employeer', Employyeer);