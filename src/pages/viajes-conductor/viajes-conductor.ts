import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SetMapPtoPage } from '../set-map-pto/set-map-pto';
import { ViajesPubCPage } from '../viajes-pub-c/viajes-pub-c';



@IonicPage()
@Component({
  selector: 'page-viajes-conductor',
  templateUrl: 'viajes-conductor.html',
})
export class ViajesConductorPage {
  public proceso = 'horario';
  repeat = 2
  dia = new Date().getDay()
  hora
  pasajero = 1
  punto_LatLng;

  callback = data => {
    this.punto_LatLng = data;
    console.log('data received from other page', this.punto_LatLng);
  };

  constructor(public navparams: NavParams, public navCtrl: NavController,
    public navParams: NavParams, public alertCtrl: AlertController) {
    this.setHour();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesConductorPage');

  }

  showAlert() {
    this.createAlert();
    //guardar en BD los datos de la ruta 
  }


  private createAlert() {
    const alert = this.alertCtrl.create({
      title: 'Viaje publicado',
      message: 'Su viaje se ha publicado con &eacute;xito. Solo espere a que los pasajeros hagan la reserva.',
      buttons: [{
        text: 'Ver',
        handler: () => {
          this.navCtrl.push(ViajesPubCPage);
        }
      }]
    })
    alert.present()
  }

  goToMap() {
    this.navCtrl.push(SetMapPtoPage, {
      callback: this.callback
    });

  }

  private setHour() {
    this.hora = this.calculateTime('-5');
    // If it is Daylight Savings Time
    if (this.dst(new Date())) {
      this.hora = this.calculateTime('-4');
    }
  }


  goToVehicule() {
    this.proceso = 'vehiculo'
  }

  goToAdicional() {
    this.proceso = 'adicional'
  }


  calculateTime(offset: any) {
    // create Date object for current location
    let d = new Date();
    // create new Date object for different city
    // using supplied offset
    let nd = new Date(d.getTime() + (3600000 * offset));
    return nd.toISOString();
  }

  // Determine if the client uses DST
  stdTimezoneOffset(today: any) {
    let jan = new Date(today.getFullYear(), 0, 1);
    let jul = new Date(today.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  }

  dst(today: any) {
    return today.getTimezoneOffset() < this.stdTimezoneOffset(today);
  }

}