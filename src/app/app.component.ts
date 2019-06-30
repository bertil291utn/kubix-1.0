import { Component, ViewChild, NgZone } from '@angular/core';
import { Nav, Platform, AlertController, MenuController, Slides, IonicPage, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ViajesPubCPage } from '../pages/viajes-pub-c/viajes-pub-c';
import { HomeServiceProvider } from '../providers/home-service/home-service';
import { ViajesPasajeroPage } from '../pages/viajes-pasajero/viajes-pasajero';
import { ViajesReserPasajeroPage } from '../pages/viajes-reser-pasajero/viajes-reser-pasajero';
import { PerfilPage } from '../pages/perfil/perfil';
import { CompileMetadataResolver } from '@angular/compiler';
import { SlidesPage } from '../pages/slides/slides';
import { LoginPage } from '../pages/login/login';
import { RestApiServiceProvider } from '../providers/rest-api-service/rest-api-service';

@Component({
  selector: 'page-menu',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  contrasenaExists = false;
  evntRbnTipoPasajero;
  radiobtn;
  conductor: boolean = true;
  rootPage;
  pages: Array<{ title: string, component: any, icono: string }>;
  pages_pas: Array<{ title: string, component: any, icono: string }>;
  userInfoData;

  constructor(public platform: Platform, public statusBar: StatusBar, private zone: NgZone,
    public splashScreen: SplashScreen, public myservices: HomeServiceProvider, public event: Events,
    public alertCtrl: AlertController, public apiRestService: RestApiServiceProvider,
    public menu: MenuController) {

    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pageslist();
    this.valConductorPasajero();
    //para verificar si la contrasena ya esta guardada
    this.actionPassword();
    //subscribirse al evento publicado anteriormnente en el login.
    // El view de sidemenu debe estar coulto hasta que haya respuesta en userinfodata
    this.event.subscribe('userInfoData', (data) => {
      this.userInfoData = data;
    });
  }


  private actionPassword() {
    //si la existe la contrasena guardada y es correcta en el navegador entonces directo al home
    if (this.contrasenaExists) {
      console.log('this.contrasenaExists: ', this.contrasenaExists)
      this.rootPage = HomePage;
    } else
      //caso contrario se dirige al slide page 
      this.rootPage = SlidesPage;
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


}//end class
