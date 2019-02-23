import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { GoogleMap, Marker, GoogleMapOptions, GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

@IonicPage()
@Component({
  selector: 'page-set-home',
  templateUrl: 'set-home.html',
})
export class SetHomePage {
  result;
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


    this.reverse_gecodings(myLatLng.lat, myLatLng.lat);
    this.result = 'lat: ' + myLatLng.lat + ' long: ' + myLatLng.lng;
    console.log(myLatLng);
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
      this.result = 'lat: ' + target.lat + ' long: ' + target.lat;
      console.log(target);
      this.reverse_gecodings(target.lat, target.lng);
    });

  }
  reverse_gecodings(lat: number, lng: number) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(lat, lng, options)
      .then((result: NativeGeocoderReverseResult[]) => console.log(JSON.stringify(result[0])))
      .catch((error: any) => console.log(error));
    //this.result = result[0].formt;
  }

  



}
