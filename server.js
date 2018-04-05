













// backend api
// auth not implemented
//setting up modules

var express = require("express");
var app = express();
var session = require('express-session');
var passport = require('passport');

var path = require('path');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var morgan = require("morgan");

var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();

const MYKEYS = require('./thefile.js');
////////////////////////
// Configuration
/////////////////////////
morgan('dev');

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(session({ secret: 'wheresjonhcena', cookie: { maxAge: 60 * 60 * 1000 }, resave: true, saveUninitialized: true }));
//app.use(express.cookieSession());
app.use(passport.initialize());
app.use(passport.session());
////////////////
/// auth middleware
function checkauth(req, res, next) {

    if (req.isAuthenticated()) {
        // console.log("passed auth");
        return next();
    }
    res.redirect('/app');
}
function checkauthadmin(req, res, next) {
    console.log("started auth");

    if (req.isAuthenticated()) {
        console.log(req.user);
        Account.findOne({ _id: req.user._id }, function (err, user) {
            console.log("checking authorization");
            if (user.role == "admin") {
                console.log("admin rights");
                return next();
            } else {
                console.log("no admin rights");
                res.redirect('/adminlogin');

            }
        })
    } else {
        res.redirect('/');
    }
}

///////////////
// DB connection
///////////////
// Development mongodb://<dbuser>:<dbpassword>@ds012178.mlab.com:12178/fffdevelopment
const LOCAL_DEV = MYKEYS.DBPATH_LOCAL;
const DEV = MYKEYS.DBPATH_LIVE;

//// local test
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



////////////////////
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
//handling connection
/* 
process.on('SIGINT',function(){
    mongoose.connection.close(function(){
        console.log("connection to db closed");
        process.exit(0);
    });
}) */


///////////////////////////
// SETTING SCHEMA
//////////////////////////////// 
var schema = mongoose.Schema;

////////// CURRENT DATE
currenttime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
/////////////
//product schema
const GeoSchema = new schema({

    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], index: '2dsphere' }

})
const userlocationschema = new schema({
    locationsid: [String],
    userid: String
})
const entityschema = new schema({
    name: String,
    image: String,
    contacts: { website: String, tel: String, email: String },
    logo: { type: String, default: "logo.png" }
})
const productlocationschema = new schema({
    productid: String,
    foodchainid: String,
    name: String,
    datediscovered: String,
    discoveredby: { username: String, id: String },
    address: String,
    confirmations: { type: Number, default: 0 },
    loc: GeoSchema
})
const productschema = new schema({
    name: { type: String, required: true },
    brand: { type: String, default: "no brand" },
    description: String,
    image: { type: String, default: 'somepath/somewhere' },
    points: { type: Number, default: 0 },
    followers: { type: Number, default: 0 },
    dateadded: { type: String, default: currenttime },

    confirmations: Number,
    price: {
        value: String, currency: String
    },
    feconfirmed: Boolean,
    shopentity: Object,
    tags: []
})
const fastfoodchainschema = new schema({
    name: String,
    image: String,
    info: String,
    contacts: String,
})
const finaldecisionschema = new schema({
    timestamp: { type: String, default: currenttime },
    foodchainid: String,


})
const searchactionschema = new schema({
    timestamp: { type: String, default: currenttime },
    searchid: String,
    finaldecision: finaldecisionschema
})
const searchmetaschema = new schema({
    timestamp: { type: String, default: currenttime },
    location: GeoSchema,
    distanceSet: Number,
    municipality: String,
    city: String,
    results: []


})

console.log(currenttime);
// wanted schema
var wantedschema = new schema({
    name: { type: String, required: true },
    brand: { type: String, default: "Unknown" },
    dateadded: { type: String, default: currenttime },
    resumeddescription: String,
    followers: Number,
    lastfollowers: []
    ,
    discovered: { type: Boolean, default: false },
    image: { type: String, default: 'somepath/somewhere' }
})
////////////////////////////
// AND MODELS
////////////////////
//var UserModel = mongoose.model('user',userschema);
var ActionModel = mongoose.model('searchaction', searchactionschema);
var SearchModel = mongoose.model('searchmeta', searchmetaschema);
var FoodChainModel = mongoose.model('foodchain', fastfoodchainschema);
var UserLocationsModel = mongoose.model('userlocation', userlocationschema);
var EntityModel = mongoose.model('entity', entityschema);
var WantedItemModel = mongoose.model('wanted', wantedschema);
var ProductItemModel = mongoose.model('product', productschema);
var ProductLocationModel = mongoose.model('productlocation', productlocationschema);
////////////////////
// QUERYS 
////////////////////
var getproducts = mongoose.model('foodchain').find();
var getwanted = mongoose.model('wanted').find();
/////////////// 


/////////////////////////
// configuring passport module authentication
var Account = require('./model/account');
passport.use(new LocalStrategy(Account.authenticate()));

passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());








////////////////////
/// ROUTES
/////////////////////////////////////////////////////////////////

//HOMEPAGE
////////////////
app.get('/', function (req, res) {

    //  res.sendFile('dashboard.html', { title: "MainPage" });

    console.log("rendered main page");
})

app.get('/app*', function (req, res) {
    console.log("trying to get app");
    res.sendFile(path.join(__dirname, 'public/app/index.html'));
});
////////////////
// LOGIN
////////////////
app.post('/login', passport.authenticate('local'), function (req, res) {
    console.log("/login");
    if (req.body.username == 'undefined' || req.body.password == 'undefined') {

    } else {

        return res.send(req.user);
    }

})
////////////
// LOGOUT
///////////
app.post('/logout', function (req, res) {
    req.logout();
    res.send({ message: "user logged out" });

})
/// get list of locations discovered
app.get('/locations', checkauth, function (req, res) {
    console.log("/locations");
    var locations = [];
    UserLocationsModel.find({ userid: req.user.id }).exec(function (err, userlocation) {
        if (err) {
            console.log("error");
            return res.send("error");

        }

        ProductLocationModel.find({ _id: { $in: userlocation[0].locationsid } }, function (err, locations) {
            if (err) {
                return res.send({ message: "error" });
            }
            //console.log(locations);


            return res.send(locations);

        })



    })

})
app.get('/adminlogin', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/adminlogin.html'));
})
app.post('/adminlogin', passport.authenticate('local'), function (req, res) {
    if (req.body.username == 'undefined' || req.body.password == 'undefined') {

    } else {

        return res.redirect('/admindashboard');
    }

})
app.get('/admindashboard', checkauthadmin, function (req, res) {
    return res.sendFile(path.join(__dirname, 'public/dashboard.html'));
})
app.post('/adduserlocation', checkauth, function (req, res) {

    UserLocationsModel.update({ _id: req.user.id }, { $push: req.body.locationid });

})
/////////////////
// REGISTER
////////////////
app.post('/register', function (req, res) {
    console.log("/register");
    if (req.body.username == 'undefined' || req.body.password == 'undefined' || req.body.email == 'undefined') {
        return res.send({ message: "invalid request" });
    } else {
        Account.register(new Account({ username: req.body.username, email: req.body.email }), req.body.password, function (err, account) {
            if (err) {
                return res.send({ message: "already exists" });
            }
            passport.authenticate('local')(req, res, function () {
                var userlocation = new UserLocationsModel();
                userlocation.userid = req.user.id;
                userlocation.save();
                res.redirect('/');
            })
        })
    }
})

//////////////////
// PRODUCTS
/////////////////
app.get('/foodchains', function (req, res) {
    //console.log(req.query.size +""+ req.query.start);

    var cursorstart = parseInt(req.query.start);
    var size = parseInt(req.query.size);
    if (req.query.start === undefined) {
        cursorstart = parseInt(0);
    }
    if (!req.query.size) {
        size = parseInt(10);
    }
    console.log("/foodchains " + "starting at pos:" + cursorstart + " number of items:" + size);
    getproducts.skip(cursorstart);
    getproducts.limit(size);
    getproducts.exec(function (err, products) {
        if (err) {
            console.log("error in db request" + err);
        }

        res.send(products);
        console.log(products);
    })



    //res.render('index',{title:"MainPage"});

})

app.post('/addproducts', function (req, res) {
    console.log("/addproducts");
    // starting up models
    var addeproduct = new ProductItemModel();
    var newproductlocation = new ProductLocationModel();
    var locationobj = { type: String, coordinates: [] };
    // filling object details
    addeproduct.name = req.body.name;
    addeproduct.brand = req.body.brand;
    // location GeoJSON creation
    locationobj.type = "Point";
    locationobj.coordinates = [req.body.longitude, req.body.latitude];
    // product location
    newproductlocation.productid = addeproduct._id;
    newproductlocation.datediscovered = currenttime;
    // plugin userdata
    newproductlocation.discoveredby = { username: "Server", id: "00000001" };
    ////
    newproductlocation.address = req.body.address || "empty street";
    newproductlocation.loc = locationobj;

    console.log(addeproduct);
    addeproduct.save(function (err) {
        if (err) {
            res.send("some error");
            console.log(err);
        } else {
            console.log("...saved product");
            newproductlocation.productid = addeproduct._id;
            console.log("..saving location");
            newproductlocation.save(function (err) {
                if (err) {
                    res.send("error saving location");
                    console.log(err);
                }
                console.log("..done");
                res.redirect('/');
            })



        }
    })
})



app.post('/removeproduct', function (req, res) {
    console.log(req.body.id);

    mongoose.model('product').findById(req.body.id, function (err, wanteditem) {
        if (err) {
            console.log("failed to get id:" + req.body.id);
        }


        console.log("got {name:" + wanteditem.name + " , id:" + wanteditem._id + "}");
        wanteditem.remove(function (err, deleteditem) {
            if (err) {
                console.log("failed to delete " + deleteditem);
            }
            WantedItemModel.findById(req.body.id, function (err, resultitem) {
                if (resultitem == null) {
                    ProductLocationModel.deleteMany({ productid: req.body.id }, function (err) {
                        if (err) {
                            console.log("error getting locations to delete");
                        }
                        console.log("item locations deleted");
                        res.send("OK");
                    })
                    console.log("item deleted");
                }
            });
        })
    });

    //res.header("Content-Type: application/json");

})
/// SEARCHES
app.get('/search', function (req, res) {
    console.log("GET/search");

    console.log(typeof (req.query.latitude));
    if (req.query.foodchains == 'undefined' || req.query.distance == 'undefined' || req.query.latitude == 'undefined' || req.query.longitude == 'undefined') {
        console.log("search parameter incomplete");
        return res.send({ message: "search parameters incomplete" });

    }
    console.log();
    //geo related calculus
    var searchRadius = req.query.distance * 1000 || 10000;
    searchRadius /= 6371;
    var coordsn = [];
    coordsn[0] = req.query.longitude;
    coordsn[1] = req.query.latitude;

    //console.log(req.query.searchterm);
    console.log("x:" + coordsn[0] + " y:" + coordsn[1]);
    nameresults = [];


    if (req.query.searchterm && req.query.longitude && req.query.latitude) {
        var rgx = new RegExp('.*' + req.query.searchterm + '.*');
        console.log("starting search for items in " + searchRadius + "km");
        ProductItemModel.find({ name: rgx }).exec(function (err, nameresults) {

            console.log("got " + nameresults.length + " name matches");
            if (nameresults.length == 0) {
                res.send({ results: 0, locations: 0 });
            }
            isdone = [];
            filteredvalues = [];
            nameresults.forEach(element => {
                console.log("searching for locations for id: " + element.id);
                mongoose.model('productlocation').find({ productid: element.id }).where('loc.coordinates').near({
                    center: { type: "Point", coordinates: coordsn }, isNearSphere: 1,
                    maxDistance: searchRadius * 1000
                }).exec(function (err, results) {
                    if (err) {
                        console.log(err);
                    }
                    console.log(results);

                    if (results.length == 0) {
                        console.log("...match didnt have close location");
                        //nameresults.splice(nameresults.indexOf(element),1);
                        console.log("...removing match");
                        console.log("items in array " + nameresults.length);
                        isdone.push(true);
                        console.log(isdone.length + " of " + nameresults.length + " querys finished");
                        if (isdone.length == nameresults.length) {
                            console.log("sending results");
                            res.send(filteredvalues);
                        }
                    } else {
                        console.log("found location match");
                        var displayelement = { product: element, locations: results };
                        element.location = results;
                        console.log(nameresults.indexOf(element) + " vs " + nameresults.length);
                        isdone.push(true);
                        console.log(isdone.length + " of " + nameresults.length + " querys finished");
                        filteredvalues.push(displayelement);
                        if (isdone.length == nameresults.length) {
                            console.log("sending results");
                            res.send(filteredvalues);
                        }

                    }

                })


            });

        })







    } else {
        return res.send({ message: "search parameters incomplete" });
        console.log("search parameter incomplete");
    }
})

////////////
// FOLLOW PRODUCTS
////////////
app.post('/unsubscribe', checkauth, function (req, res) {
    console.log("/unsubscribe");
    var foodchainid = req.body.fcid;
    Account.update({ _id: req.user.id }, { $pullAll: { activefoodchains: [foodchainid] } }, function (err) {
        if (err) {
            res.send("error deleting");
        }
        console.log("deleted " + req.body.fcid);
        res.send({ message: "OK" });
    });

    /*
    Account.findById(req.user.id, (err, user) => {
        console.log(user.username);
        // if user doesnt have this field
        if(user.activefoodchains === undefined){
            user.activefoodchains = [];
            user.save((err, result) => { if (err) { console.log("error"); } else { console.log("added field activefoodchains"); } })
        }else{
        
        console.log(typeof (user.activefoodchains));

        console.log("before : " + user.activefoodchains);

        //// monogoose shit
        user.activefoodchains.split(user.activefoodchains.indexOf(foodchainid), 1);
        //console.log(getType(user.activefoodchains));
        console.log("after : " + user.activefoodchains);
        user.save((err, result) => { if (err) { console.log("error"); } else { console.log("foodchainremoved"); } })
    }
    }) */
})
app.post('/subscribe', checkauth, function (req, res) {
    console.log("/subscribe");

    //console.log("username: " + req.user.username + " id: " + req.user.id + "productid:" + req.query.productid);
    var foodchainid = req.body.fcid;
    console.log(foodchainid);


    Account.update({ _id: req.user.id }, { $push: { activefoodchains: foodchainid } }, function (err) {
        if (err) { console.log(err); }
    });



});










app.get('/scanlist', checkauth, function (req, res) {
    console.log("/scanlist");

    var displayelement = { foodchains: [] };
    //console.log(req.user._id);
    Account.findById(req.user.id).exec((err, user) => {
        if (err) {
            console.log("something went wrong");
        }
        // console.log(user.activefoodchains);
        if (user) {
            //    console.log("got user " + user.username);
            if (user.activefoodchains == 'undefined') {
                console.log("trying to set array to property activefoodchains")
                user.activefoodchains = [];
                user.save((err) => { if (err) { console.log("couldnt save changes") } else { console.log("saved changes") } });
            }

            FoodChainModel.find().exec((err, results) => {

                results.forEach(element => {
                    var foodchain = { name: String, id: Number, selected: Boolean };
                    if (user.activefoodchains.indexOf(element.id) == -1) {
                        foodchain.id = element.id;
                        foodchain.name = element.name;
                        foodchain.selected = false;


                    } else {
                        foodchain.id = element.id;
                        foodchain.name = element.name;
                        foodchain.selected = true;

                    }
                    displayelement.foodchains.push(foodchain);
                })


                res.send(displayelement);

            })
        }





    })

})

//scan geosearch
// geosearch?distance=num&foodchains[]=1&foodchains[]=2&longitude=num&latitude=num
app.get('/geosearch', checkauth, function (req, res) {
    console.log("../geosearch");

    if (req.query.distance === 'undefined' || req.query.userid === 'undefined' || req.query.latitude === 'undefined' || req.query.longitude === 'undefined') {
        console.log("missing parameters");
        return res.send("missing parameters");

    }
    var displayelement = [];

    var distance = req.query.distance || 1000;
    var searchterm = req.query.productid;
    var coords = [req.query.longitude, req.query.latitude];
    var done = [];


    // meta data
    var metasearch = new SearchModel();
    var metaaction = new ActionModel();
    var locationobj = { type: String, coordinates: [] };
    locationobj.type = "Point";
    locationobj.coordinates = coords;
    metasearch.location = locationobj;
    metasearch.distanceSet = req.query.distance;
    metasearch.results = [];
    metasearch.save(function (err) {
        if (err) {
            console.log(err);
        }
        console.log("meta data saved");
        metaaction.searchid = metasearch.id;
        metaaction.save();
    });

    console.log("distance:" + distance + " coords:" + coords);


    Account.findById(req.user.id).exec(function (err, user) {
        if (err) {
            console.log("error getting user");
        }
        if (user.length == 0) {
            console.log("no such user");
        }

        console.log(" array value: " + user.activefoodchains[0]);

        user.activefoodchains.forEach(element => {

            console.log("searching for : " + element + "");

            FoodChainModel.findById(element).exec((err, fc) => {
                console.log(fc);
                if (err) {
                    console.log(err);
                }
                if (!fc) {
                    console.log("no such foodchain");
                } else {
                    console.log("searching for " + fc.name + " locations");
                    mongoose.model('productlocation').find({ foodchainid: fc.id }).where('loc.coordinates').near({
                        center: { type: "Point", coordinates: coords }, isNearSphere: 1,
                        maxDistance: distance * 1000
                    }).exec(function (err, results) {

                        if (err) {
                            console.log(err);
                        } else if (results.length == 0) {
                            console.log("no locations for " + fc.name);
                            done.push(false);
                            console.log(done.length + " of " + user.activefoodchains.length + " querys");

                        } else {
                            results.forEach(function (result) {
                                UserLocationsModel.update({ userid: req.user.id }, { $addToSet: { locationsid: result.id } }, function (err, resu) {
                                    if (err) {
                                        console.log(err);
                                    }
                                });
                            })

                            displayelement.push({ foodchain: fc, locations: results });
                            done.push(true);
                            console.log(done.length + " of " + user.activefoodchains.length + " querys")
                        }
                        if (done.length == user.activefoodchains.length) {
                            displayelement.forEach(function (element) {
                                element.locations.forEach(function (loc) {
                                    metasearch.results.push(loc.id);
                                })

                            })
                            metasearch.save();
                            console.log("send results");
                            console.log(displayelement);
                            return res.send(displayelement);

                        }

                    })
                }


            })


        });

    });









})
// admin calls
app.post('/edituser',checkauthadmin,function(req,res){

    /*  username:String,
    role:String,
    password:String,
    email:String,
    points:Number,
    profileimage:String,
    activefoodchains:[String],
    productsubscriptions:[] */

if(req.body.id && req.body.username && req.body.email && req.body.activefoodchains){
    Account.findById({_id:req.body.id},function(err,user){
        user.username = req.body.username;
        user.email = req.body.email;
        user.activefoodchains = req.body.activefoodchains;

        user.save(function(err){
            err ? res.send({message:"error saving user: " + user.username}): res.send({message:"success"});
        })
    });
    

}else{
    res.send({message:'incomplete request'})
}

})
app.post('/allusers',checkauthadmin,function(req,res){
    Account.find(function(err,results){
        res.send(results);
    })
})
app.post('/removeuser',checkauth,function(req,res){
    if(req.body.id){
        Account.findByIdAndRemove({_id:req.body.id},function(err,user){
            console.log(user.username + " removed");
            res.send({message:user.username + ' removed'});
        })
    }
})

app.post('/addfoodchain', checkauthadmin, function (req, res) {
    console.log("/addfoodchain");
    console.log("                              <-- adding " + req.body.name + " to db");
    newfoodchain = new FoodChainModel();
    if (req.body.name && req.body.info && req.body.contacts) {
        newfoodchain.name = req.body.name;
        newfoodchain.info = req.body.info;
        newfoodchain.contacts = req.body.contacts;
        if (req.body.image) {
            newfoodchain.image = req.body.image;
        }
        newfoodchain.save(err => {
            if (err) { return res.send({ message: 'error while saving' }) }
            console.log("                                                   <-- saved to db ");
            return res.send({ message: "saved" });
        })

    } else {
        console.log("something was missing from request name:" + req.body.name ? req.body.name : "" + "info:" + req.body.info ? req.body.info : "" + "contacts:" + req.body.contacts ? req.body.contacts : "");
        return res.send({ message: "mal formed brand class" });
    }
})
app.post('/foodchaindetails', checkauthadmin, function (req, res) {
    console.log("/foodchaindetails");
    FoodChainModel.find(function (err, results) {
        if (err) {
            return res.send({ message: 'error' });
        } else {
            res.send(results);
        }
    })
})

app.get('/alllocations', checkauthadmin, function (req, res) {
    ProductLocationModel.find({}, function (err, results) {
        if (err) {
            console.log("error");
            res.send("error");
        }
        console.log(results[1]);
        res.send(results);
    })
})
app.post('/addfoodchainlocation', checkauthadmin, function (req, res) {
    /// receives longitude,latitude,foodchainid,address
    console.log("/addfoodchainlocation");
    var newlocation = ProductLocationModel();

    newlocation.name = req.body.name;
    var locationobj = { type: String, coordinates: [] };
    locationobj.type = "Point";
    locationobj.coordinates = [req.body.longitude, req.body.latitude];
    // newlocation.productid = req.body.productid;
    // uncoment to activate product locations

    newlocation.foodchainid = req.body.foodchainid;
    newlocation.datediscovered = currenttime;
    // plugin userdata
    newlocation.discoveredby = { username: "Server", id: "00000001" };
    /////
    newlocation.address = req.body.address || "empty street";
    newlocation.loc = locationobj;
    newlocation.save(function (err) {
        if (err) {
            console.log("error while saving location");
            res.send("error");
        } else {
            console.log("new location for " + newlocation.foodchainid);
            res.send("ok");
        }
    })



})
app.post('/allsearches', checkauthadmin, function (req, res) {
    console.log("/allsearches");
    SearchModel.find({}, function (err, results) {
        if (err) {
            console.log("..error");
            res.send("error");
        }
        console.log("..ok");
        res.send(results);

    })
})

/// exports
module.exports = router;

app.listen(8080, function (err) {
    if (err) {
        console.log("error starting up server");
    }
    console.log("FoodExplorerServer online @ port 8080");
});


