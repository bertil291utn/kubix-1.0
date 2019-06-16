import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RutaProvider } from '../../providers/ruta/ruta';

declare var google;
@Component({
  selector: 'page-searchTravelPasajero',
  templateUrl: 'searchTravelPasajero.html',
})
export class searchTravelPasajero {
  allTravelItems;
  filteredItems;
  query;
  lista_viaje;



  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public routeCreate: RutaProvider,
    private zone: NgZone
  ) {

    console.log('this.filtereditems: ', this.filteredItems)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugaresViajePage');
    this.allTravelItems = this.initializeItems(this.navParams.data.lista_viaje);
  }


  initializeItems(arrayViajesDisponibles) {
    let arrayinitializeItems = [];
    for (let obj of arrayViajesDisponibles)
      arrayinitializeItems = arrayinitializeItems.concat(obj.lugares);
    return this.removeDuplicateObjectArray(arrayinitializeItems, 'placeid');

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
        return (item.nombreCorto.toLowerCase().indexOf(this.query.toLowerCase()) > -1);
      })
    }

  }//end function



  selectSearchResult(item) {
    console.log('item: ', item);
    //item.placeid enviar este valor para busqueda
    this.viewCtrl.dismiss(item.placeid);
  }









}
