import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { GoogleMap, Marker, GoogleMapOptions, GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { HomeCViewRutaPage } from '../home-c-view-ruta/home-c-view-ruta';
declare var google;
@IonicPage()
@Component({

  selector: 'page-set-home',
  templateUrl: 'set-home.html',
})
export class SetHomePage {

  public direccion;
  public map: GoogleMap;
  origen_LatLng;
  destino_LatLng;
  origen_direccion;
  destino_direccion;

  constructor(private geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public nav: NavController,
    private nativeGeocoder: NativeGeocoder) {
  }


  ionViewDidLoad() {
    this.origen_LatLng = { lat: 0.3581583, lng: -78.112088 };
    this.origen_direccion = 'Universidad Tecnica del Norte';
    this.loadMapa();
    this.reverse_geo_application();
  }

  ionViewDidEnter() {
    setInterval(() => {
      this.direccion;
    }, 1000);
  }

  goToViewRoute() {
    this.nav.push(HomeCViewRutaPage, {
      origen_LatLngnvp: this.origen_LatLng,
      destino_LatLngnvp: this.destino_LatLng,
      origen_direccionnvp: this.origen_direccion,
      destino_direccionnvp: this.destino_direccion
    });
  }


  async loadMapa() {
    const loading = this.loadingCtrl.create();
    loading.present();
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: await this.getLocation(),
        zoom: 18
      }
    };
    this.map = GoogleMaps.create('map_canvas3', mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      loading.dismiss();
      this.camera_position();
      console.log(this.direccion)
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
      //  let target=this.map.getCameraTarget();

      let latlng = {
        lat: target.lat,
        lng: target.lng
      };
      this.r_g_no_native(latlng);
      this.destino_LatLng = latlng;
    });

  }

  r_g_no_native(latlng) {

    let geocoder = new google.maps.Geocoder;
    geocoder.geocode({ 'location': latlng }
      , (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            this.direccion = results[0].formatted_address;
            this.destino_direccion = this.direccion;
          }
        }

      });

  }


  async reverse_geo_application() {
    this.r_g_no_native(await this.getLocation());
    this.destino_LatLng = await this.getLocation();

  }


  //geocoding stand by por result[0] no devuelve direcciones
  // reverse_gecodings(lat:number,lng:number) {

  //   this.nativeGeocoder.reverseGeocode(lat, lng)
  //     .then((result: NativeGeocoderReverseResult[]) => {
  //       this.direccion = result[0].locality+', '+result[0].subLocality+', '+result[0].countryName;
  //     }).catch((error: any) => console.log(error));

  // }

}

