import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, App, ToastController } from 'ionic-angular';
import { SetMapPtoPage } from '../set-map-pto/set-map-pto';
import { ViajesPubCPage } from '../viajes-pub-c/viajes-pub-c';
import { SetMapOrigenPage } from '../set-map-origen/set-map-origen';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';
import { CarPage } from '../car/car';
import { RutaProvider } from '../../providers/ruta/ruta';



@Component({
  selector: 'page-viajes-conductor',
  templateUrl: 'viajes-conductor.html',
})
export class ViajesConductorPage {

  public proceso = 'horario';
  fechahoraISO = new Date().toISOString();
  pasajero = 1;
  descripcion: string;
  adicionalObject = { noPasajeros: null, descripcion: null, fecha: null };

  constructor(public navparams: NavParams, public navCtrl: NavController, public routeCreate: RutaProvider,
    public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController,
    public modalCtrl: ModalController, public myservices: EnvironmentVarService, private app: App) {
    //console.log('fechaiso: ', this.fechaISO);
    // let p = app.getActiveNavs();
    // console.log('navigation app: ', p)
    // let q = navCtrl.getViews();
    // console.log('navigation navctrl: ', q)

  }


  ionViewDidLoad() {
    this.setHour();
    console.log('ionViewDidLoad ViajesConductorPage');
  }


  showAlert() {
    //this.horarioObject.fecha = this.fechaISO;
    this.adicionalObject.fecha = this.fechahoraISO;
    this.adicionalObject.noPasajeros = this.pasajero;
    this.adicionalObject.descripcion = this.descripcion;
    this.routeCreate.adicional = this.adicionalObject;
    console.log('Dtos para enviar a la BD: ', this.routeCreate);
    // let horarioISO = new Date(this.fechahoraISO);
    // let horarioISOprint = (horarioISO.getHours() > 0 && horarioISO.getHours() < 10 ? '0' + (horarioISO.getHours() + 5) : (horarioISO.getHours() + 5)) + ':'
    //   + (horarioISO.getMinutes() > 0 && horarioISO.getMinutes() < 10 ? '0' + horarioISO.getMinutes() : horarioISO.getMinutes());
    // console.log('hora:minutes ISO', horarioISOprint);

    if ((this.routeCreate.puntoEncuentro == null || undefined) ||
      !this.myservices.carExists || (this.descripcion == undefined || null))
      //alert anada donde a a a recoger al pasajero
      this.enterAlert();
    else {
      //guardar en BD los datos de la ruta 
      //if se guardaron los datos motrart el toast 
      this.presentToastDurationTop('Su viaje se ha publicado con \xE9xito', 2000);
      this.navCtrl.setRoot(ViajesPubCPage);
      //console.log('alert anada donde a a a recoger al pasajero');
    }
  }



  goToCar() {
    let contactModal = this.modalCtrl.create(CarPage);
    contactModal.present();
  }

  presentToastDurationTop(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'top',
      duration: duration
    });
    toast.present();
  }

  private enterAlert() {
    const alert = this.alertCtrl.create({
      title: 'Datos incompletos',
      message: 'Revise que haya ingresado todos los datos.<br> Autom&oacute;vil, punto de encuentro o descripci&oacute;n adicional',
      buttons: [{
        text: 'OK'
      }]
    })
    alert.present()
  }

  goToMap() {
    let contactModal = this.modalCtrl.create(SetMapOrigenPage, { ubicacion: true });
    contactModal.onDidDismiss(data => {
      if (data != undefined)
        this.routeCreate.puntoEncuentro = data.ubicacionObject;
      console.log('this.ubicacionObject: ', data)
    });
    contactModal.present();
  }

  private setHour() {
    this.fechahoraISO = this.calculateTime('-5');
    console.log('hora iso: ', this.fechahoraISO);
    // If it is Daylight Savings Time
    if (this.dst(new Date())) {
      this.fechahoraISO = this.calculateTime('-4');
    }
  }


  goToNext() {
    this.proceso = 'adicional'
  }

  addAuto() {
    let contactModal = this.modalCtrl.create(CarPage);
    contactModal.present();
  }


  calculateTime(offset: any) {
    // create Date object for current location
    let d = new Date();
    // create new Date object for different city
    // using supplied offset
    let nd = new Date(d.getTime() + (3600000 * offset));
    return nd.toISOString();
  }

  // Determine if the client uses DST
  stdTimezoneOffset(today: any) {
    let jan = new Date(today.getFullYear(), 0, 1);
    let jul = new Date(today.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  }

  dst(today: any) {
    return today.getTimezoneOffset() < this.stdTimezoneOffset(today);
  }

}
