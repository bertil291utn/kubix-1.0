import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-viajes-pasajero-detail',
  templateUrl: 'viajes-pasajero-detail.html',
})
export class ViajesPasajeroDetailPage {
  viajedet;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.viajedet = navParams.get('datos')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesPasajeroDetailPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
