import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController, App } from 'ionic-angular';
import { GoogleMap, Marker, GoogleMapOptions, GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { HomeCViewRutaPage } from '../home-c-view-ruta/home-c-view-ruta';
import { RutaProvider } from '../../providers/ruta/ruta';

declare var google;

@Component({
  selector: 'page-set-map-origen',
  templateUrl: 'set-map-origen.html',
})
export class SetMapOrigenPage {
  public direccion;
  public map: GoogleMap;
  varLatLng;
  varDir;
  setmap: boolean;
  utnOrigen: boolean;
  ubicacion: boolean;
  varInterval;

  constructor(private geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public nav: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public routeCreate: RutaProvider,
    public appCtrl: App) {
    this.setmap = navParams.get('setmap');
    this.utnOrigen = navParams.get('utnOrigen');
    this.ubicacion = navParams.get('ubicacion');
  }

  ionViewDidLoad() {
    this.loadMapa();
    this.reverse_geo_application();
    this.ActionGetLocation();
  }

  ionViewDidEnter() {
    this.varInterval = setInterval(() => {
      this.direccion;
      this.varLatLng;
    }, 1000);
  }

  ionViewDidLeave() {
    //pararla funcion de busqueda el momento que haya dejado el page
    clearInterval(this.varInterval);
  }

  ionViewWillLeave() {
    const nodeList = document.querySelectorAll('._gmaps_cdv_');
    for (let k = 0; k < nodeList.length; ++k) {
      nodeList.item(k).classList.remove('_gmaps_cdv_');
    }
  }



  async loadMapa() {
    const loading = this.loadingCtrl.create();
    loading.present();
    const myLatLng = await this.getLocation();
    let myMapType: string;
    if (this.ubicacion)
      myMapType = 'MAP_TYPE_HYBRID';
    else
      myMapType = 'MAP_TYPE_ROADMAP';

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: myLatLng.lat,
          lng: myLatLng.lng
        },
        zoom: 18
      },
      mapType: myMapType
    };

    this.map = GoogleMaps.create('map_canvas6', mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      loading.dismiss();
      this.camera_position();
    });



  }

  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

  camera_position() {

    this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe((val) => {
      let target = val[0].target;
      let latlng = {
        lat: target.lat,
        lng: target.lng
      };
      this.geoDecoder(latlng);
      this.varLatLng = latlng;
    });

  }

  geoDecoder(latlng) {
    //geodecorder javascript api 
    let geocoder = new google.maps.Geocoder;
    geocoder.geocode({ 'location': latlng }
      , (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            this.direccion = results[0].formatted_address;
            this.varDir = this.direccion;
          }
        }

      });

  }


  async reverse_geo_application() {
    this.geoDecoder(await this.getLocation());

  }

  async ActionGetLocation() {
    this.varLatLng = await this.getLocation();
  }

  saveValues() {
    if (this.utnOrigen)
      //utn es origen
      if (this.setmap) {
        //utilzo funcion selecconar mapa
        //se guardan las variable de latitud y ongitud y direccion en el provider destino dir y dir latlng
        //se hace dismiss del controller y se direcciona al home view ruta
        this.viewCtrl.dismiss();
        this.routeCreate.destinoLatLng = this.varLatLng;
        this.routeCreate.destinoDir = this.varDir;
        // this.nav.push(HomeCViewRutaPage);
        this.appCtrl.getRootNav().push(HomeCViewRutaPage);

      } else {
        //utilizo funcion setear casa, por lo tanto se debe
        //guardar valores en casa base enviar por api a guardar 
        //this.varDir ;this.varLatLng
        this.returnValues();
      }
    else
      //utn es destino
      if (this.setmap) {
        //utilzo funcion selecconar mapa
        //se guardan las variable de latitud y ongitud y direccion en el provider origen dir y dir latlng
        //se hace dismiss del controller y se direcciona al home view ruta
        this.viewCtrl.dismiss();
        this.routeCreate.origenLatLng = this.varLatLng;
        this.routeCreate.origenDir = this.varDir;
        this.appCtrl.getRootNav().push(HomeCViewRutaPage);

      } else {
        //utilizo funcion setear casa, por lo tanto se debe
        //guardar valores en casa base enviar por api a guardar 
        //this.varDir ;this.varLatLng
        this.returnValues();
      }
    //this ubicacion viene cunado el conductor establece punto de encuentro viaje-conductor page 
    if (this.ubicacion) {
      let data = { ubicacionLatLng: this.varLatLng };
      this.viewCtrl.dismiss(data);
    }


  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  returnValues() {
    //casa verdadero para que el template se visualice en viaje-origen page
    let data = { casa: true, ubicacionLatLng: this.varLatLng };
    this.viewCtrl.dismiss(data);

  }

}
