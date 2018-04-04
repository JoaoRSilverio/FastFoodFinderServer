webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_myproducts_myproducts_component__ = __webpack_require__("../../../../../src/app/components/myproducts/myproducts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_locations_locations_component__ = __webpack_require__("../../../../../src/app/components/locations/locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_add_add_component__ = __webpack_require__("../../../../../src/app/components/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_slider__ = __webpack_require__("../../../material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [{ path: "login", component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */] }, { path: 'register', component: __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__["a" /* RegisterComponent */] }, { path: 'explore', redirectTo: "/dashboard/explore", pathMatch: 'prefix' }, { path: 'dashboard/:action?', component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */] }, { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */] }, { path: '', redirectTo: "/login", pathMatch: 'prefix' }, { path: '**', redirectTo: "/dashboard", pathMatch: 'prefix' }];
//{path:'',redirectTo:"/login",pathMatch: 'prefix'},{path:'**',redirectTo:"/login",pathMatch: 'prefix'}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_myproducts_myproducts_component__["a" /* MyproductsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_locations_locations_component__["a" /* LocationsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_add_add_component__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_slider__["a" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddComponent = /** @class */ (function () {
    function AddComponent() {
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add',
            template: __webpack_require__("../../../../../src/app/components/add/add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  .nav{\n    font-family: 'Roboto Mono', monospace;\n    color:#000000;\n  }\n  .nav a{\n    \n  }\n  .tabtitle{\n   \n    font-family: 'Roboto Mono', monospace;\n    color:#000000;\n  }\n  \n\n</style>\n <div style=\"text-align: right;padding:10px;\" (click)=\"logout()\">\n   <div style=\"margin-right:15px;\">{{username}}</div><div class=\"btn btn-sm\">Logout</div></div>\n       <tabset>\n         \n         <tab>\n            <ng-template tabHeading>\n                <span class=\"tabtitle\">Places</span>\n              </ng-template>\n           <app-myproducts></app-myproducts>\n         </tab>\n         <tab  >\n            <ng-template tabHeading>\n                <span class=\"tabtitle\">Search</span>\n              </ng-template>\n           <app-search></app-search>\n         </tab>\n         <tab >\n            <ng-template tabHeading>\n                <span class=\"tabtitle\">History</span>\n              </ng-template>\n           <app-locations></app-locations>\n         </tab>\n         \n       </tabset>\n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        //  this.username = "teste"
        console.log("ran dashboard");
        this.username = this.dataService.LoggedUser.username;
        if (this.dataService.LoggedIn) {
            console.log("logged:" + this.dataService.LoggedIn);
        }
        else {
            console.log("not logged in redirecting...");
            this.router.navigate(['/']);
        }
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log("ran dashboard");
    };
    DashboardComponent.prototype.selectComponent = function (active) {
        console.log("ran function...");
        /*
        var containers = document.getElementsByClassName("componentcontainer");
        console.log(containers[0]);
        for(var i=0;i<containers.length;i++){
          console.log(containers[i].classList + " compare to " + active);
          
            if(containers[i].classList.contains(active)){
              console.log("passed the if");
              containers[i].setAttribute("height","1px");
              console.log("active "+containers[i].attributes["height"]);
              
            }else{
              containers[i].setAttribute("height","0px");
              console.log("inactive "+ containers[i].attributes["height"]);
            }
        }
        */
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        this.dataService.logout().subscribe(function (result) { console.log("// logged out --" + result); _this.router.navigate(['/']); }, function (err) {
            console.log(" error logging out" + err);
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/locations/locations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/locations/locations.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  .resultitem {\n    background-color: #ffffff;\n\n    border-bottom: darkgrey 1px solid;\n    margin-bottom: 30px;\n    padding-bottom: 5px;\n    color: #000000;\n    text-align: left;\n    display: block;\n    flex-flow: column;\n\n  }\n  .productname { \n    \n    padding: 5px;\n    padding-bottom: 0;\nfont-size: 1.5em;\ncolor: #111111;\n  }\n\n.productbrand{\n    padding-left: 5px;\n     font-size: 0.9em;\n     color:darkgray;\n    } \n  .location_product_holder{\n    border-top: 5px dashed #ffcc80;\n    ;\n    border-bottom: 15px solid #ffcc80;\n    display: flex;\n    flex-flow: column;\n    padding: 15px;\n    padding-top: 15px;\n    overflow-y: scroll;\n  }\n  .foodchainname {\n    \n    padding: 5px;\n    border-bottom:3px solid #ffcc80;\n    color: #000000;\n    border-radius: 5px 5px 0 0;\n    text-align: left;\n    font-size: 1.2em;\n\n  }\n</style>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-xs-12 col-md-8 col-md-offset-2 col-lg-offset-3\" class=\"text-center\">\n        <div class=\"descriptionbox\">\n            <i>All locations that you found so far.</i>\n          </div>\n          <div  *ngFor=\"let resultgroup of filteredResults\">\n              <div class=\"foodchainname\">{{resultgroup.name}}</div>\n            <ul class=\"list-group\">\n              <li *ngFor=\"let locs of resultgroup.locations\" class=\"list-group-item\">\n\n                  <div class=\"productlocation\">\n                      <div class=\"productlocation_address\">{{locs.address}} <a href=\"https://www.google.com/maps?saddr=My+Location&amp;daddr={{locs.loc.coordinates[1]}},{{locs.loc.coordinates[0]}}\" ><i class=\"material-icons gothere\">location_on</i> </a></div>\n                      <div class=\"productlocation_discoveredby\">{{locs.discoveredby.username}}</div>\n                      <div class=\"productlocation_confirmations\">{{locs.confirmations}}<span style=\"color:green\" class=\"glyphicon glyphicon-thumbs-up oklogo\"></span></div>\n                    </div>\n              </li>\n            </ul>\n          </div>\n          <!--\n      <div class=\"location_product_holder\">\n        <div id=\"locationresults\" [collapse]=\"!result.foodchain.isCollapsed\" class=\"panel-collapse collapse\" (collapsed)=\"collapsed($event)\"\n        (expanded)=\"expanded($event)\" >\n          <ul class=\"list-group\">\n            <li *ngFor=\"let locs of result.locations\" class=\"list-group-item\">\n                <div class=\"productlocation\">\n                    <div class=\"productlocation_address\">{{locs.address}} <i class=\"material-icons gothere\">location_on</i> </div>\n                    <div class=\"productlocation_discoveredby\">{{locs.discoveredby.username}}</div>\n                    <div class=\"productlocation_confirmations\">{{locs.confirmations}}<span style=\"color:green\" class=\"glyphicon glyphicon-thumbs-up oklogo\"></span></div>\n                  </div>\n            </li>\n            \n          </ul>\n        </div> -->\n\n\n\n\n      \n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/locations/locations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(data) {
        // this.foodchains = [];
        this.data = data;
        this.filteredResults = [];
        this.data.getLocations().subscribe(function (response) {
            console.log(this.filteredResults);
            response.forEach(function (element) {
                if (this.filteredResults.findIndex(function (s) { return s.name == element.name; }) == -1) {
                    this.filteredResults.push(new FilteredLocations(element.name, element));
                }
                else {
                    var index = this.filteredResults.findIndex(function (s) { return s.name == element.name; });
                    this.filteredResults[index].locations.push(element);
                }
            }.bind(this));
        }.bind(this));
    }
    LocationsComponent.prototype.ngOnInit = function () {
    };
    LocationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-locations',
            template: __webpack_require__("../../../../../src/app/components/locations/locations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/locations/locations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], LocationsComponent);
    return LocationsComponent;
}());

var FilteredLocations = /** @class */ (function () {
    function FilteredLocations(name, pl) {
        this.locations = [];
        this.locations.push(pl);
        this.name = name;
    }
    return FilteredLocations;
}());


/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <base href=\"/\">\n</head>\n<style>\n  .form-control{\n    font-family: 'Roboto Mono', monospace;\n    color: black;\n    margin-bottom: 15px;\n    background-color: #ffcc80;\n  }\n  .btn{\n    background-color: #ffcc80;\n    color:black;\n  }\n</style>\n<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-lg-6 col-xs-12 col-md-8 col-md-offset-2 col-lg-offset-3\" class=\"text-center \" >\n    <img [src]=\"loginImg\" width=\"200px\" class=\"\" height=\"auto\" >\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-10 col-xs-offset-1 col-lg-4 col-md-4 col-lg-offset-4 col-sm-4 col-sm-offset-4 col-md-offset-4 text-center\">\n   \n        <input class=\"form-control\" type=\"text\" #username name=\"username\" placeholder=\"Username\">\n        <input class=\"form-control\" #password type=\"password\" name=\"password\" placeholder=\"password\">\n        <!--<div class=\"btn btn-default\" (click)=\"loginFn()\">Login</div> -->\n      <input type=\"button\" class=\"btn btn-default btn-block\" (click)=\"login(username.value,password.value)\" value=\"Login\">\n     <p>or <a routerLink=\"/register\" >register</a></p>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        // username:string;
        //password:string;
        this.loginImg = './assets/images/foodexplorerlogo.png';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.dataService.login(username, password).subscribe(function (result) {
            _this.dataService.LoggedUser = result;
            _this.dataService.LoggedIn = true;
            console.log(result);
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            console.log("error while loging in;" + err);
        });
        //
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/myproducts/myproducts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/myproducts/myproducts.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  .scanbox {\n    border-top: 5px dashed #ffcc80;\n    ;\n    border-bottom: 15px solid #ffcc80;\n    display: flex;\n    flex-flow: column;\n    padding: 15px;\n    padding-top: 15px;\n    overflow-y: scroll;\n\n  }\n\n  .scan_product_name {\n    padding: 5px;\n\n    font-size: 1.5em;\n    color: #111111;\n  }\n\n  .scan_product {\n    border-bottom: darkgrey 1px solid;\n    padding: 5px;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    text-align: left;\n\n  }\n  .loadingBall{\n    margin: 0 auto;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    background-color: #ffcc80;\n  }\n\n  \n\n  /* items */\n\n  .tooglebox {\n    padding: 5px;\n    padding-top: 7px;\n  }\n  .loadingBox{\n    overflow: hidden;\n    width:100%;\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    height: 200px;\n  }\n</style>\n<div class=\"fluid-container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-xs-12 col-md-8 col-md-offset-2 col-lg-offset-3\" class=\"text-center\">\n      <div class=\"descriptionbox\">\n        <i>Here you can see items that Food Explorer is currently searching for you as you go around</i>\n      </div>\n      \n      <div class=\"scanbox\">\n          <div *ngIf=\"myscanlist.foodchains.length > 0; then results else noresults\"></div>\n        <ng-template #results>\n        <div  *ngFor=\"let options of myscanlist.foodchains \" class=\"scan_product\">\n          <div class=\"scan_product_name\">{{options.name}}</div>\n          <div class=\"tooglebox\">\n            <mat-slide-toggle [checked]=\"options.selected\" (change)=\"options.selected = !options.selected;toggleOption(options,options.selected)\"></mat-slide-toggle>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template #noresults>\n        <div class=\"loadingBox\"> \n        <div [@loading]='orange'  class=\"loadingBall\"></div>\n       <div [@loading]='red' style=\"background-color: red\"  class=\"loadingBall\"></div>\n      <div [@loading]='green' style=\"background-color: lightgreen\"  class=\"loadingBall\"></div>\n      </div>\n      </ng-template>\n      \n       \n     \n       \n\n        <!-- end of list -->\n      </div>\n    </div>\n  </div>\n  <!-- end of row -->\n</div>\n<!-- end of container -->"

/***/ }),

/***/ "../../../../../src/app/components/myproducts/myproducts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyproductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/TimerObservable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyproductsComponent = /** @class */ (function () {
    function MyproductsComponent(data) {
        var _this = this;
        this.data = data;
        this.orange = "down";
        this.green = "down";
        this.red = "down";
        console.log("ran construct");
        this.myscanlist = new __WEBPACK_IMPORTED_MODULE_1__services_data_service__["b" /* ScanList */]();
        this.myscanlist.foodchains = [];
        this.data.userFoodChains().subscribe(function (list) {
            _this.myscanlist = list;
            _this.redSub.unsubscribe();
            _this.orangeSub.unsubscribe();
            _this.greenSub.unsubscribe();
            //  console.log(this.myscanlist.foodchains[0]);
        });
    }
    MyproductsComponent.prototype.ngOnInit = function () {
        var orangetimer = __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 600);
        var redtimer = __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 800);
        var greentimer = __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 400);
        this.orangeSub = orangetimer.subscribe(function () {
            if (this.orange == "up") {
                this.orange = "disapear";
            }
            else {
                this.orange == "down" ? this.orange = "up" : this.orange = "down";
            }
        }.bind(this));
        this.redSub = redtimer.subscribe(function () {
            if (this.red == "up") {
                this.red = "disapear";
            }
            else {
                this.red == "down" ? this.red = "up" : this.red = "down";
            }
        }.bind(this));
        this.greenSub = greentimer.subscribe(function () {
            if (this.green == "up") {
                this.green = "disapear";
            }
            else {
                this.green == "down" ? this.green = "up" : this.green = "down";
            }
        }.bind(this));
        console.log("ran init");
    };
    MyproductsComponent.prototype.toggleOption = function (foodchain, selected) {
        var index = this.myscanlist.foodchains.indexOf(foodchain);
        console.log(index);
        console.log("according to model " + this.myscanlist.foodchains[index].id + " is " + this.myscanlist.foodchains[index].selected);
        console.log("fn input: " + foodchain.id + " " + selected);
        if (selected) {
            this.data.addFoodChain(foodchain.id).subscribe(function (result) { return console.log(result); });
        }
        else {
            this.data.removeFoodChain(foodchain.id).subscribe(function (result) { return console.log(result); });
        }
    };
    MyproductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-myproducts',
            template: __webpack_require__("../../../../../src/app/components/myproducts/myproducts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/myproducts/myproducts.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('loading', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('down', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        opacity: '1',
                        transform: ' scale(1) '
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('disapear', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        opacity: '0',
                        transform: 'scale(8) translateY(+50px)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('up', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        opacity: '0',
                        transform: 'translateY(-300px) scale(0.5)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('down => up', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('250ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('disapear => down', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in'))
                ])]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], MyproductsComponent);
    return MyproductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div style=\"height:100vh;\" class=\"text-center col-sm-12 col-xs-12 col-lg-offset-4 col-lg-4\">\n        \n           \n      <form method=\"POST\" action=\"/register\" style=\"margin-top:60px;\" >\n     \n      <mat-form-field class=\"col-xs-12 col-sm-12\" >\n      <input matInput  name=\"username\"  maxlength=\"12\" type=\"text\" placeholder=\"insert username\">\n     \n      </mat-form-field>\n\n      <mat-form-field class=\"col-xs-12 col-sm-12\" >\n          <input matInput  name=\"email\" maxlength=\"12\" type=\"text\" placeholder=\"insert email\">\n         \n          </mat-form-field>\n  \n    <mat-form-field class=\"col-xs-12 col-sm-12\">\n    <input matInput placeholder=\"Enter your password\" name=\"password\" [type]=\"hide ? 'password' : 'text'\">\n    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n  \n  </mat-form-field>\n <div>\n    <input class=\"btn-default btn-primary btn-block\" style=\"padding:15px;border-radius:5px;font-size:1.5em;margin-top:30px;\" type=\"submit\" value=\"register\">\n  </div>\n  \n  </form>\n  \n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.hide = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "\n<style>\n  /*\n   holders\n  */\n\n  .resultsholder {\n    height: 80vh;\n    font-family: 'Roboto Mono', monospace;\n    overflow-y: scroll;\n    padding-top: 15px;\n    margin-top: 10px;\n    background-color: #ffcc80;\n    display: flex;\n    flex-flow: column;\n    scroll-behavior: smooth;\n    scrollbar-base-color: #e0e0e0;\n    scrollbar-highlight-color: #e0e0e0;\n    scrollbar-darkshadow-color: #e0e0e0;\n  }\n\n  .resultitem {\n    background-color: #ffffff;\n    border-radius:0 12px 0 0 ;\n    border: #c67100;\n    margin-bottom: 30px;\n    padding-bottom: 5px;\n    color: #000000;\n    text-align: left;\n    display: block;\n    flex-flow: column;\n\n  }\n\n  .productlocatioholder {\n    text-align: left;\n    display: flex;\n    flex-flow: column;\n  }\n\n  .productlocation {\n    text-align: left;\n    display: flex;\n    flex-flow: column;\n    font-size: 0.8em;\n  }\n\n  .tagholder {\n    padding-bottom: 15px;\n    padding-left: 15px;\n    margin-top: 5px;\n    text-align: left;\n    display: flex;\n    flex-flow: row nowrap;\n\n  }\n\n  /* items */\n\n  .productname {\n    \n    padding: 5px;\n    border-bottom:3px solid #ffcc80;\n    color: #000000;\n    border-radius: 5px 5px 0 0;\n    text-align: left;\n    font-size: 1.2em;\n\n  }\n\n  .productbrand {\n\n    padding: 5px;\n    padding-left: 15px;\n    font-size: 0.9em;\n  }\n\n  .productlocation_address {\n    overflow-x: scroll;\n    padding: 5px;\n    padding-left: 15px;\n    padding-bottom: 0;\n    color: darkgrey;\n  }\n\n  .productlocation_discoveredby {\n    padding: 5px;\n    padding-left: 15px;\n\n    color: lightseagreen;\n  }\n\n  .productlocation_confirmations {\n    font-size: 1em;\n    padding: 5px;\n\n    padding-left: 15px;\n    color: black;\n  }\n\n  .tags {\n    padding: 5px;\n\n    font-size: 0.6em;\n    color: black;\n    font-weight: 900;\n    background-color: lightgray;\n\n\n    margin: 0 5px 0 0px;\n  }\n\n  /* titles  */\n\n  .locationtitle {\n    font-size: 0.7em;\n\n  }\n \n\n  /* logos */\n\n  .productbrand_icon {\n    margin-right: 5px;\n    color: #870000;\n  }\n\n  .gothere {\n    font-size: 1.2em;\n    margin-left: 5px;\n    color: lightseagreen;\n  }\n\n  .oklogo {\n    font-size: 1.2em;\n    margin-left: 5px;\n  }\n  .loadingBall{\n    font-family: 'Tahoma', cursive;\n    margin: 0 auto;\n    border-radius: 50%;\n    padding-top: 5%;\n    width: 60px;\n    height: 60px;\n    background-color: white;\n  }\n  .loadingBox{\n    overflow: hidden;\n    width:100%;\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    height: 100%;\n  }\n  /* bootstrap overrides*/\n\n  .panel-heading {}\n</style>\n <div class=\"container-fluid\"  >\n    <div style=\"margin-top:15px;\" class=\"row\">\n   <!-- <div  class=\"col-lg-4 col-lg-offset-2 col-xs-9 col-md-4 col-offset-4 col-sm-10 \" >\n      <input class=\"form-control\" type=\"text\"  #searchterm name=\"searchterm\" placeholder=\"search here\">\n    </div>\n  -->\n    \n    <div class=\"col-xs-6  col-lg-4\" style=\"padding-left:7px;display:flex;flex-flow:row nowrap;\">\n      <mat-slider #kmslider style=\"width:90%;\" value=15 max=\"30\" step=\"1\" thumbLabel=true ></mat-slider><div style=\"width:10%;padding-top:10px;\">Km</div>\n    </div>\n    <div class=\"col-md-2 col-lg-2 col-sm-2 col-xs-offset-1 col-xs-5\">\n      <div class=\"form-control btn btn-default\"(click)=\"scan(kmslider.value)\" style=\"color:#000000;\">Scan</div>\n    </div>\n    </div>\n    \n      <div class=\"row\"> \n    \n        <div style=\"display:flex;flex-flow:column;\" class=\"col-lg-6 col-xs-12 col-md-8 col-md-offset-2 col-lg-offset-3 resultsholder\">\n\n      <div *ngIf=\"searchresults.length > 0;then results else noresults\"></div>\n      <ng-template #results>\n      <div  *ngFor=\"let result of searchresults;let i = index\" class=\"resultitem\">\n        <div class=\"productname\">{{result.foodchain.name}}</div>\n        <!--<div class=\"productbrand\"><span class=\"productbrand_icon\"><b>-</b></span>{{result.product.brand}}</div>-->\n        <!--<div class=\"tagholder\">\n\n            <div *ngIf=\"result.product.tags !== 'undefined'\" >\n              <div *ngFor=\"let tag of result.product.tags\" class=\"tags\">{{tag.value}}</div>\n            </div>\n          </div>\n        -->        <!-- location -->\n        <div class=\"panel-group\">\n          <div  class=\"panel-heading text-center\">\n            <div class=\"panel-title\">\n                <div class=\"btn btn-default locationtitle\" (click)=\"result.foodchain.isCollapsed = !result.foodchain.isCollapsed\" data-toggle=\"collapse\" href=\"#locationresults\">Locations <span style=\"margin-left:5px;border-radius:50%;padding:0 3px 0 3px;background-color:lightseagreen ;color:white;\">{{result.locations.length}}</span></div>\n                </div>\n          \n            </div>\n            <div id=\"locationresults\" [collapse]=\"!result.foodchain.isCollapsed\" class=\"panel-collapse collapse\" (collapsed)=\"collapsed($event)\"\n            (expanded)=\"expanded($event)\" >\n              <ul class=\"list-group\">\n                <li *ngFor=\"let locs of result.locations\" class=\"list-group-item\">\n                    <div class=\"productlocation\">\n                        <div class=\"productlocation_address\">{{locs.address}} <a href=\"https://www.google.com/maps?saddr=My+Location&amp;daddr={{locs.loc.coordinates[1]}},{{locs.loc.coordinates[0]}}\" ><i class=\"material-icons gothere\">location_on</i> </a> </div>\n                        <div class=\"productlocation_discoveredby\">{{locs.discoveredby.username}}</div>\n                        <div class=\"productlocation_confirmations\">{{locs.confirmations}}<span style=\"color:green\" class=\"glyphicon glyphicon-thumbs-up oklogo\"></span></div>\n                      </div>\n                </li>\n                \n              </ul>\n            </div>\n        \n        </div>\n        \n       <!-- end of locations --> \n    </div>\n  </ng-template>\n  <ng-template #noresults>\n    \n      <div class=\"loadingBox\"> \n          <div [@loading]='orange'style=\"color:black\"  class=\"loadingBall text-center\">Fast</div>\n         <div [@loading]='red' style=\"color:white;background-color: red\"  class=\"loadingBall text-center\">Food</div>\n        <div [@loading]='green' style=\"color:black;background-color: lightgreen\"  class=\"loadingBall text-center\">Finder</div>\n        </div>\n  </ng-template>      \n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* unused harmony export ResultItem */
/* unused harmony export ShopEntity */
/* unused harmony export ProductLocation */
/* unused harmony export GeoJson */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/TimerObservable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(data) {
        this.data = data;
        this.orange = "down";
        this.green = "down";
        this.red = "down";
        this.searchresults = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("got coordinates");
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
            console.log("coords: " + position);
        }, function (error) {
            alert("Location Services Unavailable");
        });
    };
    SearchComponent.prototype.subscribeTo = function (productid) {
        console.log("productid:" + productid);
        this.data.subscribeTo(productid).subscribe(function (results) {
            console.log("subscribed to " + productid);
        }, function (err) {
            console.log("couldnt subscribe");
        });
    };
    SearchComponent.prototype.scan = function (distance) {
        var _this = this;
        ///////////////// ANIMATED LOADER ///////////
        var orangetimer = __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 600);
        var redtimer = __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 800);
        var greentimer = __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 400);
        this.orangeSub = orangetimer.subscribe(function () {
            if (this.orange == "up") {
                this.orange = "disapear";
            }
            else {
                this.orange == "down" ? this.orange = "up" : this.orange = "down";
            }
        }.bind(this));
        this.redSub = redtimer.subscribe(function () {
            if (this.red == "up") {
                this.red = "disapear";
            }
            else {
                this.red == "down" ? this.red = "up" : this.red = "down";
            }
        }.bind(this));
        this.greenSub = greentimer.subscribe(function () {
            if (this.green == "up") {
                this.green = "disapear";
            }
            else {
                this.green == "down" ? this.green = "up" : this.green = "down";
            }
        }.bind(this));
        ////////////////////////////////////////// 
        setInterval(function () { console.log(this.searchresults); }, 3000);
        console.log("started searching  @" + this.latitude + "&" + this.longitude + "in a " + distance + " radius");
        this.data.searchProduct(this.latitude, this.longitude, distance)
            .subscribe(function (results) {
            console.log("got results result.length:" + results.length);
            //console.log(results[0]);
            _this.searchresults = results;
            _this.redSub.unsubscribe();
            _this.orangeSub.unsubscribe();
            _this.greenSub.unsubscribe();
            // console.log(this.searchresults[0]);
            //console.log(this.searchresults[0].product.name);
        }, function (err) {
            console.log("error: " + err);
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('loading', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('down', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        opacity: '1',
                        transform: ' scale(1) '
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('disapear', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        opacity: '0',
                        transform: 'scale(8) translateY(+50px)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('up', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        opacity: '0',
                        transform: 'translateY(-300px) scale(0.5)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('down => up', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('250ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('disapear => down', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in'))
                ])]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], SearchComponent);
    return SearchComponent;
}());

var ResultItem = /** @class */ (function () {
    function ResultItem() {
    }
    return ResultItem;
}());

var ShopEntity = /** @class */ (function () {
    function ShopEntity() {
    }
    return ShopEntity;
}());

var ProductLocation = /** @class */ (function () {
    function ProductLocation() {
    }
    return ProductLocation;
}());

var GeoJson = /** @class */ (function () {
    function GeoJson() {
    }
    return GeoJson;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScanList; });
/* unused harmony export DisplayElement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        console.log("connected");
        this.LoggedUser = { name: "Hard Coded", activefoodchains: ["5a8ab229c80fcd15e70901a9", "5a8ab27ec80fcd15e70901aa"] };
    }
    DataService.prototype.searchProduct = function (latitude, longitude, distance) {
        console.log("connecting and searching");
        var foodchainquery = "";
        this.LoggedUser.activefoodchains.forEach(function (element) {
            foodchainquery += "foodchains[]=" + element + "&";
        });
        return this.http.get("/geosearch?" + foodchainquery + "latitude=" + latitude + "&longitude=" + longitude + "&distance=" + distance)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.subscribeTo = function (productid) {
        return this.http.get("/subscribe?productid=" + productid).map(function (response) {
            response.json();
        });
    };
    DataService.prototype.login = function (username, password) {
        return this.http.post("/login", { username: username, password: password }).map(function (response) { return response.json(); });
    };
    DataService.prototype.getLocations = function () {
        return this.http.get('/locations').map(function (response) {
            return response.json();
        });
    };
    DataService.prototype.userFoodChains = function () {
        return this.http.get("/scanlist").map(function (response) { return response.json(); }, function (err) { return console.log("error getting myscan"); });
    };
    DataService.prototype.addFoodChain = function (foodchainid) {
        return this.http.post("/subscribe", { fcid: foodchainid }).map(function (response) { return response.json(); }, function (err) { return console.log("error adding foodchain to scanner"); });
    };
    DataService.prototype.removeFoodChain = function (foodchainid) {
        var foodchain = { fcid: foodchainid };
        return this.http.post("/unsubscribe", { fcid: foodchainid }).map(function (response) { return response.json(); });
    };
    DataService.prototype.logout = function () {
        return this.http.post("/logout", {}).map(function (response) {
            response.json();
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());

var ScanList = /** @class */ (function () {
    function ScanList() {
    }
    return ScanList;
}());

var DisplayElement = /** @class */ (function () {
    function DisplayElement() {
    }
    return DisplayElement;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map