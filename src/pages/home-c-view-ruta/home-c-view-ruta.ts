import { Component, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('map_canvas') mapElement: ElementRef;
  public start = { lat: 0.3581583, lng: -78.112088 };
  public end = { lat: 0.0412345, lng: -78.1460585 };
  public map: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(private geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public nav: NavController,
    private nativeGeocoder: NativeGeocoder) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCViewRutaPage');
    this.initMapa();

  }

  initMapa() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 },
      disableDefaultUI: true
    });
    //this.map = GoogleMaps.create(this.mapElement.nativeElement); 
    this.directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute1();
  }

  calculateAndDisplayRoute1() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
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
  this.map = GoogleMaps.create('map_canvas', mapOptions);
  this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
    loading.dismiss();
  });
  this.calculateAndDisplayRoute();
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
