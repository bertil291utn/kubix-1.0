import { Component, Injectable, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, ToastController, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario: string;
  password: string;



  constructor(public navCtrl: NavController, public navParams: NavParams, public myservices: EnvironmentVarService, public apiRestService: RestApiServiceProvider,
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
    //ingresar en talba usuasriosusuarios si es que no existe
    this.myservices.usuarioCedula = this.usuario;
    this.verificarTabUsuario();
    this.userInfo();
    //subir cedula de usuario actual a memoria
    this.myservices.usuarioCedula = this.usuario;
    this.navCtrl.setRoot(HomePage);
  }

  private verificarTabUsuario() {
    this.apiRestService.postUsuario()
      .subscribe((resp) => {
        console.log('resp: ', resp);
      });
  }

  private userInfo() {
    this.apiRestService.getUsuario()
      .subscribe((resp) => {
        if (resp.items[0].foto != null)
          this.myservices.userData.foto = 'data:image/png;base64,' + resp.items[0].foto;
        this.myservices.userData.primer_nombre = resp.items[0].primer_nombre;
        this.myservices.userData.primer_apellido = resp.items[0].primer_apellido;
        this.myservices.userData.email = resp.items[0].correo_institucional;
        console.log('userInfoData: ', this.myservices.userData);
        //publicar un evento la respuesta Userdataindo 
        this.event.publish('userInfoData', this.myservices.userData);
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
