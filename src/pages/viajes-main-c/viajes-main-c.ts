import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViajesOrigenDestinoPage } from '../viajes-origen-destino/viajes-origen-destino';


@Component({
  selector: 'page-viajes-main-c',
  templateUrl: 'viajes-main-c.html',
})
export class ViajesMainCPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesMainCPage');
  }

  optionOrigenDestino() {
    this.nav.push(ViajesOrigenDestinoPage);
  }


  // async loadMapa() {
  //   const loading = this.loadingCtrl.create();
  //   loading.present();
  //   const myLatLng = await this.getLocation();
  //   let mapOptions: GoogleMapOptions = {
  //     camera: {
  //       target: {
  //         lat: myLatLng.lat,
  //         lng: myLatLng.lng
  //       },
  //       zoom: 18
  //     }
  //   };
  //   this.map = GoogleMaps.create('map_canvas2', mapOptions);

  //   this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
  //     loading.dismiss();
  //     //this.addMarker(myLatLng.lat, myLatLng.lng);
  //   });

  // }

  // async targetMap() {
  //   const myLatLng = await this.getLocation();
  //   this.map.setCameraTarget(myLatLng);
  //   this.map.setCameraZoom(18);
  //   //this.addMarker(myLatLng.lat, myLatLng.lng);
  // }

  // private async getLocation() {
  //   const rta = await this.geolocation.getCurrentPosition();
  //   return {
  //     lat: rta.coords.latitude,
  //     lng: rta.coords.longitude
  //   };
  // }

  // private addMarker(lat: number, lng: number) {
  //   let marker: Marker = this.map.addMarkerSync({
  //     position: {
  //       lat,
  //       lng
  //     }
  //   });
  // }

}
