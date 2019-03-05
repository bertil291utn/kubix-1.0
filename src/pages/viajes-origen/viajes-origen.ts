import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetHomePage } from '../set-home_origen/set-home';
import { SetMapOrigenPage } from '../set-map-origen/set-map-origen';
import { HomeCViewRutaPage } from '../home-c-view-ruta/home-c-view-ruta';

declare var google;
@IonicPage()
@Component({
  selector: 'page-viajes-origen',
  templateUrl: 'viajes-origen.html',
})
export class ViajesOrigenPage {
  // 1 true 0 false
  public tiene_casa = 0;
  origen_LatLng;
  destino_LatLng;
  origen_direccion;
  destino_direccion;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesOrigenPage');
    this.origen_LatLng = { lat: 0.3581583, lng: -78.112088 };
    //llamar api rest  buscando casa de la persona y la direccion
    this.destino_LatLng = { lat: 0.341304, lng: -78.125170 };
    this.destino_direccion='Yacucalle, Ibarra';
    this.origen_direccion='Universidad Tecnica del Norte';
  }
  goToSetHome() {
    this.navCtrl.push(SetHomePage);
  }

  goToSetMap() {
    this.navCtrl.push(SetMapOrigenPage);
  }

  goToViewRoute() {
    this.navCtrl.push(HomeCViewRutaPage, {
      origen_LatLngnvp: this.origen_LatLng,
      destino_LatLngnvp: this.destino_LatLng,
      origen_direccionnvp: this.origen_direccion,
      destino_direccionnvp: this.destino_direccion
    });
  }

}
