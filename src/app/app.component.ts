import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ViajesPubCPage } from '../pages/viajes-pub-c/viajes-pub-c';
import { HomeServiceProvider } from '../providers/home-service/home-service';
import { ViajesPasajeroPage } from '../pages/viajes-pasajero/viajes-pasajero';
import { ViajesReserPasajeroPage } from '../pages/viajes-reser-pasajero/viajes-reser-pasajero';
import { PerfilPage } from '../pages/perfil/perfil';

@Component({
  selector: 'page-menu',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  evento;
  radiobtn;
  pasajero: boolean = true;
  conductor: boolean = false;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any, icono: string }>;
  pages_pas: Array<{ title: string, component: any, icono: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen, public myservices: HomeServiceProvider,
    public alertCtrl: AlertController,
    public menu: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pageslist();
    this.myservices.pasajero = this.pasajero
    this.myservices.conductor = this.conductor

  }

  private pageslist() {
    this.pages = [
      { title: 'Home', component: HomePage, icono: "home" },
      { title: 'Solicitudes de viajes', component: ViajesPubCPage, icono: "chatbubbles" },
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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
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
        text: 'No', handler: () => {
          this.rdbnReturn();
        }
      }]
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
    this.openPage(HomePage);
    this.menu.close();
  }


}
