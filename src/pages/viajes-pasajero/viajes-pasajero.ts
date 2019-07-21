import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { DatesFormatProvider } from '../../providers/dates-format/dates-format';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';
import { ViajesPasajeroDetailPage } from '../viajes-pasajero-detail/viajes-pasajero-detail';
import { searchTravelPasajero } from '../searchTravelPasajero/searchTravelPasajero';
import { RutaProvider } from '../../providers/ruta/ruta';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import * as d3 from "d3-collection";


@Component({
  selector: 'page-viajes-pasajero',
  templateUrl: 'viajes-pasajero.html',
})
export class ViajesPasajeroPage {
 
  viajesPubObjectArrayToShow;
  viajesPubObjectArrayOriginal;
  fecha: string;
  hora: string;
  loadingCrtlRefresh;
  respuesta;//para mostrar el lenght de respuesta en el view
  driverObject;
  fechaTitle: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public loadingCtrl: LoadingController,
    public apiRestService: RestApiServiceProvider, public viajesPublicadoObject: RutaProvider,
    public dateformat: DatesFormatProvider,
    public modalCtrl: ModalController) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesPasajeroPage');
    this.initVariables();
  }

  private userInfo(cedula: string, ruta) {
    let driverObject = { foto: null, primer_nombre: null, segundo_nombre: null, primer_apellido: null }
    this.apiRestService.getUsuario(cedula)
      .subscribe((resp) => {
        if (resp.items[0].foto != null)
          driverObject.foto = 'data:image/png;base64,' + resp.items[0].foto;
        driverObject.primer_nombre = resp.items[0].primer_nombre;
        driverObject.segundo_nombre = resp.items[0].segundo_nombre;
        driverObject.primer_apellido = resp.items[0].primer_apellido;
        ruta.adicional.conductor = driverObject;
        //this.viajesPublicadoObject.adicional = this.driverObject;
      },
        (error) => {
          console.error(error);
        });
  }

  goToSearch() {
  
    let contactModal = this.modalCtrl.create(searchTravelPasajero, { lista_viaje: this.viajesPubObjectArrayOriginal });
    contactModal.onDidDismiss(travel => {
      if (travel != undefined) {
        this.viajesPubObjectArrayToShow = this.searchMatchTravels(travel);
        //console.log('data es despues de dismis: ', data);
      }
    });
    contactModal.present();
  }


  private initVariables() {
    this.loadingCrtlRefresh = this.loadingCtrl.create();
    this.loadingCrtlRefresh.present();
    this.apiRestService.getViajesDiarios().subscribe((resp) => {
      this.respuesta = 0;
      this.respuesta = resp.respuesta.length;
      if (this.respuesta == 0)
        this.loadingCrtlRefresh.dismiss();
      console.log('respuesta getviajes diaris: ', resp);
      let groupByCodViaje = this.setGroup(resp);
      console.log('agrupado respuesta: ', groupByCodViaje);
      this.viajesPubObjectArrayToShow = []//array para almacenar los valores si es q hay mas de 10 solo los diez primeros
      this.viajesPubObjectArrayOriginal = [];//array para almacenar todos los valores que trae el api
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
          no_personas: obj.values[0].no_personas,
          cedula: obj.values[0].cedula,
          conductor: null
        };
        this.fechaTitle = obj.values[0].fecha;
        //this.userInfo(adicional.cedula);//llmar
        this.viajesPublicadoObject.adicional = adicional;
        this.setViajesObject(obj.values);//designar si es Origen,destino,ubicacion o un place
      }
      console.log('Object view finishOriginal: ', this.viajesPubObjectArrayOriginal);
      this.callDriver();//buscar el conductor de cada una d elas rutas
      console.log('Object view finish toshow: ', this.viajesPubObjectArrayToShow);
    });
  }


  private callDriver() {
    for (let obj of this.viajesPubObjectArrayOriginal)
      this.userInfo(obj.adicional.cedula, obj);
    //@param la ceduladel condcutor para la busqueda, y el la posicion en el cual se va a anadir el objecto conductor
    this.loadingCrtlRefresh.dismiss();
    console.log('Object view finishOriginal con condcutor: ', this.viajesPubObjectArrayOriginal);
    //si el array devuelto es mayor a diez entonces cortar a diez par mostrar solo esos diez valores 
    if (this.viajesPubObjectArrayOriginal.length > 10)
      this.viajesPubObjectArrayToShow = this.viajesPubObjectArrayOriginal.slice(0, 10);
    else
      this.viajesPubObjectArrayToShow = this.viajesPubObjectArrayOriginal;
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
        waypoints: { location: { lat: obj.lat, lng: obj.lng }, stopover: true }
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
    this.viajesPubObjectArrayOriginal.push(this.viajesPublicadoObject);//anadir  en un array todos los viajes ya elebaorados
  }


  goToDetails(codigo_viaje) {
    console.log('codgio_viaje:', codigo_viaje);
    let travel = this.searchTravel(codigo_viaje, this.viajesPubObjectArrayToShow);
    let contactModal = this.modalCtrl.create(ViajesPasajeroDetailPage, {
      datos: travel
    });
    contactModal.present();
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


  searchMatchTravels(travel: any) {
    let arrayMatchTravels = [];
    let viaje;

    if (travel.place_id == null || '') {
      for (viaje of this.viajesPubObjectArrayOriginal)
        if (viaje.origen.codigo_geo == travel.codigo_geo || viaje.destino.codigo_geo == travel.codigo_geo)
          arrayMatchTravels.push(viaje);
    } else
      //revisar toda la lsita devijes de desde la bae de datos 
      for (viaje of this.viajesPubObjectArrayOriginal)
        //elegir el array de lugares de ese viaje
        for (let lugares of viaje.lugares)
          //comparar en el valor con el parametro pasado 
          if (lugares.place_id == travel.place_id)
            //si conincide anadir el viaje al array temporal
            arrayMatchTravels.push(viaje);
    //devolver el array de viajes 
    return arrayMatchTravels;
  }


  public refreshFindRoutes() { 

    this.initVariables();
  }


}


