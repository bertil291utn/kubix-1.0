import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ViajesOrigenPage } from '../viajes-origen/viajes-origen';
import { ViajesDestinoPage } from '../viajes-destino/viajes-destino';
import { RutaProvider } from '../../providers/ruta/ruta';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';


@Component({
  selector: 'page-viajes-origen-destino',
  templateUrl: 'viajes-origen-destino.html',
})
export class ViajesOrigenDestinoPage {
  utnlugarGeoObject = { codigo_geo: null, lat: null, lng: null, short_name: null, full_name: null };


  constructor(public navCtrl: NavController, public navParams: NavParams, public apiRestService: RestApiServiceProvider,
    public alertCtrl: AlertController, public routeCreate: RutaProvider, public myservices: EnvironmentVarService) {
  }

  ionViewDidLoad() {
    //llamar lugar_geo UTN
    this.utnLugarGeo();
    console.log('ionViewDidLoad ViajesOrigenDestinoPage');
  }

  private utnLugarGeo() {
    this.apiRestService.getUniversidadInfo().subscribe((resp) => {
      this.utnlugarGeoObject.codigo_geo = resp.items[0].codigo_geo;
      this.utnlugarGeoObject.lat = resp.items[0].lat;
      this.utnlugarGeoObject.lng = resp.items[0].lng;
      this.utnlugarGeoObject.short_name = resp.items[0].short_name;
      this.utnlugarGeoObject.full_name = resp.items[0].full_name;

    });
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Informaci&oacute;n',
      message: 'La universidad siempre ser&aacute; un punto de partida o de llegada',
      buttons: ['OK']
    });
    alert.present();
  }

  goToSeleccion(utnOrigen: boolean) {
    //si utn origen es verdadero
    if (utnOrigen)
      this.routeCreate.origen = this.utnlugarGeoObject;
    else
      this.routeCreate.destino = this.utnlugarGeoObject;

    //unversidad_origen=true;
    this.myservices.utnOrigen = utnOrigen;
    this.navCtrl.push(ViajesOrigenPage);
  }


}
