import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { ViajesMainCPage } from '../viajes-main-c/viajes-main-c';
import { HomeServiceProvider } from '../../providers/home-service/home-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pasajero: boolean;
  conductor: boolean;

  constructor(
    public myservices: HomeServiceProvider,
    public loadingCtrl: LoadingController, public nav: NavController) {
    this.pasajero = myservices.pasajero;
    this.conductor = myservices.conductor;

  }
  ionViewDidEnter() {
    setInterval(() => {
      this.pasajero = this.myservices.pasajero;
      this.conductor = this.myservices.conductor;
      console.log('this.pasajero: ', this.pasajero, ' this.conductor: ', this.conductor)
    }, 1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  goToDriver() {
    this.nav.push(ViajesMainCPage)
    //this.nav.setRoot(pagina)
  }

  goToPass() {
    console.log("ir a pasajero")
    //this.nav.push(ViajesMainCPage)
    //this.nav.setRoot(pagina)
  }


}
