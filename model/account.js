var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username:String,
    role:String,
    password:String,
    email:String,
    points:Number,
    profileimage:String,
    activefoodchains:[String],
    productsubscriptions:[]


})
Account.plugin(passportLocalMongoose);
module.exports= mongoose.model('user',Account);