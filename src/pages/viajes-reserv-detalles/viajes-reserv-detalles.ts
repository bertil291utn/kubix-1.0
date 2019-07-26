import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, ModalController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { ViewMapDetallesPage } from '../view-map-detalles/view-map-detalles';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { CarPage } from '../car/car';
import { TitleCasePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';


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
    foto: null,
    primer_nombre: null,
    segundo_nombre: null,
    primer_apellido: null,
    email: null,
    celular: null,
    genero: null,
    dependencias: null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public myservices: EnvironmentVarService,
    public viewCtrl: ViewController, private socialSharing: SocialSharing, public apiRestService: RestApiServiceProvider,
    public loadingCtrl: LoadingController, public modalCtrl: ModalController, private photoViewer: PhotoViewer,
    private titlecasePipe: TitleCasePipe, private sanitizer: DomSanitizer) {
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
    this.getDependencias(this.viajedet.adicional.cedula);
  }

  public getDependencias(cedula: string) {
    this.apiRestService.getDependencias(cedula).subscribe((resp) => {
      this.conductorObject.dependencias = resp.items[0].tipo_persona + '\n';
      this.conductorObject.dependencias = this.conductorObject.dependencias + resp.items[0].imparte_clase_en;
      console.log('dependeicas: ', this.conductorObject.dependencias);
    });

  }


  private getUserInfo(cedula: string) {
    this.apiRestService.getUsuario(cedula)
      .subscribe((resp) => {
        if (resp.items[0].FOTO != null || undefined) {
          this.conductorObject.foto = 'data:image/png;base64,' + resp.items[0].FOTO;
          this.conductorObject.foto = this.sanitizer.bypassSecurityTrustUrl(this.conductorObject.foto)
        }
        this.conductorObject.primer_nombre = resp.items[0].PRIMER_NOMBRE;
        this.conductorObject.segundo_nombre = resp.items[0].SEGUNDO_NOMBRE;
        this.conductorObject.primer_apellido = resp.items[0].PRIMER_APELLIDO;
        this.conductorObject.email = resp.items[0].CORREO_INSTITUCIONAL;
        this.conductorObject.celular = resp.items[0].TELEFONO_MOVIL;
        this.conductorObject.genero = resp.items[0].GENERO;
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

  public actionListenerSendWhatsapp(receiver: string, message: string) {
    return this.socialSharing.shareViaWhatsAppToReceiver(receiver, message);
  }

  sendWhatsapp(telefono: string) {
    let user = this.myservices.userData.primer_nombre + ' ' + this.myservices.userData.segundo_nombre + ' ' +
      this.myservices.userData.primer_apellido;
    user = this.titlecaseTransform(user);
    let conductorName = this.conductorObject.primer_nombre + ' ' +
      this.conductorObject.segundo_nombre + ' ' +
      this.conductorObject.primer_apellido;
    conductorName = this.titlecaseTransform(conductorName);
    // {{viajedet.origen.lat==0.3581583?viajedet.origen.short_name:viajedet.origen.full_name}}
    let origen = this.viajedet.origen.lat == 0.3581583 ? this.viajedet.origen.short_name : this.viajedet.origen.full_name;
    let destino = this.viajedet.destino.lat == 0.3581583 ? this.viajedet.destino.short_name : this.viajedet.destino.full_name;
    let ruta = '*Origen:* ' + origen + '\n*Destino:* ' + destino;
    let apelativo = this.conductorObject.genero == 'M' ? 'Compa\xF1ero' : 'Compa\xF1era';
    let message: string = apelativo + ' ' + conductorName + ' saludos.' +
      "\nAcabo de reservar la ruta: \n" + ruta +
      "\nmediante la aplicaci\xF3n KUBIX-UTN. Me gustar\xEDa saber si puedo viajar con usted. Muchas gracias" +
      "\n*Atentamente:* " + user;
    telefono = telefono.replace('0', '593');
    this.sendWhatsappAction(telefono, message);

  }

  public sendWhatsappAction(receiver, message) {
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

  public goToAuto(reserva: boolean) {
    let contactModal = this.modalCtrl.create(CarPage, { car: this.viajedet.adicional.cedula, reserva: reserva });
    contactModal.present();
  }

  public titlecaseTransform(cadena: string) {
    return this.titlecasePipe.transform(cadena);
  }

}
