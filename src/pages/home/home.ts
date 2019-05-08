import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { ViajesMainCPage } from '../viajes-main-c/viajes-main-c';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(
    public loadingCtrl: LoadingController, public nav: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  goToDriver() {
    this.nav.push(ViajesMainCPage)
  }



}
