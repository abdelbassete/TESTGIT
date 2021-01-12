// var id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
// console.log(id)

const { dateFin } = require("./addDoc/date");

uniqueId = function() {
    // return (Math.random().toString(36).slice(2)).toUpperCase();
    // return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
    return convertDate(Date().toString());
};
console.log(uniqueId())


// var nameFile = new Date().toDateString();
// const xlsx = require('xlsx');
// const colo = require('xlsx-color');
// const styl = require('xlsx-style');

// console.log(nameFile)

// const data = [{ Name: "cococh", age: 10 }, { Name: "cososo", age: 45 }]
// const wb = xlsx.utils.book_new();
// const ws = xlsx.utils.json_to_sheet(data);
// ws = { fill: { fgColor: { rgb: "#111111" } } };
// xlsx
// xlsx.utils.book_append_sheet(wb, ws, "Test");
// xlsx.writeFile(wb, `contrat_${nameFile}.xlsx`);

// CronJob = require('cron').CronJob;
// const { send } = require("./funcSendEmail")


// new CronJob('*/10 * * * * *', function() {
//     console.log("staring cron");
//     // function send email
//     send();


// }, null, true, 'America/Los_Angeles');

// const Excel = require('exceljs');
// const path = require('path');

// const [, , filename] = process.argv;

// const fills = {
//     redDarkVertical: {
//         type: 'pattern',
//         pattern: 'darkVertical',
//         fgColor: { argb: 'FFFF0000' },
//     },
//     redGreenDarkTrellis: {
//         type: 'pattern',
//         pattern: 'darkTrellis',
//         fgColor: { argb: 'FFFF0000' },
//         bgColor: { argb: 'FF00FF00' },
//     },
//     blueWhiteHGrad: {
//         type: 'gradient',
//         gradient: 'angle',
//         degree: 0,
//         stops: [
//             { position: 0, color: { argb: 'FF0000FF' } },
//             { position: 1, color: { argb: 'FFFFFFFF' } },
//         ],
//     },
//     rgbPathGrad: {
//         type: 'gradient',
//         gradient: 'path',
//         center: { left: 0.5, top: 0.5 },
//         stops: [
//             { position: 0, color: { argb: 'FFFF0000' } },
//             { position: 0.5, color: { argb: 'FF00FF00' } },
//             { position: 1, color: { argb: 'FF0000FF' } },
//         ],
//     },
// };
// const wb = new Excel.Workbook();
// const ws = wb.addWorksheet('Foo');

// const imageId = wb.addImage({
//     filename: path.join(__dirname, 'filesShare/Casky-logo-R.png'),
//     extension: 'png',
// });


// ws.getCell('A1').value = 'Hello, World!';
// ws.addImage('A1:D1').fill = fills.redGreenDarkTrellis;
// ws.addImage(imageId, {
//     tl: { col: 0.1125, row: 0.4 },
//     br: { col: 2.101046875, row: 3.4 },
//     editAs: 'oneCell',
// });
// //
// ws.getCell('A5').value = 'Hello, World!';
// ws.addRow(['NAME', 'AGE', 'CITY']).font = { color: { argb: "004e47cc" } };
// // ws.getRow(6).fill = fills.redGreenDarkTrellis;
// ws.headerFooter.oddHeader = '&CHello, Header!';
// ws.headerFooter.oddFooter = '&CPage &P of &N';
// wb.xlsx.writeFile("test.xlsx")