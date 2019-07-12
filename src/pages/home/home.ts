import { Component } from '@angular/core';
import { LoadingController, NavController, MenuController } from 'ionic-angular';
import { ViajesMainCPage } from '../viajes-main-c/viajes-main-c';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';
import { ViajesPasajeroPage } from '../viajes-pasajero/viajes-pasajero';
import { ViajesOrigenDestinoPage } from '../viajes-origen-destino/viajes-origen-destino';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // pasajero: boolean;
  conductor: boolean;
  varInterval;

  constructor(
    public myservices: EnvironmentVarService, private menu: MenuController,
    public loadingCtrl: LoadingController, public apiRestService: RestApiServiceProvider,
    public nav: NavController) {
    //this.pasajero = myservices.pasajero;
    this.conductor = myservices.conductor;
  }

  ionViewDidLoad() {
    console.log('auto Exists: ', this.myservices.carExists);
    //revisar en la base de datos si existe o no el campo de automovil  y el campo perfil(telfono e informacion personal)
    this.myservices.profileExists = true;//siempre verdadero 
    //this.carExists();

    console.log('ionViewDidLoad HomePage');
  }



  ionViewDidEnter() {
    this.varInterval = setInterval(() => {
      // this.pasajero = this.myservices.pasajero;
      this.conductor = this.myservices.conductor;
      // console.log('this.pasajero: ', this.pasajero, ' this.conductor: ', this.conductor)
    }, 1000);
  }


  ionViewDidLeave() {
    //pararla funcion de busqueda el momento que haya dejado el page
    clearInterval(this.varInterval);
  }




  goToDriver() {
    this.nav.push(ViajesOrigenDestinoPage)
    //this.nav.setRoot(pagina)
  }

  goToPass() {
    console.log("ir a pasajero")
    //this.nav.push(ViajesMainCPage)
    this.nav.setRoot(ViajesPasajeroPage)
  }


}
