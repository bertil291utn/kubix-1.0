import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';

declare var google;
@Component({
  selector: 'page-view-map-detalles',
  templateUrl: 'view-map-detalles.html',
})

export class ViewMapDetallesPage {

  @ViewChild('map_canvas2') mapElement: ElementRef;
  public map: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  service;// = new google.maps.places.PlacesService(map);
  datosMap;

  constructor(public navParams: NavParams,
    public loadingCtrl: LoadingController, public viewCtrl: ViewController,
    public nav: NavController) {
    this.datosMap = navParams.data.datos;
    console.log('ruta: ', this.navParams.data.ruta);
  }

  ionViewDidLoad() {

    this.initMapa();

  }

  initMapa() {
    const loading = this.loadingCtrl.create();
    loading.present();
    let styles = [
      {
        "stylers": [
          {
            "hue": "#e7ecf0"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.government",
        "stylers": [
          {
            "color": "#ffff80"
          }
        ]
      },
      {
        "featureType": "poi.medical",
        "stylers": [
          {
            "color": "#80c2ff"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "stylers": [
          {
            "color": "#75e159"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.school",
        "stylers": [
          {
            "color": "#ffff80"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "saturation": -70
          }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
          {
            "saturation": -60
          },
          {
            "visibility": "simplified"
          }
        ]
      }
    ];
    let myMapType: string;
    let zoom: number;
    let center;

    if (!this.navParams.data.ruta) {
      myMapType = 'hybrid';
      zoom = 18;
      center = { lat: this.datosMap.puntoEncuentro.lat, lng: this.datosMap.puntoEncuentro.lng }

    } else {
      myMapType = 'roadmap';
      zoom = 22;
      center = null;

    }

    let mapOptions = {
      center: center,
      zoom: zoom,
      disableDefaultUI: true,
      styles: styles,
      mapTypeId: myMapType
    };
    // console.log('mpa ooptions: ', mapOptions);
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //this.map = GoogleMaps.create(this.mapElement.nativeElement);
    if (this.navParams.data.ruta) {
      this.directionsDisplay.setMap(this.map);
      this.directionsDisplay.setOptions({
        polylineOptions: {
          strokeColor: '#3f3d56'
        }
      });
      let wayPointsArray = [];
      for (let obj of this.datosMap.lugares)
        wayPointsArray.push(obj.waypoints);
      this.calculateAndDisplayRoute(wayPointsArray);//traer wayspoitn desde route
    } else
      //ad marker 
      this.addMarker({ lat: this.datosMap.puntoEncuentro.lat, lng: this.datosMap.puntoEncuentro.lng });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      // do something only the first time the map is loaded
      loading.dismiss();
    });
  }

  private addMarker(location) {
    let marker = new google.maps.Marker({
      position: location,
      map: this.map
    });

  }

  calculateAndDisplayRoute(wayPoints?) {
    this.directionsService.route({
      origin: { lat: this.datosMap.origen.lat, lng: this.datosMap.origen.lng },
      destination: { lat: this.datosMap.destino.lat, lng: this.datosMap.destino.lng },
      travelMode: 'DRIVING',
      waypoints: wayPoints,
      optimizeWaypoints: true
    }, (response, status) => {
      if (status === 'OK') {
        //console.log('response calculate display: ', response);
        this.directionsDisplay.setDirections(response);
      } else {
        console.log('Directions request failed due to ' + status);
        // window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
