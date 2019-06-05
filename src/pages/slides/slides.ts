import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {
  @ViewChild(Slides) slides: Slides;
 // @ViewChild(Nav) nav: Nav;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }
  

  reachedEnd() {

    this.navCtrl.setRoot(LoginPage);
  }


}
