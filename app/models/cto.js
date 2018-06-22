var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ctoSchema = mongoose.Schema({

    username: {type: String, required: true},
    company: {type: String, required: true},
    email: {type: String, required: true},



});


module.exports = mongoose.model('CTO', ctoSchema);