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

import { HomeCViewRutaPage } from '../pages/home-c-view-ruta/home-c-view-ruta';
import { ViajesConductorPage } from '../pages/viajes-conductor/viajes-conductor';
import { SetMapPtoPage } from '../pages/set-map-pto/set-map-pto'
import { ViajesPubCPage } from '../pages/viajes-pub-c/viajes-pub-c'
import { DetRutaCPage } from '../pages/det-ruta-c/det-ruta-c'
import { ViajesMainCPage } from '../pages/viajes-main-c/viajes-main-c'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GoogleMaps } from "@ionic-native/google-maps";
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { IonicStorageModule } from '@ionic/storage';
import { EnvironmentVarService } from '../providers/environmentVarService/environmentVarService';
import { ViajesPasajeroPage } from '../pages/viajes-pasajero/viajes-pasajero';
import { DatesFormatProvider } from '../providers/dates-format/dates-format';
import { ViajesPasajeroDetailPage } from '../pages/viajes-pasajero-detail/viajes-pasajero-detail';
import { ViajesReserPasajeroPage } from '../pages/viajes-reser-pasajero/viajes-reser-pasajero';
import { ViajesReservDetallesPage } from '../pages/viajes-reserv-detalles/viajes-reserv-detalles';
import { PerfilPage } from '../pages/perfil/perfil';
import { InfoPasajeroSolPage } from '../pages/info-pasajero-sol/info-pasajero-sol';
import { RutaProvider } from '../providers/ruta/ruta';
import { CarPage } from '../pages/car/car';
import { Camera } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CallNumber } from '@ionic-native/call-number';
import { SlidesPage } from '../pages/slides/slides';
import { LoginPage } from '../pages/login/login';
import { searchTravelPasajero } from "../pages/searchTravelPasajero/searchTravelPasajero";
import { RestApiServiceProvider } from '../providers/rest-api-service/rest-api-service';
import { HttpClientModule } from '@angular/common/http';
import { StopConductorPage } from '../pages/stop-conductor/stop-conductor';
import { ViewMapDetallesPage } from '../pages/view-map-detalles/view-map-detalles';
import { TitleCasePipe } from '@angular/common';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { AuthenticationserviceProvider } from '../providers/authenticationservice/authenticationservice';
import { AuthguardProvider } from '../providers/authguard/authguard';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Network } from '@ionic-native/network';
import { NetworkProvider } from '../providers/network/network';
import { AndroidPermissions } from '@ionic-native/android-permissions';


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
    HomeCViewRutaPage,
    ViajesConductorPage,
    SetMapPtoPage,
    ViajesPubCPage,
    DetRutaCPage,
    ViajesMainCPage,
    ViajesPasajeroPage,
    ViajesPasajeroDetailPage,
    ViajesReserPasajeroPage,
    ViajesReservDetallesPage,
    PerfilPage,
    InfoPasajeroSolPage,
    CarPage,
    SlidesPage,
    LoginPage,
    searchTravelPasajero,
    StopConductorPage,
    ViewMapDetallesPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({ name: '__kubixdb' })
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
    HomeCViewRutaPage,
    ViajesConductorPage,
    SetMapPtoPage,
    ViajesPubCPage,
    DetRutaCPage,
    ViajesMainCPage,
    ViajesPasajeroPage,
    ViajesPasajeroDetailPage,
    ViajesReserPasajeroPage,
    ViajesReservDetallesPage,
    PerfilPage,
    InfoPasajeroSolPage,
    CarPage,
    SlidesPage,
    LoginPage,
    searchTravelPasajero,
    StopConductorPage,
    ViewMapDetallesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    NativeGeocoder,
    Camera,
    SocialSharing,
    CallNumber,
    PhotoViewer,
    TitleCasePipe,
    LocationAccuracy,
    Network,
    AndroidPermissions,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    EnvironmentVarService,
    DatesFormatProvider,
    RutaProvider,
    RestApiServiceProvider,
    AuthenticationserviceProvider,
    AuthguardProvider,
    NetworkProvider
  ]
})
export class AppModule { }
