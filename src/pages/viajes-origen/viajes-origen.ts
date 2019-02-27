import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetHomePage } from '../set-home_origen/set-home';
import { SetMapOrigenPage } from '../set-map-origen/set-map-origen';
import { HomeCViewRutaPage } from '../home-c-view-ruta/home-c-view-ruta';


@IonicPage()
@Component({
  selector: 'page-viajes-origen',
  templateUrl: 'viajes-origen.html',
})
export class ViajesOrigenPage {
  // 1 true 0 false
  public tiene_casa = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesOrigenPage');
  }
  goToSetHome() {
    this.navCtrl.push(SetHomePage);
  }

  goToSetMap() {
    this.navCtrl.push(SetMapOrigenPage);
  }

  goToViewRoute(){
    this.navCtrl.push(HomeCViewRutaPage);
  }
}
