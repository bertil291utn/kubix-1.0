import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, App } from 'ionic-angular';
import { ViajesReserPasajeroPage } from '../viajes-reser-pasajero/viajes-reser-pasajero';


@IonicPage()
@Component({
  selector: 'page-viajes-pasajero-detail',
  templateUrl: 'viajes-pasajero-detail.html',
})
export class ViajesPasajeroDetailPage {
  viajedet;
  fechamsg: string;
  detalle: string = 'ruta';
  terminos: boolean;
  mensaje: boolean = false;
  evento: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    private app: App) {
    this.viajedet = navParams.get('datos')
    this.fechamsg = navParams.get('fecha')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesPasajeroDetailPage');
  }
  verificar(event) {
    this.evento = event;
    if (event)
      this.mensaje = false
  }

  showAlert() {
    if (this.evento)
      this.createAlert();
    else
      this.mensaje = true

    //guarda vije reservado en base de datos 
  }

  private createAlert() {
    const alert = this.alertCtrl.create({
      title: 'Informaci&oacute;n',
      message: 'Su viaje est&aacute; en modo espera. El conductor designado aprobar&aacute; su solicitud ',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.viewCtrl.dismiss().then(() => {
            // when this is a modal control
            this.app.getRootNav().setRoot(ViajesReserPasajeroPage);
          })
        }
      }]
    })
    alert.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
