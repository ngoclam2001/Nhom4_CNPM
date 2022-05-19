const mongoose = require('mongoose');
const MONGOOSE_URL = "mongodb+srv://vono1412:1412@cluster0.tlhaorw.mongodb.net/CNPM?retryWrites=true&w=majority"
const connect = async() => {
    try {
        await mongoose.connect(MONGOOSE_URL);
        console.log('connected success');
    } catch (error) {
        console.log("connect failure")
    }
}

module.exports = {connect}