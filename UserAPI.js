const Models = require('./Models.js');
const Account = require('./model/account');
var mongoose = require("mongoose");
var path = require('path');
// QUERYS 
var getproducts = mongoose.model('foodchain').find();

function getLocations(req, res) {
    console.log("/locations");
    var locations = [];
    Models.UserLocations.find({ userid: req.user.id }).exec(function (err, userlocation) {
        if (err) {
            console.log("error");
            return res.send("error");

        }

        Models.FastFoodLocation.find({ _id: { $in: userlocation[0].locationsid } }, function (err, locations) {
            if (err) {
                return res.send({ message: "error" });
            }
            //console.log(locations);


            return res.send(locations);

        })



    })
}
function postUserFastFoodLocation(req, res) {
    Models.UserLocations.update({ _id: req.user.id }, { $push: req.body.locationid });

}
function postRegister(req, res) {
    console.log("/register");
    if (req.body.username == 'undefined' || req.body.password == 'undefined' || req.body.email == 'undefined') {
        return res.send({ message: "invalid request" });
    } else {
        Account.register(new Account({ username: req.body.username, email: req.body.email }), req.body.password, function (err, account) {
            if (err) {
                return res.send({ message: "already exists" });
            }
            passport.authenticate('local')(req, res, function () {
                var userlocation = new Models.UserLocations();
                userlocation.userid = req.user.id;
                userlocation.save();
                res.redirect('/');
            })
        })
    }
}
function getFoodChains(req, res) {
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

}
function postUnsubscribe(req, res) {
    console.log("/unsubscribe");
    var foodchainid = req.body.fcid;
    Account.update({ _id: req.user.id },
        { $pullAll: { activefoodchains: [foodchainid] } },
        function (err) {
            if (err) {
                res.send("error deleting");
            }
            console.log("deleted " + req.body.fcid);
            res.send({ message: "OK" });
        });
}
function postSubscribe(req, res) {
    console.log("/subscribe");

    //console.log("username: " + req.user.username + " id: " + req.user.id + "productid:" + req.query.productid);
    var foodchainid = req.body.fcid;
    console.log(foodchainid);


    Account.update({ _id: req.user.id }, { $push: { activefoodchains: foodchainid } }, function (err) {
        if (err) { console.log(err); }
    });



}
function getScanList(req, res) {
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

            Models.FoodChain.find().exec((err, results) => {

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
}
function postChoosenResult(req, res) {
    console.log('/choosenResult');
    console.log('searchid:' + req.body.searchid + ' resultid: ' + req.body.resultid);
    Models.Action.update({
        searchid: req.body.searchid
    },
        {
            finaldecision: {
                foodchainid: req.body.resultid
            }
        }, (err) => {

            err ? console.log('couldnt log result' + err) : res.send({ message: 'ok' });
        })

}
function getGeoSearch(req, res) {
    console.log("../geosearch");

    if (req.query.distance === 'undefined' || req.query.userid === 'undefined' || req.query.latitude === 'undefined' || req.query.longitude === 'undefined') {
        console.log("missing parameters");
        return res.send("missing parameters");

    }
    var displayelement = { searchid: '', data: [] };

    var distance = req.query.distance || 1000;
    var searchterm = req.query.productid;
    var coords = [req.query.longitude, req.query.latitude];
    var done = [];


    // meta data
    var metasearch = new Models.Search();
    var metaaction = new Models.Action();
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

            Models.FoodChain.findById(element).exec((err, fc) => {
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
                                Models.UserLocations.update({ userid: req.user.id }, { $addToSet: { locationsid: result.id } }, function (err, resu) {
                                    if (err) {
                                        console.log(err);
                                    }
                                });
                            })

                            displayelement.data.push({ foodchain: fc, locations: results });
                            done.push(true);
                            console.log(done.length + " of " + user.activefoodchains.length + " querys")
                        }
                        if (done.length == user.activefoodchains.length) {
                            displayelement.data.forEach(function (element) {
                                element.locations.forEach(function (loc) {
                                    metasearch.results.push(loc.id);
                                })

                            })

                            metasearch.save();
                            displayelement.searchid = metasearch.id;
                            console.log("send results");
                            console.log(displayelement);
                            return res.send(displayelement);

                        }

                    })
                }


            })


        });

    });









}
function getSnack(req, res) {
    SnackItem.findById(req.body, function (err, snack) {
        if (err) {
            return res.send(err);
        }
        return res.send(snack);
    })
}
function postLogout(req, res) {
    req.logout();
    res.send({ message: "user logged out" });

}
function postLogin(req, res) {
    console.log("/login");
    if (req.body.username == 'undefined' || req.body.password == 'undefined') {

    } else {

        return res.send(req.user);
    }

}
function getApp(req, res) {
    console.log("trying to get app");
    res.sendFile(path.join(__dirname, 'public/app/index.html'));
}
module.exports = {
    getLocations,
    postUserFastFoodLocation,
    postRegister,
    getFoodChains,
    //getSearch,
    postUnsubscribe,
    getScanList,
    postChoosenResult,
    getGeoSearch,
    getSnack,
    postSubscribe,
    postLogin,
    postLogout,
    getApp

}