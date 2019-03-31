import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-det-ruta-c',
  templateUrl: 'det-ruta-c.html',
})
export class DetRutaCPage {
  public proceso_v = 'descripcion'
  origen
  destino
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.origen = navParams.get('origenvp')
    this.destino = navParams.get('destinonvp')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetRutaCPage');
  }

}
