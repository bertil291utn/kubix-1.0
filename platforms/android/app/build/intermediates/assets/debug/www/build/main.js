webpackJsonp([12],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetRutaCPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetRutaCPage = (function () {
    function DetRutaCPage(storage, navCtrl, navParams, sanitizer) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.proceso_v = 'descripcion';
        this.url = "http://www.samtrans.com/Assets/SamTrans/Timetables/RB121/Maps/Route+61_2016_08-07.png";
        this.viajedet = navParams.get('datos');
    }
    DetRutaCPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //this.url = "blob:http://localhost:8100/b95c7e2b-a3b4-4ac8-b51e-a9af526f3788"
        console.log('ionViewDidLoad DetRutaCPage');
        this.storage.get('imageurl').then(function (val) { _this.url = val; _this.getUrlVideo(_this.url); console.log('url: ', _this.url); });
    };
    DetRutaCPage.prototype.getUrlVideo = function (videoURL) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
    };
    DetRutaCPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-det-ruta-c',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\det-ruta-c\det-ruta-c.html"*/'<ion-header>\n  <ion-navbar color="danger" text-center>\n    <ion-grid>\n      <ion-row>\n        <ion-col text-left col-1>\n          <ion-icon name="pin" color="light" small></ion-icon>\n        </ion-col>\n        <ion-col text-left>\n          <ion-title color="light">{{viajedet.origen}}</ion-title>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-left col-1>\n          <ion-icon name="pin" color="light" small></ion-icon>\n        </ion-col>\n        <ion-col text-left>\n          <ion-title color="light">{{viajedet.destino}}</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-segment color="danger" [(ngModel)]="proceso_v">\n    <ion-segment-button value="descripcion">\n      DESCRIPCION\n    </ion-segment-button>\n    <ion-segment-button value="vehiculo">\n      VEHICULO\n    </ion-segment-button>\n    <ion-segment-button value="ubicacion">\n      UBICACION\n    </ion-segment-button>\n    <ion-segment-button value="ruta">\n      RUTA\n    </ion-segment-button>\n    <ion-segment-button value="solicitud">\n      SOLICITUDES\n    </ion-segment-button>\n  </ion-segment>\n\n\n  <div [ngSwitch]="proceso_v">\n    <ion-grid *ngSwitchCase="\'descripcion\'">\n      <h5>Descripci&oacute;n del viaje</h5><br>\n      <ion-row>\n        <ion-col>\n          {{viajedet.descripcion}}\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngSwitchCase="\'vehiculo\'">\n      <ion-row align-items-center>\n        <ion-col id="auto">\n          <img src="{{viajedet.auto.imagen}}" id="centerImg">\n        </ion-col>\n      </ion-row>\n      <h6 ion-text text-center>{{viajedet.auto.placa}}</h6>\n      <h6 ion-text text-center>{{viajedet.auto.marca}} {{viajedet.auto.modelo}}</h6>\n      <span ion-text text-center>{{viajedet.auto.color}}</span>\n    </ion-grid>\n\n    <ion-grid *ngSwitchCase="\'ubicacion\'">\n\n    </ion-grid>\n\n    <ion-grid *ngSwitchCase="\'ruta\'">\n      <img id="ruta" src="{{url}}" />\n\n    </ion-grid>\n\n    <ion-grid *ngSwitchCase="\'solicitud\'">\n\n    </ion-grid>\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\det-ruta-c\det-ruta-c.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], DetRutaCPage);
    return DetRutaCPage;
}());

//# sourceMappingURL=det-ruta-c.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetHomeDestinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(27);
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

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetMapDestinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(27);
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

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(27);
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

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetMapOrigenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(27);
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

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesConductorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_map_pto_set_map_pto__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viajes_pub_c_viajes_pub_c__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViajesConductorPage = (function () {
    function ViajesConductorPage(navparams, navCtrl, navParams, alertCtrl) {
        var _this = this;
        this.navparams = navparams;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.proceso = 'horario';
        this.repeat = 2;
        this.dia = new Date().getDay();
        this.pasajero = 1;
        this.callback = function (data) {
            _this.punto_LatLng = data;
            console.log('data received from other page', _this.punto_LatLng);
        };
        this.setHour();
    }
    ViajesConductorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViajesConductorPage');
    };
    ViajesConductorPage.prototype.showAlert = function () {
        this.createAlert();
        //guardar en BD los datos de la ruta 
    };
    ViajesConductorPage.prototype.createAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Viaje publicado',
            message: 'Su viaje se ha publicado con &eacute;xito. Solo espere a que los pasajeros hagan la reserva.',
            buttons: [{
                    text: 'Ver',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viajes_pub_c_viajes_pub_c__["a" /* ViajesPubCPage */]);
                    }
                }]
        });
        alert.present();
    };
    ViajesConductorPage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__set_map_pto_set_map_pto__["a" /* SetMapPtoPage */], {
            callback: this.callback
        });
    };
    ViajesConductorPage.prototype.setHour = function () {
        this.hora = this.calculateTime('-5');
        // If it is Daylight Savings Time
        if (this.dst(new Date())) {
            this.hora = this.calculateTime('-4');
        }
    };
    ViajesConductorPage.prototype.goToVehicule = function () {
        this.proceso = 'vehiculo';
    };
    ViajesConductorPage.prototype.goToAdicional = function () {
        this.proceso = 'adicional';
    };
    ViajesConductorPage.prototype.calculateTime = function (offset) {
        // create Date object for current location
        var d = new Date();
        // create new Date object for different city
        // using supplied offset
        var nd = new Date(d.getTime() + (3600000 * offset));
        return nd.toISOString();
    };
    // Determine if the client uses DST
    ViajesConductorPage.prototype.stdTimezoneOffset = function (today) {
        var jan = new Date(today.getFullYear(), 0, 1);
        var jul = new Date(today.getFullYear(), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    };
    ViajesConductorPage.prototype.dst = function (today) {
        return today.getTimezoneOffset() < this.stdTimezoneOffset(today);
    };
    ViajesConductorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viajes-conductor',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-conductor\viajes-conductor.html"*/'<ion-header>\n  <ion-navbar color="danger" text-center>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-buttons left>\n            <button ion-button icon-only clear>\n              <ion-icon name="car"></ion-icon>\n              <ion-title>VIAJES</ion-title>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment color="danger" [(ngModel)]="proceso">\n    <ion-segment-button value="horario">\n      HORARIO DE SALIDA\n    </ion-segment-button>\n    <ion-segment-button value="vehiculo">\n      VEHICULO\n    </ion-segment-button>\n    <ion-segment-button value="adicional">\n      ADICIONAL\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="proceso">\n    <ion-grid *ngSwitchCase="\'horario\'" padding>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-icon name="calendar" color="iconos" item-left></ion-icon>\n            <ion-select cancelText="CANCELAR" interface="action-sheet" [(ngModel)]="dia">\n              <ion-option value="1">Lunes</ion-option>\n              <ion-option value="2">Martes</ion-option>\n              <ion-option value="3">Mi&eacute;rcoles</ion-option>\n              <ion-option value="4">Jueves</ion-option>\n              <ion-option value="5">Viernes</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-icon name="time" color="iconos" item-left></ion-icon>\n            <ion-datetime displayFormat="HH:mm" [(ngModel)]="hora"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <h5>Repetir</h5>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-icon name="repeat" color="iconos" item-left></ion-icon>\n            <ion-select cancelText="CANCELAR" interface="action-sheet" [(ngModel)]="repeat">\n              <ion-option value="1">Si</ion-option>\n              <ion-option value="2">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n      <h5 color="danger" ion-text text-center (click)="goToVehicule()">SIGUIENTE</h5>\n    </ion-grid>\n\n\n    <ion-grid *ngSwitchCase="\'vehiculo\'" padding>\n      <h6 ion-text text-center>Autom&oacute;vil designado</h6>\n      <ion-row align-items-center>\n        <ion-col id="auto">\n          <img src="assets/imgs/01.png" id="centerImg">\n        </ion-col>\n      </ion-row>\n\n      <h6 ion-text text-center>SEAT IBIZA</h6>\n      <span ion-text text-center>Negro</span>\n      <h5 color="danger" ion-text text-center (click)="goToAdicional()">SIGUIENTE</h5>\n    </ion-grid>\n\n\n    <ion-grid *ngSwitchCase="\'adicional\'" padding>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label id="pasajero">No. pasajeros</ion-label>\n            <ion-select cancelText="CANCELAR" interface="action-sheet" [(ngModel)]="pasajero" id="extra">\n              <ion-option value="1">1</ion-option>\n              <ion-option value="2">2</ion-option>\n              <ion-option value="3">3</ion-option>\n              <ion-option value="4">4</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item (click)="goToMap()">\n            <ion-label id="partida">Punto de encuentro<br>\n              <span ion-text id="subtxt">Ubique en el mapa</span>\n            </ion-label>\n            <ion-icon name="pin" color="iconos" item-right></ion-icon>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label id="descripcion" stacked>Descripci&oacute;n adicional</ion-label>\n            <ion-textarea rows="6" cols="20" color="danger"\n              placeholder="Referencia de donde sale , si va a hacer paradas, hora de salida">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <button ion-button round color="danger" large (click)="showAlert()">Publicar</button>\n\n    </ion-grid>\n\n\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-conductor\viajes-conductor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ViajesConductorPage);
    return ViajesConductorPage;
}());

//# sourceMappingURL=viajes-conductor.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetMapPtoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_html2canvas__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_html2canvas__);
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





var SetMapPtoPage = (function () {
    function SetMapPtoPage(geolocation, loadingCtrl, nav, navparams) {
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.navparams = navparams;
    }
    SetMapPtoPage.prototype.ionViewDidLoad = function () {
        this.loadMapa();
        this.reverse_geo_application();
    };
    SetMapPtoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setInterval(function () {
            _this.direccion;
        }, 1000);
    };
    SetMapPtoPage.prototype.saveMapToDataUrl = function (element) {
        __WEBPACK_IMPORTED_MODULE_4_html2canvas___default()(element, {
            useCORS: true,
            onrendered: function (canvas) {
                var img = canvas.toDataURL("image/png").replace('data:image/png;base64,', '');
                var finalImgSrc = 'data:image/png;base64,' + img;
            }
        });
    };
    SetMapPtoPage.prototype.loadMapa = function () {
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
    SetMapPtoPage.prototype.getLocation = function () {
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
    SetMapPtoPage.prototype.camera_position = function () {
        var _this = this;
        this.map.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].CAMERA_MOVE_END).subscribe(function (val) {
            var target = val[0].target;
            var latlng = {
                lat: target.lat,
                lng: target.lng
            };
            _this.r_g_no_native(latlng);
            _this.punto_LatLng = latlng;
        });
    };
    SetMapPtoPage.prototype.r_g_no_native = function (latlng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.direccion = results[0].formatted_address;
                }
            }
        });
    };
    SetMapPtoPage.prototype.reverse_geo_application = function () {
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
                        _b.punto_LatLng = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SetMapPtoPage.prototype.goToViewConductor = function () {
        var _this = this;
        var element = document.getElementById("map_canvas6");
        this.saveMapToDataUrl(element);
        this.nav.pop().then(function () {
            _this.navparams.get('callback')(_this.punto_LatLng);
        });
    };
    SetMapPtoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-set-map-pto',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\set-map-pto\set-map-pto.html"*/'\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Seleccione punto de recogida</ion-title>\n    <ion-buttons end>\n      <button ion-button tappable (click)="goToViewConductor()">\n        OK\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div id="map_canvas6">\n    <ion-card>\n      <ion-item>\n        <ion-icon name="map" color="iconos" item-left></ion-icon>\n        {{direccion}}\n      </ion-item>\n    </ion-card>\n    <img src="assets/imgs/marker.png" id="centerMarkerImg">\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\set-map-pto\set-map-pto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SetMapPtoPage);
    return SetMapPtoPage;
}());

//# sourceMappingURL=set-map-pto.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesPubCPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__det_ruta_c_det_ruta_c__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViajesPubCPage = (function () {
    function ViajesPubCPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViajesPubCPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViajesPubCPage');
        //recibir datos desde la BD. Viajes publicados de este cedula  
        this.viajes_pub = this.arrayViajesPub();
    };
    ViajesPubCPage.prototype.goToDetails = function (itemid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__det_ruta_c_det_ruta_c__["a" /* DetRutaCPage */], {
            datos: this.viajes_pub[itemid - 1]
        });
    };
    ViajesPubCPage.prototype.arrayViajesPub = function () {
        return [{
                id: 1,
                origen: "Ibarra",
                destino: "UTN Ibarra",
                hora: "07:00",
                fecha: "Sab.27 sept.",
                descripcion: "Voy a salir desde mi casa en Caranqui para pasar por los Ceibos y llegar a la universidad por la victoria. Quien sea que este por esa ruta reserve el viaje. Tengo dos asientos disponibles salgo a las 7 de mi casa.",
                auto: {
                    placa: "PCC0629",
                    modelo: "IBIZA",
                    marca: "SEAT",
                    color: "Negro",
                    imagen: "assets/imgs/01.png"
                },
                ubicacion: "",
                ruta: ""
            },
            {
                id: 2,
                origen: "Otavalo",
                destino: "Ibarra",
                hora: "08:00",
                fecha: "Dom.28 oct.",
                descripcion: "2Voy a salir desde mi casa en Caranqui para pasar por los Ceibos y llegar a la universidad por la victoria. Quien sea que este por esa ruta reserve el viaje. Tengo dos asientos disponibles salgo a las 7 de mi casa.",
                auto: {
                    placa: "XYZ0629",
                    modelo: "FAMILY",
                    color: "Azul",
                    marca: "CHEVROLET",
                    imagen: "assets/imgs/01.png"
                },
                ubicacion: "",
                ruta: ""
            }];
    };
    ViajesPubCPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viajes-pub-c',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-pub-c\viajes-pub-c.html"*/'<ion-header>\n  <ion-navbar color="danger" text-center>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-buttons left>\n            <button ion-button icon-only clear>\n              <ion-icon name="car"></ion-icon>\n              <ion-title>Viajes publicados</ion-title>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let item of viajes_pub">\n    <ion-card-content text-center>\n      <ion-card-title>\n        <ion-row>\n          <ion-col>\n            {{item.origen}}\n          </ion-col>\n          <ion-col col-1>\n            <ion-icon name="arrow-round-forward" id="arrow" color="iconos"></ion-icon>\n          </ion-col>\n          <ion-col>\n            {{item.destino}}\n          </ion-col>\n        </ion-row>\n      </ion-card-title>\n      <p>\n        {{item.hora}} &nbsp;&nbsp;&nbsp; <strong>{{item.fecha}}</strong>\n      </p>\n    </ion-card-content>\n\n    <ion-row id="foot">\n      <ion-col text-right>\n        <button ion-button clear color="iconos" icon-start>\n          <ion-icon name=\'create\'></ion-icon>\n          Editar\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear color="iconos" icon-start>\n          <ion-icon name=\'trash\'></ion-icon>\n          Eliminar\n        </button>\n      </ion-col>\n      <ion-col text-left>\n        <button ion-button clear color="iconos" icon-start (click)="goToDetails(item.id)">\n          <ion-icon name=\'list-box\'></ion-icon>\n          Detalles\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-pub-c\viajes-pub-c.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViajesPubCPage);
    return ViajesPubCPage;
}());

//# sourceMappingURL=viajes-pub-c.js.map

/***/ }),

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/det-ruta-c/det-ruta-c.module": [
		292,
		11
	],
	"../pages/home-c-view-ruta/home-c-view-ruta.module": [
		293,
		10
	],
	"../pages/set-home-destino/set-home-destino.module": [
		295,
		9
	],
	"../pages/set-home_origen/set-home.module": [
		294,
		8
	],
	"../pages/set-map-destino/set-map-destino.module": [
		296,
		7
	],
	"../pages/set-map-origen/set-map-origen.module": [
		297,
		6
	],
	"../pages/set-map-pto/set-map-pto.module": [
		298,
		5
	],
	"../pages/viajes-conductor/viajes-conductor.module": [
		299,
		4
	],
	"../pages/viajes-destino/viajes-destino.module": [
		300,
		3
	],
	"../pages/viajes-origen-destino/viajes-origen-destino.module": [
		301,
		2
	],
	"../pages/viajes-origen/viajes-origen.module": [
		302,
		1
	],
	"../pages/viajes-pub-c/viajes-pub-c.module": [
		303,
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
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viajes_origen_destino_viajes_origen_destino__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
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
        console.log('ionViewDidLoad HomePage');
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\home\home.html"*/'<ion-header>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- <div id="map_canvas2"> -->\n\n    <ion-card>\n\n      <ion-item (click)="optionOrigenDestino()">\n\n        <ion-icon name="search" color="iconos" item-left></ion-icon>\n\n        <span>¿A d&oacute;nde te diriges?</span>\n\n      </ion-item>\n\n    </ion-card>\n\n\n\n    <!-- <ion-fab right bottom>\n\n      <button (click)="targetMap()" color="white" ion-fab>\n\n        <ion-icon name="navigate" color="primary"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n  </div> -->\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_viajes_origen_destino_viajes_origen_destino__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_viajes_origen_viajes_origen__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_viajes_destino_viajes_destino__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_set_home_origen_set_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_set_map_origen_set_map_origen__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_set_home_destino_set_home_destino__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_set_map_destino_set_map_destino__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_viajes_conductor_viajes_conductor__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_set_map_pto_set_map_pto__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_viajes_pub_c_viajes_pub_c__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_det_ruta_c_det_ruta_c__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_maps__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_geocoder__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(85);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_home_c_view_ruta_home_c_view_ruta__["a" /* HomeCViewRutaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_viajes_conductor_viajes_conductor__["a" /* ViajesConductorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_set_map_pto_set_map_pto__["a" /* SetMapPtoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_viajes_pub_c_viajes_pub_c__["a" /* ViajesPubCPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_det_ruta_c_det_ruta_c__["a" /* DetRutaCPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/det-ruta-c/det-ruta-c.module#DetRutaCPageModule', name: 'DetRutaCPage', segment: 'det-ruta-c', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-c-view-ruta/home-c-view-ruta.module#HomeCViewRutaPageModule', name: 'HomeCViewRutaPage', segment: 'home-c-view-ruta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set-home_origen/set-home.module#SetHomePageModule', name: 'SetHomePage', segment: 'set-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set-home-destino/set-home-destino.module#SetHomeDestinoPageModule', name: 'SetHomeDestinoPage', segment: 'set-home-destino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set-map-destino/set-map-destino.module#SetMapDestinoPageModule', name: 'SetMapDestinoPage', segment: 'set-map-destino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set-map-origen/set-map-origen.module#SetMapOrigenPageModule', name: 'SetMapOrigenPage', segment: 'set-map-origen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set-map-pto/set-map-pto.module#SetMapPtoPageModule', name: 'SetMapPtoPage', segment: 'set-map-pto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viajes-conductor/viajes-conductor.module#ViajesConductorPageModule', name: 'ViajesConductorPage', segment: 'viajes-conductor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viajes-destino/viajes-destino.module#ViajesDestinoPageModule', name: 'ViajesDestinoPage', segment: 'viajes-destino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viajes-origen-destino/viajes-origen-destino.module#ViajesOrigenDestinoPageModule', name: 'ViajesOrigenDestinoPage', segment: 'viajes-origen-destino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viajes-origen/viajes-origen.module#ViajesOrigenPageModule', name: 'ViajesOrigenPage', segment: 'viajes-origen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viajes-pub-c/viajes-pub-c.module#ViajesPubCPageModule', name: 'ViajesPubCPage', segment: 'viajes-pub-c', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
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
                __WEBPACK_IMPORTED_MODULE_13__pages_home_c_view_ruta_home_c_view_ruta__["a" /* HomeCViewRutaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_viajes_conductor_viajes_conductor__["a" /* ViajesConductorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_set_map_pto_set_map_pto__["a" /* SetMapPtoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_viajes_pub_c_viajes_pub_c__["a" /* ViajesPubCPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_det_ruta_c_det_ruta_c__["a" /* DetRutaCPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeCViewRutaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viajes_destino_viajes_destino__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viajes_origen_viajes_origen__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viajes_origen_destino_viajes_origen_destino__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viajes_conductor_viajes_conductor__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(85);
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
    function HomeCViewRutaPage(storage, loadingCtrl, nav, navparams) {
        this.storage = storage;
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
    HomeCViewRutaPage.prototype.goToAceptar = function () {
        var elem = document.getElementById('map_canvas');
        this.capImagen(elem);
        //guardar en base de datos la imgen de rutas
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__viajes_conductor_viajes_conductor__["a" /* ViajesConductorPage */]);
    };
    HomeCViewRutaPage.prototype.capImagen = function (elem) {
        var _this = this;
        html2canvas(elem, {
            optimized: false, allowTaint: false,
            useCORS: true, onrendered: function (canvas) {
                canvas.toBlob(function (blob) {
                    var URLObj = window.URL || window.webkitURL;
                    var image = URLObj.createObjectURL(blob);
                    _this.storage.set('imageurl', image);
                    console.log('imageurl: ', image);
                    // return image
                    //document.getElementById('imgout').setAttribute("src", image)
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map_canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomeCViewRutaPage.prototype, "mapElement", void 0);
    HomeCViewRutaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-c-view-ruta',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\home-c-view-ruta\home-c-view-ruta.html"*/'<ion-content>\n\n  \n\n    <div #map_canvas id="map_canvas">\n\n    </div>\n\n  \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="white">\n\n    <ion-list>\n\n      <ion-item no-lines>\n\n        <ion-icon name="pin" color="iconos" item-start></ion-icon>\n\n        <ion-card>\n\n          <ion-item color="destinocard" (click)="goToutnDestino()">\n\n            {{origen_direccion}}\n\n          </ion-item>\n\n        </ion-card>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n        <ion-icon name="home" color="iconos" item-start></ion-icon>\n\n        <ion-card>\n\n          <ion-item color="destinocard" (click)="goToutnOrigen()">\n\n            {{destino_direccion}}\n\n          </ion-item>\n\n        </ion-card>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col></ion-col>\n\n        <ion-col text-center (click)="goToAceptar()"><strong ion-text color="danger">ACEPTAR</strong></ion-col>\n\n        <ion-col></ion-col>\n\n        <ion-col text-center (click)="goToCancel()"><strong ion-text color="danger">CANCELAR</strong></ion-col>\n\n        <ion-col></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\home-c-view-ruta\home-c-view-ruta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomeCViewRutaPage);
    return HomeCViewRutaPage;
}());

//# sourceMappingURL=home-c-view-ruta.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(212);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_home_destino_set_home_destino__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__set_map_destino_set_map_destino__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(25);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_home_origen_set_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__set_map_origen_set_map_origen__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(27);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ViajesOrigenDestinoPage);
    return ViajesOrigenDestinoPage;
}());

//# sourceMappingURL=viajes-origen-destino.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map