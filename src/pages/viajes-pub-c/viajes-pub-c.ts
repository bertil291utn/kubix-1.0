import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetRutaCPage } from '../det-ruta-c/det-ruta-c';

@IonicPage()
@Component({
  selector: 'page-viajes-pub-c',
  templateUrl: 'viajes-pub-c.html',
})

export class ViajesPubCPage {
  viajes_pub
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesPubCPage');
    this.viajes_pub = this.arrayViajesPub()
  }

  goToDetails(itemid) {
    this.navCtrl.push(DetRutaCPage, {
      origenvp: this.viajes_pub[itemid - 1].origen,
      destinonvp: this.viajes_pub[itemid - 1].destino
    })
  }




  private arrayViajesPub() {
    return [{
      id: 1,
      origen: "Ibarra",
      destino: "UTN Ibarra",
      hora: "07:00",
      fecha: "Sab.27 sept."
    },
    {
      id: 2,
      origen: "Otavalo",
      destino: "Ibarra",
      hora: "08:00",
      fecha: "Dom.28 oct."
    }]
  }





}
