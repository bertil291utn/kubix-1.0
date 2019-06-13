import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, MenuController, Slides, IonicPage } from 'ionic-angular';
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

@Component({
  selector: 'page-menu',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  contrasenaExists = true;
  evento;
  radiobtn;
  pasajero: boolean = false;
  conductor: boolean = true;
  //solicitud: boolean = false;
  rootPage;
  pages: Array<{ title: string, component: any, icono: string }>;
  pages_pas: Array<{ title: string, component: any, icono: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen, public myservices: HomeServiceProvider,
    public alertCtrl: AlertController,
    public menu: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pageslist();
    this.valConductorPasajero();
    //this.myservices.solicitud = this.solicitud
    this.actionPassword();
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
    this.myservices.pasajero = this.pasajero;
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
      { title: 'Ver rutas', component: ViajesPasajeroPage, icono: "car" },
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

    //this.nav.setRoot(login)
    //close to all sessions
  }

  activatechangeMode(event) {
    console.log(event)
    this.evento = event;
    this.createAlert();
    //this.nav.setRoot(homepasajero);

  }

  private createAlert() {
    let text_msg;
    if (this.evento) {
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
    if (this.evento)
      this.radiobtn = false;
    else
      this.radiobtn = true;
  }

  private actionChangeMode() {
    if (this.evento) {
      this.pasajero = false;
      this.conductor = true;
      this.myservices.pasajero = this.pasajero;
      this.myservices.conductor = this.conductor;
      console.log("modo conductor activo");
    }
    else {
      this.pasajero = true;
      this.conductor = false;
      console.log("modo conductor inactivo");
      this.myservices.pasajero = this.pasajero;
      this.myservices.conductor = this.conductor;
    }
    this.nav.setRoot(HomePage);
    this.menu.close();
  }


}
