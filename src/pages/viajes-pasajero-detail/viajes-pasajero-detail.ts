import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, App, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { ViajesReserPasajeroPage } from '../viajes-reser-pasajero/viajes-reser-pasajero';
import { ViewMapDetallesPage } from '../view-map-detalles/view-map-detalles';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';



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
  loadingCrtlRefresh;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
    public viewCtrl: ViewController, public modalCtrl: ModalController, public apiRestService: RestApiServiceProvider,
    public alertCtrl: AlertController, private photoViewer: PhotoViewer, public loadingCtrl: LoadingController,
    private app: App) {
    this.viajedet = navParams.get('datos');
    console.log('viaj det: ', this.viajedet);
    this.fechamsg = navParams.get('fecha');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesPasajeroDetailPage');
    console.log('viajedet: ', this.viajedet);
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

  goToReservar() {
    this.loadingCrtlRefresh = this.loadingCtrl.create();
    this.loadingCrtlRefresh.present();
    //revisar si acepta los terminos est marcado
    if (this.evento)
      this.apiRestService.reservaViaje(this.viajedet.adicional.codigo_viaje).subscribe((resp) => {
        console.log('respuesta reserva viaje: ', resp);
        if (resp.respuesta == 200)
          if (resp.response == 1) {
            //this.presentToastDurationTop('Su viaje ha sido reservado', 2000);
            //refresh get viajes reservados
            this.viewCtrl.dismiss().then(() => {
              // when this is a modal control
              this.app.getRootNav().setRoot(ViajesReserPasajeroPage);
            })
            this.loadingCrtlRefresh.dismiss();
          }
          else {
            this.presentToastDurationTop('Usted ya reservo este viaje', 3000);
            this.loadingCrtlRefresh.dismiss();
          }
      });
    else {
      this.mensaje = true
      this.loadingCrtlRefresh.dismiss();
    }

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

  public viewImage(source) {
    this.photoViewer.show(source);
    //'https://www.ruta0.com/pix/una-ruta.jpg'
  }

  presentToastDurationTop(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'top',
      duration: duration
    });
    toast.present();
  }


}
