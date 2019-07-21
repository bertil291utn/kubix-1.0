import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { DetRutaCPage } from '../det-ruta-c/det-ruta-c';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { RutaProvider } from '../../providers/ruta/ruta';
import * as d3 from "d3-collection";


@Component({
  selector: 'page-viajes-pub-c',
  templateUrl: 'viajes-pub-c.html',
})

export class ViajesPubCPage {
  viajes_pub
  viajesPubObjectArray;
  fecha: string;
  hora: string;
  loadingCrtlRefresh;
  respuesta;//para mostrar el lenght de respuesta en el view
  delete: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public apiRestService: RestApiServiceProvider, public viajesPublicadoObject: RutaProvider,
    public toastCtrl: ToastController, public alertCtrl: AlertController) {

    // let q = navCtrl.getViews();
    // console.log('navigation navctrl: ', q)

  }


  ionViewDidLoad() {

    this.getViajesPublicados();
    console.log('ionViewDidLoad ViajesPubCPage');
  }

  private getViajesPublicados() {
    this.loadingCrtlRefresh = this.loadingCtrl.create();
    this.loadingCrtlRefresh.present();
    //console.log('string to isostring: ', horatemp.toISOString());//restar menos cinco horas getHours()-5
    this.apiRestService.getViajesPublicados().subscribe((resp) => {
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

  public deleteViaje(codigo_viaje) {
    this.delete = true;
    this.apiRestService.deleteViajesPublicados(codigo_viaje).subscribe((resp) => {
      console.log('respuesta: ', resp);
      if (resp.respuesta == 200)
        if (resp.response == 1)
          this.getViajesPublicados();
        else
          this.presentToastDurationBottom('Este viaje ya esta reservado y no puede ser eliminado', 3000);
    });
  }

  presentToastDurationBottom(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'bottom',
      duration: duration
    });
    toast.present();
  }

  public deleteviajeAlert(codigo_viaje) {
    const alert = this.alertCtrl.create({
      title: 'Eliminar',
      message: '¿Est&aacute; seguro de eliminar este viaje?',
      buttons: [{
        text: 'Si',
        handler: () => {
          this.deleteViaje(codigo_viaje)
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
