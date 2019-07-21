import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ModalController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { ViewMapDetallesPage } from '../view-map-detalles/view-map-detalles';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { CarPage } from '../car/car';


@Component({
  selector: 'page-viajes-reserv-detalles',
  templateUrl: 'viajes-reserv-detalles.html',
})
export class ViajesReservDetallesPage {
  viajedet;
  detalle: string;
  conductor: boolean;
  preferenciasObjetos;
  loadingCrtlRefresh;
  conductorObject = {
    foto:null,
    primer_nombre: null,
    segundo_nombre: null,
    primer_apellido: null,
    email: null,
    celular: null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, private socialSharing: SocialSharing, public apiRestService: RestApiServiceProvider,
    public loadingCtrl: LoadingController, public modalCtrl: ModalController, private photoViewer: PhotoViewer) {
    this.viajedet = navParams.get('datos');
    console.log('viajedet: ', this.viajedet);
    //valor para cambiar el template depndiendo si es condcutor o no 
    this.conductor = navParams.get('conductor');
  }


  ionViewDidLoad() {
    this.initvalues();
    console.log('ionViewDidLoad ViajesReservDetallesPage');
  }

  private initvalues() {
    this.detalle = 'ruta';
    this.getPreferencesUser(this.viajedet.adicional.cedula);
    this.getUserInfo(this.viajedet.adicional.cedula);

  }


  private getUserInfo(cedula: string) {
    this.apiRestService.getUsuario(cedula)
      .subscribe((resp) => {
        if (resp.items[0].foto != null)
        this.conductorObject.foto = 'data:image/png;base64,' + resp.items[0].foto;
        this.conductorObject.primer_nombre = resp.items[0].primer_nombre;
        this.conductorObject.segundo_nombre = resp.items[0].segundo_nombre;
        this.conductorObject.primer_apellido = resp.items[0].primer_apellido;
        this.conductorObject.email = resp.items[0].correo_institucional;
        this.conductorObject.celular = resp.items[0].telefono_movil;

      },
        (error) => {
          console.error(error);
        });
  }


  private actionListenerPreferencias(chat, musica, fumar, id_chat, id_musica, id_fumar) {
    // array con preferncias  del ususario 
    // params nivel de cada preferencia 
    this.preferenciasObjetos = [{
      id: 'C',
      codigo_preferencia: id_chat,
      nivel: chat,
      iconos: 'chatboxes',
      titulo: 'Conversar',
      nivel_edited: chat
    },
    {
      id: 'M',
      codigo_preferencia: id_musica,
      nivel: musica,
      iconos: 'musical-notes',
      titulo: 'Escuchar m\u00FAsica',
      nivel_edited: musica
    },
    {
      id: 'F',
      codigo_preferencia: id_fumar,
      nivel: fumar,
      iconos: 'no-smoking',
      titulo: 'Fumar',
      nivel_edited: fumar
    }];
  }

  private getPreferencesUser(cedula: string) {
    //solo para que que inicie loading ctrontroller al incio de la paagina, 
    //si vienes desde save edit ya no se presenta por que ya esta declarado 

    this.loadingCrtlRefresh = this.loadingCtrl.create();
    this.loadingCrtlRefresh.present();


    this.apiRestService.getUsuarioPreferences(cedula)
      .subscribe((resp) => {
        //reorganizar el objto JSON
        this.actionListenerPreferencias(resp.items[0].nivel,
          resp.items[1].nivel, resp.items[2].nivel, resp.items[0].cod_preferencia,
          resp.items[1].cod_preferencia, resp.items[2].cod_preferencia);
        console.log('resp: ', resp.items);
        // this.viewCtrl._didEnter();//llamar al lifecycle ionviewdidenter para la actualizacion 
        if (resp != null)
          if (this.loadingCrtlRefresh != undefined)
            this.loadingCrtlRefresh.dismiss();
        // else if (this.loadingControllerBegin != undefined)
        //   this.loadingControllerBegin.dismiss();
      });
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

  public viewMap(ruta: boolean) {
    let contactModal = this.modalCtrl.create(ViewMapDetallesPage, { datos: this.viajedet, ruta: ruta });
    contactModal.present();
  }

  public viewImage(source) {
    this.photoViewer.show(source);
    //'https://www.ruta0.com/pix/una-ruta.jpg'
  }

  goToAuto(reserva: boolean) {
    let contactModal = this.modalCtrl.create(CarPage, { car: this.viajedet.adicional.cedula, reserva: reserva });
    contactModal.present();
  }

}
