import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { ViajesReservDetallesPage } from '../viajes-reserv-detalles/viajes-reserv-detalles';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { RutaProvider } from '../../providers/ruta/ruta';
import * as d3 from "d3-collection";


@Component({
  selector: 'page-viajes-reser-pasajero',
  templateUrl: 'viajes-reser-pasajero.html',
})
export class ViajesReserPasajeroPage {
  viajesPubObjectArray;
  fecha: string;
  hora: string;
  loadingCrtlRefresh;
  respuesta;//para mostrar el lenght de respuesta en el view
  delete: boolean = false;



  constructor(public navCtrl: NavController, public apiRestService: RestApiServiceProvider, public alertCtrl: AlertController,
    public navParams: NavParams, public loadingCtrl: LoadingController, public viajesPublicadoObject: RutaProvider,
    public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesReserPasajeroPage');
    this.getViajesReservados();

  }

  public getViajesReservados() {

    this.loadingCrtlRefresh = this.loadingCtrl.create();
    this.loadingCrtlRefresh.present();
    //console.log('string to isostring: ', horatemp.toISOString());//restar menos cinco horas getHours()-5
    this.apiRestService.getViajesReservados().subscribe((resp) => {
      this.respuesta = 0;
      this.respuesta = resp.respuesta.length;
      console.log('respuesta get viajes pub: ', resp);
      if (this.respuesta == 0)
        this.loadingCrtlRefresh.dismiss();
      let groupByCodViaje = this.setGroup(resp);//agrupamos por cod_viaje la respuesta JSON
      this.viajesPubObjectArray = [];//declarar el array cada vez que se llama a getviajes ie, esta funcion 
      for (let obj of groupByCodViaje) {
        this.viajesPublicadoObject = new RutaProvider();//crear nuevo objeto cada vez qe tenga nuevos viajes
        let adicional = {//dentro de adicional se anadio el codigo viaje
          codigo_viaje: +obj.key,
          codigo_reserva: obj.values[0].cod_reserva,
          fecha_salida: obj.values[0].fecha_salida,
          fechastring: obj.values[0].fechastring,
          descripcion_viaje: obj.values[0].descripcion_viaje,
          fecha: obj.values[0].fecha,
          hora: obj.values[0].hora,
          fotoRuta: obj.values[0].foto_ruta,
          fotoUbicacion: obj.values[0].foto_ubicacion,
          cedula: obj.values[0].cedula
        };
        this.viajesPublicadoObject.adicional = adicional;
        this.setViajesObject(obj.values);//designar si es Origen,destino,ubicacion o un place
      }
      this.loadingCrtlRefresh.dismiss();
      // if (this.delete)
      //   this.presentToastDurationBottom('Viaje eliminado', 2000);
      console.log('Object view finish: ', this.viajesPubObjectArray);
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
    this.viajesPubObjectArray.push(this.viajesPublicadoObject);//anadir  en un array todos los viajes ya elebaorados
  }


  goToDetails(codigo_viaje: number) {
    let travel = this.searchTravel(codigo_viaje, this.viajesPubObjectArray);
    console.log('ir detalles de viajes reservados ');
    let contactModal = this.modalCtrl.create(ViajesReservDetallesPage,
      {
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

  public canceTravel(codigo_viaje: number, codigo_reserva: number) {
    this.apiRestService.cancelViajesReservados(codigo_viaje, codigo_reserva).subscribe((resp) => {
      console.log('respuesta: ', resp);
      if (resp.respuesta == 200)
        this.getViajesReservados();
    });

  }


  public cancelReservaAlert(codigo_viaje: number, codigo_reserva: number) {
    const alert = this.alertCtrl.create({
      title: 'Cancelar',
      message: '¿Est&aacute; seguro de cancelar este viaje?',
      buttons: [{
        text: 'Si',
        handler: () => {
          this.canceTravel(codigo_viaje, codigo_reserva);
        }
      },
      {
        text: 'No',
        role: 'cancel'
      }],
    })
    alert.present();
  }


}
