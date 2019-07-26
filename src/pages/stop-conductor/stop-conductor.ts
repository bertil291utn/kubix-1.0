import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { RutaProvider } from '../../providers/ruta/ruta';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';

declare var google;
@Component({
  selector: 'page-stop-conductor',
  templateUrl: 'stop-conductor.html',
})
export class StopConductorPage {
  GoogleAutocomplete = new google.maps.places.AutocompleteService();;
  autocomplete = { input: '' };
  autocompleteItems = [];
  predictionsLugares = "";
  servicePlace;// = new google.maps.places.PlacesService(map);

  //wayPointsObject;// = { location: { lat: null, lng: null }, stopover: true };
  indexLugares = 0;
  deleteValue: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private zone: NgZone, public routeCreate: RutaProvider, public toastCtrl: ToastController,
    public myservices: EnvironmentVarService) {
    console.log('navParams.data: ', navParams.data);
  }

  ionViewDidLoad() {
    //this.initValAutocomplete();
    console.log('ionViewDidLoad StopConductorPage');
  }


  // private initValAutocomplete() {
  //   //iniciar valores de autcomplete
  //   this.GoogleAutocomplete
  //   this.autocompleteItems = [];
  // }

  //metodo para cuando haga clic en la barra de busqueda
  updateSearchResults() {
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }

    let config = {
      input: this.autocomplete.input,
      componentRestrictions: { 'country': 'ec' },
      types: ['establishment']
    };

    this.GoogleAutocomplete.getPlacePredictions(config,
      (predictions, status) => {
        this.autocompleteItems = [];

        this.predictionsLugares = predictions;
        if (predictions != null)
          this.zone.run(() => {
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction);
            });
          });
      });
  }


  //item es el resultado del lugar seleccionado del listado de lugares que da el autocomplete 
  selectSearchResult(item) {
    console.log('item: ', item);
    this.placeIdToLatLng(item);

    //limpiar el input y el listado mostrado despues de seleccionar el deseado
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
    //actualizar el tamno del arrya lugares. Para que se activen los botondes de ACEPTAR  o CANCELAR 
    this.indexLugares++;
    console.log('lugares guardado en ruta service: ', this.routeCreate.lugares);
  }

  deletePlace(id) {
    //elimina el lugar de aucerdo al id dado
    this.routeCreate.lugares.splice(this.routeCreate.lugares.findIndex(obj => obj.id == id), 1);
    this.deleteValue = true;

  }

  private placeIdToLatLng(item) {
    //obtener lat y lng pasando como argumento un placeid de un lugar, Metodo usado para creaer el waypoint en el map
    let mainName = this.myservices.removeaccents(item.structured_formatting.main_text);
    let subName = this.myservices.removeaccents(item.structured_formatting.secondary_text);
    let nombreExtenso = this.myservices.removeaccents(item.description);
    let placeid = item.id;

    let wayPointsObject = { location: { lat: null, lng: null }, stopover: true };
    this.servicePlace = new google.maps.places.PlacesService(this.navParams.data);
    this.servicePlace.getDetails({ placeId: item.place_id }, (place, status) => {
      //console.log('place Id: ', place);
      if (status === 'OK') {
        wayPointsObject.location.lat = place.geometry.location.lat();
        wayPointsObject.location.lng = place.geometry.location.lng();
        let lugar = {
          id: this.indexLugares, placeid: placeid, mainName: mainName, subName: subName,
          nombreExtenso: nombreExtenso, waypoints: wayPointsObject
        };
        let lugarExists = this.lugarExists(placeid);
        if (!lugarExists) {
          this.routeCreate.lugares = lugar;
          this.zone.run(() => { this.routeCreate.lugares; })
        } else {
          let message = 'Este lugar ya ha sido agregado';
          this.presentToastDurationTop(message, 2000);
        }
      }
    });
  }

  //alternativa a funcion includes para objetos
  lugarExists(id) {
    let found = false;
    let lugaresLenght = this.routeCreate.lugares.length;
    for (var i = 0; i < lugaresLenght; i++) {
      if (this.routeCreate.lugares[i].placeid == id) {
        found = true;
        break;
      }
    }
    return found;
  }

  presentToastDurationTop(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'top',
      duration: duration
    });
    toast.present();
  }

  saveModalPlace() {
    //console.log('waypoitns de ida: ', this.wayPointsArray);
    if (this.routeCreate.lugares.length > 1)
      //let data = { waypoints: this.wayPointsArray };
      this.viewCtrl.dismiss(true);
    else
      this.presentToastDurationTop('Debe ingresar al menos dos lugares.', 2000);
  }

  closeModalPlace() {
    console.log('waypoitns de ida: ', this.routeCreate.lugares.waypoints);
    /* if (this.routeCreate.lugares.length > 1) {*/
    //let data = { waypoints: this.wayPointsArray };
    //si elimina al cerrar asi tenga un solo lugar tiene que actualizar
    if (this.deleteValue)
      this.viewCtrl.dismiss(true);
    else
      this.viewCtrl.dismiss();

  }

}
