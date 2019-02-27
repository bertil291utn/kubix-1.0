import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { GoogleMap, Marker, GoogleMapOptions, GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

declare var google;

@IonicPage()
@Component({
  selector: 'page-home-c-view-ruta',
  templateUrl: 'home-c-view-ruta.html',
})
export class HomeCViewRutaPage {
  public start = { lat: 0.3581583, lng: -78.112088 };
  public end = { lat: -0.0500051, lng: -78.1574179 };
  public map: GoogleMap;


  constructor(private geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public nav: NavController,
    private nativeGeocoder: NativeGeocoder) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCViewRutaPage');
    this.loadMapa();
   
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

  // public display_route() {

  //   directionsDisplay.setMap(this.map);
  //   this.calculateAndDisplayRoute(directionsService, directionsDisplay);
  // }
  public calculateAndDisplayRoute() {
    
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(this.map);
    directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        console.log(response);
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}
