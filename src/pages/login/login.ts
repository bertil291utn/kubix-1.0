import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menu: MenuController, private alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    //disable enable menu lateral
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave() {
    //habiitar cuando saga de este page  enable menu lateral
    this.menu.swipeEnable(true);

  }

  goToHome() {
    //si coinciden credenciales enviar al home caso contrario se aciva la variable error para el template de error
    //let val=rest.api.verCredenciales(user,pass);s
    //if(val) this.navCtrl.setRoot(HomePage); else this.presentToastDurationTop('Usuario o contrase\xF1a incorrectos', 2000);
    this.navCtrl.setRoot(HomePage);
      //this.presentToastDurationTop('Usuario o contrase\xF1a incorrectos', 2000);
  }


  public presentAlert(subtitle) {
    let alert = this.alertCtrl.create({
      subTitle: subtitle,
      buttons: ['OK']
    })
    alert.present();
  }


  presentToastDurationTop(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'top',
      duration: duration
    });
    toast.present();
  }


}
