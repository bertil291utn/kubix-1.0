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
    //recibir datos desde la BD. Viajes publicados de este cedula  
    this.viajes_pub = this.arrayViajesPub()
  }

  goToDetails(itemid) {
    this.navCtrl.push(DetRutaCPage, {
      datos: this.viajes_pub[itemid - 1]
    })
  }




  private arrayViajesPub() {
    return [{
      id: 1,
      origen: "Ibarra",
      destino: "UTN Ibarra",
      hora: "07:00",
      fecha: "Sab.27 sept.",
      descripcion: "Voy a salir desde mi casa en Caranqui para pasar por los Ceibos y llegar a la universidad por la victoria. Quien sea que este por esa ruta reserve el viaje. Tengo dos asientos disponibles salgo a las 7 de mi casa.",
      auto: {
        placa: "PCC0629",
        modelo: "IBIZA",
        marca: "SEAT",
        color: "Negro",
        imagen: "assets/imgs/01.png"
      },
      ubicacion: "",
      ruta: ""

    },
    {
      id: 2,
      origen: "Otavalo",
      destino: "Ibarra",
      hora: "08:00",
      fecha: "Dom.28 oct.",
      descripcion: "2Voy a salir desde mi casa en Caranqui para pasar por los Ceibos y llegar a la universidad por la victoria. Quien sea que este por esa ruta reserve el viaje. Tengo dos asientos disponibles salgo a las 7 de mi casa.",
      auto: {
        placa: "XYZ0629",
        modelo: "FAMILY",
        color: "Azul",
        marca: "CHEVROLET",
        imagen: "assets/imgs/01.png"
      },
      ubicacion: "",
      ruta: ""
    }]
  }





}
