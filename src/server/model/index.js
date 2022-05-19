const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Room = new Schema({
    id: {type:Schema.Types.ObjectId}, 
    name: {type: String, unique: true},
    elec: {type: Number},
    sv: {type: Number},
    water: {type: Number}
});

module.exports = mongoose.model('Room', Room);