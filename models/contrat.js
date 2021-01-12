const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contratAssis = new Schema({
    /* 
        contrat_assis:
- ref:
- numContrat:
- client[{nom, prenom, tel, epouse[], enfants[]}]
- dat_debut:
- dat_fin:
- formul:1 (=12 mois)
- revId: 3
- loc: [lat,lng]
- payment: 0I1 (1 = reglée)
- notifyed: 0I1 (1= contrat déjà envoyé au provider via le fichier excel).
    */
    //ref: String,
    refContrat: String,
    revId: String,
    client: Object,
    dat_debut: Date,
    dat_fin: Date,
    formul: Number,
    loc: Array,
    payment: Boolean,
    notifyed: Boolean
});

const contratModel = mongoose.model('contratAssis', contratAssis);

module.exports = contratModel;