
const MYKEYS = require('./thefile.js');
var mongoose = require("mongoose");
const LOCAL_DEV = MYKEYS.DBPATH_LOCAL;
const DEV = MYKEYS.DBPATH_LIVE;


function connectDb() {
    var db = mongoose.connect(DEV)
        .then((response) => {
            console.log("connection succesfull!!!");
        }, err => {
            console.log("something went terribly wrong...");
            console.log(err);
            console.log("shutting down aplication");
            process.exit(1);
            // shuting down 
        });

    // CONN EVENTS
    mongoose.connection.on('connected', function () {
        console.log('Mongoose default connection open ');
    });
    // If the connection throws an error
    mongoose.connection.on('error', function (err) {
        console.log('Mongoose default connection error: ' + err);
    });
    // When the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });
}
module.exports = { connectDb }