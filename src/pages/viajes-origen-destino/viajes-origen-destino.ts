import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {ViajesOrigenPage} from '../viajes-origen/viajes-origen';

/**
 * Generated class for the ViajesOrigenDestinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viajes-origen-destino',
  templateUrl: 'viajes-origen-destino.html',
})
export class ViajesOrigenDestinoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesOrigenDestinoPage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Informaci&oacute;n',
      message: 'Seleccione como origen o destino la universidad, teniendo en cuenta el lugar donde se encuentra.',
      buttons: ['OK']
    });
    alert.present();
  }

  goToOrigen(){
    this.navCtrl.push(ViajesOrigenPage);
  }

}
