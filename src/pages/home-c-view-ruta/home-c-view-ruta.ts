import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ViajesDestinoPage } from '../viajes-destino/viajes-destino';
import { ViajesOrigenPage } from '../viajes-origen/viajes-origen';
import { ViajesOrigenDestinoPage } from '../viajes-origen-destino/viajes-origen-destino';
declare var google;

@IonicPage()
@Component({
  selector: 'page-home-c-view-ruta',
  templateUrl: 'home-c-view-ruta.html',
})
export class HomeCViewRutaPage {
  @ViewChild('map_canvas') mapElement: ElementRef;
  public map: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  origen_LatLng;
  destino_LatLng;
  origen_direccion;
  destino_direccion;

  constructor(public loadingCtrl: LoadingController, public nav: NavController, public navparams: NavParams) {
    this.origen_LatLng = navparams.get('origen_LatLngnvp');
    this.destino_LatLng = navparams.get('destino_LatLngnvp');
    this.destino_direccion = navparams.get('destino_direccionnvp');
    this.origen_direccion = navparams.get('origen_direccionnvp');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCViewRutaPage');
    this.initMapa();

  }

  initMapa() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      disableDefaultUI: true
    });
    //this.map = GoogleMaps.create(this.mapElement.nativeElement); 
    this.directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute();
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.origen_LatLng,
      destination: this.destino_LatLng,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }


  goToutnDestino() {
    this.nav.push(ViajesDestinoPage);
  }

  goToutnOrigen() {
    this.nav.push(ViajesOrigenPage);
  }

  goToCancel() {
    this.nav.push(ViajesOrigenDestinoPage);
  }

}
