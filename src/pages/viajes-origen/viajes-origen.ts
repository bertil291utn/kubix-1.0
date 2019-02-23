import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetHomePage } from '../set-home/set-home';
/**
 * Generated class for the ViajesOrigenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
}
