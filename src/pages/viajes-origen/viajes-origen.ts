import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { SetMapOrigenPage } from '../set-map-origen/set-map-origen';
import { HomeCViewRutaPage } from '../home-c-view-ruta/home-c-view-ruta';
import { RutaProvider } from '../../providers/ruta/ruta';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { AndroidPermissions } from '@ionic-native/android-permissions';

declare var google;

@Component({
  selector: 'page-viajes-origen',
  templateUrl: 'viajes-origen.html',
})
export class ViajesOrigenPage {

  casa: boolean;
  ubicacionActualLatLng;
  loadingControllerCasa;
  //enviar el showfullname no el full name
  casaObject = { codigo_geo: null, lat: null, lng: null, short_name: null, full_name: null, showfull_name: null };
  ubicActualObject = { codigo_geo: null, lat: null, lng: null, short_name: null, full_name: null, showfull_name: null };


  constructor(public navCtrl: NavController, public myservices: EnvironmentVarService, private geolocation: Geolocation,
    public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController,
    public modalCtrl: ModalController, public apiRestService: RestApiServiceProvider, private locationAccuracy: LocationAccuracy,
    public routeCreate: RutaProvider, public toastCtrl: ToastController, private androidPermissions: AndroidPermissions) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesOrigenPage');
    this.checkGPSPermission();
    this.casaInfo();
  }

  private checkGPSPermission() {
    //si el check permission es primera vez cuando incia la aplicacion o para segunda revision cuando se presiona deny
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {
          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();//tiene permiso por lo tanto ya no vuelve a preguntar
        } else
          //If not having permission ask for permission
          this.requestGPSPermission();
      },
      err => {
        alert(err);
      }
    );
  }


  private requestGPSPermission() {
    //Show 'GPS Permission Request' dialogue
    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
      .then(
        () => {
          // call method to turn on GPS
          this.askToTurnOnGPS();//no se sabe si tiene permiso o no por lo que se debe volver a revisar
        }
      );
  }

  private askToTurnOnGPS() {

    //revisar otra vez si la aplicacion tiene permsisos. Este caos sirve en caos de que haya puesto deny en la activacion de permisos de localizacion e aaplicacion 
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {
          this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
            () => {
              // When GPS Turned ON call method to get Accurate location coordinates
              this.ActionGetLocation();
            },
            error => {
              this.navCtrl.pop();
              this.presentToastDurationBottom('Debe activar su GPS', 2000);
            }
          );
        } else {
          this.navCtrl.pop();
          this.presentToastDurationBottom('Debe activar los permisos de ubicaci\xF3n', 2000);
        }
      });
  }


  private casaInfo() {
    if (this.loadingControllerCasa == null || undefined) {
      this.loadingControllerCasa = this.loadingCtrl.create();
      this.loadingControllerCasa.present();
    }
    //llamar api rest  buscando casa de la persona y la direccion
    this.casa = true;
    this.apiRestService.getCasaInfo().subscribe((resp) => {
      if (resp.items[0].codigo_geo != null) {
        this.casaObject.codigo_geo = resp.items[0].codigo_geo;
        this.casaObject.lat = resp.items[0].lat;
        this.casaObject.lng = resp.items[0].lng;
        this.casaObject.short_name = this.myservices.removeaccents(resp.items[0].short_name);
        this.casaObject.full_name = 'Casa';
        this.casaObject.showfull_name = this.myservices.removeaccents(resp.items[0].full_name);

        if (resp != null)
          if (this.loadingControllerCasa != undefined) {
            this.loadingControllerCasa.dismiss();
            console.log('loading casa dismiss: ' + this.loadingControllerCasa);
          }
      } else {
        this.casa = false;
        this.loadingControllerCasa.dismiss();
        console.log('loading casa dismiss: ' + this.loadingControllerCasa);
      }
    });

  }



  async ActionGetLocation() {
    const loadingControllerUbicacion = this.loadingCtrl.create();
    loadingControllerUbicacion.present();
    this.ubicacionActualLatLng = await this.getLocation();
    this.getDireccion(this.ubicacionActualLatLng);
    if (this.ubicacionActualLatLng != null || undefined)
      loadingControllerUbicacion.dismiss();
  }


  presentToastDurationBottom(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'bottom',
      duration: duration
    });
    toast.present();
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
        console.log('ubicacion actual object: ', this.ubicActualObject);
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
        this.loadingControllerCasa = this.loadingCtrl.create();
        this.loadingControllerCasa.present();
        console.log('data return modal es: ', data);
        if (data.update) {
          console.log('hacer refresh de casa info');
          this.casaInfo();//refresh data after viewctrl dismiss}
        }
      }

    });

  }

  async latLngDir() {
    this.getDireccion(await this.getLocation());
  }

  getDireccion(latlng) {
    let geocoder = new google.maps.Geocoder;
    geocoder.geocode({ 'location': latlng }
      , (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            this.ubicActualObject.short_name = this.myservices.removeaccents(this.getShortName(results[0]));
            this.ubicActualObject.showfull_name = this.myservices.removeaccents(results[0].formatted_address);
          }
        }
      });
  }

  private async getLocation() {
    // let option: MyLocationOptions = {
    //   enableHighAccuracy: true
    // }
    // const rta = await LocationService.getMyLocation(option);
    const rta = await this.geolocation.getCurrentPosition();
    let latLng = { lat: rta.coords.latitude, lng: rta.coords.longitude };
    return latLng
  }


  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Editar',
      message: 'Deslizar hacia la izquierda su direcci&oacute;n',
      buttons: ['OK']
    });
    alert.present();
  }


  private getShortName(results: any) {
    let resultsLength = results.address_components.length;

    if (resultsLength >= 6)
      return results.address_components[3].short_name;
    else if (resultsLength == 4 || resultsLength == 5)
      return results.address_components[1].short_name;
    else if (resultsLength == 2 || resultsLength == 3)
      return results.address_components[0].short_name;
    else if (resultsLength == 1) {
      let direccion = results.formatted_address.split(',');
      return direccion[0];
    }
  }





}//end class
