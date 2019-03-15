import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-viajes-conductor',
  templateUrl: 'viajes-conductor.html',
})
export class ViajesConductorPage {
  public proceso = 'horario';
  repeat = 2
  dia = new Date().getDay()
  hora

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hora = this.calculateTime('-5');
    // If it is Daylight Savings Time
    if (this.dst(new Date())) {
      this.hora = this.calculateTime('-4');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesConductorPage');

  }





  calculateTime(offset: any) {
    // create Date object for current location
    let d = new Date();
    // create new Date object for different city
    // using supplied offset
    let nd = new Date(d.getTime() + (3600000 * offset));
    return nd.toISOString();
  }





  // Determine if the client uses DST
  stdTimezoneOffset(today: any) {
    let jan = new Date(today.getFullYear(), 0, 1);
    let jul = new Date(today.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  }


  dst(today: any) {
    return today.getTimezoneOffset() < this.stdTimezoneOffset(today);
  }



}
