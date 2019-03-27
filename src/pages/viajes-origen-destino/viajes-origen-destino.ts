import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {ViajesOrigenPage} from '../viajes-origen/viajes-origen';
import {ViajesDestinoPage} from '../viajes-destino/viajes-destino';

@IonicPage()
@Component({
  selector: 'page-viajes-origen-destino',
  templateUrl: 'viajes-origen-destino.html',
})
export class ViajesOrigenDestinoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesOrigenDestinoPage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Informaci&oacute;n',
      message: 'La universidad siempre ser&aacute; un punto de partida o de llegada',
      buttons: ['OK']
    });
    alert.present();
  }

  goToOrigen(){
    this.navCtrl.push(ViajesOrigenPage);
  }

  goToDestino(){
    this.navCtrl.push(ViajesDestinoPage);
  }

}
