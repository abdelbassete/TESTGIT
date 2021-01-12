const newContrat = require('../models/contrat');
const db = require('../config/connectDB')
const xlsx = require('xlsx');


var data = [];
newContrat.find({ payment: true, notifyed: false }, function(err, docs) {
    if (err) console.log(err);

    for (const doc of docs) {
        let tab = {
            numContrat: doc.numContrat,
            revId: doc.revId,
            nom: doc.client.nom,
            prenom: doc.client.prenom,
            Tel: doc.client.Tel,
            dat_debut: doc.dat_debut,
            dat_fin: doc.dat_fin,
            formul: doc.formul,
            loc: (doc.loc[0] + "," + doc.loc[1]),
            payment: doc.payment
        }
        data.push(tab);
    }
    console.log(data);


    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws);
    xlsx.writeFile(wb, "testContrat.xlsx");
    // doc.save((err) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log('user is updated!!!')
    //             //db.close();
    //     }
    // })
})