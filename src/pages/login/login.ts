import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menu: MenuController, private alertCtrl: AlertController) {
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
    //let val=rest.api.verCredenciales(user,pass);
    //if(val) else error=true;
    this.navCtrl.setRoot(HomePage);
    //this.presentAlert();
  }

  private presentAlert() {
    let title = 'Te olvidaste?';
    let subTitle = 'Tu usuario o contrase&ntilde;a no son los correctos. \n Revisa e int&eacute;ntalo de nuevo';
    this.actionListenerpresentAlert(title, subTitle);
  }

  actionListenerpresentAlert(title, subTitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['Revisar']
    });
    alert.present();
  }



}
