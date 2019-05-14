import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DomSanitizer } from '@angular/platform-browser';

declare var html2canvas;
@IonicPage()
@Component({
  selector: 'page-det-ruta-c',
  templateUrl: 'det-ruta-c.html',
})
export class DetRutaCPage {
  public proceso_v = 'descripcion'
  viajedet
  
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
    this.viajedet = navParams.get('datos')
    console.log(this.viajedet)
    

  }

  ionViewDidLoad() {
    //this.url = "blob:http://localhost:8100/b95c7e2b-a3b4-4ac8-b51e-a9af526f3788"
    console.log('ionViewDidLoad DetRutaCPage');
    //this.storage.get('imageurl').then((val) => { this.url = this.getUrlVideo(val); console.log('url: ', this.url) })
  }

  getUrlVideo(videoURL: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }
}
