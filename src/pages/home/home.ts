import { Component } from '@angular/core';

import {
  GoogleMaps, GoogleMap, GoogleMapOptions, Marker, GoogleMapsEvent
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;

  constructor(private geolocation: Geolocation,
    public loadingCtrl: LoadingController) {

  }


  ionViewDidLoad() {
    this.loadMapa();
  }


  async loadMapa() {
    const loading = this.loadingCtrl.create();
    loading.present();
    const myLatLng = await this.getLocation();
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: myLatLng.lat,
          lng: myLatLng.lng
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
     // console.log('mapa creado');
     loading.dismiss();
      this.addMarker(myLatLng.lat, myLatLng.lng);
    });

  }

  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

  private addMarker(lat: number, lng: number) {
    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat,
        lng
      }
    });
  }







}
