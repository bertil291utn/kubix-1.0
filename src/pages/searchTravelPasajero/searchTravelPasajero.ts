import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { RutaProvider } from '../../providers/ruta/ruta';

declare var google;
@Component({
  selector: 'page-searchTravelPasajero',
  templateUrl: 'searchTravelPasajero.html',
})
export class searchTravelPasajero {
  allTravelItems = [];
  filteredItems;
  query;
  lista_viaje;
  toastLugares;
  eventSalgoTouniversidad: boolean = false;
  autocomplete = { input: '' };//para un search bar tiene que la variable tipo objeto 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public routeCreate: RutaProvider,
    private zone: NgZone, public toastCtrl: ToastController
  ) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchTravelPasajero');
    //this.presentToastDurationBottom('¿D\xF3nde te encuentras?', 2000);
    console.log('this.navParams.data.lista_viaje: ', this.navParams.data.lista_viaje);
    this.allTravelItems = this.initializeItems(this.navParams.data.lista_viaje);
    this.addOrigenDestino();

  }


  initializeItems(arrayViajesDisponibles) {
    let arrayinitializeItems = [];
    for (let obj of arrayViajesDisponibles)
      if (!this.eventSalgoTouniversidad) {
        if (obj.destino.lat == 0.3581583)
          arrayinitializeItems = arrayinitializeItems.concat(obj.lugares);
      } else
        if (obj.origen.lat == 0.3581583)
          arrayinitializeItems = arrayinitializeItems.concat(obj.lugares);

    return this.removeDuplicateObjectArray(arrayinitializeItems, 'place_id');

  }

  //eliminar objetos duplicados de un array de objetos 
  //@comp es el nombre de la variable a comparar. El critetio 
  removeDuplicateObjectArray(duplicateObjecArray, comp) {
    const unique = duplicateObjecArray
      .map(objeto => objeto[comp])
      // store the keys of the unique objects
      .map((objeto, index, final) => final.indexOf(objeto) === index && index)
      // eliminate the dead keys & store unique objects
      .filter(objeto => duplicateObjecArray[objeto]).map(objeto => duplicateObjecArray[objeto]);
    return unique;
  }



  getItems(ev: any) {
    //console.log('estoy en get items: ', ev)
    // Reset allTravelItems back to all of the items
    this.filteredItems = this.allTravelItems
    // set val to the value of the searchbar
    this.query = ev.target.value;
    // if the value is an empty string don't filter the items
    if (this.query && this.query.trim() != '') {
      this.filteredItems = this.filteredItems.filter((item) => {
        //console.log('item: ', item)
        return (item.short_name.toLowerCase().indexOf(this.query.toLowerCase()) > -1);
      })
    }

  }//end function



  selectSearchResult(travel) {
    console.log('item: ', travel);
    //item.placeid enviar este valor para busqueda
    // this.toastDismiss();
    this.viewCtrl.dismiss(travel);
  }


  presentToastClosedButton(message) {
    this.toastLugares = this.toastCtrl.create({
      message: message,
      closeButtonText: 'OK',
      showCloseButton: true
    });
    this.toastLugares.present();
  }


  presentToastDurationBottom(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'bottom',
      duration: duration
    });
    toast.present();
  }


  activatechangeMode(event) {
    this.query = '';
    this.autocomplete.input = '';
    console.log(event)
    this.eventSalgoTouniversidad = event;
    this.addOrigenDestino();
  }

  public addOrigenDestino() {
    this.allTravelItems = [];
    this.allTravelItems = this.initializeItems(this.navParams.data.lista_viaje);//volver a asignar los places 
    //!eventSalgoTouniversidad= ORIGEN caso contratio DESTINO
    for (let obj of this.navParams.data.lista_viaje)
      if (!this.eventSalgoTouniversidad) {
        if (obj.origen.lat != 0.3581583)//lat de universidad poner este mismo en la bd
          this.allTravelItems.push(obj.origen);
      } else if (obj.destino.lat != 0.3581583)
        this.allTravelItems.push(obj.destino);
  }


}//end class
