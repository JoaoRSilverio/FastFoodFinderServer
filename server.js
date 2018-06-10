
// backend api
// auth not implemented
//setting up modules

var express = require("express");
var app = express();
var session = require('express-session');
var passport = require('passport');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var morgan = require("morgan");
var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();
const Models = require('./Models.js');
const UserApi = require('./UserApi.js');
const AdminApi = require('./AdminAPI.js');
var Database = require('./Database.js');
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
Database.connectDb();
// Development mongodb://<dbuser>:<dbpassword>@ds012178.mlab.com:12178/fffdevelopment

//// local test


////////////////////
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
//handling connection

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
app.get('/app*', UserApi.getApp);
app.post('/login', passport.authenticate('local'),UserApi.postLogin)
app.post('/logout', UserApi.postLogout)
app.get('/locations', checkauth, UserApi.getLocations)
app.get('/adminlogin', AdminApi.getLogin)
app.get('/foodchains', UserApi.getFoodChains)
app.get('/admindashboard', checkauthadmin, AdminApi.getDashboard)
//app.get('/search',UserApi.getSearch)
app.get('/scanlist', checkauth, UserApi.getScanList)
app.get('/geosearch', checkauth,UserApi.getGeoSearch )
app.get('/getsnack', UserApi.getSnack)
app.get('/alllocations', checkauthadmin,AdminApi.getAllLocations)
app.post('/adduserlocation', checkauth, UserApi.postUserFastFoodLocation)
app.post('/adminlogin', passport.authenticate('local'), AdminApi.postLogin)
app.post('/register', UserApi.postRegister)
app.post('/addproducts', AdminApi.postAddProducts)
app.post('/removeproduct', AdminApi.postRemoveProduct)
app.post('/unsubscribe', checkauth,UserApi.postUnsubscribe)
app.post('/subscribe', checkauth, UserApi.postSubscribe);
app.post('/choosenResult', checkauth,UserApi.postChoosenResult)
// OG CALLS
app.post('/edituser', checkauthadmin,AdminApi.postEditUser )
app.post('/removelocation', checkauthadmin, AdminApi.postRemoveLocation)
app.post('/allusers', checkauthadmin,AdminApi.postAllUsers)
app.post('/removeuser', checkauth, AdminApi.postRemoveUser)
app.post('/addsnack', checkauthadmin, AdminApi.postAddSnack)
app.post('/addfoodchain', checkauthadmin,AdminApi.postAddFoodChain)
app.post('/foodchaindetails', checkauthadmin, AdminApi.postFoodChainDetails)
app.post('/addfoodchainlocation', checkauthadmin,AdminApi.postAddFoodChainLocation)
app.post('/allsearches', checkauthadmin,AdminApi.postAllSearches)

/// exports
module.exports = router;

app.listen(8080, function (err) {
    if (err) {
        console.log("error starting up server");
    }
    console.log("FoodExplorerServer online @ port 8080");
});


