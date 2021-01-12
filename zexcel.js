const Excel = require('exceljs');
const path = require('path');


//Create a workbook with a worksheet
const wb = new Excel.Workbook();
const ws = wb.addWorksheet('Foo');

// var sheet = context.workbook.worksheets.getActiveWorksheet();

// Create the headers and format them to stand out.
var headers = [
    ["Product", "Quantity", "Unit Price", "Totals"]
];
var headerRange = ws.getRange("B2:E2");
headerRange.values = headers;
headerRange.format.fill.color = "#4472C4";
headerRange.format.font.color = "white";

wb.xlsx.writeFile("test.xlsx")