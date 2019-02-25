import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { GoogleMap, Marker, GoogleMapOptions, GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
declare var google;
@IonicPage()
@Component({

  selector: 'page-set-home',
  templateUrl: 'set-home.html',
})
export class SetHomePage {

  public direccion;
  centerPos;
  public map: GoogleMap;

  constructor(private geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public nav: NavController,
    private nativeGeocoder: NativeGeocoder) {
  }


  ionViewDidLoad() {
    this.loadMapa();

  }

  ionViewDidEnter() {
    this.reverse_geo_application();
    this.camera_position();
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
    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      loading.dismiss();
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
   
      this.map.addEventListener(GoogleMapsEvent.CAMERA_MOVE_END).subscribe(() => {
        let target = this.map.getCameraTarget();
        let latlng = {
          lat: target.lat,
          lng: target.lng
        };
        this.r_g_no_native(latlng);
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
  }


  //geocoding stand by por result[0] no devuelve direcciones
  // reverse_gecodings(pos) {

  //   this.nativeGeocoder.reverseGeocode(pos.coords.latitude, pos.coords.longitude)
  //     .then((result: NativeGeocoderReverseResult[]) => {
  //       this.direccion = result[0].countryName;
  //       console.log(JSON.stringify(result[0]));

  //     }).catch((error: any) => console.log(error));

  // }
}

