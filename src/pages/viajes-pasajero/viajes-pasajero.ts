import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DatesFormatProvider } from '../../providers/dates-format/dates-format';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';
import { ViajesPasajeroDetailPage } from '../viajes-pasajero-detail/viajes-pasajero-detail';



@Component({
  selector: 'page-viajes-pasajero',
  templateUrl: 'viajes-pasajero.html',
})
export class ViajesPasajeroPage {
  lista_viaje;
  dia_string: string;
  dia_number: number;
  mes: string;
  fechamsg: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dateformat: DatesFormatProvider,
    public modalCtrl: ModalController) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesPasajeroPage');
    this.initVariables();
  }

  private initVariables() {
    this.lista_viaje = this.viajes_disponibles();
    this.dia_string = this.dateformat.actionGetDay(new Date().getDay());
    console.log('this.dia_string: ', this.dia_string)
    this.dia_number = new Date().getDate();
    this.mes = this.dateformat.actionGetMonth(new Date().getMonth() + 1);
    if (this.dia_string != "") {
      //listar solo cuando esta dentro de orario 06:30 - 21:10
     // this.lista_viaje = this.viajes_disponibles();
      this.fechamsg = "   " + this.dia_string + ' ' + this.dia_number + ' ' + this.mes;
    } else
      this.fechamsg = 'Fuera de horario';

  }

  goToDetails(itemid) {
    let contactModal = this.modalCtrl.create(ViajesPasajeroDetailPage, { 
      datos: this.lista_viaje[itemid - 1], 
      fecha: this.fechamsg 
    });
    contactModal.present();

  }

  private viajes_disponibles() {
    return [{
      id: 1,
      origen: "Ibarra",
      destino: "UTN Ibarra",
      hora: "07:00",
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
      conductor: {
        nombre: "Pepito Adolfo",
        apellido: "Perez Hitler",
        fotografia: "assets/imgs/profileOK.jpg",
        facultad: "FICA",
        carrera: "Sistemas",
        genero: "Masculino"
      },
      asientos: 1

    },
    {
      id: 2,
      origen: "Otavalo",
      destino: "Ibarra",
      hora: "08:00",
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
      conductor:
      {
        nombre: "Maria Jane",
        apellido: "Juana Parker",
        fotografia: "https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-1200x800.jpg",
        facultad: "FCCSS",
        carrera: "Enfermeria",
        genero: "Femenino"
      },
      asientos: 2

    }]
  }



}
