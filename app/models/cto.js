var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ctoSchema = mongoose.Schema({

    username: {type: String, required: true},
    title: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    country: {type: String, required: true}


});


module.exports = mongoose.model('CTO', ctoSchema);