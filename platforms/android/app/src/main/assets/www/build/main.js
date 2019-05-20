webpackJsonp([15],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetRutaCPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(27);
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
        this.viajedet = navParams.get('datos');
        console.log(this.viajedet);
    }
    DetRutaCPage.prototype.ionViewDidLoad = function () {
        //this.url = "blob:http://localhost:8100/b95c7e2b-a3b4-4ac8-b51e-a9af526f3788"
        console.log('ionViewDidLoad DetRutaCPage');
        //this.storage.get('imageurl').then((val) => { this.url = this.getUrlVideo(val); console.log('url: ', this.url) })
    };
    DetRutaCPage.prototype.getUrlVideo = function (videoURL) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
    };
    DetRutaCPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-det-ruta-c',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\det-ruta-c\det-ruta-c.html"*/'<ion-header>\n  <ion-navbar color="danger" text-center>\n    <ion-grid>\n      <ion-row>\n        <ion-col text-left col-1>\n          <ion-icon name="pin" color="light" small></ion-icon>\n        </ion-col>\n        <ion-col text-left>\n          <ion-title color="light">{{viajedet.origen}}</ion-title>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-left col-1>\n          <ion-icon name="pin" color="light" small></ion-icon>\n        </ion-col>\n        <ion-col text-left>\n          <ion-title color="light">{{viajedet.destino}}</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-segment color="danger" [(ngModel)]="proceso_v">\n    <ion-segment-button value="descripcion">\n      DESCRIPCION\n    </ion-segment-button>\n    <ion-segment-button value="vehiculo">\n      VEHICULO\n    </ion-segment-button>\n    <ion-segment-button value="ubicacion">\n      UBICACION\n    </ion-segment-button>\n    <ion-segment-button value="ruta">\n      RUTA\n    </ion-segment-button>\n    <ion-segment-button value="solicitud">\n      SOLICITUDES\n    </ion-segment-button>\n  </ion-segment>\n\n\n  <div [ngSwitch]="proceso_v">\n    <ion-grid id="descripcion" *ngSwitchCase="\'descripcion\'">\n      <h5>Descripci&oacute;n del viaje</h5><br>\n      <ion-row>\n        <ion-col>\n          {{viajedet.descripcion}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid id="vehiculo" *ngSwitchCase="\'vehiculo\'">\n      <ion-row align-items-center>\n        <ion-col id="auto">\n          <img src="{{viajedet.auto.imagen}}" id="centerImg">\n        </ion-col>\n      </ion-row>\n      <h6 ion-text text-center>{{viajedet.auto.placa}}</h6>\n      <h6 ion-text text-center>{{viajedet.auto.marca}} {{viajedet.auto.modelo}}</h6>\n      <span ion-text text-center>{{viajedet.auto.color}}</span>\n    </ion-grid>\n\n    <ion-grid id="ubicacion" *ngSwitchCase="\'ubicacion\'">\n      <div class="relative">\n        <img src="{{viajedet.ubicacion}}" />\n        <p class="absolute-text">{{viajedet.textoubicacion}}</p>\n      </div>\n    </ion-grid>\n\n    <ion-grid id="ruta" *ngSwitchCase="\'ruta\'">\n      <img src="{{viajedet.ruta}}" />\n\n    </ion-grid>\n\n    <ion-grid id="request" *ngSwitchCase="\'solicitud\'">\n\n      <ion-card *ngFor="let item of viajedet.solicitud">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-4>\n              <div id="circular">\n                <img src="{{item.fotografia}}">\n              </div>\n            </ion-col>\n            <ion-col>\n              <strong>{{item.nombre}}</strong><br>\n              <strong>{{item.apellido}}</strong> <br>\n              <strong>{{item.genero}}</strong>\n            </ion-col>\n            <ion-col>\n              <strong>{{item.facultad}}</strong><br>\n              <strong>{{item.carrera}}</strong>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n\n        <ion-row id="foot">\n          <ion-col text-center>\n            <button ion-button clear color="iconos" icon-start>\n              <ion-icon name=\'checkmark\'></ion-icon>\n              aceptar\n            </button>\n          </ion-col>\n\n          <ion-col text-center>\n            <button ion-button clear color="iconos" icon-start>\n              <ion-icon name=\'close\'></ion-icon>\n              rechazar\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-card>\n\n\n    </ion-grid>\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\det-ruta-c\det-ruta-c.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], DetRutaCPage);
    return DetRutaCPage;
}());

//# sourceMappingURL=det-ruta-c.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetHomeDestinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(87);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], SetHomeDestinoPage);
    return SetHomeDestinoPage;
}());

//# sourceMappingURL=set-home-destino.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetMapDestinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(31);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], SetMapDestinoPage);
    return SetMapDestinoPage;
}());

//# sourceMappingURL=set-map-destino.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(87);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], SetHomePage);
    return SetHomePage;
}());

//# sourceMappingURL=set-home.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetMapOrigenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(31);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], SetMapOrigenPage);
    return SetMapOrigenPage;
}());

//# sourceMappingURL=set-map-origen.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesConductorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_map_pto_set_map_pto__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viajes_pub_c_viajes_pub_c__ = __webpack_require__(56);
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
                    text: 'Aceptar',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__viajes_pub_c_viajes_pub_c__["a" /* ViajesPubCPage */]);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ViajesConductorPage);
    return ViajesConductorPage;
}());

//# sourceMappingURL=viajes-conductor.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetMapPtoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_html2canvas__ = __webpack_require__(277);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SetMapPtoPage);
    return SetMapPtoPage;
}());

//# sourceMappingURL=set-map-pto.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesMainCPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viajes_origen_destino_viajes_origen_destino__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViajesMainCPage = (function () {
    function ViajesMainCPage(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
    }
    ViajesMainCPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViajesMainCPage');
    };
    ViajesMainCPage.prototype.optionOrigenDestino = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__viajes_origen_destino_viajes_origen_destino__["a" /* ViajesOrigenDestinoPage */]);
    };
    ViajesMainCPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viajes-main-c',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-main-c\viajes-main-c.html"*/'<ion-header>\n  <ion-navbar color="danger">\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div id="map_canvas2"> -->\n  <ion-card>\n    <ion-item (click)="optionOrigenDestino()">\n      <ion-icon name="search" color="iconos" item-left></ion-icon>\n      <span>¿A d&oacute;nde te diriges?</span>\n    </ion-item>\n  </ion-card>\n\n  <!-- <ion-fab right bottom>\n        <button (click)="targetMap()" color="white" ion-fab>\n          <ion-icon name="navigate" color="primary"></ion-icon>\n        </button>\n      </ion-fab>\n    </div> -->\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-main-c\viajes-main-c.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ViajesMainCPage);
    return ViajesMainCPage;
}());

//# sourceMappingURL=viajes-main-c.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesOrigenDestinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ViajesOrigenDestinoPage);
    return ViajesOrigenDestinoPage;
}());

//# sourceMappingURL=viajes-origen-destino.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesPasajeroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dates_format_dates_format__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viajes_pasajero_detail_viajes_pasajero_detail__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViajesPasajeroPage = (function () {
    function ViajesPasajeroPage(navCtrl, navParams, dateformat, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dateformat = dateformat;
        this.modalCtrl = modalCtrl;
    }
    ViajesPasajeroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViajesPasajeroPage');
        this.initVariables();
    };
    ViajesPasajeroPage.prototype.initVariables = function () {
        this.lista_viaje = this.viajes_disponibles();
        this.dia_string = this.dateformat.actionGetDay(new Date().getDay());
        console.log('this.dia_string: ', this.dia_string);
        this.dia_number = new Date().getDate();
        this.mes = this.dateformat.actionGetMonth(new Date().getMonth() + 1);
        if (this.dia_string != "") {
            //listar solo cuando esta dentro de orario 06:30 - 21:10
            // this.lista_viaje = this.viajes_disponibles();
            this.fechamsg = "   " + this.dia_string + ' ' + this.dia_number + ' ' + this.mes;
        }
        else
            this.fechamsg = 'Fuera de horario';
    };
    ViajesPasajeroPage.prototype.goToDetails = function (itemid) {
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__viajes_pasajero_detail_viajes_pasajero_detail__["a" /* ViajesPasajeroDetailPage */], { datos: this.lista_viaje[itemid - 1], fecha: this.fechamsg });
        contactModal.present();
    };
    ViajesPasajeroPage.prototype.viajes_disponibles = function () {
        return [{
                id: 1,
                origen: "Ibarra",
                destino: "UTN Ibarra",
                hora: "07:00",
                descripcion: "Voy a salir desde mi casa en Caranqui para pasar por los Ceibos y llegar a la universidad por la victoria. Quien sea que este por esa ruta reserve el viaje. Tengo dos asientos disponibles salgo a las 7 de mi casa.",
                auto: {
                    placa: "PCC0629",
                    modelo: "IBIZA",
                    marca: "SEAT",
                    color: "Negro",
                    imagen: "assets/imgs/01.png"
                },
                ubicacion: "http://www.elclarinete.com.mx/wp-content/uploads/2017/12/google-maps.png",
                textoubicacion: "Av, 17 de Julio. Ibarra . Imbabura, Universidad Tecnica del Norte",
                ruta: "http://www.samtrans.com/Assets/SamTrans/Timetables/RB121/Maps/Route+61_2016_08-07.png",
                conductor: {
                    nombre: "Pepito Adolfo",
                    apellido: "Perez Hitler",
                    fotografia: "assets/imgs/profileOK.jpg",
                    facultad: "FICA",
                    carrera: "Sistemas",
                    genero: "Masculino"
                },
                asientos: 1
            },
            {
                id: 2,
                origen: "Otavalo",
                destino: "Ibarra",
                hora: "08:00",
                descripcion: "2Voy a salir desde mi casa en Caranqui para pasar por los Ceibos y llegar a la universidad por la victoria. Quien sea que este por esa ruta reserve el viaje. Tengo dos asientos disponibles salgo a las 7 de mi casa.",
                auto: {
                    placa: "XYZ0629",
                    modelo: "FAMILY",
                    color: "Azul",
                    marca: "CHEVROLET",
                    imagen: "assets/imgs/01.png"
                },
                ubicacion: "http://www.elclarinete.com.mx/wp-content/uploads/2017/12/google-maps.png",
                textoubicacion: "Otavalo, Av  Bolivar, Plaza de ponchos",
                ruta: "http://www.samtrans.com/Assets/SamTrans/Timetables/RB121/Maps/Route+61_2016_08-07.png",
                conductor: {
                    nombre: "Maria Jane",
                    apellido: "Juana Parker",
                    fotografia: "https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-1200x800.jpg",
                    facultad: "FCCSS",
                    carrera: "Enfermeria",
                    genero: "Femenino"
                },
                asientos: 2
            }];
    };
    ViajesPasajeroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viajes-pasajero',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-pasajero\viajes-pasajero.html"*/'<ion-header>\n\n  <ion-navbar color="danger" text-center>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3></ion-col>\n        <ion-col>\n          <ion-buttons left>\n            <button ion-button icon-only clear>\n              <ion-icon name="time"></ion-icon>\n              &nbsp;&nbsp;&nbsp;{{fechamsg}}\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor="let item of lista_viaje">\n    <ion-card-content text-center>\n      <ion-card-title>\n        <ion-row>\n          <ion-col>\n            {{item.origen}}\n          </ion-col>\n          <ion-col col-1>\n            <ion-icon name="arrow-round-forward" id="arrow" color="iconos"></ion-icon>\n          </ion-col>\n          <ion-col>\n            {{item.destino}}\n          </ion-col>\n        </ion-row>\n      </ion-card-title>\n      <p>\n        <strong>{{item.hora}}</strong>\n      </p>\n    </ion-card-content>\n\n    <div (click)="goToDetails(item.id)">\n      <ion-row id="foot" style="padding: 2% 10%;">\n        <ion-col>\n          <strong>Conductor</strong> <br>\n          <div id="circular">\n            <img src="{{item.conductor.fotografia}}">\n          </div>\n        </ion-col>\n        <ion-col>\n          <br><br>\n          <p>{{item.conductor.nombre}}</p>\n          <p>{{item.conductor.apellido}}</p>\n        </ion-col>\n        <ion-col text-right>\n          <br>\n          <strong style="font-size: 2rem;">{{item.asientos}}</strong>\n          <p> Asientos disponibles</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-pasajero\viajes-pasajero.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dates_format_dates_format__["a" /* DatesFormatProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ViajesPasajeroPage);
    return ViajesPasajeroPage;
}());

//# sourceMappingURL=viajes-pasajero.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesPasajeroDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViajesPasajeroDetailPage = (function () {
    function ViajesPasajeroDetailPage(navCtrl, navParams, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.detalle = 'ruta';
        this.mensaje = false;
        this.evento = false;
        this.viajedet = navParams.get('datos');
        this.fechamsg = navParams.get('fecha');
    }
    ViajesPasajeroDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViajesPasajeroDetailPage');
    };
    ViajesPasajeroDetailPage.prototype.verificar = function (event) {
        this.evento = event;
        if (event)
            this.mensaje = false;
    };
    ViajesPasajeroDetailPage.prototype.showAlert = function () {
        if (this.evento)
            this.createAlert();
        else
            this.mensaje = true;
        //guarda vije reservado en base de datos 
    };
    ViajesPasajeroDetailPage.prototype.createAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Informaci&oacute;n',
            message: 'Su viaje est&aacute; en modo espera. El conductor designado aprobar&aacute; su solicitud ',
            buttons: [{
                    text: 'Aceptar',
                    handler: function () {
                        console.log('dirigrse a viajespub pasajero');
                        //this.navCtrl.setRoot(ViajesPubCPage);
                    }
                }]
        });
        alert.present();
    };
    ViajesPasajeroDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ViajesPasajeroDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viajes-pasajero-detail',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-pasajero-detail\viajes-pasajero-detail.html"*/'<ion-header>\n\n  <ion-toolbar color="danger" text-center>\n    <ion-buttons end style="margin-right: 2%;">\n      <button ion-button (click)="dismiss()">\n        <ion-icon slot="icon-only" name="close" style="font-size: 1.8em;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-grid style="padding-left: 10%;">\n      <ion-row>\n        <ion-col text-right col-1>\n          <ion-icon name="pin" color="light" small></ion-icon>\n        </ion-col>\n        <ion-col text-left>\n          <ion-title>{{viajedet.origen}}</ion-title>\n        </ion-col>\n        <ion-col>\n          <ion-title>{{viajedet.hora}}</ion-title>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-right col-1>\n          <ion-icon name="pin" color="light" small></ion-icon>\n        </ion-col>\n        <ion-col text-left>\n          <ion-title color="light">{{viajedet.destino}}</ion-title>\n        </ion-col>\n        <ion-col text-left>\n          <ion-title>{{fechamsg}}</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-segment color="danger" [(ngModel)]="detalle">\n    <ion-segment-button value="ruta">\n      RUTA\n    </ion-segment-button>\n    <ion-segment-button value="descripcion">\n      DESCRIPCION\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="detalle">\n    <ion-grid id="ruta" *ngSwitchCase="\'ruta\'">\n      <img src="{{viajedet.ruta}}" />\n    </ion-grid>\n    <ion-grid id="descripcion" *ngSwitchCase="\'descripcion\'">\n      <h5>Descripci&oacute;n del viaje</h5><br>\n      <ion-row>\n        <ion-col>\n          {{viajedet.descripcion}}\n        </ion-col>\n      </ion-row>\n      <br><br>\n      <ion-row>\n        <ion-col col-1>\n          <ion-checkbox [(ngModel)]="terminos" color="danger" (ngModelChange)="verificar($event)"></ion-checkbox>\n        </ion-col>\n        <ion-col>\n          Acepto t&eacute;rminos y condiciones <br><br>\n          <div *ngIf="mensaje" ion-text color="danger">Marque esta casilla</div>\n        </ion-col>\n      </ion-row>\n      <button ion-button round color="danger" large (click)="showAlert()">reservar</button>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-pasajero-detail\viajes-pasajero-detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], ViajesPasajeroDetailPage);
    return ViajesPasajeroDetailPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=viajes-pasajero-detail.js.map

/***/ }),

/***/ 131:
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
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/det-ruta-c/det-ruta-c.module": [
		297,
		32
	],
	"../pages/home-c-view-ruta/home-c-view-ruta.module": [
		298,
		31
	],
	"../pages/set-home-destino/set-home-destino.module": [
		300,
		30
	],
	"../pages/set-home_origen/set-home.module": [
		299,
		29
	],
	"../pages/set-map-destino/set-map-destino.module": [
		301,
		28
	],
	"../pages/set-map-origen/set-map-origen.module": [
		302,
		27
	],
	"../pages/set-map-pto/set-map-pto.module": [
		303,
		26
	],
	"../pages/viajes-conductor/viajes-conductor.module": [
		304,
		25
	],
	"../pages/viajes-destino/viajes-destino.module": [
		305,
		24
	],
	"../pages/viajes-main-c/viajes-main-c.module": [
		307,
		23
	],
	"../pages/viajes-origen-destino/viajes-origen-destino.module": [
		306,
		22
	],
	"../pages/viajes-origen/viajes-origen.module": [
		308,
		21
	],
	"../pages/viajes-pasajero-detail/viajes-pasajero-detail.module": [
		310,
		20
	],
	"../pages/viajes-pasajero/viajes-pasajero.module": [
		309,
		19
	],
	"../pages/viajes-pub-c/viajes-pub-c.module": [
		311,
		18
	],
	"../pages/viajes-reser-pasajero/viajes-reser-pasajero.module": [
		312,
		17
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
webpackAsyncContext.id = 172;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatesFormatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatesFormatProvider = (function () {
    function DatesFormatProvider() {
        console.log('Hello DatesFormatProvider Provider');
    }
    DatesFormatProvider.prototype.actionGetMonth = function (month) {
        var month_string = "";
        switch (month) {
            case 1: {
                month_string = "ene.";
                break;
            }
            case 2: {
                month_string = "feb.";
                break;
            }
            case 3: {
                month_string = "mar.";
                break;
            }
            case 4: {
                month_string = "abr.";
                break;
            }
            case 5: {
                month_string = "may.";
                break;
            }
            case 6: {
                month_string = "jun.";
                break;
            }
            case 7: {
                month_string = "jul.";
                break;
            }
            case 8: {
                month_string = "ago.";
                break;
            }
            case 9: {
                month_string = "sept.";
                break;
            }
            case 10: {
                month_string = "oct.";
                break;
            }
            case 11: {
                month_string = "nov.";
                break;
            }
            case 12: {
                month_string = "dic.";
                break;
            }
        }
        return month_string;
    };
    DatesFormatProvider.prototype.actionGetDay = function (day) {
        var day_string = "";
        switch (day) {
            case 1: {
                day_string = "Lunes";
                break;
            }
            case 2: {
                day_string = "Martes";
                break;
            }
            case 3: {
                day_string = "Miercoles";
                break;
            }
            case 4: {
                day_string = "Jueves";
                break;
            }
            case 5: {
                day_string = "Viernes";
                break;
            }
            case 6: {
                day_string = "sabado";
                break;
            }
            case 7: {
                day_string = "domingo";
                break;
            }
        }
        return day_string;
    };
    DatesFormatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DatesFormatProvider);
    return DatesFormatProvider;
}());

//# sourceMappingURL=dates-format.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_viajes_origen_destino_viajes_origen_destino__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_viajes_origen_viajes_origen__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_viajes_destino_viajes_destino__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_set_home_origen_set_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_set_map_origen_set_map_origen__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_set_home_destino_set_home_destino__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_set_map_destino_set_map_destino__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_viajes_conductor_viajes_conductor__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_set_map_pto_set_map_pto__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_viajes_pub_c_viajes_pub_c__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_det_ruta_c_det_ruta_c__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_viajes_main_c_viajes_main_c__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_google_maps__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_geocoder__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_home_service_home_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_viajes_pasajero_viajes_pasajero__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_dates_format_dates_format__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_viajes_pasajero_detail_viajes_pasajero_detail__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_viajes_reser_pasajero_viajes_reser_pasajero__ = __webpack_require__(313);
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
                __WEBPACK_IMPORTED_MODULE_17__pages_det_ruta_c_det_ruta_c__["a" /* DetRutaCPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_viajes_main_c_viajes_main_c__["a" /* ViajesMainCPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_viajes_pasajero_viajes_pasajero__["a" /* ViajesPasajeroPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_viajes_pasajero_detail_viajes_pasajero_detail__["a" /* ViajesPasajeroDetailPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_viajes_reser_pasajero_viajes_reser_pasajero__["a" /* ViajesReserPasajeroPage */]
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
                        { loadChildren: '../pages/viajes-main-c/viajes-main-c.module#ViajesMainCPageModule', name: 'ViajesMainCPage', segment: 'viajes-main-c', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viajes-origen/viajes-origen.module#ViajesOrigenPageModule', name: 'ViajesOrigenPage', segment: 'viajes-origen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viajes-pasajero/viajes-pasajero.module#ViajesPasajeroPageModule', name: 'ViajesPasajeroPage', segment: 'viajes-pasajero', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viajes-pasajero-detail/viajes-pasajero-detail.module#ViajesPasajeroDetailPageModule', name: 'ViajesPasajeroDetailPage', segment: 'viajes-pasajero-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viajes-pub-c/viajes-pub-c.module#ViajesPubCPageModule', name: 'ViajesPubCPage', segment: 'viajes-pub-c', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viajes-reser-pasajero/viajes-reser-pasajero.module#ViajesReserPasajeroPageModule', name: 'ViajesReserPasajeroPage', segment: 'viajes-reser-pasajero', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_24__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
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
                __WEBPACK_IMPORTED_MODULE_17__pages_det_ruta_c_det_ruta_c__["a" /* DetRutaCPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_viajes_main_c_viajes_main_c__["a" /* ViajesMainCPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_viajes_pasajero_viajes_pasajero__["a" /* ViajesPasajeroPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_viajes_pasajero_detail_viajes_pasajero_detail__["a" /* ViajesPasajeroDetailPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_viajes_reser_pasajero_viajes_reser_pasajero__["a" /* ViajesReserPasajeroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_25__providers_home_service_home_service__["a" /* HomeServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_dates_format_dates_format__["a" /* DatesFormatProvider */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viajes_destino_viajes_destino__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viajes_origen_viajes_origen__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viajes_conductor_viajes_conductor__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(88);
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
        this.origen_LatLng = navparams.get('origen_LatLngnvp');
        this.destino_LatLng = navparams.get('destino_LatLngnvp');
        this.destino_direccion = navparams.get('destino_direccionnvp');
        this.origen_direccion = navparams.get('origen_direccionnvp');
    }
    HomeCViewRutaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeCViewRutaPage');
        //this.initMapa();
    };
    // initMapa() {
    //   this.map = new google.maps.Map(this.mapElement.nativeElement, {
    //     zoom: 7,
    //     disableDefaultUI: true
    //   });
    //   //this.map = GoogleMaps.create(this.mapElement.nativeElement);
    //   this.directionsDisplay.setMap(this.map);
    //   this.calculateAndDisplayRoute();
    // }
    // calculateAndDisplayRoute() {
    //   this.directionsService.route({
    //     origin: this.origen_LatLng,
    //     destination: this.destino_LatLng,
    //     travelMode: 'DRIVING'
    //   }, (response, status) => {
    //     if (status === 'OK') {
    //       this.directionsDisplay.setDirections(response);
    //     } else {
    //       window.alert('Directions request failed due to ' + status);
    //     }
    //   });
    // }
    HomeCViewRutaPage.prototype.goToutnDestino = function () {
        this.nav.popTo(__WEBPACK_IMPORTED_MODULE_2__viajes_destino_viajes_destino__["a" /* ViajesDestinoPage */]);
    };
    HomeCViewRutaPage.prototype.goToutnOrigen = function () {
        this.nav.popTo(__WEBPACK_IMPORTED_MODULE_3__viajes_origen_viajes_origen__["a" /* ViajesOrigenPage */]);
    };
    HomeCViewRutaPage.prototype.goToCancel = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    HomeCViewRutaPage.prototype.goToAceptar = function () {
        var elem = document.getElementById('map_canvas');
        //this.capImagen(elem)
        //guardar en base de datos la imgen de rutas
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__viajes_conductor_viajes_conductor__["a" /* ViajesConductorPage */]);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], HomeCViewRutaPage);
    return HomeCViewRutaPage;
}());

//# sourceMappingURL=home-c-view-ruta.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_viajes_pub_c_viajes_pub_c__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_home_service_home_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_viajes_pasajero_viajes_pasajero__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_viajes_reser_pasajero_viajes_reser_pasajero__ = __webpack_require__(313);
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
    function MyApp(platform, statusBar, splashScreen, myservices, alertCtrl, menu) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.myservices = myservices;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.pasajero = true;
        this.conductor = false;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pageslist();
        this.myservices.pasajero = this.pasajero;
        this.myservices.conductor = this.conductor;
    }
    MyApp.prototype.pageslist = function () {
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icono: "home" },
            { title: 'Solicitudes de viajes', component: __WEBPACK_IMPORTED_MODULE_5__pages_viajes_pub_c_viajes_pub_c__["a" /* ViajesPubCPage */], icono: "chatbubbles" },
            { title: 'Viajes publicados', component: __WEBPACK_IMPORTED_MODULE_5__pages_viajes_pub_c_viajes_pub_c__["a" /* ViajesPubCPage */], icono: "car" },
            { title: 'Perfil', component: '', icono: "contact" }
        ];
        this.pages_pas = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icono: "home" },
            { title: 'Ver rutas', component: __WEBPACK_IMPORTED_MODULE_7__pages_viajes_pasajero_viajes_pasajero__["a" /* ViajesPasajeroPage */], icono: "car" },
            { title: 'Viajes reservados', component: __WEBPACK_IMPORTED_MODULE_8__pages_viajes_reser_pasajero_viajes_reser_pasajero__["a" /* ViajesReserPasajeroPage */], icono: "walk" },
            { title: 'Perfil', component: '', icono: "contact" }
        ];
    };
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
        this.nav.setRoot(page);
    };
    MyApp.prototype.gotoLogin = function () {
        //this.nav.setRoot(login)
        //close to all sessions
    };
    MyApp.prototype.activatechangeMode = function (event) {
        console.log(event);
        this.evento = event;
        this.createAlert();
        //this.nav.setRoot(homepasajero);
    };
    MyApp.prototype.createAlert = function () {
        var _this = this;
        var text_msg;
        if (this.evento) {
            text_msg = "activar";
        }
        else {
            text_msg = "desactivar";
        }
        var alert = this.alertCtrl.create({
            title: 'Modo conductor',
            message: '¿Est&aacute; seguro de querer ' + text_msg + ' el modo conductor?',
            buttons: [{
                    text: 'Si',
                    handler: function () {
                        _this.actionChangeMode();
                    }
                },
                {
                    text: 'No', handler: function () {
                        _this.rdbnReturn();
                    }
                }]
        });
        alert.present();
    };
    MyApp.prototype.rdbnReturn = function () {
        if (this.evento)
            this.radiobtn = false;
        else
            this.radiobtn = true;
    };
    MyApp.prototype.actionChangeMode = function () {
        if (this.evento) {
            this.pasajero = false;
            this.conductor = true;
            this.myservices.pasajero = this.pasajero;
            this.myservices.conductor = this.conductor;
            console.log("modo conductor activo");
        }
        else {
            this.pasajero = true;
            this.conductor = false;
            console.log("modo conductor inactivo");
            this.myservices.pasajero = this.pasajero;
            this.myservices.conductor = this.conductor;
        }
        this.openPage(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        this.menu.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar style="padding:0 16px 0;">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-5>\n            <div id="circular">\n              <img src="assets/imgs/1.png">\n            </div>\n          </ion-col> \n          <ion-col>\n            <h5 ion-text style="margin: 10% 0;">{{PrimerNombre}}Bertil</h5>\n            <h5 ion-text>{{SegundoNombre}}Tandayamo</h5>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content padding id="content-menu">\n    <ion-list no-lines>\n      <div *ngIf="conductor">\n        <button id="item-button" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p.component)">\n          <ion-icon [name]="p.icono" item-start></ion-icon>\n          {{p.title}}\n        </button>\n      </div>\n      <div *ngIf="pasajero">\n        <button id="item-button" menuClose ion-item *ngFor="let p of pages_pas" (click)="openPage(p.component)">\n          <ion-icon [name]="p.icono" item-start></ion-icon>\n          {{p.title}}\n        </button>\n      </div>\n      <button id="item-button" ion-item>\n        <ion-icon name="person" item-start></ion-icon>\n        <ion-label>Conductor</ion-label>\n        <ion-toggle [(ngModel)]="radiobtn" color="danger" (ngModelChange)="activatechangeMode($event)"></ion-toggle>\n      </button>\n      <button id="item-button" menuClose ion-item (click)="gotoLogin()">\n        <ion-icon name="exit" item-start></ion-icon>\n        Salir\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__providers_home_service_home_service__["a" /* HomeServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_home_service_home_service__["a" /* HomeServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _g || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesReserPasajeroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViajesReserPasajeroPage = (function () {
    function ViajesReserPasajeroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viajes_reservados = this.array_viajes();
    }
    ViajesReserPasajeroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViajesReserPasajeroPage');
    };
    ViajesReserPasajeroPage.prototype.goToDetails = function (itemid) {
        console.log('ir detalles de viajes reservados ');
        // this.navCtrl.push(DetRutaCPage, {
        //   datos: this.viajes_pub[itemid - 1]
        // })
    };
    ViajesReserPasajeroPage.prototype.returnestado = function (estado) {
        var color;
        if (estado === 1) {
            this.color = 'espera';
            color = 'Aprobado';
        }
        else if (estado === 0) {
            this.color = 'danger';
            color = 'No aprobado';
        }
        else {
            this.color = 'aprobado';
            color = 'En espera';
        }
        console.log('this,color: ', this.color);
        return color;
    };
    ViajesReserPasajeroPage.prototype.array_viajes = function () {
        return [{
                id: 1,
                origen: "Ibarra",
                destino: "UTN Ibarra",
                hora: "07:00",
                fecha: "Sab.27 sept.",
                detalles: {
                    descripcion: "Voy a salir desde mi casa en Caranqui para pasar por los Ceibos y llegar a la universidad por la victoria. Quien sea que este por esa ruta reserve el viaje. Tengo dos asientos disponibles salgo a las 7 de mi casa.",
                    ubicacion: "http://www.elclarinete.com.mx/wp-content/uploads/2017/12/google-maps.png",
                    textoubicacion: "Av, 17 de Julio. Ibarra . Imbabura, Universidad Tecnica del Norte",
                    ruta: "http://www.samtrans.com/Assets/SamTrans/Timetables/RB121/Maps/Route+61_2016_08-07.png",
                },
                conductor: {
                    auto: {
                        placa: "PCC0629",
                        modelo: "IBIZA",
                        marca: "SEAT",
                        color: "Negro",
                        imagen: "assets/imgs/01.png"
                    },
                    nombre: "Pepito Adolfo",
                    apellido: "Perez Hitler",
                    fotografia: "assets/imgs/profileOK.jpg",
                    ocupacion: 'Docente',
                    facultad: "FICA",
                    carrera: "Sistemas",
                    genero: "Masculino",
                    telefono: '09999999',
                    informacion: 'Soy una persona reservada hablo lo necesario, no se permite fumar. Y siempre al servicio'
                },
                estado: 1
            },
            {
                id: 2,
                origen: "Otavalo",
                destino: "Ibarra",
                hora: "08:00",
                fecha: "Dom.28 oct.",
                detalles: {
                    descripcion: "2Voy a salir desde mi casa en Caranqui para pasar por los Ceibos y llegar a la universidad por la victoria. Quien sea que este por esa ruta reserve el viaje. Tengo dos asientos disponibles salgo a las 7 de mi casa.",
                    ubicacion: "http://www.elclarinete.com.mx/wp-content/uploads/2017/12/google-maps.png",
                    textoubicacion: "Otavalo, Av  Bolivar, Plaza de ponchos",
                    ruta: "http://www.samtrans.com/Assets/SamTrans/Timetables/RB121/Maps/Route+61_2016_08-07.png",
                },
                conductor: {
                    auto: {
                        placa: "XYZ0629",
                        modelo: "FAMILY",
                        color: "Azul",
                        marca: "CHEVROLET",
                        imagen: "assets/imgs/01.png"
                    },
                    nombre: "Maria Jane",
                    apellido: "Juana Parker",
                    fotografia: "https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-1200x800.jpg",
                    ocupacion: 'Docente',
                    facultad: "FCCSS",
                    carrera: "Enfermeria",
                    genero: "Femenino",
                    telefono: '0888888',
                    informacion: 'Soy una persona reservada hablo lo necesario, no se permite fumar. Y siempre al servicio'
                },
                estado: 0
            }];
    };
    ViajesReserPasajeroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viajes-reser-pasajero',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-reser-pasajero\viajes-reser-pasajero.html"*/'<ion-header>\n\n  <ion-navbar color="danger" text-center>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-buttons left>\n            <button ion-button icon-only clear>\n              <ion-icon name="person"></ion-icon>\n              <ion-title>Viajes reservados</ion-title>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor="let item of viajes_reservados">\n    <ion-card-content text-center>\n      <ion-card-title>\n        <ion-row>\n          <ion-col>\n            {{item.origen}}\n          </ion-col>\n          <ion-col col-1>\n            <ion-icon name="arrow-round-forward" id="arrow" color="iconos"></ion-icon>\n          </ion-col>\n          <ion-col>\n            {{item.destino}}\n          </ion-col>\n        </ion-row>\n      </ion-card-title>\n      <p>\n        {{item.hora}} &nbsp;&nbsp;&nbsp; <strong>{{item.fecha}}</strong>\n      </p>\n      <strong ion-text color="{{color}}">{{returnestado(item.estado)}}</strong>\n    </ion-card-content>\n    <div id="foot">\n      <ion-row>\n        <ion-col text-center>\n          <button ion-button clear color="iconos" icon-start>\n            <ion-icon name=\'person\'></ion-icon>\n            Conductor\n          </button>\n        </ion-col>\n        <ion-col text-left>\n          <button ion-button clear color="iconos" icon-start (click)="goToDetails(item.id)">\n            <ion-icon name=\'list-box\'></ion-icon>\n            Detalles\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-reser-pasajero\viajes-reser-pasajero.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object])
    ], ViajesReserPasajeroPage);
    return ViajesReserPasajeroPage;
    var _a, _b;
}());

//# sourceMappingURL=viajes-reser-pasajero.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesDestinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_home_destino_set_home_destino__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__set_map_destino_set_map_destino__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_c_view_ruta_home_c_view_ruta__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(30);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_home_origen_set_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__set_map_origen_set_map_origen__ = __webpack_require__(115);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ViajesOrigenPage);
    return ViajesOrigenPage;
}());

//# sourceMappingURL=viajes-origen.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajesPubCPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__det_ruta_c_det_ruta_c__ = __webpack_require__(111);
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
                ubicacion: "http://www.elclarinete.com.mx/wp-content/uploads/2017/12/google-maps.png",
                textoubicacion: "Av, 17 de Julio. Ibarra . Imbabura, Universidad Tecnica del Norte",
                ruta: "http://www.samtrans.com/Assets/SamTrans/Timetables/RB121/Maps/Route+61_2016_08-07.png",
                solicitud: [{
                        nombre: "Pepito Adolfo",
                        apellido: "Perez Hitler",
                        fotografia: "assets/imgs/profileOK.jpg",
                        facultad: "FICA",
                        carrera: "Sistemas",
                        genero: "Masculino"
                    },
                    {
                        nombre: "Maria",
                        apellido: "Juana Cabrera",
                        fotografia: "https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-1200x800.jpg",
                        facultad: "FCCSS",
                        carrera: "Enfermeria",
                        genero: "Femenino"
                    }]
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
                ubicacion: "http://www.elclarinete.com.mx/wp-content/uploads/2017/12/google-maps.png",
                textoubicacion: "Otavalo, Av  Bolivar, Plaza de ponchos",
                ruta: "http://www.samtrans.com/Assets/SamTrans/Timetables/RB121/Maps/Route+61_2016_08-07.png",
                solicitud: [
                    {
                        nombre: "Maria Jane",
                        apellido: "Juana Parker",
                        fotografia: "https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-1200x800.jpg",
                        facultad: "FCCSS",
                        carrera: "Enfermeria",
                        genero: "Femenino"
                    },
                    {
                        nombre: "Pepito Adolf",
                        apellido: "Perez Saenz",
                        fotografia: "https://ep01.epimg.net/elpais/imagenes/2018/11/06/gente/1541494541_621304_1541494790_noticia_normal.jpg",
                        facultad: "FICA",
                        carrera: "Sistemas",
                        genero: "Masculino"
                    }
                ]
            }];
    };
    ViajesPubCPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viajes-pub-c',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-pub-c\viajes-pub-c.html"*/'<ion-header>\n  <ion-navbar color="danger" text-center>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-buttons left>\n            <button ion-button icon-only clear>\n              <ion-icon name="car"></ion-icon>\n              <ion-title>Viajes publicados</ion-title>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let item of viajes_pub">\n    <ion-card-content text-center>\n      <ion-card-title>\n        <ion-row>\n          <ion-col>\n            {{item.origen}}\n          </ion-col>\n          <ion-col col-1>\n            <ion-icon name="arrow-round-forward" id="arrow" color="iconos"></ion-icon>\n          </ion-col>\n          <ion-col>\n            {{item.destino}}\n          </ion-col>\n        </ion-row>\n      </ion-card-title>\n      <p>\n        {{item.hora}} &nbsp;&nbsp;&nbsp; <strong>{{item.fecha}}</strong>\n      </p>\n    </ion-card-content>\n\n    <ion-row id="foot">\n      <ion-col text-right>\n        <button ion-button clear color="iconos" icon-start>\n          <ion-icon name=\'create\'></ion-icon>\n          Editar\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear color="iconos" icon-start>\n          <ion-icon name=\'trash\'></ion-icon>\n          Eliminar\n        </button>\n      </ion-col>\n      <ion-col text-left>\n        <button ion-button clear color="iconos" icon-start (click)="goToDetails(item.id)">\n          <ion-icon name=\'list-box\'></ion-icon>\n          Detalles\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\viajes-pub-c\viajes-pub-c.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ViajesPubCPage);
    return ViajesPubCPage;
}());

//# sourceMappingURL=viajes-pub-c.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viajes_main_c_viajes_main_c__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_home_service_home_service__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(myservices, loadingCtrl, nav) {
        this.myservices = myservices;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.pasajero = myservices.pasajero;
        this.conductor = myservices.conductor;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setInterval(function () {
            _this.pasajero = _this.myservices.pasajero;
            _this.conductor = _this.myservices.conductor;
            //console.log('this.pasajero: ', this.pasajero, ' this.conductor: ', this.conductor)
        }, 1000);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.goToDriver = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__viajes_main_c_viajes_main_c__["a" /* ViajesMainCPage */]);
        //this.nav.setRoot(pagina)
    };
    HomePage.prototype.goToPass = function () {
        console.log("ir a pasajero");
        //this.nav.push(ViajesMainCPage)
        //this.nav.setRoot(pagina)
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\home\home.html"*/'<!-- <ion-header>\n\n  <ion-navbar color="danger">\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n\n\n<ion-content>\n\n\n\n  <div *ngIf="conductor">\n\n    <div class="relative">\n\n        <ion-icon menuToggle name=\'menu\' id="absolute-text"></ion-icon>\n\n      <img id="imgbck" src="assets/imgs/car.png">\n\n      <button large round class="absolute-text" ion-button (click)="goToDriver()" color="danger">\n\n        A donde te diriges</button>\n\n    </div>\n\n    <div class="home-text">\n\n      <h2>¿Vas a salir con tu coche?</h2>\n\n      <h6 ion-text>Dale un avent&oacute;n a alguien que dejo su coche en casa<br>\n\n        Ayuda a que la congestion vehicular en la comunidad unversitaria se minimice\n\n      </h6>\n\n    </div>\n\n  </div>\n\n  <div *ngIf="pasajero">\n\n    <div class="relative">\n\n      <ion-icon menuToggle name=\'menu\' id="absolute-text"></ion-icon>\n\n      <img id="imgbck" src="assets/imgs/car2.png">\n\n      <button large round class="absolute-text" ion-button (click)="goToPass()" color="danger">\n\n        Encuentra un avent&oacute;n</button>\n\n    </div>\n\n    <div class="home-text">\n\n      <h2>¿Te queda cerca?</h2>\n\n      <h6 ion-text>Es una buena idea compartir tu viaje con tu amigo <br>\n\n        universitario. Se parte del cambio cultural\n\n      </h6>\n\n    </div>\n\n  </div>\n\n  <!-- <button ion-button color="danger"> Encuentra tu aventon</button> -->\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bertil\Downloads\ionic_project_kubix\kubix1.1.3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_home_service_home_service__["a" /* HomeServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeServiceProvider = (function () {
    function HomeServiceProvider() {
        console.log('Hello HomeServiceProvider Provider');
    }
    Object.defineProperty(HomeServiceProvider.prototype, "pasajero", {
        get: function () {
            return this._pasajero;
        },
        set: function (value) {
            this._pasajero = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceProvider.prototype, "conductor", {
        get: function () {
            return this._conductor;
        },
        set: function (value) {
            this._conductor = value;
        },
        enumerable: true,
        configurable: true
    });
    HomeServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HomeServiceProvider);
    return HomeServiceProvider;
}());

//# sourceMappingURL=home-service.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map