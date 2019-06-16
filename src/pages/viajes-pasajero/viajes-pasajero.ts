import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DatesFormatProvider } from '../../providers/dates-format/dates-format';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';
import { ViajesPasajeroDetailPage } from '../viajes-pasajero-detail/viajes-pasajero-detail';
import { searchTravelPasajero } from '../searchTravelPasajero/searchTravelPasajero';



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
  allTravelItems;
  filteredItems;
  query;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dateformat: DatesFormatProvider,
    public modalCtrl: ModalController) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesPasajeroPage');
    this.initVariables();
  }

  goToSearch() {
    //vovler a traer de nuev de la base de datos todos los viajes
    //para enviar al search y para devolver en el ondismiss
    this.lista_viaje = this.viajes_disponibles();
    let contactModal = this.modalCtrl.create(searchTravelPasajero, { lista_viaje: this.lista_viaje });
    contactModal.onDidDismiss(data => {
      if (data != undefined) {
        this.lista_viaje = this.searchMatchTravels(data);
        //console.log('data es despues de dismis: ', data);
      }
    });
    contactModal.present();
    //this.navCtrl.push(searchTravelPasajero, { lista_viaje: this.lista_viaje });
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

  searchMatchTravels(placeid: string) {
    let arrayMatchTravels = [];
    let viaje;
    //revisar toda la lsita devijes de desde la bae de datos 
    for (viaje of this.lista_viaje)
      //elegir el array de lugares de ese viaje
      for (let lugares of viaje.lugares)
        //comparar en el valor con el parametro pasado 
        if (lugares.placeid == placeid)
          //si conincide anadir el viaje al array temporal
          arrayMatchTravels.push(viaje);
    //devolver el array de viajes 
    return arrayMatchTravels;
  }



  private viajes_disponibles() {
    return [{
      id: 1,
      origen: "Ibarra",
      destino: "UTN Ibarra",
      hora: "07:00",
      descripcion: "Voy a salir desde mi casa en Caranqui para pasar por los Ceibos y llegar a la universidad por la victoria. Quien sea que este por esa ruta reserve el viaje. Tengo dos asientos disponibles salgo a las 7 de mi casa.",
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
      asientos: 1,
      lugares: [
        { id: 0, placeid: 'fgghrydh47464h4ueed4ydh1', nombreCorto: 'BOla amarilla', nombreExtenso: '1Avenida hfhshfshdkjfewoyu hjsdhfsjf' },
        { id: 1, placeid: 'fgghrydh47464h4ueed4ydh2', nombreCorto: 'Parque Ciudad blanca', nombreExtenso: '1ibarra  hjsdhfsjf' },
        { id: 2, placeid: 'fgghrydh47464h4ueed4ydh3', nombreCorto: 'Parque Pedro moncayo', nombreExtenso: '1Panamericana Norte hjsdhfsjf' }]


    },
    {
      id: 2,
      origen: "Otavalo",
      destino: "Ibarra",
      hora: "08:00",
      descripcion: "2Voy a salir desde mi casa en Caranqui para pasar por los Ceibos y llegar a la universidad por la victoria. Quien sea que este por esa ruta reserve el viaje. Tengo dos asientos disponibles salgo a las 7 de mi casa.",
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
      asientos: 2,
      lugares: [
        { id: 0, placeid: 'fgghrydh47464h4ueed4ydh2', nombreCorto: 'Parque Ciudad blanca', nombreExtenso: 'Avenida hfhshfshdkjfewoyu hjsdhfsjf' },
        { id: 1, placeid: 'fgghrydh47464h4ueed4ydh3', nombreCorto: 'Parque Pedro moncayo', nombreExtenso: 'ibarra  hjsdhfsjf' },
        { id: 2, placeid: 'fgghrydh47464h4ueed4ydh6', nombreCorto: 'Parque el avion', nombreExtenso: 'Panamericana Norte hjsdhfsjf' }]
    }]//return viajes disponibles
  }//function end



}


