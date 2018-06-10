var mongoose = require("mongoose");
var schema = mongoose.Schema;
var currenttime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

const GEOSCHEMA = new schema({

    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], index: '2dsphere' }

})

const USERLOCATIONSCHEMA = new schema({
    locationsid: [String],
    userid: String
})

const ENTITYSCHEMA = new schema({
    name: String,
    image: String,
    contacts: { website: String, tel: String, email: String },
    logo: { type: String, default: "logo.png" }
})

const SNACKSCHEMA = new schema({
    name:String,
    image:String,
    description:String,
    price:Number,
    
})

const PRODUCTLOCATIONSCHEMA = new schema({
    productid: String,
    foodchainid: String,
    name: String,
    address: String,
    snacks:{type:[SNACKSCHEMA], default:[]},
    loc: GEOSCHEMA
})

const FASTFOODSCHEMA = new schema({
    name: String,
    image: String,
    info: String,
    contacts: String,
})
const FINALDECISIONSCHEMA = new schema({
    timestamp: { type: String, default: currenttime },
    foodchainid: String,


})
const SEARCHACTIONSCHEMA = new schema({
    timestamp: { type: String, default: currenttime },
    searchid: String,
    finaldecision: FINALDECISIONSCHEMA
})
const SEARCHMETASCHEMA = new schema({
    timestamp: { type: String, default: currenttime },
    location: GEOSCHEMA,
    distanceSet: Number,
    municipality: String,
    city: String,
    results: []


})




module.exports ={ 
    GEOSCHEMA,
    USERLOCATIONSCHEMA,
    ENTITYSCHEMA,
    SNACKSCHEMA,
    PRODUCTLOCATIONSCHEMA,
    FASTFOODSCHEMA,
    FINALDECISIONSCHEMA,
    SEARCHACTIONSCHEMA,
    SEARCHMETASCHEMA
}
    
