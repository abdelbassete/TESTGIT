const newContrat = require('./models/contrat');
const db = require('./config/connectDB') //connection to db
const xlsx = require('xlsx');

require('dotenv').config();

var nodemailer = require('nodemailer');

function send() {
    var data = [];
    newContrat.find({ payment: true, notifyed: false }, function(err, docs) {
        if (err) console.log(err);
        // console.log(docs);


        if (docs.length === 0) {
            console.log('data is null ');
        } else {
            // console.log('else ', docs);
            for (const doc of docs) {
                let tab = {
                    REF: doc.refContrat,
                    NOM: doc.client.nom,
                    PRENOM: doc.client.prenom,
                    CIN: doc.client.cin,
                    GSM: doc.client.Tel,
                    CONJOINT: doc.client.epouse,
                    ENFANT: doc.client.enfant,
                    "DATE DEBUT": doc.dat_debut,
                    "DATE FIN": doc.dat_fin
                }
                data.push(tab);
            }
            console.log(data);
            //export to excel file-----------
            ////generate file name xlsx
            function convertDate() {
                function pad(s) { return (s < 10) ? '0' + s : s; }
                var d = new Date()
                return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('')
            }
            var nameFile = "Casky_Contrats_AM_" + convertDate() + ".xlsx"

            //save data in excel file
            const wb = xlsx.utils.book_new();
            const ws = xlsx.utils.json_to_sheet(data);
            xlsx.utils.book_append_sheet(wb, ws);
            xlsx.writeFile(wb, `./filesShare/${nameFile}`);
            //--------------------------------------

            //send email
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                },
                tls: {
                    rejectUnauthorized: false
                }
            });


            let message = {
                from: 'TestMail <yourEmail@gmail.com>',
                to: 'Nodemailer <desEmail@gmail.com>', //Mr_Abid <abid.khirani@gmail.com>
                subject: 'contrat test message',
                text: 'For clients with payement is true ',
                html: '<img src="https://www.google.com/maps/uv?pb=!1s0xdafef6240947b41%3A0x62e255fcfadcbc1b!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPw-8C9-HF0HwwZozIhYpBVNVfmzM6E6W6fbYTq%3Dw456-h160-k-no!5scasky%20-%20Recherche%20Google!15sCgIgAQ&imagekey=!1e10!2sAF1QipMnHiNCm_-1pcUYUd9vQ9CXd0_KquwMLuMAR0Kz&hl=fr&sa=X&ved=2ahUKEwiW_u2i1JTuAhVTqHEKHU3cDboQoiowCnoECBYQAw#"> <br> <p>This is a test for last update...</p>',
                attachments: [{ // file on disk as an attachment
                    filename: `${nameFile}`,
                    path: `./filesShare/${nameFile}` // stream this file
                }]
            }


            transporter.sendMail(message, function(error, info) {
                if (error) {
                    console.log('EMAIL IS NOT SENDED !!!!', error);
                } else {
                    console.log('Email sent: ' + info.response);

                    //modifie value of notified
                    for (const doc of docs) {
                        doc.notifyed = true;

                        doc.save((err) => {
                            if (err) {
                                console.log("Error save ", err)
                            } else {
                                console.log('update ok!!!')
                                    //db.close();
                            }
                        })
                    }

                }
            });

        }
    })
}

module.exports = {
    send
}