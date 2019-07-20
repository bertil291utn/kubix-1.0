import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, App, ModalController } from 'ionic-angular';
import { ViajesReserPasajeroPage } from '../viajes-reser-pasajero/viajes-reser-pasajero';
import { ViewMapDetallesPage } from '../view-map-detalles/view-map-detalles';



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
    public viewCtrl: ViewController,public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private app: App) {
    this.viajedet = navParams.get('datos');
    this.fechamsg = navParams.get('fecha');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesPasajeroDetailPage');
  }
  verificar(event) {
    this.evento = event;
    if (event)
      this.mensaje = false
  }

  public viewMap(ruta: boolean) {
    let contactModal = this.modalCtrl.create(ViewMapDetallesPage, { datos: this.viajedet, ruta: ruta });
    contactModal.present();
  }

  showAlert() {
    //revisar si acepta los terminos est marcado
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
