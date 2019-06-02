import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CallNumber } from '@ionic-native/call-number';



@IonicPage()
@Component({
  selector: 'page-info-pasajero-sol',
  templateUrl: 'info-pasajero-sol.html',
})
export class InfoPasajeroSolPage {
  perfil_val;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private socialSharing: SocialSharing,
    private callNumber: CallNumber) {
    this.perfil_val = this.perfil();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPasajeroSolPage');
  }

  private perfil() {
    return {
      id: 1,
      nombre: "Pepito Adolfo",
      apellido: "Perez Hitler",
      fotografia: "assets/imgs/profileOK.jpg",
      ocupacion: 'Docente',
      facultad: "FICA",
      carrera: "Sistemas",
      genero: "Masculino",
      telefono: '0984807620',
      informacion: 'Soy una persona reservada hablo lo necesario, no se permite fumar. Y siempre al servicio',
      auto: {
        placa: "PCC0629",
        modelo: "IBIZA",
        marca: "SEAT",
        color: "Negro",
        imagen: "assets/imgs/01.png"
      }
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
    let message: string = "Hola " + this.perfil_val.nombre +
      "\nUsted habia solicitado compartir el viaje desde la aplicacion KUBIX-UTN" +
      "\n*Atentamente:* " + user + "\n*PSD. Estoy estacionado por:* ";
    receiver = receiver.replace('0', '593');
    this.actionListenerSendWhatsapp(receiver, message).then((resp) => {
      console.log('aplicacion abierta: ', resp);
    }).catch((e) => {
      console.log('error de envio: ', e);
    });
  }

  actionListenerCallNumber(numberToCall: string, bypassAppChooser: boolean) {
    return this.callNumber.callNumber(numberToCall, bypassAppChooser);
  }

  call_Number(numberToCall: string) {
    numberToCall = numberToCall.replace('0', '593');
    this.actionListenerCallNumber(numberToCall, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
