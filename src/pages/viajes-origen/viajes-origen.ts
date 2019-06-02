import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ItemSliding } from 'ionic-angular';
import { SetHomePage } from '../set-home_origen/set-home';
import { SetMapOrigenPage } from '../set-map-origen/set-map-origen';
import { HomeCViewRutaPage } from '../home-c-view-ruta/home-c-view-ruta';
import { MyLocationOptions, LocationService } from '@ionic-native/google-maps';
import { RutaProvider } from '../../providers/ruta/ruta';

declare var google;
@IonicPage()
@Component({
  selector: 'page-viajes-origen',
  templateUrl: 'viajes-origen.html',
})
export class ViajesOrigenPage {

  casa: boolean = true;
  utnLatLng;
  casaLatLng;
  utnDir: string;
  casaDir: string;
  utnOrigen: boolean;
  ubicacionActualDir: string;
  ubicacionActualLatLng;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public routeCreate: RutaProvider) {

    this.utnOrigen = navParams.get('universidad_origen');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesOrigenPage');
    this.utnLatLng = { lat: 0.3581583, lng: -78.112088 };
    this.utnDir = 'Universidad Tecnica del Norte';
    //llamar api rest  buscando casa de la persona y la direccion
    this.casaLatLng = { lat: 0.341304, lng: -78.125170 };
    this.casaDir = 'Yacucalle, Ibarra';
    this.latLngDir();
    this.ActionGetLocation();
  }

  ionViewDidEnter() {
    setInterval(() => {
      this.ubicacionActualDir;
      this.ubicacionActualLatLng;
    }, 300);
  }

  async ActionGetLocation() {
    this.ubicacionActualLatLng = await this.getLocation();
  }


  // goToSetHome() {
  //   this.navCtrl.push(SetHomePage);
  // }

  goToSetMap(setmap: boolean) {
    if (this.utnOrigen) {
      this.routeCreate.origenLatLng = this.utnLatLng;
      this.routeCreate.origenDir = this.utnDir;
      console.log(' setmap this.routeCreate.origenLatLng: ', this.routeCreate.origenLatLng)
      console.log(' setmap this.routeCreate.origenDir: ', this.routeCreate.origenDir)

    } else {
      this.routeCreate.destinoLatLng = this.utnLatLng;
      this.routeCreate.destinoDir = this.utnDir;
      console.log(' setmap this.routeCreate.destinoLatLng: ', this.routeCreate.destinoLatLng)
      console.log(' setmap this.routeCreate.destinoDir: ', this.routeCreate.destinoDir)
    }

    let contactModal = this.modalCtrl.create(SetMapOrigenPage, {
      setmap: setmap,
      utnOrigen: this.utnOrigen
    });

    contactModal.onDidDismiss(data => {
      console.log('data es despues de dismis: ', data);
      if (data != undefined)
        this.casa = data;
    });
    contactModal.present();


  }

  editHome(setmap: boolean, slidingItem: ItemSliding) {
    let contactModal = this.modalCtrl.create(SetMapOrigenPage, {
      setmap: setmap,
      utnOrigen: this.utnOrigen
    });

    contactModal.onDidDismiss(data => {
      console.log('data es despues de dismis: ', data);
      if (data != undefined)
        this.casa = data;
    });
    //se abre la pagina set to map
    contactModal.present();
    //se cierra el sliding de editar casa
    slidingItem.close();

  }

  async latLngDir() {
    this.getDireccion(await this.getLocation());
    this.ubicacionActualLatLng = await this.getLocation();
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


  goToViewRoute(casa: boolean) {
    //Cuando utn es origen 
    if (this.utnOrigen)
      // if (casa)
      //y la opcion seleccionada es casa
      this.actionListenerGoRoute(this.utnLatLng, this.utnDir, this.casaLatLng, this.casaDir);
    // else
    //   // y la opcion seleccionada es select map
    //   //this.actionListenerGoRoute(this.utnLatLng, this.utnDir, this.setmapLatLng, this.setmapDir);
    //   console.log('get latlng y direccion de set map');
    else
      //Cuando utn es destino 
      if (casa)
        //y la opcion seleccionada es casa
        this.actionListenerGoRoute(this.casaLatLng, this.casaDir, this.utnLatLng, this.utnDir);
      else
        // y la opcion seleccionada es ubicacion actual
        this.actionListenerGoRoute(this.ubicacionActualLatLng, this.ubicacionActualDir, this.utnLatLng, this.utnDir);


  }

  private actionListenerGoRoute(origenLatLng, origenDir, destinoLatLng, destinoDir) {

    this.routeCreate.origenLatLng = origenLatLng;
    this.routeCreate.origenDir = origenDir;
    this.routeCreate.destinoLatLng = destinoLatLng;
    this.routeCreate.destinoDir = destinoDir;
    console.log(' casa|ubicactual this.routeCreate.origenLatLng: ', this.routeCreate.origenLatLng)
    console.log('casa|ubicactual this.routeCreate.origenDir: ', this.routeCreate.origenDir)
    console.log('casa|ubicactual this.routeCreate.destinoLatLng: ', this.routeCreate.destinoLatLng)
    console.log('casa|ubicactual this.routeCreate.destinoDir: ', this.routeCreate.destinoDir)
    this.navCtrl.push(HomeCViewRutaPage);
  }




}
