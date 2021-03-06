import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { ViajesPubCPage } from '../viajes-pub-c/viajes-pub-c';
import { SetMapOrigenPage } from '../set-map-origen/set-map-origen';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';
import { CarPage } from '../car/car';
import { RutaProvider } from '../../providers/ruta/ruta';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';



@Component({
  selector: 'page-viajes-conductor',
  templateUrl: 'viajes-conductor.html',
})
export class ViajesConductorPage {

  public proceso = 'horario';
  fechahoraISO = new Date().toISOString();
  pasajero = 1;
  descripcion: string;
  adicionalObject = { personas: null, descripcion: null, fecha: null, foto_ubicacion: null, foto_ruta: null };
  loadingCrtlRefresh;

  constructor(public navparams: NavParams, public navCtrl: NavController, public routeCreate: RutaProvider,
    public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController,
    public modalCtrl: ModalController, public myservices: EnvironmentVarService,
    public apiRestService: RestApiServiceProvider, public loadingCtrl: LoadingController) {

    // let p = app.getActiveNavs();
    // console.log('navigation app: ', p)
    // let q = navCtrl.getViews();
    // console.log('navigation navctrl: ', q)

  }


  ionViewDidLoad() {
    this.setHour();
    console.log('ionViewDidLoad ViajesConductorPage');
  }


  goToPublicar() {
    this.loadingCrtlRefresh = this.loadingCtrl.create();
    this.loadingCrtlRefresh.present();
    //this.horarioObject.fecha = this.fechaISO;

    // this.adicionalObject.foto_ruta = this.routeCreate.adicional.foto_ruta;
    // this.adicionalObject.foto_ubicacion = this.routeCreate.adicional.foto_ubicacion;

    this.adicionalObject.fecha = this.fechahoraISO;
    this.adicionalObject.personas = this.pasajero;
    this.adicionalObject.descripcion = this.descripcion;
    this.routeCreate.adicional = this.adicionalObject;

    console.log('Dtos para enviar a la BD: ', this.routeCreate);
    if ((this.routeCreate.puntoEncuentro == null || undefined) ||
      !this.myservices.carExists || (this.descripcion == undefined || null)
      || this.routeCreate.puntoEncuentro == null || undefined)
      //alert anada donde a a a recoger al pasajero
      this.enterAlert();
    else {
      //this.routeCreate.adicional = null;
      //guardar en BD los datos de la ruta 
      this.apiRestService.insertarViaje(this.routeCreate.adicional).subscribe((resp) => {
        console.log('respuesta datos adicionales de ruta: ', resp);
        if (resp.respuesta == 200) {
          //update foto ubicaion 
          // this.apiRestService.updateFotoUbicacion(this.routeCreate.adicional.foto_ubicacion, resp.cod_viaje).subscribe((resp) => {
          //   console.log('respuesta update foto ubicacion: ', resp);
          // });

          //ORIGEN
          this.apiRestService.insertarLugaresGeoViaje(this.routeCreate.origen, resp.cod_viaje, 'O').subscribe((resp) => {
            console.log('respuesta ingreso origen: ', resp);
          });
          //DESTINO
          this.apiRestService.insertarLugaresGeoViaje(this.routeCreate.destino, resp.cod_viaje, 'D').subscribe((resp) => {
            console.log('respuesta ingreso destino: ', resp);
          });
          //UBIACION
          this.apiRestService.insertarLugaresGeoViaje(this.routeCreate.puntoEncuentro, resp.cod_viaje, 'U').subscribe((resp) => {
            console.log('respuesta ingreso ubicacion: ', resp);
            //if se guardaron los datos motrart el toast 

          });
          //PLACES
          let index = 1;
          for (let obj of this.routeCreate.lugares) {
            this.apiRestService.insertarLugaresGeoViaje(obj, resp.cod_viaje, 'P').subscribe((resp) => {
              console.log('respuesta ingreso places: ', resp);
              if (index == this.routeCreate.lugares.length) {
                if (resp.respuesta == 200) {
                  this.presentToastDurationTop('Su viaje se ha publicado con \xE9xito', 2000);
                  this.resetRouteValues();//despues de haber guardado reiniciar valores
                  this.navCtrl.setRoot(ViajesPubCPage);
                  this.loadingCrtlRefresh.dismiss();
                }
              }
              index++;
            });


          }
        }
      });
      //console.log('alert anada donde a a a recoger al pasajero');
    }
  }

  resetRouteValues() {
    this.routeCreate.resetLugares();
    this.routeCreate.puntoEncuentro = null;
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


  presentToastDurationBottom(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'bottom',
      duration: duration
    });
    toast.present();
  }

  private enterAlert() {
    const alert = this.alertCtrl.create({
      title: 'Datos incompletos',
      message: 'Revise que haya ingresado todos los datos.<br> Autom&oacute;vil, punto de encuentro o descripci&oacute;n adicional',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        handler: () => {
          if (this.loadingCrtlRefresh != null || undefined)
            this.loadingCrtlRefresh.dismiss();
        }
      }]
    })
    alert.present()
  }

  goToMap() {
    let contactModal = this.modalCtrl.create(SetMapOrigenPage, { ubicacion: true });
    contactModal.onDidDismiss(data => {
      if (data != undefined) {
        this.routeCreate.puntoEncuentro = data.ubicacionObject;
        this.presentToastDurationBottom('Punto de encuentro a\xF1adido', 2000);
      }
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
