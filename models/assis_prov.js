const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assisProv = new Schema({
    /* 
    - id:
    - nom:
    - logo:
    - contact: [{tel, fax, resp[{nom, prenom, tel}]}] */
    // _id: id,
    nom: String,
    logo: String,
    contact: Object,
    resp: Object
});

const assisProvModel = mongoose.model('assisProv', assisProv);

module.exports = assisProvModel;