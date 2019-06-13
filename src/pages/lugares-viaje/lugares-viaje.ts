import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RutaProvider } from '../../providers/ruta/ruta';

declare var google;
@Component({
  selector: 'page-lugares-viaje',
  templateUrl: 'lugares-viaje.html',
})
export class LugaresViajePage {
  GoogleAutocomplete;
  autocomplete;
  autocompleteItems;
  predictions = "";


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public routeCreate: RutaProvider,
    private zone: NgZone
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
    // let ruta = routeCreate.lugares;
    // console.log('routeCreate.lugares: ', ruta);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugaresViajePage');
  }


  
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
    console.log('item: ', item);

  }


  saveValues() {
    console.log('guardar valores luego regresa al homecview');
    this.routeCreate.lugares = '1';
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
