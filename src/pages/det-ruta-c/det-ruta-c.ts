import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { InfoPasajeroSolPage } from '../info-pasajero-sol/info-pasajero-sol';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { ViewMapDetallesPage } from '../view-map-detalles/view-map-detalles';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { TitleCasePipe } from '@angular/common';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-det-ruta-c',
  templateUrl: 'det-ruta-c.html',
})
export class DetRutaCPage {

  public proceso_v: string;
  viajedet;
  carObject = {
    placa: null, foto: null, marca: null, modelo: null,
    color: null, codigo_marca: null, codigo_modelo: null, codigo_vehiculo: null
  };
  solicitudArray;
  items;

  constructor(public loadingCtrl: LoadingController, private photoViewer: PhotoViewer, private socialSharing: SocialSharing,
    public myservices: EnvironmentVarService, private titlecasePipe: TitleCasePipe,
    public navCtrl: NavController, public apiRestService: RestApiServiceProvider,
    public navParams: NavParams,
    private sanitizer: DomSanitizer,
    public modalCtrl: ModalController) {

    this.viajedet = navParams.get('datos')
  }


  ionViewDidLoad() {
    this.getVehiculoInfo();
    this.getSolicitudesPasajero(this.viajedet.adicional.codigo_viaje);
    //this.initMapa();
    this.proceso_v = 'ruta';
    console.log('ionViewDidLoad DetRutaCPage');
  }



  public async getSolicitudesPasajero(codigo_viaje: number) {
    this.solicitudArray = [];
    let solicitudObject;
    //let cedulasArray = [];
    let resp = await this.apiRestService.getSolcitudesPasajeros(codigo_viaje).toPromise();
    this.items = resp.items.length;
    for (let obj of resp.items) {
      let resp = await this.apiRestService.getUsuario(obj.cedula).toPromise();
      let foto: any;
      if (resp.items[0].FOTO != null || undefined) {
        foto = 'data:image/png;base64,' + resp.items[0].FOTO;
        foto = this.sanitizer.bypassSecurityTrustUrl(foto);
      }
      solicitudObject = {
        foto: foto,
        primer_nombre: resp.items[0].PRIMER_NOMBRE,
        segundo_nombre: resp.items[0].SEGUNDO_NOMBRE,
        primer_apellido: resp.items[0].PRIMER_APELLIDO,
        genero: resp.items[0].GENERO,
        celular: resp.items[0].TELEFONO_MOVIL,
        dependencias: await this.getDependencias(obj.cedula)
      };
      console.log('this.getDependencias(obj.cedula): ', await this.getDependencias(obj.cedula));
      this.solicitudArray.push(solicitudObject);
    }

  }

  public async getDependencias(cedula: string) {
    let resp = await this.apiRestService.getDependencias(cedula).toPromise();
    let dependencia: string;
    dependencia = resp.items[0].tipo_persona + '\n';
    dependencia = dependencia + resp.items[0].imparte_clase_en;
    return dependencia;
  }


  public getVehiculoInfo() {
    let loadingCrtlRefresh = this.loadingCtrl.create();
    loadingCrtlRefresh.present();
    this.apiRestService.getVehiculoInfo().subscribe((resp) => {
      if (resp.items[0].PLACA != null || undefined) {
        this.myservices.carExists = true;
        this.carObject.placa = resp.items[0].PLACA;
        this.carObject.marca = resp.items[0].MARCA;
        this.carObject.modelo = resp.items[0].MODELO;
        this.carObject.color = resp.items[0].COLOR;
        this.carObject.codigo_marca = resp.items[0].ID_MARCA;
        this.carObject.codigo_modelo = resp.items[0].ID_MODELO;
        this.carObject.codigo_vehiculo = resp.items[0].CODIGO_VEHICULO;
        if (resp.items[0].FOTO != null || undefined) {
          this.carObject.foto = this.myservices.sanitizeUrl('data:image/png;base64,' + resp.items[0].FOTO);
        }
      } else
        this.myservices.carExists = false;

      if (loadingCrtlRefresh != null || undefined)
        loadingCrtlRefresh.dismiss();
    });
    this.myservices.carExists = undefined;
  }

  public viewMap(ruta: boolean) {
    let contactModal = this.modalCtrl.create(ViewMapDetallesPage, { datos: this.viajedet, ruta: ruta });
    contactModal.present();
  }

  public viewImage(source) {
    this.photoViewer.show(source);
    //'https://www.ruta0.com/pix/una-ruta.jpg'
  }


  public gotoInfoPasajero(cedula: string) {
    let contactModal = this.modalCtrl.create(InfoPasajeroSolPage, { cedula: cedula });
    contactModal.present();
  }


  public sendWhatsapp(personaSol: any) {
    let apelativo = personaSol.genero == 'M' ? 'Compa\xF1ero' : 'Compa\xF1era';
    let solicitanteName = personaSol.primer_nombre + ' ' +
      personaSol.segundo_nombre + ' ' +
      personaSol.primer_apellido;
    solicitanteName = this.titlecaseTransform(solicitanteName);

    let origen = this.viajedet.origen.lat == 0.3581583 ? this.viajedet.origen.short_name : this.viajedet.origen.full_name;
    let destino = this.viajedet.destino.lat == 0.3581583 ? this.viajedet.destino.short_name : this.viajedet.destino.full_name;
    let ruta = '*Origen:* ' + origen + '\n*Destino:* ' + destino;
    let user = this.myservices.userData.primer_nombre + ' ' + this.myservices.userData.segundo_nombre + ' ' +
      this.myservices.userData.primer_apellido;
    user = this.titlecaseTransform(user);

    let message: string = apelativo + ' ' + solicitanteName + ' saludos.' +
      '\nUsted habia solicitado desde la aplicacion KUBIX-UTN compartir el viaje\n' + ruta +
      "\nLe informo que salgo a las " + this.viajedet.adicional.hora + '.\n  Cualquier cosa no dude en escribirme o llamarme.' +
      "\n*Atentamente:* " + user;
    let celular = personaSol.celular.replace('0', '593');
    this.sendWhatsappAction(celular, message);

  }

  public sendWhatsappAction(receiver, message) {
    this.actionListenerSendWhatsapp(receiver, message).then((resp) => {
      console.log('aplicacion abierta: ', resp);
    }).catch((e) => {
      console.log('error de envio: ', e);
    });

  }

  public actionListenerSendWhatsapp(receiver: string, message: string) {
    return this.socialSharing.shareViaWhatsAppToReceiver(receiver, message);
  }

  public titlecaseTransform(cadena: string) {
    return this.titlecasePipe.transform(cadena);
  }



}//fin clase
