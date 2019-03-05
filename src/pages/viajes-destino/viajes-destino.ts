import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetHomeDestinoPage } from '../set-home-destino/set-home-destino';
import { SetMapDestinoPage } from '../set-map-destino/set-map-destino';
import { HomeCViewRutaPage } from '../home-c-view-ruta/home-c-view-ruta';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
@IonicPage()
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesDestinoPage');
    this.destino_LatLng = { lat: 0.3581583, lng: -78.112088 };
    //llamar api rest  buscando casa de la persona y la direccion
    this.origen_LatLng = { lat: 0.341304, lng: -78.125170 };
    this.origen_direccion = 'Yacucalle, Ibarra';
    this.destino_direccion = 'Universidad Tecnica del Norte';
  }

  goToSetHome() {
    this.navCtrl.push(SetHomeDestinoPage);
  }
  goToSetMap() {

    this.navCtrl.push(SetMapDestinoPage);
  }
  goToViewRoute() {
    this.navCtrl.push(HomeCViewRutaPage, {
      origen_LatLngnvp: this.origen_LatLng,
      destino_LatLngnvp: this.destino_LatLng,
      origen_direccionnvp: this.origen_direccion,
      destino_direccionnvp: this.destino_direccion
    });
  }

  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

  async goTo_currentLocation() {
    this.r_g_no_native(await this.getLocation());
    this.navCtrl.push(HomeCViewRutaPage, {
      origen_LatLngnvp: await this.getLocation(),
      destino_LatLngnvp: this.destino_LatLng,
      origen_direccionnvp: this.origen_direccion,
      destino_direccionnvp: this.destino_direccion

    });
  }


  r_g_no_native(latlng) {

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
}
