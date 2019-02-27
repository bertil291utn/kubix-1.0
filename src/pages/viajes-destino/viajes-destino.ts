import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetHomeDestinoPage } from '../set-home-destino/set-home-destino';
import { SetMapDestinoPage } from '../set-map-destino/set-map-destino';


@IonicPage()
@Component({
  selector: 'page-viajes-destino',
  templateUrl: 'viajes-destino.html',
})
export class ViajesDestinoPage {
  // 1 true 0 false
  public tiene_casa = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesDestinoPage');
  }

  goToSetHome() {
    this.navCtrl.push(SetHomeDestinoPage);
  }
  goToSetMap() {

    this.navCtrl.push(SetMapDestinoPage);
  }
}
