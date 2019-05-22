import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-viajes-reserv-detalles',
  templateUrl: 'viajes-reserv-detalles.html',
})
export class ViajesReservDetallesPage {
  viajedet;
  detalle: string;
  conductor: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.viajedet = navParams.get('datos');
    this.conductor = navParams.get('conductor');
  }

  ionViewDidLoad() {
    this.initvalues();
    console.log('ionViewDidLoad ViajesReservDetallesPage');
  }

  private initvalues() {
    if (!this.conductor) {
      this.detalle = 'descripcion';
    }
    else {
      this.detalle = 'datos';
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
