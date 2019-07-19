import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DetRutaCPage } from '../det-ruta-c/det-ruta-c';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { RutaProvider } from '../../providers/ruta/ruta';
import * as d3 from "d3-collection";
import { DatesFormatProvider } from '../../providers/dates-format/dates-format';

@Component({
  selector: 'page-viajes-pub-c',
  templateUrl: 'viajes-pub-c.html',
})

export class ViajesPubCPage {
  viajes_pub
  viajesPubObjectArray = [];
  fecha: string;
  hora: string;
  loadingCrtlRefresh;
  respuesta;//para mostrar el lenght de respuesta en el view

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public apiRestService: RestApiServiceProvider, public viajesPublicadoObject: RutaProvider) {

    // let q = navCtrl.getViews();
    // console.log('navigation navctrl: ', q)

  }


  ionViewDidLoad() {

    this.getViajesPublicados();
    console.log('ionViewDidLoad ViajesPubCPage');
    //recibir datos desde la BD. Viajes publicados de este cedula  
    this.viajes_pub = this.arrayViajesPub()
  }

  private getViajesPublicados() {
    this.loadingCrtlRefresh = this.loadingCtrl.create();
    this.loadingCrtlRefresh.present();
    //console.log('string to isostring: ', horatemp.toISOString());//restar menos cinco horas getHours()-5
    this.apiRestService.getViajesPublicados().subscribe((resp) => {
      this.respuesta = 0;
      this.respuesta = resp.respuesta.length;
      console.log('respuesta get viajes pub: ', resp);
      let groupByCodViaje = this.setGroup(resp);//agrupamos por cod_viaje la respuesta JSON
      for (let obj of groupByCodViaje) {
        this.viajesPublicadoObject = new RutaProvider();//crear nuevo objeto cada vez qe tenga nuevos viajes

        let adicional = {//dentro de adicional se anadio el codigo viaje
          codigo_viaje: +obj.key,
          fecha_salida: obj.values[0].fecha_salida,
          fechastring: obj.values[0].fechastring,
          descripcion_viaje: obj.values[0].descripcion_viaje,
          fecha: obj.values[0].fecha,
          hora: obj.values[0].hora,
          fotoRuta: obj.values[0].foto_ruta,
          fotoUbicacion: obj.values[0].foto_ubicacion
        };
        this.viajesPublicadoObject.adicional = adicional;
        this.setViajesObject(obj.values);//designar si es Origen,destino,ubicacion o un place

      }
    });
  }

  private setGroup(resp: any) {
    //metodo para agrupar un objeto json
    let groupByCodViaje = d3.nest()
      .key((d) => { return d.cod_viaje; })
      .entries(resp.respuesta);
    //console.log('d3 grouped: ', groupByCodViaje);
    return groupByCodViaje;
  }

  public setViajesObject(ValuesAdicionales) {
    //metodo para asignar al objeto su Origen,Destino,Ubicacion o Place de acuerdo al campo TIPO 
    for (let obj of ValuesAdicionales) {
      let valueObject = {
        codigo_geo: obj.codigo_geo,
        lat: obj.lat,
        lng: obj.lng,
        short_name: obj.short_name,
        full_name: obj.full_name,
        place_id: obj.place_id,
        waypoints:{ location: { lat: obj.lat, lng: obj.lng }, stopover: true }
      };

      if (obj.tipo === 'O')
        this.viajesPublicadoObject.origen = valueObject
      else if (obj.tipo === 'D')
        this.viajesPublicadoObject.destino = valueObject;
      else if (obj.tipo === 'U')
        this.viajesPublicadoObject.puntoEncuentro = valueObject;
      else
        this.viajesPublicadoObject.lugares = valueObject;

    }
    this.viajesPubObjectArray.push(this.viajesPublicadoObject);//anadir  en un array todos los viajes ya elebaorados
    this.loadingCrtlRefresh.dismiss();
    console.log('Object view finish: ', this.viajesPubObjectArray);
  }

  goToDetails(codigo_viaje) {
    let travel = this.searchTravel(codigo_viaje, this.viajesPubObjectArray);
    this.navCtrl.push(DetRutaCPage, {
      datos: travel
    })
  }

  public searchTravel(codigo_viaje: number, arrayObjects) {
    let viajeFound;
    for (let obj of arrayObjects) {
      if (obj.adicional.codigo_viaje == codigo_viaje) {
        viajeFound = obj;
        break;
      }
    }
    return viajeFound;
  }

  // getDateISOToString(ISOString: string) {
  //   let horarioISO = new Date(ISOString);
  //   let hours = horarioISO.getHours() + 1;//uso horario y Base de datos
  //   this.hora = (hours < 10 ? '0' + hours : hours) + ':'
  //     + (horarioISO.getMinutes() < 10 ? '0' + horarioISO.getMinutes() : horarioISO.getMinutes());
  //   this.fecha = this.myFormatDate.actionGetDay(horarioISO.getDay()) + ' . ' + horarioISO.getDate() + ' . '
  //     + this.myFormatDate.actionGetMonth(horarioISO.getMonth());
  //   // console.log('hora: ', horarioISO.getHours());
  //   // console.log('horario: ', horarioISO);

  // }



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
