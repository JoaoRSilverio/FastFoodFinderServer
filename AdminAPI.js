const Models = require('./Models.js');
const Account = require('./model/account');
var mongoose = require("mongoose");
var path = require('path');

function getLogin(req, res) {
    res.sendFile(path.join(__dirname, 'public/adminlogin.html'));
}
function postLogin(req, res) {
    if (req.body.username == 'undefined' || req.body.password == 'undefined') {
    } else {
        return res.redirect('/admindashboard');
    }
}
function getDashboard(req, res) {
    return res.sendFile(path.join(__dirname, 'public/dashboard.html'));
}
function postAddProducts(req, res) {

    console.log("/addproducts");
    // starting up models
    var addeproduct = new Models.ProductItem();
    var newproductlocation = new FastFoodLocationModel();
    var locationobj = { type: String, coordinates: [] };
    // filling object details
    addeproduct.name = req.body.name;
    addeproduct.brand = req.body.brand;
    // location GeoJSON creation
    locationobj.type = "Point";
    locationobj.coordinates = [req.body.longitude, req.body.latitude];
    // product location
    newproductlocation.productid = addeproduct._id;
    // plugin userdata
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
}
function postRemoveProduct(req, res) {
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
                    FastFoodLocationModel.deleteMany({ productid: req.body.id }, function (err) {
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

}
function postEditUser(req, res) {

    /*  username:String,
    role:String,
    password:String,
    email:String,
    points:Number,
    profileimage:String,
    activefoodchains:[String],
    productsubscriptions:[] */

    if (req.body.id && req.body.username && req.body.email && req.body.activefoodchains) {
        Account.findById({ _id: req.body.id }, function (err, user) {
            user.username = req.body.username;
            user.email = req.body.email;
            user.activefoodchains = req.body.activefoodchains;

            user.save(function (err) {
                err ? res.send({ message: "error saving user: " + user.username }) : res.send({ message: "success" });
            })
        });


    } else {
        res.send({ message: 'incomplete request' })
    }

}
function postRemoveLocation(req, res) {
    console.log('removing ' + req.body.locationid)
    Models.FastFoodLocation.findByIdAndRemove({ _id: req.body.locationid }, (err) => {
        err ? res.send({ message: 'error' }) : res.send({ message: 'deleted' });
    })
}
function postAllUsers(req, res) {
    Account.find(function (err, results) {
        res.send(results);
    })
}
function postRemoveUser(req, res) {
    if (req.body.id) {

        Account.findByIdAndRemove({ _id: req.body.id }, function (err, user) {
            console.log(user.username + " removed");
            res.send({ message: user.username + ' removed' });
        })
    }
}
function postAddSnack(req, res) {
}
function postAddFoodChain(req, res) {
    console.log("/addfoodchain");
    console.log("                              <-- adding " + req.body.name + " to db");
    newfoodchain = new Models.FoodChain();
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
}
function postFoodChainDetails(req, res) {
    console.log("/foodchaindetails");
    Models.FoodChain.find(function (err, results) {
        if (err) {
            return res.send({ message: 'error' });
        } else {
            res.send(results);
        }
    })
}
function getAllLocations(req, res) {
    console.log('getAllLocations/');
    Models.FastFoodLocation.find({}, function (err, results) {
        if (err) {
            console.log("error");
            res.send("error");
        }
        console.log(results[1]);
        res.send(results);
    })
}
function postAddFoodChainLocation(req, res) {
    /// receives longitude,latitude,foodchainid,address
    console.log("/addfoodchainlocation");
    var newlocation = FastFoodLocationModel();

    newlocation.name = req.body.name;
    var locationobj = { type: String, coordinates: [] };
    locationobj.type = "Point";
    locationobj.coordinates = [req.body.longitude, req.body.latitude];
    // newlocation.productid = req.body.productid;
    // uncoment to activate product locations

    newlocation.foodchainid = req.body.foodchainid;
    // plugin userdata
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
}
function postAllSearches(req, res) {
    console.log("/allsearches");
    Models.Search.find({}, function (err, results) {
        if (err) {
            console.log("..error");
            res.send("error");
        }
        console.log("..ok");
        res.send(results);

    })
}

module.exports = {
    getLogin,
    postLogin,
    getDashboard,
    postAddProducts,
    postRemoveProduct,
    postEditUser,
    postRemoveLocation,
    postAddSnack,
    postAllUsers,
    postRemoveUser,
    postAddFoodChain,
    postFoodChainDetails,
    getAllLocations,
    postAddFoodChainLocation,
    postAllSearches
}