var mongoose = require("mongoose");
const SCHEMA = require('./Schemas.js');
//var UserModel = mongoose.model('user',userschema);
var Action = mongoose.model('searchaction', SCHEMA.SEARCHACTIONSCHEMA);
var Search= mongoose.model('searchmeta', SCHEMA.SEARCHMETASCHEMA);
var FoodChain = mongoose.model('foodchain',SCHEMA.FASTFOODSCHEMA);
var UserLocations = mongoose.model('userlocation', SCHEMA.USERLOCATIONSCHEMA);
var Entity = mongoose.model('entity', SCHEMA.ENTITYSCHEMA);
var FastFoodLocation = mongoose.model('productlocation',SCHEMA.PRODUCTLOCATIONSCHEMA);
var SnackItem = mongoose.model('snack',SCHEMA.SNACKSCHEMA);

module.exports = {
    Action,
    Search,
    FoodChain,
    UserLocations,
    Entity,
    FastFoodLocation,
    SnackItem
}