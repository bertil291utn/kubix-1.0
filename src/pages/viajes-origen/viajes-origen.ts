import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ItemSliding, AlertController, LoadingController } from 'ionic-angular';
import { SetHomePage } from '../set-home_origen/set-home';
import { SetMapOrigenPage } from '../set-map-origen/set-map-origen';
import { HomeCViewRutaPage } from '../home-c-view-ruta/home-c-view-ruta';
import { MyLocationOptions, LocationService } from '@ionic-native/google-maps';
import { RutaProvider } from '../../providers/ruta/ruta';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';

declare var google;

@Component({
  selector: 'page-viajes-origen',
  templateUrl: 'viajes-origen.html',
})
export class ViajesOrigenPage {

  casa: boolean;

  ubicacionActualDir: string;
  ubicacionActualLatLng;
  loadingControllerSave;

  casaObject = { codigo_geo: null, lat: null, lng: null, short_name: null, full_name: null, showfull_name: null };
  ubicActualObject = { codigo_geo: null, lat: null, lng: null, short_name: null, full_name: null };


  constructor(public navCtrl: NavController, public myservices: EnvironmentVarService,
    public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController,
    public modalCtrl: ModalController, public apiRestService: RestApiServiceProvider,
    public routeCreate: RutaProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesOrigenPage');
    this.casaInfo();
    this.latLngDir();
    this.ActionGetLocation();
  }



  private casaInfo() {
    //llamar api rest  buscando casa de la persona y la direccion
    this.casa = true;
    this.apiRestService.getCasaInfo().subscribe((resp) => {
      if (resp.items[0].codigo_geo != null) {
        this.casaObject.codigo_geo = resp.items[0].codigo_geo;
        this.casaObject.lat = resp.items[0].lat;
        this.casaObject.lng = resp.items[0].lng;
        this.casaObject.short_name = resp.items[0].short_name;
        this.casaObject.full_name = 'Casa';
        this.casaObject.showfull_name = resp.items[0].full_name;

        if (resp != null)
          if (this.loadingControllerSave != undefined)
            this.loadingControllerSave.dismiss();
      } else
        this.casa = false;
    });

  }

  ionViewDidEnter() {
    setInterval(() => {
      this.ubicacionActualDir;
      this.ubicacionActualLatLng;
    }, 300);
  }

  async ActionGetLocation() {
    this.ubicacionActualLatLng = await this.getLocation();
    if (this.ubicacionActualLatLng != null || undefined)
      this.loadingControllerSave.dismiss();
    console.log('ubicacionActualLatLng: ', this.ubicacionActualLatLng);
  }


  goToViewRoute(casa: boolean) {
    // Enviar directo los dtos a home c view
    if (this.myservices.utnOrigen)
      //cuando utn es origen solo tiene casa
      this.routeCreate.destino = this.casaObject;
    else {
      //verficar si tiene casa o ubcacin actual
      if (casa)
        this.routeCreate.origen = this.casaObject;
      else {
        // y la opcion seleccionada es ubicacion actual
        this.ubicActualObject.lat = this.ubicacionActualLatLng.lat;
        this.ubicActualObject.lng = this.ubicacionActualLatLng.lng;
        this.ubicActualObject.full_name = 'Tu ubicaci\xF3n actual';
        this.routeCreate.origen = this.ubicActualObject;
      }
    }
    this.navCtrl.push(HomeCViewRutaPage);
  }


  goToSetMap(setmap: boolean) {
    //enviar a set map si es para elegir el origen/desitno en el mapa o para anadir/editar la casa del usuario
    this.myservices.setMap = setmap;
    let contactModal = this.modalCtrl.create(SetMapOrigenPage);
    contactModal.present();

    contactModal.onDidDismiss(data => {
      if (data != null || undefined) {
        this.loadingControllerSave = this.loadingCtrl.create();
        this.loadingControllerSave.present();
        console.log('data return modal es: ', data);
        if (data.update) {
          console.log('hacer refresh de casa info');
          this.casaInfo();//refresh data after viewctrl dismiss}
        }
      }

    });

  }

  async latLngDir() {
    this.loadingControllerSave = this.loadingCtrl.create();
    this.loadingControllerSave.present();
    this.getDireccion(await this.getLocation());
    //this.ubicacionActualLatLng = await this.getLocation();
  }

  getDireccion(latlng) {
    let geocoder = new google.maps.Geocoder;
    geocoder.geocode({ 'location': latlng }
      , (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            this.ubicacionActualDir = results[0].formatted_address;
          }
        }
      });
  }

  private async getLocation() {
    let option: MyLocationOptions = {
      enableHighAccuracy: true
    }
    const rta = await LocationService.getMyLocation(option);
    //const rta = await this.geolocation.getCurrentPosition();

    return rta.latLng
  }




  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Editar',
      message: 'Deslizar hacia la izquierda su direcci&oacute;n',
      buttons: ['OK']
    });
    alert.present();
  }




}
