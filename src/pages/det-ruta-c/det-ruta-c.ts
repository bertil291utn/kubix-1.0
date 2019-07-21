import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { InfoPasajeroSolPage } from '../info-pasajero-sol/info-pasajero-sol';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { ViewMapDetallesPage } from '../view-map-detalles/view-map-detalles';
import { PhotoViewer } from '@ionic-native/photo-viewer';


declare var html2canvas;

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
  loadingCrtlRefresh;



  constructor(public loadingCtrl: LoadingController, private photoViewer: PhotoViewer,
    public myservices: EnvironmentVarService,
    public navCtrl: NavController, public apiRestService: RestApiServiceProvider,
    public navParams: NavParams, private zone: NgZone,
    private sanitizer: DomSanitizer,
    public modalCtrl: ModalController) {
    this.viajedet = navParams.get('datos')
    //console.log('viajesPublicados: ', navParams.data.viajes);
    console.log(this.viajedet)
  }


  ionViewDidLoad() {
    this.getVehiculoInfo();
    //this.initMapa();
    this.proceso_v = 'ruta';
    console.log('ionViewDidLoad DetRutaCPage');
  }


  public getVehiculoInfo() {

    this.apiRestService.getVehiculoInfo().subscribe((resp) => {
      if (resp.items[0].placa != null) {
        this.carObject.placa = resp.items[0].placa;
        this.carObject.marca = resp.items[0].marca;
        this.carObject.modelo = resp.items[0].modelo;
        this.carObject.color = resp.items[0].color;
        this.carObject.codigo_marca = resp.items[0].id_marca;
        this.carObject.codigo_modelo = resp.items[0].id_modelo;
        this.carObject.codigo_vehiculo = resp.items[0].codigo_vehiculo;
        this.carObject.foto = resp.items[0].foto;
        if (resp != null)
          if (this.loadingCrtlRefresh != undefined)
            this.loadingCrtlRefresh.dismiss();
      }
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


}//fin clase
