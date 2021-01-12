const mongoose = require('mongoose');
const newUser = require('../models/user');
const newProvAssis = require('../models/assis_prov');
const newAbonSos = require('../models/abon_sos');
const newContrat = require('../models/contrat');
const { dateFin } = require('./date');
const db = require('../config/connectDB')




/* 
//update one
newUser.findOne({ tel: "0618647382" }, function(err, doc) {
    if (err) console.log(err);

    doc.nom = 'says';
    doc.prenom = 'Soufiane';
    doc.save((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('user is updated!!!')
                //db.close();
        }
    })
})
 */



// add contrat to db
async function infoClient(id) {
    let user = await newUser.findById(id).exec();

    return user;
}
//id unique : Ref contrat
uniqueId = function() {
    // return (Math.random().toString(36).slice(2)).toUpperCase();
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
};
(async function main() {
    let user = await infoClient("5fe9b6f729b97811f96a2ec4")
        // console.log(user);
    const date = "2020-12-12";
    //console.log(date);

    const contrat =
        new newContrat({
            refContrat: uniqueId(),
            revId: "5fe9bcf9458c601434dd11b9",
            client: {
                nom: user.nom,
                prenom: user.prenom,
                cin: user.cin,
                Tel: user.tel,
                enfant: user.famille.enfants.toString(),
                epouse: user.famille.epouse.nom + " " + user.famille.epouse.prenom
            },
            dat_debut: date,
            dat_fin: dateFin(12, date),
            formul: 1,
            loc: [3663, 32466],
            payment: true,
            notifyed: false
        })

    // console.log(user.famille.enfants.toString())
    // console.log(uniqueId())


    contrat.save((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('data is added!!!')
            console.log(contrat)
                // db.close();
        }
    })

})();


/* 
// add abon sos to db
const abon = //[
    new newAbonSos({
        Type: 1,
        AssisProvId: "5fe9bcf9458c601434dd11b9",
        userId: "5fe9f4af0745bf1e7bb4c432"
    })
    //     new newAbonSos({
    //         Type: 1,
    //         AssisProvId: "5fe9bcf9458c601434dd11b9",
    //         userId: "5fe9b6f729b97811f96a2ec4"
    //     }),

// ]
// abon.forEach((doc) => {
abon.save((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('user is added!!!')
                db.close();
        }
    })
    // })
 */


/* 
// add assis_prov to db
const assis1 = new newProvAssis({
    nom: 'WafaAssurance',
    logo: "ASS",
    contact: { Tel: "0524384793", fax: "0524384738" },
    resp: { nom: "saidi", prenom: "Hicham", Tel: "0622384795" }
})
assis1.save((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('user is added!!!')
        db.close();
    }
})
 */


/* 
// add users to db
const user = new newUser({
    profil: "1",
    nom: "tayk",
    prenom: "Samir",
    tel: "0661726398",
    cin: "T53573",
    maried: true,
    famille: { epouse: { nom: "FADIL", prenom: "FATIMA" }, enfants: ["salma", "hasna"] }
});

user.save((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('user is added!!!')
        db.close()
    }
})
 */











// newEvents.forEach((event) => {
//     event.save((err) => {
//         if (err) {
//             console.log(err)
//         }
//     })
// })