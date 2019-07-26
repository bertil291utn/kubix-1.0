import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, MenuController, Events, LoadingController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ViajesPubCPage } from '../pages/viajes-pub-c/viajes-pub-c';
import { EnvironmentVarService } from '../providers/environmentVarService/environmentVarService';
import { ViajesReserPasajeroPage } from '../pages/viajes-reser-pasajero/viajes-reser-pasajero';
import { PerfilPage } from '../pages/perfil/perfil';
import { SlidesPage } from '../pages/slides/slides';
import { LoginPage } from '../pages/login/login';
import { RestApiServiceProvider } from '../providers/rest-api-service/rest-api-service';
import { AuthenticationserviceProvider } from '../providers/authenticationservice/authenticationservice';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-menu',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  evntRbnTipoPasajero;
  radiobtn;
  conductor: boolean = false;
  rootPage;
  pages: Array<{ title: string, component: any, icono: string }>;
  pages_pas: Array<{ title: string, component: any, icono: string }>;
  loadingCrtlRefresh;
  authenticated;


  constructor(public platform: Platform, public statusBar: StatusBar, public app: App,
    public splashScreen: SplashScreen, public myservices: EnvironmentVarService, public event: Events,
    public alertCtrl: AlertController, public apiRestService: RestApiServiceProvider, private sanitizer: DomSanitizer,
    public menu: MenuController, public loadingCtrl: LoadingController, private authService: AuthenticationserviceProvider) {

    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pageslist();
    this.valConductorPasajero();
    //para verificar si la contrasena ya esta guardada
    this.actionPassword();
    //subscribirse al evento publicado anteriormnente en el login.
    // El view de sidemenu debe estar coulto hasta que haya respuesta en userinfodata

    this.event.subscribe('userInfoData', (data) => {
      this.myservices.userData = data;
      console.log('userobject en event ', data);
    });
  }


  private userInfo() {
    if (this.authenticated) {
      this.loadingCrtlRefresh = this.loadingCtrl.create();
      this.loadingCrtlRefresh.present();
    }
    this.apiRestService.getUsuario()
      .subscribe((resp) => {
        console.log('respuesta get info: ', resp);
        if (resp.items[0].FOTO != null || undefined) {
          this.myservices.userData.foto = 'data:image/png;base64,' + resp.items[0].FOTO;
          this.myservices.userData.foto = this.sanitizer.bypassSecurityTrustUrl(this.myservices.userData.foto);
        }
        this.myservices.userData.primer_nombre = resp.items[0].PRIMER_NOMBRE;
        this.myservices.userData.segundo_nombre = resp.items[0].SEGUNDO_NOMBRE;
        this.myservices.userData.primer_apellido = resp.items[0].PRIMER_APELLIDO;
        this.myservices.userData.email = resp.items[0].CORREO_INSTITUCIONAL;
        this.myservices.userData.celular = resp.items[0].TELEFONO_MOVIL;
        if (resp != null)
          if (this.loadingCrtlRefresh != null || undefined)
            this.loadingCrtlRefresh.dismiss();
      },
        (error) => {
          console.error(error);
        });
  }


  private actionPassword() {
    //si la existe la contrasena guardada y es correcta en el navegador entonces directo al home
    this.authService.checkToken().then(() => {
      this.authenticated = this.authService.isAuthenticated()
      if (!this.authenticated)
        this.rootPage = SlidesPage;
      else {
        this.rootPage = HomePage;
        this.userInfo();
      }
      console.log('Logged', this.authenticated)
    })
    //   let userId = '1002334827';//1002334827//1002292272

  }

  private valConductorPasajero() {
    // this.myservices.pasajero = this.pasajero;
    this.myservices.conductor = this.conductor;
    if (this.conductor)
      this.radiobtn = true;
  }

  private pageslist() {
    this.pages = [
      { title: 'Home', component: HomePage, icono: "home" },
      //{ title: 'Solicitudes de viajes', component: ViajesPubCPage, icono: "chatbubbles" },
      { title: 'Viajes publicados', component: ViajesPubCPage, icono: "car" },
      { title: 'Perfil', component: PerfilPage, icono: "contact" }
    ];
    this.pages_pas = [
      { title: 'Home', component: HomePage, icono: "home" },
      // { title: 'Ver rutas', component: ViajesPasajeroPage, icono: "car" },
      { title: 'Viajes reservados', component: ViajesReserPasajeroPage, icono: "walk" },
      { title: 'Perfil', component: PerfilPage, icono: "contact" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.rootPage = HomePage;
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);

  }

  gotoLogin() {
    //salir log out
    //this.nav.setRoot(login)
    //close to all sessions
  }

  activatechangeMode(event) {
    console.log(event)
    this.evntRbnTipoPasajero = event;
    this.createAlert();
    //this.nav.setRoot(homepasajero);

  }

  private createAlert() {
    let text_msg;
    if (this.evntRbnTipoPasajero) {
      text_msg = "activar"
    } else {
      text_msg = "desactivar"
    }

    const alert = this.alertCtrl.create({
      title: 'Modo conductor',
      message: '¿Est&aacute; seguro de querer ' + text_msg + ' el modo conductor?',
      buttons: [{
        text: 'Si',
        handler: () => {
          this.actionChangeMode();
        }
      },
      {
        text: 'No',
        handler: () => {
          this.rdbnReturn();
        }
      }],
      enableBackdropDismiss: false
    })
    alert.present();
  }


  private rdbnReturn() {
    if (this.evntRbnTipoPasajero)
      this.radiobtn = false;
    else
      this.radiobtn = true;
  }

  private actionChangeMode() {
    if (this.evntRbnTipoPasajero) {
      this.myservices.conductor = true;
      this.conductor = true;
    } else {
      this.myservices.conductor = false;
      this.conductor = false;
    }
    this.nav.setRoot(HomePage);
    //this.menu.close();
  }


  public logOut() {
    let loadingCrtlRefresh = this.loadingCtrl.create();
    loadingCrtlRefresh.present();
    this.authService.logOut().then(() => {
      loadingCrtlRefresh.dismiss();
      this.returnFalseStateRbn();
      this.nav.setRoot(LoginPage);

      //this.app.getActiveNav().setRoot(LoginPage);
      //this.rootPage = LoginPage;
      console.log('log out :autenticated ', this.authenticated);

    });
  }

  private returnFalseStateRbn() {
    this.conductor = false;
    this.myservices.conductor = false;
    this.radiobtn = false;
  }


}//end class
