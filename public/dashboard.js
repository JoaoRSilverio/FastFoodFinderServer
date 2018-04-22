


var currentmarkerposition = [38.552058, -8.425358];
var locationsmapcenter = [38.552058, -8.425358];
var geocoder = "";
$(function () {
    // constants
    const alertModes = { success: "success", error: "danger", info: "info" };
    // BINDINGS
    var panelInsert = $(".insertpanel");
    var foodchainpanel = $(".foodchainpanel");
    var foodchaininsertpanel = $(".foochaininsertpanel");
    var txtAddress = $("#locaddress");
    var txtLongitude = $("#loclongitude");
    var txtLatitude = $("#loclatitude");
    var slctFoodChain = $(".foodchainselector");
    var canDailyStats = new Chart($("#dailysearches"), {
        type: 'line',
        data: {
            labels: ["Loading"],
            datasets: [{
                label: '# of Searches',
                data: [100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks:
                        { beginAtZero: true }
                }]
            }
        }

    });
    var canCountryList = new Chart($("#countrylist"), {
        type: 'doughnut',
        data: {
            labels: ["Portugal", "Spain", "UK", "France", "Belgium"],
            datasets: [{
                label: 'Top 5',
                data: [100, 120, 70, 50, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks:
                        { beginAtZero: true }
                }]
            }
        }

    })

    // Initializing
    var _LocMan = new LocationItemManager();
    _LocMan.bond($("#locationslist"));
    var _Data = new DataCon();
    _Data.getFoodChainsLocations(_LocMan);
    _Data.getFoodChains(slctFoodChain);
    var _StatsManager = new StatsManager();
    setTimeout(_Data.getSearches(_StatsManager), 3000);
    setTimeout(function () { _StatsManager.dailyStats(canDailyStats) }, 2000);
    
    _Data.getFoodChainsList(foodchainpanel);



    // functions
    function bootAlert(title, text, alertmode) {
        console.log("alert text = " + text);
        var htmlstring = "<div style='margin-top:15px;' class='alert alert-" + alertmode + " alert-dismissible fade show' role='alert'>"
            + "<strong>" + title + "</strong> " + text
            + " <button  class='close' data-dismiss='alert' aria-label='Close'>"
            + "<span aria-hidden='true'>&times;</span></button></div>"
        return htmlstring;
    }
    function InputValidator(text, valtype) {
        textpattern = /^[a-zA-Z0-9-ºª ]{1,64}$/g;
        coordspatern = /^[0-9-]{1,2}\.[0-9]{1,6}$/g;
        switch (valtype) {
            case "text":
                return textpattern.test(text);
            case "coords":
                return coordspatern.test(text);
            default:
                return null;
        }
    }
    function insertLocation() {
        if (InputValidator(txtAddress.val(), "text") === false) {
            panelInsert.append(bootAlert("Invalid Address", "use characters from a-Z and the sign '-' only", alertModes.error));
            return null;
        }
        if (InputValidator(txtLatitude.val(), "coords") === false || InputValidator(txtLongitude.val(), "coords") === false) {
            panelInsert.append(bootAlert("Invalid Coordinates", "use two numbers followed by . and 6 numbers after that", alertModes.error))
        } else {

            newlocationmodel = {
                address: txtAddress.val(),
                longitude: txtLongitude.val(),
                latitude: txtLatitude.val(),
                foodchainid: slctFoodChain.val(),
                name: $(".foodchainselector option:selected").html()

            }

            console.log(newlocationmodel);
            _Data.insertLocation(newlocationmodel, panelInsert);
            _Data.getFoodChainsLocations(_LocMan);
        }
    }
    function editMode(id) {
        var foodchain = $(id + " .locationfoodchain").text();
        var address = $(id + " .locationaddress").text();
        var latitude = $(id + " .locationcoords .locationcoords_lat").text();
        var longitude = $(id + " .locationcoords .locationcoords_lng").text();

        var htmlstring = "<div><input class='edit_field edit_foodchain' type='text' size='12' value='" + foodchain + "'>"
            + " <i  class='saveloc material-icons'>save</i></div>"
            + "<div ><div></div><input class='edit_field edit_address ' size='32' type='text' value='" + address + "'/></div>"
            + "<div ><input size='10' class='edit_field edit_lat ' maxlength='10' type='text' value='" + latitude + "'/><input size='10'  style='margin-left:15px;' maxlength='10' class='edit_field edit_lng ' type='text' value='" + longitude + "'/></div>"


        $(id).html(htmlstring);
        $(id).css("display", "flex");
        $(id).css("flex-flow", "column");


    }





    // LISTENERS
    /////////////

    // Existing elements normally binded
    $("#locbtn").click(function () {

        insertLocation();
    });
    $("#addFoodChainBtn").click(function () {
        let brandname = $(".txtBrandName").val();
        let brandinfo = $(".txtBrandInfo").val();
        let brandcontacts = $(".txtBrandContacts").val();
        console.log("adding object");
        _Data.addFoodChain(brandname, brandinfo, brandcontacts)
    })
    // Generated elements binded trough body
    $("body").on("click", ".checkloc", function () {
        console.log("trying to reposition map");
        currentmarkerposition = [$(this).data("lat"), $(this).data("lng")];
        locationsmapcenter = [$(this).data("lat"), $(this).data("lng")];
        console.log(currentmarkerposition);
        initMap();



    })
    $("body").on("click", ".editloc", (function () {
        console.log("pressed edit");
        var id = "#" + $(this).data("id");
        if ($(this).data("back") != "" && $(this).data("editmode") == true) {
            console.log("passou if");
            $(id).html($(this).data("back"));
            $(this).data("editmode", false);
        } else {

            $(this).data("back", $(id).html().toString());
            $(this).data("editmode", true);
            editMode(id);

        }

        // interfaces

        // console.log($(this).data("back"));
        // $(id).html( "SELECTED" );
    }));
    $("body").on("click",".removeloc",function(){
       
        _Data.removeLocation($(this).data("id"));
    });


    // Interfaces
    function LocationItem(id, foodchain, address, lat, lng) {


        if (id == "" || foodchain == "" || address == "" || lat == "" || lng == "") {
            return null;
        }
        this.id = id;
        this.foodchain = foodchain;
        this.address = address;
        this.lat = lat;
        this.lng = lng;


    }
    function SearchItem(id, date, country, city, distance, results, latitude, longitude) {
        this.id = id;
        this.date = date;
        this.country = country;
        this.city = city;
        this.distance = distance;
        this.results = results;
        this.latitude = latitude;
        this.longitude = longitude;

    }
    //function DecisionItem(id, )
    // Managers
    function LocationItemManager() {

        this.locationItems = [];
        this.clearItems = function(){
            this.locationItems = [];
        }
        this.add = function (locationitem) {
            this.locationItems.push(locationitem);
        }

        // link container here
        this.bond = function (element) {
            this.element = element;
            this.element.html(bootAlert("Loading", "...connected", "info"));
        }
        // fill container with items
        this.refresh = function () {
            this.element.html('');
            this.element.html(bootAlert("Loading", "...connected", "info"));
            if (this.locationItems.length == 0) {
                return "list empty"
            }
            if (!this.element) {
                return "no element binded"
            }
            htmlstring = "";
            for (var i = 0; i < this.locationItems.length; i++) {
                htmlstring += "<div class='list-group-item '> "
                    + "<div id='" + this.locationItems[i].id + "' class='foodchain-location'>"
                    + "<div class='locationfoodchain'>" + this.locationItems[i].foodchain + "</div>"
                    + "<div class='locationaddress'>" + this.locationItems[i].address + "</div>"
                    + "<div class='locationcoords'>latitude <span class='locationcoords_lat'>" + this.locationItems[i].lat + "</span> "
                    + "longitude:<span class='locationcoords_lng'>" + this.locationItems[i].lng + "</span></div>"
                    + "</div>"
                    + "<div style='margin-top:15px;' class='btn-group btn-group-sm' role='group'>"
                    + "<button type='button' class='btn btn-secondary btn-danger removeloc' data-id='" + this.locationItems[i].id + "'>remove</button>"
                    + "<button type='button' class='btn btn-secondary btn-default checkloc'"
                    + " data-lat='" + this.locationItems[i].lat + "' data-lng='" + this.locationItems[i].lng + "' >"
                    + "check</button>"
                    + "<button type='button' class='btn btn-secondary btn-info editloc' data-editmode=false data-back='' data-id='" + this.locationItems[i].id + "'>edit</button>"
                    + "</div>"
                    + "</div>";
                
                this.element.html(htmlstring);
            }
        }
        this.showerror = function (errordescription) {
            this.element.html(bootAlert("error", errordescription, "danger"));
        }
       
    }
    function StatsManager() {
        this.topTenCountrys = function (chart) {
            var country = { name: "", count: 0 };
            var countrylist = [];
            for (i = 0; i < this.searches.length; i++) {
                if (countrylist.findIndex(s => s.country == this.searches[i].country) == -1) {
                    countrylist.push({ name: this.searches[i].country, count: 1 });
                } else {
                    var index = countrylist.findIndex(s => s.country == this.searches[i].country);
                    countrylist[index].count++;
                }
            }
            // get top 10 and lump others together
            countrylist.sort(helper_compareCount);
            var others = countrylist.slice(9, countrylist.length - 1).reduce((ac, iv) => ac.count + iv.count);
            countrylist = countrylist.splice(9, countrylist.length - 1);
            countrylist.push({ name: "Others", count: others });
            // operate on the chart

        }
        this.searches = [];
        // this.decisions = [];
        this.dateStart = "";
        this.dateEnd = "";
        this.totalsearches = this.searches.length;

        this.dailyStats = function (chart) {
            var count = { date: "", count: 0 };
            searchcount = [];
            for (i = 0; i < this.searches.length; i++) {
                if (searchcount.findIndex(s => s.date == this.searches[i].date) == -1) {
                    searchcount.push({ date: this.searches[i].date, count: 1 });
                } else {
                    var index = searchcount.findIndex(s => s.date == this.searches[i].date);
                    searchcount[index].count++;
                }
            }
            var graphlabels = [];
            var rawdata = [];
            searchcount.sort(helper_compareDate);
            searchcount.forEach(function (element) {
                graphlabels.push(element.date);
                rawdata.push(element.count);
            })
            console.log("inside Stats MAnager updating chart");
            console.log(graphlabels);
            console.log(rawdata);
            var data = {
                labels: graphlabels,
                datasets: [{
                    label: '# of Searches',
                    data: rawdata,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
            chart.data = data;
            chart.update();
        }
        /*
        this.searchsdecisions= function(chart){

        } */
    }
    function DataCon() {
        this.addFoodChain = function (name, info, contacts, imgpath = "defaultlogo\place") {
            let foodchain = { name: name, img: imgpath, info: info, contacts: contacts };
            console.log(foodchain);
            let afc = $.post('/addfoodchain', foodchain);
            afc.done((data) => {
                // work
                if (data.message === "saved") {
                    foodchainpanel.append(bootAlert("success", "New brand saved", alertModes.success));
                    _Data.getFoodChainsList(foodchainpanel);
                } else {
                    foodchainpanel.append(bootAlert("error", data.message, alertModes.error));
                }
            })
        }
        this.getFoodChainsList = function (panelelement) {
            console.log("FoodChainManager getting foodchains");
            let fcl = $.post('/foodchaindetails');
            fcl.done(function(data){
                htmlstring = '';
                console.log("...FoodChainManager received results");
                data.forEach(element => {
                    console.log(element);
                    htmlstring +=
                        "<div class='list-group-item'>" +
                        " <div> " +
                        " <div style='height:50px;width:50px;background-color:darkgrey'></div>" +
                        "</div>" +
                        "<div>Name: " + element.name + "</div>" +
                        "<div>Contact: " + element.contact + "</div>" +
                        "<div>Info:" + element.info + "</div>" +
                        "</div>";
                });
                console.log("...updating panel");
                panelelement.html(htmlstring);
            })
        }
        this.getFoodChainsLocations = function (LocaMan) {
            LocaMan.clearItems();
            fc = $.get('/alllocations');
            fc.done(function (data) {
                if (data == "error" || data.length == 0) {
                    LocaMan.showerror("error getting info from server");
                }
                for (i = 0; i < data.length; i++) {

                    LocaMan.add(new LocationItem(data[i]._id, data[i].name, data[i].address, data[i].loc.coordinates[1], data[i].loc.coordinates[0]));
                    LocaMan.refresh();

                }
                console.log("working");
            })
        }
        this.insertLocation = function (newlocationmodel, panel) {
            iL = $.post('/addfoodchainlocation', newlocationmodel);
            iL.done(function (data) {
                if (data == "error") {
                    panel.append(bootAlert("error", "error while saving to db", alertModes.error));
                }
                if (data == "ok") {
                    panel.append(bootAlert("success", "location saved successfully!!", alertModes.success));

                }
            })
        }
        this.removeLocation = function(locationid){
            var model = {locationid:locationid};
            console.log(model.locationid);
            var rl = $.post('/removelocation',model);
            rl.done((data)=>{
              alert(data.message);
                this.getFoodChainsLocations(_LocMan);
            })
        }
        this.getFoodChains = function (element) {
            var query = { start: 0, size: 100 };
            htmlstring = "";
            foodchains = $.get("/foodchains", query);
            foodchains.done(function (data) {
                if (data.length > 0) {

                    for (var i = 0; i < data.length; i++) {

                        htmlstring += "<option value='" + data[i]._id + "'>" + data[i].name + "</option>";
                    }


                } else {
                    return null;
                }
                element.html(htmlstring);
            })
        }

        this.getSearches = function (StatsManager) {
            searches = $.post("/allsearches");
            searches.done(function (data) {

                if (data.length > 0) {
                    var searchlist = [];

                    for (i = 0; i < data.length; i++) {
                        var city = "testcity";
                        var country = "testCountry";
                        var distance = data[i].distanceSet;
                        var resultlist = data[i].results;
                        var date = data[i].timestamp.substring(0, 10);
                        var latitude = data[i].location.coordinates[1];
                        var longitude = data[i].location.coordinates[0];
                        var searchItem = new SearchItem(data[i]._id, date, country, city, distance, resultlist, latitude, longitude);
                        // real-time address translation
                        /*  geocoder.geocode(
                              {
                                  'location': { lat: latitude, lng: longitude }
                              },
                              function (results, status) {
                                  if(results != null){
                                  searchItem.city = results[0].address_components[2].long_name;
                                  searchItem.country = results[0].address_components[5].long_name;
                                  }else{
                                      console.log(status);
                                      searchItem.city = "Unknown";
                                      searchItem.country = "Unkonwn";
                                  }
  
                                  searchlist.push(searchItem);console.log(searchItem.date);
                                  
                                  if(searchlist.length == data.length){
                                      StatsManager.searches = searchlist;
                                      StatsManager.dateStart = searchlist[0].date;
                                      StatsManager.dateEnd = searchlist[searchlist.length - 1].date;
                                  }
                              }) */

                        searchlist.push(searchItem); console.log(searchItem.date);

                    }

                    StatsManager.searches = searchlist;
                    StatsManager.dateStart = searchlist[0].date;
                    StatsManager.dateEnd = searchlist[searchlist.length - 1].date;

                    console.log(searchlist);

                }
            })
        }
    }
    /// helpers 
    function helper_compareCount(a, b) {
        return a.count > b.count ? 1 : -1;
    }
    function helper_compareDate(a, b) {
        return a.date > b.date ? 1 : -1;
    }
})