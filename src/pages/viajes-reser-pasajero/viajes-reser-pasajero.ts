import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-viajes-reser-pasajero',
  templateUrl: 'viajes-reser-pasajero.html',
})
export class ViajesReserPasajeroPage {
  viajes_reservados;
  estado: string;
  color: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesReserPasajeroPage');
    this.viajes_reservados = this.array_viajes()
  }

  goToDetails(itemid) {
    console.log('ir detalles de viajes reservados ');
    // this.navCtrl.push(DetRutaCPage, {
    //   datos: this.viajes_pub[itemid - 1]
    // })
  }

  returnestado(estado) {
    if (estado === 1) {
      this.color = "aprobado";
      return 'Aprobado';
    }
    else if (estado === 0) {
      this.color = "danger";
      return 'No aprobado';
    }
    else {
      this.color = "espera";
      return 'En espera';
    }

    // console.log('this,color: ', this.color)
    // return color;
  }


  private array_viajes() {
    return [{
      id: 1,
      origen: "Ibarra",
      destino: "UTN Ibarra",
      hora: "07:00",
      fecha: "Sab.27 sept.",
      detalles: {
        descripcion: "Voy a salir desde mi casa en Caranqui para pasar por los Ceibos y llegar a la universidad por la victoria. Quien sea que este por esa ruta reserve el viaje. Tengo dos asientos disponibles salgo a las 7 de mi casa.",
        ubicacion: "http://www.elclarinete.com.mx/wp-content/uploads/2017/12/google-maps.png",
        textoubicacion: "Av, 17 de Julio. Ibarra . Imbabura, Universidad Tecnica del Norte",
        ruta: "http://www.samtrans.com/Assets/SamTrans/Timetables/RB121/Maps/Route+61_2016_08-07.png",
      },
      conductor: {
        auto: {
          placa: "PCC0629",
          modelo: "IBIZA",
          marca: "SEAT",
          color: "Negro",
          imagen: "assets/imgs/01.png"
        },
        nombre: "Pepito Adolfo",
        apellido: "Perez Hitler",
        fotografia: "assets/imgs/profileOK.jpg",
        ocupacion: 'Docente',
        facultad: "FICA",
        carrera: "Sistemas",
        genero: "Masculino",
        telefono: '09999999',
        informacion: 'Soy una persona reservada hablo lo necesario, no se permite fumar. Y siempre al servicio'
      },
      estado: 1

    },
    {
      id: 2,
      origen: "Otavalo",
      destino: "Ibarra",
      hora: "08:00",
      fecha: "Dom.28 oct.",
      detalles: {
        descripcion: "2Voy a salir desde mi casa en Caranqui para pasar por los Ceibos y llegar a la universidad por la victoria. Quien sea que este por esa ruta reserve el viaje. Tengo dos asientos disponibles salgo a las 7 de mi casa.",
        ubicacion: "http://www.elclarinete.com.mx/wp-content/uploads/2017/12/google-maps.png",
        textoubicacion: "Otavalo, Av  Bolivar, Plaza de ponchos",
        ruta: "http://www.samtrans.com/Assets/SamTrans/Timetables/RB121/Maps/Route+61_2016_08-07.png",
      },
      conductor: {
        auto: {
          placa: "XYZ0629",
          modelo: "FAMILY",
          color: "Azul",
          marca: "CHEVROLET",
          imagen: "assets/imgs/01.png"
        },
        nombre: "Maria Jane",
        apellido: "Juana Parker",
        fotografia: "https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-1200x800.jpg",
        ocupacion: 'Docente',
        facultad: "FCCSS",
        carrera: "Enfermeria",
        genero: "Femenino",
        telefono: '0888888',
        informacion: 'Soy una persona reservada hablo lo necesario, no se permite fumar. Y siempre al servicio'
      },
      estado: 2

    }]
  }



}
