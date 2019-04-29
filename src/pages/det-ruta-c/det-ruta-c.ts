import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var html2canvas;
@IonicPage()
@Component({
  selector: 'page-det-ruta-c',
  templateUrl: 'det-ruta-c.html',
})
export class DetRutaCPage {
  public proceso_v = 'descripcion'
  viajedet
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.viajedet = navParams.get('datos')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetRutaCPage');
  }

}
