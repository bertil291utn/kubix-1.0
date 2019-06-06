import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-viajes-reserv-detalles',
  templateUrl: 'viajes-reserv-detalles.html',
})
export class ViajesReservDetallesPage {
  viajedet;
  detalle: string;
  conductor: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, private socialSharing: SocialSharing) {
    this.viajedet = navParams.get('datos');
    //valor para cambiar el template depndiendo si es condcutor o no 
    this.conductor = navParams.get('conductor');
  }

  ionViewDidLoad() {
    this.initvalues();
    console.log('ionViewDidLoad ViajesReservDetallesPage');
  }

  private initvalues() {
    if (!this.conductor) {
      this.detalle = 'descripcion';
    }
    else {
      this.detalle = 'datos';
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  actionListenerSendWhatsapp(receiver: string, message: string) {
    return this.socialSharing.shareViaWhatsAppToReceiver(receiver, message);
  }

  sendWhatsapp(receiver: string) {
    //anadir nombres y apellidos
    //traer los datos del usuario  de como esta logeado
    let user = "Bertil Tandayamo";
    let message: string = "Buenas tardes " + this.viajedet.conductor.nombre +
      "\nAacabo de reservar el viaje mediante la aplicacion KUBIX-UTN. Me gustaria saber si puedo viajar" +
      "\n*Atentamente:* " + user;
    receiver = receiver.replace('0', '593');
    this.actionListenerSendWhatsapp(receiver, message).then((resp) => {
      console.log('aplicacion abierta: ', resp);
    }).catch((e) => {
      console.log('error de envio: ', e);
    });
  }

}
