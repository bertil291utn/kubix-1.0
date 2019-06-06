import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { SetHomeDestinoPage } from '../set-home-destino/set-home-destino';
import { SetMapDestinoPage } from '../set-map-destino/set-map-destino';
import { HomeCViewRutaPage } from '../home-c-view-ruta/home-c-view-ruta';
import { Geolocation } from '@ionic-native/geolocation';
import { MyLocationOptions, LocationService, MyLocation } from '@ionic-native/google-maps';

declare var google;

@Component({
  selector: 'page-viajes-destino',
  templateUrl: 'viajes-destino.html',
})
export class ViajesDestinoPage {
  // 1 true 0 false
  public tiene_casa = 1;
  origen_LatLng;
  destino_LatLng;
  origen_direccion;
  destino_direccion;
  origen_LatLng_api
  origen_direccion_api

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private geolocation: Geolocation, public plt: Platform, public loadingCtrl: LoadingController) {

  }



  ionViewDidLoad() {

    console.log('ionViewDidLoad ViajesDestinoPage');
    this.init_values();
    this.latLngDir()
  }

  ionViewDidEnter() {
    setInterval(() => {
      this.origen_direccion
    }, 1000);
  }

  private async init_values() {
    this.destino_LatLng = { lat: 0.3581583, lng: -78.112088 };
    this.destino_direccion = 'Universidad Tecnica del Norte';
    //llamar api rest  buscando casa de la persona y la direccion
    this.origen_LatLng_api = { lat: 0.341304, lng: -78.125170 };
    this.origen_direccion_api = 'Yacucalle, Ibarra';

  }




  async latLngDir() {
    this.getDireccion(await this.getLocation());
    this.origen_LatLng = await this.getLocation();
  }

  async goToViewRoute(value) {
    const loading = this.loadingCtrl.create();
    loading.present();
    if (value == 1) {
      this.origen_direccion = this.origen_direccion_api
      this.origen_LatLng = this.origen_LatLng_api
    }
    // else {
    //   this.getDireccion(await this.getLocation());
    //   this.origen_LatLng = await this.getLocation();

    // }

    this.actionListener_goToViewRoute()
    loading.dismiss();
  }

  goToSetHome() {
    this.navCtrl.push(SetHomeDestinoPage);
  }

  goToSetMap() {
    this.navCtrl.push(SetMapDestinoPage);
  }



  private async getLocation() {
    let option: MyLocationOptions = {
      enableHighAccuracy: true
    }
    const rta = await LocationService.getMyLocation(option);
    //const rta = await this.geolocation.getCurrentPosition();
    return rta.latLng
  }


  getDireccion(latlng) {
    let geocoder = new google.maps.Geocoder;
    geocoder.geocode({ 'location': latlng }
      , (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            this.origen_direccion = results[0].formatted_address;
          }
        }
      });
  }

  actionListener_goToViewRoute() {
    this.navCtrl.push(HomeCViewRutaPage, {
      origen_LatLngnvp: this.origen_LatLng,
      destino_LatLngnvp: this.destino_LatLng,
      origen_direccionnvp: this.origen_direccion,
      destino_direccionnvp: this.destino_direccion
    });
  }


}
