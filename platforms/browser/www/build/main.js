webpackJsonp([8],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetHomeDestinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SetHomeDestinoPage = (function () {
    function SetHomeDestinoPage(geolocation, loadingCtrl, nav, nativeGeocoder) {
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.nativeGeocoder = nativeGeocoder;
    }
    SetHomeDestinoPage.prototype.ionViewDidLoad = function () {
        this.destino_LatLng = { lat: 0.3581583, lng: -78.112088 };
        this.destino_direccion = 'Universidad Tecnica del Norte';
        this.loadMapa();
        this.reverse_geo_application();
    };
    SetHomeDestinoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setInterval(function () {
            _this.direccion;
        }, 1000);
    };
    SetHomeDestinoPage.prototype.goToViewRoute = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__home_c_view_ruta_home_c_view_ruta__["a" /* HomeCViewRutaPage */], {
            origen_LatLngnvp: this.origen_LatLng,
            destino_LatLngnvp: this.destino_LatLng,
            origen_direccionnvp: this.origen_direccion,
            destino_direccionnvp: this.destino_direccion
        });
    };
    SetHomeDestinoPage.prototype.loadMapa = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, myLatLng, mapOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create();
                        loading.present();
                        return [4 /*yield*/, this.getLocation()];
                    case 1:
                        myLatLng = _a.sent();
                        mapOptions = {
                            camera: {
                                target: {
                                    lat: myLatLng.lat,
                                    lng: myLatLng.lng
                                },
                                zoom: 18
                            }
                        };
                        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas4', mapOptions); //aqui le asigno el mapa este mapa se ve 
                        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
                            loading.dismiss();
                            _this.camera_position();
                            console.log(_this.direccion);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SetHomeDestinoPage.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        rta = _a.sent();
                        return [2 /*return*/, {
                                lat: rta.coords.latitude,
                                lng: rta.coords.longitude
                            }];
                }
            });
        });
    };
    SetHomeDestinoPage.prototype.camera_position = function () {
        var _this = this;
        this.map.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].CAMERA_MOVE_END).subscribe(function (val) {
            var target = val[0].target;
            //  let target=this.map.getCameraTarget();
            var latlng = {
                lat: target.lat,
                lng: target.lng
            };
            _this.r_g_no_native(latlng);
            _this.origen_LatLng = latlng;
        });
    };
    SetHomeDestinoPage.prototype.r_g_no_native = function (latlng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.direccion = results[0].formatted_address;
                    _this.origen_direccion = _this.direccion;
                }
            }
        });
    };
    SetHomeDestinoPage.prototype.reverse_geo_application = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.r_g_no_native;
                        return [4 /*yield*/, this.getLocation()];
                    case 1:
                        _a.apply(this, [_c.sent()]);
                        _b = this;
                        return [4 /*yield*/, this.getLocation()];
                    case 2:
                        _b.origen_LatLng = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SetHomeDestinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-set-home-destino',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\set-home-destino\set-home-destino.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Direcci&oacute;n de casa</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="goToViewRoute()">\n\n        OK\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div id="map_canvas4">\n\n    <ion-card>\n\n      <ion-item>\n\n        <ion-icon name="map" color="iconos" item-left></ion-icon>\n\n        {{direccion}}\n\n      </ion-item>\n\n    </ion-card>\n\n    <img src="assets/imgs/marker.png" id="centerMarkerImg">\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\set-home-destino\set-home-destino.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], SetHomeDestinoPage);
    return SetHomeDestinoPage;
}());

//# sourceMappingURL=set-home-destino.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetMapDestinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SetMapDestinoPage = (function () {
    function SetMapDestinoPage(geolocation, loadingCtrl, nav) {
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
    }
    SetMapDestinoPage.prototype.ionViewDidLoad = function () {
        this.destino_LatLng = { lat: 0.3581583, lng: -78.112088 };
        this.destino_direccion = 'Universidad Tecnica del Norte';
        this.loadMapa();
        this.reverse_geo_application();
    };
    SetMapDestinoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setInterval(function () {
            _this.direccion;
        }, 1000);
    };
    SetMapDestinoPage.prototype.goToViewRoute = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__home_c_view_ruta_home_c_view_ruta__["a" /* HomeCViewRutaPage */], {
            origen_LatLngnvp: this.origen_LatLng,
            destino_LatLngnvp: this.destino_LatLng,
            origen_direccionnvp: this.origen_direccion,
            destino_direccionnvp: this.destino_direccion
        });
    };
    SetMapDestinoPage.prototype.loadMapa = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, myLatLng, mapOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create();
                        loading.present();
                        return [4 /*yield*/, this.getLocation()];
                    case 1:
                        myLatLng = _a.sent();
                        mapOptions = {
                            camera: {
                                target: {
                                    lat: myLatLng.lat,
                                    lng: myLatLng.lng
                                },
                                zoom: 18
                            }
                        };
                        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas5', mapOptions); //aqui le asigno el mapa este mapa se ve 
                        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
                            loading.dismiss();
                            _this.camera_position();
                            console.log(_this.direccion);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SetMapDestinoPage.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        rta = _a.sent();
                        return [2 /*return*/, {
                                lat: rta.coords.latitude,
                                lng: rta.coords.longitude
                            }];
                }
            });
        });
    };
    SetMapDestinoPage.prototype.camera_position = function () {
        var _this = this;
        this.map.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].CAMERA_MOVE_END).subscribe(function (val) {
            var target = val[0].target;
            //  let target=this.map.getCameraTarget();
            var latlng = {
                lat: target.lat,
                lng: target.lng
            };
            _this.r_g_no_native(latlng);
            _this.origen_LatLng = latlng;
        });
    };
    SetMapDestinoPage.prototype.r_g_no_native = function (latlng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.direccion = results[0].formatted_address;
                    _this.origen_direccion = _this.direccion;
                }
            }
        });
    };
    SetMapDestinoPage.prototype.reverse_geo_application = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.r_g_no_native;
                        return [4 /*yield*/, this.getLocation()];
                    case 1:
                        _a.apply(this, [_c.sent()]);
                        _b = this;
                        return [4 /*yield*/, this.getLocation()];
                    case 2:
                        _b.origen_LatLng = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SetMapDestinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-set-map-destino',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\set-map-destino\set-map-destino.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="danger">\n\n    <ion-title>Seleccionar origen</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="goToViewRoute()">\n\n        OK\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div id="map_canvas5">\n\n    <ion-card>\n\n      <ion-item>\n\n        <ion-icon name="map" color="iconos" item-left></ion-icon>\n\n        {{direccion}}\n\n      </ion-item>\n\n    </ion-card>\n\n    <img src="assets/imgs/marker.png" id="centerMarkerImg">\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\set-map-destino\set-map-destino.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], SetMapDestinoPage);
    return SetMapDestinoPage;
}());

//# sourceMappingURL=set-map-destino.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SetHomePage = (function () {
    function SetHomePage(geolocation, loadingCtrl, nav, nativeGeocoder) {
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.nativeGeocoder = nativeGeocoder;
    }
    SetHomePage.prototype.ionViewDidLoad = function () {
        this.origen_LatLng = { lat: 0.3581583, lng: -78.112088 };
        this.origen_direccion = 'Universidad Tecnica del Norte';
        this.loadMapa();
        this.reverse_geo_application();
    };
    SetHomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setInterval(function () {
            _this.direccion;
        }, 1000);
    };
    SetHomePage.prototype.goToViewRoute = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__home_c_view_ruta_home_c_view_ruta__["a" /* HomeCViewRutaPage */], {
            origen_LatLngnvp: this.origen_LatLng,
            destino_LatLngnvp: this.destino_LatLng,
            origen_direccionnvp: this.origen_direccion,
            destino_direccionnvp: this.destino_direccion
        });
    };
    SetHomePage.prototype.loadMapa = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, mapOptions, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        loading = this.loadingCtrl.create();
                        loading.present();
                        _a = {};
                        _b = {};
                        return [4 /*yield*/, this.getLocation()];
                    case 1:
                        mapOptions = (_a.camera = (_b.target = _c.sent(),
                            _b.zoom = 18,
                            _b),
                            _a);
                        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas3', mapOptions);
                        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
                            loading.dismiss();
                            _this.camera_position();
                            console.log(_this.direccion);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SetHomePage.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        rta = _a.sent();
                        return [2 /*return*/, {
                                lat: rta.coords.latitude,
                                lng: rta.coords.longitude
                            }];
                }
            });
        });
    };
    SetHomePage.prototype.camera_position = function () {
        var _this = this;
        this.map.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].CAMERA_MOVE_END).subscribe(function (val) {
            var target = val[0].target;
            //  let target=this.map.getCameraTarget();
            var latlng = {
                lat: target.lat,
                lng: target.lng
            };
            _this.r_g_no_native(latlng);
            _this.destino_LatLng = latlng;
        });
    };
    SetHomePage.prototype.r_g_no_native = function (latlng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.direccion = results[0].formatted_address;
                    _this.destino_direccion = _this.direccion;
                }
            }
        });
    };
    SetHomePage.prototype.reverse_geo_application = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.r_g_no_native;
                        return [4 /*yield*/, this.getLocation()];
                    case 1:
                        _a.apply(this, [_c.sent()]);
                        _b = this;
                        return [4 /*yield*/, this.getLocation()];
                    case 2:
                        _b.destino_LatLng = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SetHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-set-home',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\set-home_origen\set-home.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-title>Direcci&oacute;n de casa</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="goToViewRoute()" >\n\n        OK\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div id="map_canvas3">\n\n    <ion-card>\n\n      <ion-item>\n\n        <ion-icon name="map" color="iconos" item-left></ion-icon>\n\n        {{direccion}}\n\n      </ion-item>\n\n    </ion-card>\n\n    <img src="assets/imgs/marker.png" id="centerMarkerImg">\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\set-home_origen\set-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], SetHomePage);
    return SetHomePage;
}());

//# sourceMappingURL=set-home.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetMapOrigenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SetMapOrigenPage = (function () {
    function SetMapOrigenPage(geolocation, loadingCtrl, nav) {
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
    }
    SetMapOrigenPage.prototype.ionViewDidLoad = function () {
        this.origen_LatLng = { lat: 0.3581583, lng: -78.112088 };
        this.origen_direccion = 'Universidad Tecnica del Norte';
        this.loadMapa();
        this.reverse_geo_application();
    };
    SetMapOrigenPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setInterval(function () {
            _this.direccion;
        }, 1000);
    };
    SetMapOrigenPage.prototype.loadMapa = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, myLatLng, mapOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create();
                        loading.present();
                        return [4 /*yield*/, this.getLocation()];
                    case 1:
                        myLatLng = _a.sent();
                        mapOptions = {
                            camera: {
                                target: {
                                    lat: myLatLng.lat,
                                    lng: myLatLng.lng
                                },
                                zoom: 18
                            }
                        };
                        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas6', mapOptions);
                        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
                            loading.dismiss();
                            _this.camera_position();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SetMapOrigenPage.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        rta = _a.sent();
                        return [2 /*return*/, {
                                lat: rta.coords.latitude,
                                lng: rta.coords.longitude
                            }];
                }
            });
        });
    };
    SetMapOrigenPage.prototype.camera_position = function () {
        var _this = this;
        this.map.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].CAMERA_MOVE_END).subscribe(function (val) {
            var target = val[0].target;
            var latlng = {
                lat: target.lat,
                lng: target.lng
            };
            _this.r_g_no_native(latlng);
            _this.destino_LatLng = latlng;
        });
    };
    SetMapOrigenPage.prototype.r_g_no_native = function (latlng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.direccion = results[0].formatted_address;
                    _this.destino_direccion = _this.direccion;
                }
            }
        });
    };
    SetMapOrigenPage.prototype.reverse_geo_application = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.r_g_no_native;
                        return [4 /*yield*/, this.getLocation()];
                    case 1:
                        _a.apply(this, [_c.sent()]);
                        _b = this;
                        return [4 /*yield*/, this.getLocation()];
                    case 2:
                        _b.destino_LatLng = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SetMapOrigenPage.prototype.goToViewRoute = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__home_c_view_ruta_home_c_view_ruta__["a" /* HomeCViewRutaPage */], {
            origen_LatLngnvp: this.origen_LatLng,
            destino_LatLngnvp: this.destino_LatLng,
            origen_direccionnvp: this.origen_direccion,
            destino_direccionnvp: this.destino_direccion
        });
    };
    SetMapOrigenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-set-map-origen',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\set-map-origen\set-map-origen.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-title>Seleccione destino</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="goToViewRoute()">\n\n        OK\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div id="map_canvas6">\n\n    <ion-card>\n\n      <ion-item>\n\n        <ion-icon name="map" color="iconos" item-left></ion-icon>\n\n        {{direccion}}\n\n      </ion-item>\n\n    </ion-card>\n\n    <img src="assets/imgs/marker.png" id="centerMarkerImg">\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\set-map-origen\set-map-origen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], SetMapOrigenPage);
    return SetMapOrigenPage;
}());

//# sourceMappingURL=set-map-origen.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home-c-view-ruta/home-c-view-ruta.module": [
		283,
		7
	],
	"../pages/set-home-destino/set-home-destino.module": [
		285,
		6
	],
	"../pages/set-home_origen/set-home.module": [
		284,
		5
	],
	"../pages/set-map-destino/set-map-destino.module": [
		286,
		4
	],
	"../pages/set-map-origen/set-map-origen.module": [
		287,
		3
	],
	"../pages/viajes-destino/viajes-destino.module": [
		288,
		2
	],
	"../pages/viajes-origen-destino/viajes-origen-destino.module": [
		289,
		1
	],
	"../pages/viajes-origen/viajes-origen.module": [
		290,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viajes_origen_destino_viajes_origen_destino__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var HomePage = (function () {
    function HomePage(geolocation, loadingCtrl, nav) {
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMapa();
    };
    HomePage.prototype.loadMapa = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, myLatLng, mapOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create();
                        loading.present();
                        return [4 /*yield*/, this.getLocation()];
                    case 1:
                        myLatLng = _a.sent();
                        mapOptions = {
                            camera: {
                                target: {
                                    lat: myLatLng.lat,
                                    lng: myLatLng.lng
                                },
                                zoom: 18
                            }
                        };
                        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas2', mapOptions);
                        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
                            loading.dismiss();
                            //this.addMarker(myLatLng.lat, myLatLng.lng);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.targetMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myLatLng;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getLocation()];
                    case 1:
                        myLatLng = _a.sent();
                        this.map.setCameraTarget(myLatLng);
                        this.map.setCameraZoom(18);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        rta = _a.sent();
                        return [2 /*return*/, {
                                lat: rta.coords.latitude,
                                lng: rta.coords.longitude
                            }];
                }
            });
        });
    };
    HomePage.prototype.addMarker = function (lat, lng) {
        var marker = this.map.addMarkerSync({
            position: {
                lat: lat,
                lng: lng
            }
        });
    };
    HomePage.prototype.optionOrigenDestino = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_1__viajes_origen_destino_viajes_origen_destino__["a" /* ViajesOrigenDestinoPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\home\home.html"*/'<ion-header>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div id="map_canvas2">\n\n    <ion-card>\n\n      <ion-item (click)="optionOrigenDestino()">\n\n        <ion-icon name="search" color="iconos" item-left></ion-icon>\n\n        <span>¿A d&oacute;nde te diriges?</span>\n\n      </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-fab right bottom>\n\n      <button (click)="targetMap()" color="white" ion-fab>\n\n        <ion-icon name="navigate" color="primary"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_viajes_origen_destino_viajes_origen_destino__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_viajes_origen_viajes_origen__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_viajes_destino_viajes_destino__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_set_home_origen_set_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_set_map_origen_set_map_origen__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_set_home_destino_set_home_destino__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_set_map_destino_set_map_destino__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_native_geocoder__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_viajes_origen_destino_viajes_origen_destino__["a" /* ViajesOrigenDestinoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_viajes_origen_viajes_origen__["a" /* ViajesOrigenPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_viajes_destino_viajes_destino__["a" /* ViajesDestinoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_set_home_origen_set_home__["a" /* SetHomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_set_map_origen_set_map_origen__["a" /* SetMapOrigenPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_set_home_destino_set_home_destino__["a" /* SetHomeDestinoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_set_map_destino_set_map_destino__["a" /* SetMapDestinoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_c_view_ruta_home_c_view_ruta__["a" /* HomeCViewRutaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home-c-view-ruta/home-c-view-ruta.module#HomeCViewRutaPageModule', name: 'HomeCViewRutaPage', segment: 'home-c-view-ruta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set-home_origen/set-home.module#SetHomePageModule', name: 'SetHomePage', segment: 'set-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set-home-destino/set-home-destino.module#SetHomeDestinoPageModule', name: 'SetHomeDestinoPage', segment: 'set-home-destino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set-map-destino/set-map-destino.module#SetMapDestinoPageModule', name: 'SetMapDestinoPage', segment: 'set-map-destino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set-map-origen/set-map-origen.module#SetMapOrigenPageModule', name: 'SetMapOrigenPage', segment: 'set-map-origen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viajes-destino/viajes-destino.module#ViajesDestinoPageModule', name: 'ViajesDestinoPage', segment: 'viajes-destino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viajes-origen-destino/viajes-origen-destino.module#ViajesOrigenDestinoPageModule', name: 'ViajesOrigenDestinoPage', segment: 'viajes-origen-destino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viajes-origen/viajes-origen.module#ViajesOrigenPageModule', name: 'ViajesOrigenPage', segment: 'viajes-origen', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_viajes_origen_destino_viajes_origen_destino__["a" /* ViajesOrigenDestinoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_viajes_origen_viajes_origen__["a" /* ViajesOrigenPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_viajes_destino_viajes_destino__["a" /* ViajesDestinoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_set_home_origen_set_home__["a" /* SetHomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_set_map_origen_set_map_origen__["a" /* SetMapOrigenPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_set_home_destino_set_home_destino__["a" /* SetHomeDestinoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_set_map_destino_set_map_destino__["a" /* SetMapDestinoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_c_view_ruta_home_c_view_ruta__["a" /* HomeCViewRutaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeCViewRutaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viajes_destino_viajes_destino__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viajes_origen_viajes_origen__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viajes_origen_destino_viajes_origen_destino__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeCViewRutaPage = (function () {
    function HomeCViewRutaPage(loadingCtrl, nav, navparams) {
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.navparams = navparams;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.origen_LatLng = navparams.get('origen_LatLngnvp');
        this.destino_LatLng = navparams.get('destino_LatLngnvp');
        this.destino_direccion = navparams.get('destino_direccionnvp');
        this.origen_direccion = navparams.get('origen_direccionnvp');
    }
    HomeCViewRutaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeCViewRutaPage');
        this.initMapa();
    };
    HomeCViewRutaPage.prototype.initMapa = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 7,
            disableDefaultUI: true
        });
        //this.map = GoogleMaps.create(this.mapElement.nativeElement); 
        this.directionsDisplay.setMap(this.map);
        this.calculateAndDisplayRoute();
    };
    HomeCViewRutaPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.directionsService.route({
            origin: this.origen_LatLng,
            destination: this.destino_LatLng,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    HomeCViewRutaPage.prototype.goToutnDestino = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__viajes_destino_viajes_destino__["a" /* ViajesDestinoPage */]);
    };
    HomeCViewRutaPage.prototype.goToutnOrigen = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__viajes_origen_viajes_origen__["a" /* ViajesOrigenPage */]);
    };
    HomeCViewRutaPage.prototype.goToCancel = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__viajes_origen_destino_viajes_origen_destino__["a" /* ViajesOrigenDestinoPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map_canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomeCViewRutaPage.prototype, "mapElement", void 0);
    HomeCViewRutaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-c-view-ruta',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\home-c-view-ruta\home-c-view-ruta.html"*/'<ion-content>\n\n  <div #map_canvas id="map_canvas">\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="white">\n\n    <ion-list>\n\n      <ion-item no-lines>\n\n        <ion-icon name="pin" color="iconos" item-start></ion-icon>\n\n        <ion-card>\n\n          <ion-item color="destinocard" (click)="goToutnDestino()">\n\n            {{origen_direccion}}\n\n          </ion-item>\n\n        </ion-card>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n        <ion-icon name="home" color="iconos" item-start></ion-icon>\n\n        <ion-card>\n\n          <ion-item color="destinocard" (click)="goToutnOrigen()">\n\n            {{destino_direccion}}\n\n          </ion-item>\n\n        </ion-card>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col></ion-col>\n\n        <ion-col text-center><strong ion-text color="danger">ACEPTAR</strong></ion-col>\n\n        <ion-col></ion-col>\n\n        <ion-col text-center (click)="goToCancel()"><strong ion-text color="danger">CANCELAR</strong></ion-col>\n\n        <ion-col></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\home-c-view-ruta\home-c-view-ruta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomeCViewRutaPage);
    return HomeCViewRutaPage;
}());

//# sourceMappingURL=home-c-view-ruta.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //this.rootPage = HomePage;
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesDestinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_home_destino_set_home_destino__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__set_map_destino_set_map_destino__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ViajesDestinoPage = (function () {
    function ViajesDestinoPage(navCtrl, navParams, geolocation, plt, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        // 1 true 0 false
        this.tiene_casa = 1;
    }
    ViajesDestinoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViajesDestinoPage');
        this.init_values();
        this.latLngDir();
    };
    ViajesDestinoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setInterval(function () {
            _this.origen_direccion;
        }, 1000);
    };
    ViajesDestinoPage.prototype.init_values = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.destino_LatLng = { lat: 0.3581583, lng: -78.112088 };
                this.destino_direccion = 'Universidad Tecnica del Norte';
                //llamar api rest  buscando casa de la persona y la direccion
                this.origen_LatLng_api = { lat: 0.341304, lng: -78.125170 };
                this.origen_direccion_api = 'Yacucalle, Ibarra';
                return [2 /*return*/];
            });
        });
    };
    ViajesDestinoPage.prototype.latLngDir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.getDireccion;
                        return [4 /*yield*/, this.getLocation()];
                    case 1:
                        _a.apply(this, [_c.sent()]);
                        _b = this;
                        return [4 /*yield*/, this.getLocation()];
                    case 2:
                        _b.origen_LatLng = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViajesDestinoPage.prototype.goToViewRoute = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                loading = this.loadingCtrl.create();
                loading.present();
                if (value == 1) {
                    this.origen_direccion = this.origen_direccion_api;
                    this.origen_LatLng = this.origen_LatLng_api;
                }
                // else {
                //   this.getDireccion(await this.getLocation());
                //   this.origen_LatLng = await this.getLocation();
                // }
                this.actionListener_goToViewRoute();
                loading.dismiss();
                return [2 /*return*/];
            });
        });
    };
    ViajesDestinoPage.prototype.goToSetHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__set_home_destino_set_home_destino__["a" /* SetHomeDestinoPage */]);
    };
    ViajesDestinoPage.prototype.goToSetMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__set_map_destino_set_map_destino__["a" /* SetMapDestinoPage */]);
    };
    ViajesDestinoPage.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var option, rta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        option = {
                            enableHighAccuracy: true
                        };
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["c" /* LocationService */].getMyLocation(option)];
                    case 1:
                        rta = _a.sent();
                        //const rta = await this.geolocation.getCurrentPosition();
                        return [2 /*return*/, rta.latLng];
                }
            });
        });
    };
    ViajesDestinoPage.prototype.getDireccion = function (latlng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.origen_direccion = results[0].formatted_address;
                }
            }
        });
    };
    ViajesDestinoPage.prototype.actionListener_goToViewRoute = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_c_view_ruta_home_c_view_ruta__["a" /* HomeCViewRutaPage */], {
            origen_LatLngnvp: this.origen_LatLng,
            destino_LatLngnvp: this.destino_LatLng,
            origen_direccionnvp: this.origen_direccion,
            destino_direccionnvp: this.destino_direccion
        });
    };
    ViajesDestinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viajes-destino',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-destino\viajes-destino.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n  </ion-navbar>\n\n  <ion-toolbar color="white">\n\n    <ion-list>\n\n      <ion-item no-lines>\n\n        <ion-icon name="pin" color="iconos" item-start></ion-icon>\n\n        <ion-card>\n\n          <ion-item color="destinocard">\n\n            <span ion-text color="ortext">Seleccione su origen</span>\n\n\n\n          </ion-item>\n\n        </ion-card>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n        <ion-icon name="home" color="iconos" item-start></ion-icon>\n\n        <ion-card>\n\n          <ion-item color="origencard">\n\n            Universidad T&eacute;cnica del Norte\n\n          </ion-item>\n\n        </ion-card>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item (click)="goToViewRoute(0)" tappable>\n\n      <ion-icon name="locate" color="primary" item-start></ion-icon>\n\n      Tu ubicaci&oacute;n actual\n\n    </ion-item>\n\n    <ion-item [hidden]="tiene_casa===0" (click)="goToViewRoute(1)">\n\n      <ion-icon name="home" color="iconos" item-start></ion-icon>\n\n      <h2>Casa</h2>\n\n      <p ion-text>Av. 17 de Julio</p>\n\n    </ion-item>\n\n    <ion-item [hidden]="tiene_casa===1" (click)="goToSetHome()">\n\n      <ion-icon name="home" color="iconos" item-start></ion-icon>\n\n      <h2>Casa</h2>\n\n      <p ion-text color="iconos"> <strong> Anadir direcci&oacute;n</strong></p>\n\n    </ion-item>\n\n    <ion-item (click)="goToSetMap()">\n\n      <ion-icon name="map" color="iconos" item-start></ion-icon>\n\n      Seleccionar mapa\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-destino\viajes-destino.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ViajesDestinoPage);
    return ViajesDestinoPage;
}());

//# sourceMappingURL=viajes-destino.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesOrigenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_home_origen_set_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__set_map_origen_set_map_origen__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViajesOrigenPage = (function () {
    function ViajesOrigenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // 1 true 0 false
        this.tiene_casa = 0;
    }
    ViajesOrigenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViajesOrigenPage');
        this.origen_LatLng = { lat: 0.3581583, lng: -78.112088 };
        //llamar api rest  buscando casa de la persona y la direccion
        this.destino_LatLng = { lat: 0.341304, lng: -78.125170 };
        this.destino_direccion = 'Yacucalle, Ibarra';
        this.origen_direccion = 'Universidad Tecnica del Norte';
    };
    ViajesOrigenPage.prototype.goToSetHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__set_home_origen_set_home__["a" /* SetHomePage */]);
    };
    ViajesOrigenPage.prototype.goToSetMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__set_map_origen_set_map_origen__["a" /* SetMapOrigenPage */]);
    };
    ViajesOrigenPage.prototype.goToViewRoute = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_c_view_ruta_home_c_view_ruta__["a" /* HomeCViewRutaPage */], {
            origen_LatLngnvp: this.origen_LatLng,
            destino_LatLngnvp: this.destino_LatLng,
            origen_direccionnvp: this.origen_direccion,
            destino_direccionnvp: this.destino_direccion
        });
    };
    ViajesOrigenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viajes-origen',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-origen\viajes-origen.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n  </ion-navbar>\n\n  <ion-toolbar color="white">\n\n    <ion-list>\n\n      <ion-item no-lines>\n\n        <ion-icon name="pin" color="iconos" item-start></ion-icon>\n\n        <ion-card>\n\n          <ion-item color="origencard">\n\n            Universidad T&eacute;cnica del Norte\n\n          </ion-item>\n\n        </ion-card>\n\n      </ion-item>\n\n      <ion-item no-lines>\n\n        <ion-icon name="home" color="iconos" item-start></ion-icon>\n\n        <ion-card>\n\n          <ion-item color="destinocard">\n\n            <span ion-text color="ortext">Seleccione su destino</span>\n\n          </ion-item>\n\n        </ion-card>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item [hidden]="tiene_casa===0" (click)="goToViewRoute()">\n\n      <ion-icon name="home" color="iconos" item-start></ion-icon>\n\n      <h2>Casa</h2>\n\n      <p ion-text>Av. 17 de Julio</p>\n\n    </ion-item>\n\n    <ion-item [hidden]="tiene_casa===1" (click)="goToSetHome()">\n\n      <ion-icon name="home" color="iconos" item-start></ion-icon>\n\n      <h2>Casa</h2>\n\n      <p ion-text color="iconos"> <strong> Anadir direcci&oacute;n</strong></p>\n\n    </ion-item>\n\n    <ion-item (click)="goToViewRoute()">\n\n      <ion-icon name="time" color="iconos" item-start></ion-icon>\n\n      Cayambe\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="time" color="iconos" item-start></ion-icon>\n\n      Otavalo\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="time" color="iconos" item-start></ion-icon>\n\n      Quito\n\n    </ion-item>\n\n    <ion-item (click)="goToSetMap()">\n\n      <ion-icon name="map" color="iconos" item-start></ion-icon>\n\n      Seleccionar mapa\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-origen\viajes-origen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViajesOrigenPage);
    return ViajesOrigenPage;
}());

//# sourceMappingURL=viajes-origen.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesOrigenDestinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viajes_origen_viajes_origen__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viajes_destino_viajes_destino__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ViajesOrigenDestinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViajesOrigenDestinoPage = (function () {
    function ViajesOrigenDestinoPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    ViajesOrigenDestinoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViajesOrigenDestinoPage');
    };
    ViajesOrigenDestinoPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Informaci&oacute;n',
            message: 'La universidad siempre ser&aacute; un punto de partida o de llegada',
            buttons: ['OK']
        });
        alert.present();
    };
    ViajesOrigenDestinoPage.prototype.goToOrigen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__viajes_origen_viajes_origen__["a" /* ViajesOrigenPage */]);
    };
    ViajesOrigenDestinoPage.prototype.goToDestino = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viajes_destino_viajes_destino__["a" /* ViajesDestinoPage */]);
    };
    ViajesOrigenDestinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viajes-origen-destino',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-origen-destino\viajes-origen-destino.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-title>Comienza el viaje</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="showAlert()">\n\n        <ion-icon name="information-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-item class="border-bottom" (click)="goToOrigen()">\n\n      <ion-icon name="pin" color="iconos" item-left></ion-icon>\n\n      <span>Salgo de la universidad</span>\n\n    </ion-item>\n\n    <ion-item (click)="goToDestino()">\n\n      <ion-icon name="home" color="iconos" item-left></ion-icon>\n\n      <span>Voy a la universidad</span>\n\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-origen-destino\viajes-origen-destino.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ViajesOrigenDestinoPage);
    return ViajesOrigenDestinoPage;
}());

//# sourceMappingURL=viajes-origen-destino.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map