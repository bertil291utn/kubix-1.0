import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, ToastController, Platform } from 'ionic-angular';
import { ViajesDestinoPage } from '../viajes-destino/viajes-destino';
import { ViajesOrigenPage } from '../viajes-origen/viajes-origen';
import { ViajesOrigenDestinoPage } from '../viajes-origen-destino/viajes-origen-destino';
import { ViajesConductorPage } from '../viajes-conductor/viajes-conductor';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { RutaProvider } from '../../providers/ruta/ruta';
import { LugaresViajePage } from '../lugares-viaje/lugares-viaje';

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
  origenLatLng;
  destinoLatLng;
  origenDir;
  destinoDir;
  image;
  public proceso = 'ruta';
  GoogleAutocomplete;
  autocomplete;
  autocompleteItems;
  predictions = "";
  toast;

  constructor(private storage: Storage, public toastCtrl: ToastController,
    public loadingCtrl: LoadingController, public platform: Platform,
    public nav: NavController, public modalCtrl: ModalController,
    public navparams: NavParams, private zone: NgZone,
    public routeCreate: RutaProvider) {

    this.origenLatLng = routeCreate.origenLatLng;
    this.destinoLatLng = routeCreate.destinoLatLng;
    this.origenDir = routeCreate.origenDir;
    this.destinoDir = routeCreate.destinoDir;

    console.log('this.origenLatLng: ', this.origenLatLng,
      'this.origenDir: ', this.origenDir,
      'this.destinoLatLng: ', this.destinoLatLng,
      'this.destinoDir: ', this.destinoDir);
    // let route = routeCreate.lugares;
    // console.log('routeCreate.lugares: ', route);

    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
    //en caso de que se presione el boton de atras tiene hacer un pop de pages y qquitar todos los lugares seleccinados
    platform.registerBackButtonAction(() => {
      nav.pop();
      routeCreate.resetLugares();
    });

  }
  //metodo para cuando haga clic en la barra de busqueda
  updateSearchResults() {
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }

    let config = {
      input: this.autocomplete.input,
      componentRestrictions: { 'country': 'ec' }
    };

    this.GoogleAutocomplete.getPlacePredictions(config,
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          this.predictions = predictions;
          if (predictions != null)
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction);
            });
        });
      });
  }


  selectSearchResult(item) {
    //console.log('item: ', item);
    console.log('guardar valores en route routeCreate.lugares');
    let nombreCorto = item.terms[0].value;
    let nombreExtenso = item.description;
    let lugar = { nombreCorto: nombreCorto, nombreExtenso: nombreExtenso };
    this.routeCreate.lugares = lugar;
    // console.log('lugar: ', lugar);
    //console.log('array lugares: ', this.routeCreate.lugares);
    //limpiar el input y el listado mostrado despues de seleccionar el deseado
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
    //actualizar el tamno del arrya lugares. Para que se activen los botondes de ACEPTAR  o CANCELAR 
    this.zone.run(() => {
      this.routeCreate.lugares.length
    });


  }



  goToModalLugViaje() {
    let contactModal = this.modalCtrl.create(LugaresViajePage);
    // contactModal.onDidDismiss(data => {
    //   console.log('data es despues de dismis: ', data);
    // });
    contactModal.present();
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
        this.presentToast();
      }
    });

  }

  presentToast() {
    this.toast = this.toastCtrl.create({
      message: 'Estamos trabajando para que el recorrido mostrado sea lo m\u00E1s exacto posible.' +
        ' Mientras tanto a\u00F1ada al menos dos lugares por donde vaya a pasar.',
      closeButtonText: 'OK',
      showCloseButton: true
    });
    this.toast.present();


  }

  toastDismiss() {
    this.toast.dismiss();
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
      origin: this.origenLatLng,
      destination: this.destinoLatLng,
      travelMode: 'WALKING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
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
    let elem = document.getElementById('map_canvas')
    //this.capImagen(elem)


    //guardar en base de datos la imgen de rutas
    this.nav.push(ViajesConductorPage);

  }

  capImagen(elem) {
    html2canvas(elem, {
      optimized: false, allowTaint: false,
      useCORS: true, onrendered: (canvas) => {
        canvas.toBlob((blob) => {
          let URLObj = window.URL || (window as any).webkitURL;
          let image = URLObj.createObjectURL(blob)
          this.storage.set('imageurl', image)
          console.log('imageurl: ', image)
          // return image
          //document.getElementById('imgout').setAttribute("src", image)
        })
      }
    })
  }


}


