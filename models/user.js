const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    //     - id
    // - profil: 1 (exemple)
    // - tel
    // - cin
    // - maried: 0I1
    // - famille: [{epouse{nom, prenom}, enfants{prenom}}]

    profil: String,
    nom: String,
    prenom: String,
    tel: String,
    cin: String,
    maried: Boolean,
    famille: Object
});

const userModel = mongoose.model('user', user);

module.exports = userModel;