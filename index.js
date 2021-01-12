CronJob = require('cron').CronJob;
const { send } = require("./funcSendEmail") //call function send email

//cron / auto run each 10 s
// '0 0 0 * * *' => evry day at 12.00 AM
// '00 00 00 * * *' => evry day at 12.00 AM
new CronJob('*/10 * * * * *', function() {
    console.log("staring cron");
    // function send email
    send(); //function send email


}, null, true, 'America/Los_Angeles');