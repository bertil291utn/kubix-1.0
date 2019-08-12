import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, AlertController, ToastController, Events, LoadingController, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { AuthenticationserviceProvider } from '../../providers/authenticationservice/authenticationservice';
import { DomSanitizer } from '@angular/platform-browser';
import { NetworkProvider } from '../../providers/network/network';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario: string;
  password: string;
  toastInternet;
  loadingCrtlRefresh;

  constructor(public navCtrl: NavController, public navParams: NavParams, public myservices: EnvironmentVarService, public apiRestService: RestApiServiceProvider,
    private menu: MenuController, private alertCtrl: AlertController, public toastCtrl: ToastController, public event: Events,
    private authService: AuthenticationserviceProvider, public networkProvider: NetworkProvider, public platform: Platform,
    public events: Events, public network: Network,
    public loadingController: LoadingController, private sanitizer: DomSanitizer) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    //disable enable menu lateral
    this.menu.swipeEnable(false);
    this.networkReviewEnabled();
  }

  ionViewWillLeave() {
    //habiitar cuando saga de este page  enable menu lateral
    this.menu.swipeEnable(true);
  }

  public networkReviewEnabled() {

    if (!navigator.onLine) {
      this.loadingCrtlRefresh = this.loadingController.create();
      this.loadingCrtlRefresh.present();
      this.presentToastStaticTop('Comprueba tu conexi\xF3n y vuelve a intentarlo');
    } else {
      this.presentToastDurationTop('Aplicaci\xF3n en l\xEDnea', 1000);
    }

    this.platform.ready().then(() => {
      this.networkProvider.initializeNetworkEvents();
      // Online event
      this.events.subscribe('network:online', () => {
        this.presentToastDurationTop('Aplicaci\xF3n en l\xEDnea', 1000);
        this.toastInternet.dismiss();
        if (this.loadingCrtlRefresh != null || undefined)
          this.loadingCrtlRefresh.dismiss();
        // alert('network:offline ==> ' + this.network.type);
      });

      // Offline event
      this.events.subscribe('network:offline', () => {
        this.loadingCrtlRefresh = this.loadingController.create();
        this.loadingCrtlRefresh.present();
        this.presentToastStaticTop('Comprueba tu conexi\xF3n y vuelve a intentarlo');
        // alert('network:online ==> ' + this.network.type);
      });

    });
  }


  presentToastStaticTop(message) {
    this.toastInternet = this.toastCtrl.create({
      message: message,
      position: 'top'
    });
    this.toastInternet.present();
  }



  public async signIn() {
    let notVacios = ((this.usuario != undefined && this.usuario != '') &&
      (this.password != undefined && this.password != ''));
    if (notVacios && this.usuario.length == 11) {
      const loading = await this.loadingController.create({
        content: 'Iniciando sesi&oacute;n...'
      });
      loading.present();
      //si la primera lera es minuscula , tiene que transofrma a mayuscual para que el login sea correcto
      let firstLetterUsuario = this.usuario.charAt(0);
      if (firstLetterUsuario == firstLetterUsuario.toLowerCase()) {
        let tailUsuario = this.usuario.substring(1);
        firstLetterUsuario = firstLetterUsuario.toUpperCase();
        this.usuario = firstLetterUsuario + tailUsuario;
      }

      let userData = { username: this.usuario, password: this.password };//objecto para enviar userdata
      this.apiRestService.getLogin(userData).subscribe((resp) => { //consulta en el api de la U haber si coinciden las credneciales
        let val = resp.value;
        if (val == 'TRUE') val = true; else if (val == 'FALSE') val = false;
        if (val) {//si el valor es verdaero ingresa caso con trario da un mensaje de error
          this.authService.login(userData, this.usuario).then(() => {//api para guardar losd atos en el dispositivo
            this.verificarTabUsuario();
            this.navCtrl.setRoot(HomePage);
          }, err => {
            console.log('Ha ocurrido un error al inciar sesión.');
          });
        } else {
          this.presentToastDurationTop('Usuario o contrase\xF1a incorrectos', 1000);
          loading.dismiss();
        }
        loading.dismiss();
      });
    } else
      this.presentToastDurationTop('Ingrese usuario y contrase\xF1a', 1000);
  }

  private verificarTabUsuario() {
    this.apiRestService.verificarUsuarioExists()
      .subscribe((resp) => {
        if (resp.respuesta == 200)
          this.userInfo();
        console.log('resp: verificar ususario ', resp);
      });
  }

  private userInfo() {
    this.apiRestService.getUsuario()
      .subscribe((resp) => {
        if (resp.items[0].FOTO != null) {
          this.myservices.userData.foto = 'data:image/png;base64,' + resp.items[0].FOTO;
          this.myservices.userData.foto = this.sanitizer.bypassSecurityTrustUrl(this.myservices.userData.foto);
        }
        this.myservices.userData.primer_nombre = resp.items[0].PRIMER_NOMBRE;
        this.myservices.userData.segundo_nombre = resp.items[0].SEGUNDO_NOMBRE;
        this.myservices.userData.primer_apellido = resp.items[0].PRIMER_APELLIDO;
        this.myservices.userData.email = resp.items[0].CORREO_INSTITUCIONAL;
        this.myservices.userData.celular = resp.items[0].TELEFONO_MOVIL;
        console.log('userInfo(): ', this.myservices.userData);
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
