const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const abonSos = new Schema({
    /* 
    - Typ: 1
    - AssisProvId (id de la collection assis_prov): */
    Type: Number,
    AssisProvId: String,
    userId: String

});

const abonSosModel = mongoose.model('abonSos', abonSos);

module.exports = abonSosModel;