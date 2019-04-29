import { Component } from '@angular/core';
import { ViajesOrigenDestinoPage }from '../viajes-origen-destino/viajes-origen-destino';

import {
  GoogleMaps, GoogleMap, GoogleMapOptions, Marker, GoogleMapsEvent
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;

  constructor(private geolocation: Geolocation,
    public loadingCtrl: LoadingController, public nav: NavController) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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
        zoom: 18
      }
    };
    this.map = GoogleMaps.create('map_canvas2', mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      loading.dismiss();
      //this.addMarker(myLatLng.lat, myLatLng.lng);
    });

  }

  async targetMap() {
    const myLatLng = await this.getLocation();
    this.map.setCameraTarget(myLatLng);
    this.map.setCameraZoom(18);
    //this.addMarker(myLatLng.lat, myLatLng.lng);
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
      position: {
        lat,
        lng
      }
    });
  }

  optionOrigenDestino() {
    this.nav.push(ViajesOrigenDestinoPage);
  }







}
