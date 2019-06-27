import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { InfoPasajeroSolPage } from '../info-pasajero-sol/info-pasajero-sol';
import { HomeServiceProvider } from '../../providers/home-service/home-service';

declare var html2canvas;

@Component({
  selector: 'page-det-ruta-c',
  templateUrl: 'det-ruta-c.html',
})
export class DetRutaCPage {
  public proceso_v: string;
  viajedet

  constructor(private storage: Storage,
    public myservices: HomeServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private sanitizer: DomSanitizer,
    public modalCtrl: ModalController) {
    this.viajedet = navParams.get('datos')
    console.log(this.viajedet)


  }

  ionViewDidLoad() {
    this.proceso_v = 'descripcion'
    // if (this.myservices.solicitud) {
    //   this.proceso_v = 'solicitud'
    // }
    //this.url = "blob:http://localhost:8100/b95c7e2b-a3b4-4ac8-b51e-a9af526f3788"
    console.log('ionViewDidLoad DetRutaCPage');
    //this.storage.get('imageurl').then((val) => { this.url = this.getUrlVideo(val); console.log('url: ', this.url) })
  }


  gotoInfo(item) {
    //item mandar a buscar a la BD los datos de esa persona item=cedula 
    let contactModal = this.modalCtrl.create(InfoPasajeroSolPage, { infopasajero: this.viajedet.solicitud[item] });
    console.log('this.viajedet.solicitud[item]: ',this.viajedet.solicitud[item]);
    contactModal.present();

  }
  getUrlVideo(videoURL: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }
}
