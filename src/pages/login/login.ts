import { Component, Injectable, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, ToastController, Events, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { Storage } from '@ionic/storage';
import { AuthenticationserviceProvider } from '../../providers/authenticationservice/authenticationservice';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario: string;
  password: string;



  constructor(public navCtrl: NavController, public navParams: NavParams, public myservices: EnvironmentVarService, public apiRestService: RestApiServiceProvider,
    private menu: MenuController, private alertCtrl: AlertController, public toastCtrl: ToastController, public event: Events,
    private storage: Storage, private authService: AuthenticationserviceProvider,
    public loadingController: LoadingController) {

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

  public async signIn() {
    const loading = await this.loadingController.create({
      content: 'Iniciando sesi&oacute;n...'
    });
    loading.present();
    //this.usuario = this.usuario.substring(1);//remove first character
    let userData = { username: this.usuario, pass: this.password }
    let val = true;//devuelve el api si es cooresto o no
    //si coinciden credenciales enviar al home caso contrario se aciva la variable error para el template de error
    //let val=rest.api.verCredenciales(user,pass);s
    if (val) {
      this.authService.login(userData, this.usuario).then(() => {
        this.verificarTabUsuario();
        this.userInfo();
        //this.storage.set('userid', this.usuario);
        // this.myservices.usuarioCedula = this.usuario;
        this.navCtrl.setRoot(HomePage);
      }, err => {
        console.log('Ha ocurrido un error al inciar sesión.');
      });

    } else {
      this.presentToastDurationTop('Usuario o contrase\xF1a incorrectos', 2000);
      loading.dismiss();
    }

    loading.dismiss();
    //ingresar en talba usuasriosusuarios si es que no existe
    //obtener el usuario que arroja el API o solo quitar la letra E A D

    //   //subir cedula de usuario actual a memoria
    //   this.myservices.usuarioCedula = this.usuario;
    //   this.navCtrl.setRoot(HomePage);
  }

  private verificarTabUsuario() {
    this.apiRestService.verificarUsuarioExists()
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
        this.myservices.userData.segundo_nombre = resp.items[0].segundo_nombre;
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
