import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { GoogleMap, Marker, GoogleMapOptions, GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { ViajesConductorPage } from '../viajes-conductor/viajes-conductor';
import html2canvas from 'html2canvas'

declare var google;
@IonicPage()
@Component({
  selector: 'page-set-map-pto',
  templateUrl: 'set-map-pto.html',
})
export class SetMapPtoPage {

  public direccion;
  public map: GoogleMap;
  punto_LatLng;
  callback
  dataUrl

  constructor(private geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public nav: NavController,
    public navparams: NavParams) {

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

  public saveMapToDataUrl(element) {
    html2canvas(element, {
      useCORS: true,
      onrendered: (canvas) => {
        let img=canvas.toDataURL("image/png").replace('data:image/png;base64,', '')
        let finalImgSrc= 'data:image/png;base64,' + img
        
      }
    });


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
      this.r_g_no_native(latlng);
      this.punto_LatLng = latlng;
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
    this.r_g_no_native(await this.getLocation());
    this.punto_LatLng = await this.getLocation();
  }

  goToViewConductor() {

    let element = document.getElementById("map_canvas6")
    this.saveMapToDataUrl(element)
    this.nav.pop().then(() => {
      this.navparams.get('callback')(this.punto_LatLng);
    });
  }


}
