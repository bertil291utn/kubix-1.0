import { Component, Injectable, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, ToastController, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HomeServiceProvider } from '../../providers/home-service/home-service';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario: string;
  password: string;
  userInfoData = { foto: null, primer_nombre: null, primer_apellido: null, email: null };


  constructor(public navCtrl: NavController, public navParams: NavParams, public myservices: HomeServiceProvider, public apiRestService: RestApiServiceProvider,
    private menu: MenuController, private alertCtrl: AlertController, public toastCtrl: ToastController, public event: Events) {

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

  signIn() {
    //si coinciden credenciales enviar al home caso contrario se aciva la variable error para el template de error
    //let val=rest.api.verCredenciales(user,pass);s
    //if(val) this.navCtrl.setRoot(HomePage); else this.presentToastDurationTop('Usuario o contrase\xF1a incorrectos', 2000);
    this.userInfo(this.usuario);
    this.navCtrl.setRoot(HomePage);
    //this.presentToastDurationTop('Usuario o contrase\xF1a incorrectos', 2000);
  }

  private userInfo(cedula: string) {
    this.apiRestService.getUsuario(cedula)
      .subscribe((resp) => {
        if (resp.items[0].foto != null)
          this.userInfoData.foto = 'data:image/png;base64,' + resp.items[0].foto;
        this.userInfoData.primer_nombre = resp.items[0].primer_nombre;
        this.userInfoData.primer_apellido = resp.items[0].primer_apellido;
        this.userInfoData.email = resp.items[0].correo_institucional;
        console.log('userInfoData: ', this.userInfoData);
        //publicar un evento la respuesta Userdataindo 
        this.event.publish('userInfoData', this.userInfoData);
      },
        (error) => {
          console.error(error);
        });
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
