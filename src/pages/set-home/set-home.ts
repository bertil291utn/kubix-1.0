import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { GoogleMap, Marker, GoogleMapOptions, GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
declare var google;
declare var plugin;
@IonicPage()
@Component({

  selector: 'page-set-home',
  templateUrl: 'set-home.html',
})
export class SetHomePage {

  public direccion;
  public map: GoogleMap;

  constructor(private geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public nav: NavController,
    private nativeGeocoder: NativeGeocoder) {
  }


  ionViewDidLoad() {
    this.loadMapa();
    this.reverse_geo_application();
  }

  ionViewDidEnter() {
    setInterval(() => {
      this.direccion;
    }, 1000);
  }



  async loadMapa() {
    const loading = this.loadingCtrl.create();
    loading.present();
    const myLatLng = await this.getLocation();
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: myLatLng.lat,
          lng: myLatLng.lng
        },
        zoom: 18
      }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);//aqui le asigno el mapa este mapa se ve 
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
      //this.reverse_gecodings(target.lat,target.lng);
      console.log(this.direccion)
    });

  }

  r_g_no_native(latlng) {

    let geocoder = new google.maps.Geocoder;
    geocoder.geocode({ 'location': latlng }
      , (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            this.direccion = results[0].formatted_address;

          }
        }

      });

  }


  async reverse_geo_application() {
    const rta = await this.geolocation.getCurrentPosition();
    let latlng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    this.r_g_no_native(latlng);
    // this.reverse_gecodings(rta.coords.latitude,rta.coords.longitude);

  }


  //geocoding stand by por result[0] no devuelve direcciones
  // reverse_gecodings(lat:number,lng:number) {

  //   this.nativeGeocoder.reverseGeocode(lat, lng)
  //     .then((result: NativeGeocoderReverseResult[]) => {
  //       this.direccion = result[0].locality+', '+result[0].subLocality+', '+result[0].countryName;
  //     }).catch((error: any) => console.log(error));

  // }

}

