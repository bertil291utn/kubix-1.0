import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ToastController, Platform, AlertController } from 'ionic-angular';
import { ViajesOrigenPage } from '../viajes-origen/viajes-origen';
import { ViajesConductorPage } from '../viajes-conductor/viajes-conductor';
import { HomePage } from '../home/home';
import { RutaProvider } from '../../providers/ruta/ruta';
import { StopConductorPage } from '../stop-conductor/stop-conductor';

declare var google;
declare var html2canvas;


@Component({
  selector: 'page-home-c-view-ruta',
  templateUrl: 'home-c-view-ruta.html',
})
export class HomeCViewRutaPage {
  @ViewChild('map_canvas') mapElement: ElementRef;
  public map: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  service;// = new google.maps.places.PlacesService(map);
  public proceso = 'ruta';
  toastLugares;
  center;


  constructor(public toastCtrl: ToastController,
    public loadingCtrl: LoadingController, public platform: Platform,
    public nav: NavController, public modalCtrl: ModalController,
    public navparams: NavParams, private zone: NgZone, public alertCtrl: AlertController,
    public routeCreate: RutaProvider) {

    //en caso de que se presione el boton de atras tiene hacer un pop de pages y qquitar todos los lugares seleccinados
    platform.registerBackButtonAction(() => {
      nav.pop();
      routeCreate.resetLugares();
      this.toastDismiss();
    });
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad HomeCViewRutaPage');
    this.initMapa();
  }



  //metodo para despuer de dar click en ion-segment y se haga el cambio en la variable proceso 
  updateVal() {
    this.zone.run(() => {
      if (this.proceso == 'ruta') {
        //en caso de que el ion-segment con el valor de ruta se haya activado el mapa se visualiza caso contario se oculta 
        this.mapElement.nativeElement.hidden = false;
        this.toastDismiss();
      } else {
        this.mapElement.nativeElement.hidden = true;
        //mostra el mensaje de trabajos continuos
        let message = 'Estamos trabajando para que el recorrido mostrado sea lo m\u00E1s exacto posible.' +
          ' Mientras tanto a\u00F1ada al menos dos lugares por donde vaya a pasar.';
        this.presentToastClosedButton(message);
      }
    });

  }

  presentToastClosedButton(message) {
    this.toastLugares = this.toastCtrl.create({
      message: message,
      closeButtonText: 'OK',
      showCloseButton: true
    });
    this.toastLugares.present();
  }

  toastDismiss() {
    this.toastLugares.dismiss();
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
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 8,
      disableDefaultUI: true,
      styles: styles
    });
    //this.map = GoogleMaps.create(this.mapElement.nativeElement);
    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setOptions({
      polylineOptions: {
        strokeColor: '#3f3d56'
      }
    });
    this.calculateAndDisplayRoute();//traer wayspoitn desde route
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      // this.center = this.map.getCenter();
      // do something only the first time the map is loaded
      loading.dismiss();
    });
    // google.maps.event.addDomListener(window, 'resize', function () {
    //   this.map.setCenter(this.center);
    // });
  }

  calculateAndDisplayRoute(wayPoints?) {
    this.directionsService.route({
      origin: { lat: this.routeCreate.origen.lat, lng: this.routeCreate.origen.lng },
      destination: { lat: this.routeCreate.destino.lat, lng: this.routeCreate.destino.lng },
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

  goToutnDestino() {

    this.nav.popTo('ViajesDestinoPage');

  }

  goToutnOrigen() {
    this.nav.popTo(ViajesOrigenPage);
  }

  goToCancel() {
    this.routeCreate.resetLugares();
    this.nav.setRoot(HomePage);
  }

  goToAceptar() {
    let elem = document.getElementById('map_canvas');
    html2canvas(elem, {
      optimized: false,
      allowTaint: false,
      useCORS: true,
      onrendered: (canvas) => {
        canvas.toBlob((blob) => {
          this.routeCreate.adicional = { foto_ruta: blob, foto_ubicacion: null };
        })
      }
    })

    console.log('origen: ', this.routeCreate.origen, 'destino: ', this.routeCreate.destino, 'lugares: ', this.routeCreate.lugares);
    this.nav.push(ViajesConductorPage);
  }



  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Informaci&oacute;n',
      message: 'Para a&ntildeadir lugares de paso presione en el cuadro de direcciones',
      buttons: ['OK']
    });
    alert.present();
  }


  goToPlaces() {

    let contactModal = this.modalCtrl.create(StopConductorPage, this.map);
    contactModal.present();
    contactModal.onDidDismiss(data => {
      let wayPointsArray = [];
      //console.log('waypoints de vuelta: ', data.waypoints);
      //anadir en un arrya temporal
      for (let obj of this.routeCreate.lugares)
        wayPointsArray.push(obj.waypoints);
      //this.initMapa(wayPointsArray);
      this.calculateAndDisplayRoute(wayPointsArray);//traer wayspoitn desde route
    });

  }


}


