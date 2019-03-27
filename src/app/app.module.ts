import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ViajesOrigenDestinoPage } from '../pages/viajes-origen-destino/viajes-origen-destino';
import { ViajesOrigenPage } from '../pages/viajes-origen/viajes-origen';
import { ViajesDestinoPage } from '../pages/viajes-destino/viajes-destino';
import { SetHomePage } from '../pages/set-home_origen/set-home'
import { SetMapOrigenPage } from '../pages/set-map-origen/set-map-origen';
import { SetHomeDestinoPage } from '../pages/set-home-destino/set-home-destino';
import { SetMapDestinoPage } from '../pages/set-map-destino/set-map-destino';
import { HomeCViewRutaPage } from '../pages/home-c-view-ruta/home-c-view-ruta';
import { ViajesConductorPage } from '../pages/viajes-conductor/viajes-conductor';
import { SetMapPtoPage } from '../pages/set-map-pto/set-map-pto'
import { ViajesPubCPage } from '../pages/viajes-pub-c/viajes-pub-c'
import { DetRutaCPage } from '../pages/det-ruta-c/det-ruta-c'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GoogleMaps } from "@ionic-native/google-maps";
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ViajesOrigenDestinoPage,
    ViajesOrigenPage,
    ViajesDestinoPage,
    SetHomePage,
    SetMapOrigenPage,
    SetHomeDestinoPage,
    SetMapDestinoPage,
    HomeCViewRutaPage,
    ViajesConductorPage,
    SetMapPtoPage,
    ViajesPubCPage,
    DetRutaCPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ViajesOrigenDestinoPage,
    ViajesOrigenPage,
    ViajesDestinoPage,
    SetHomePage,
    SetMapOrigenPage,
    SetHomeDestinoPage,
    SetMapDestinoPage,
    HomeCViewRutaPage,
    ViajesConductorPage,
    SetMapPtoPage,
    ViajesPubCPage,
    DetRutaCPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    NativeGeocoder,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
