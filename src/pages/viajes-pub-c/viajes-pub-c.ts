import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetRutaCPage } from '../det-ruta-c/det-ruta-c';


@Component({
  selector: 'page-viajes-pub-c',
  templateUrl: 'viajes-pub-c.html',
})

export class ViajesPubCPage {
  viajes_pub


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // let q = navCtrl.getViews();
    // console.log('navigation navctrl: ', q)

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
      ubicacion: "http://www.elclarinete.com.mx/wp-content/uploads/2017/12/google-maps.png",
      textoubicacion: "Av, 17 de Julio. Ibarra . Imbabura, Universidad Tecnica del Norte",
      ruta: "http://www.samtrans.com/Assets/SamTrans/Timetables/RB121/Maps/Route+61_2016_08-07.png",
      solicitud: [{
        id: 1,
        nombre: "Pepito Adolfo",
        apellido: "Perez Hitler",
        fotografia: "assets/imgs/profileOK.jpg",
        facultad: "FICA",
        carrera: "Sistemas",
        genero: "Masculino",
        telefono: '0984845620',
        preferencias: { chat: 1, fumar: 1, musica: 1 }
      },
      {
        id: 2,
        nombre: "Maria",
        apellido: "Juana Cabrera",
        fotografia: "https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-1200x800.jpg",
        facultad: "FCCSS",
        carrera: "Enfermeria",
        genero: "Femenino",
        telefono: '0983407620',
        preferencias: { chat: 2, fumar: 2, musica: 1 }
      }]

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
      ubicacion: "http://www.elclarinete.com.mx/wp-content/uploads/2017/12/google-maps.png",
      textoubicacion: "Otavalo, Av  Bolivar, Plaza de ponchos",
      ruta: "http://www.samtrans.com/Assets/SamTrans/Timetables/RB121/Maps/Route+61_2016_08-07.png",
      solicitud: [
        {
          id: 1,
          nombre: "Maria Jane",
          apellido: "Juana Parker",
          fotografia: "https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-1200x800.jpg",
          facultad: "FCCSS",
          carrera: "Enfermeria",
          genero: "Femenino",
          telefono: '0984823620',
          preferencias: { chat: 1, fumar: 2, musica: 1 }
        },
        {
          id: 2,
          nombre: "Pepito Adolf",
          apellido: "Perez Saenz",
          fotografia: "https://ep01.epimg.net/elpais/imagenes/2018/11/06/gente/1541494541_621304_1541494790_noticia_normal.jpg",
          facultad: "FICA",
          carrera: "Sistemas",
          genero: "Masculino",
          telefono: '0984805620',
          preferencias: { chat: 2, fumar: 2, musica: 1 }
        }]
    }]
  }





}
