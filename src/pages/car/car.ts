import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomeServiceProvider } from '../../providers/home-service/home-service';

@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {
  marca: string;
  modelo: string;
  color: string;
  carExists: boolean;
  proceso = 'datos';
  previewimg: string;
  preview: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public alertController: AlertController,
    private camera: Camera, public myservices: HomeServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarPage');
    this.carExists = this.myservices.carExists;
    //cargar marca y modelo de auto desde base de datos 
  }

  goToImage() {

    this.proceso = 'imagen';
  }

  goToCamera() {
    const alert = this.alertController.create({
      title: 'A&ntilde;adir foto de autom&oacute;vil ',
      buttons: [
        {
          text: 'Tomar fotografía',
          handler: () => {
            this.actionHandler(2);
          }
        },
        {
          text: 'Seleccionar desde galería',
          handler: () => {
            this.actionHandler(1);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        },
      ]
    });
    alert.present();


  }

  actionHandler(selection: number) {

    let options: CameraOptions;
    // Toma la imagen desde la camara o de la galeria
    // 1 = Galeria
    // 2 = Camara

    let type: number;
    let rootsource = this.camera.PictureSourceType;
    if (selection === 1)
      type = rootsource.PHOTOLIBRARY;
    else if (selection === 2)
      type = rootsource.CAMERA;

    options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: type,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500,
      allowEdit: true,
      correctOrientation: true,
      cameraDirection: 0
    };

    /* get picture */
    this.camera.getPicture(options).then((imgUrl) => {
      console.log('imgurl: ', imgUrl)
      if (imgUrl != undefined) {
        this.preview = true;
        this.carExists = false;
        this.previewimg = 'data:image/png;base64,' + imgUrl;
      }
    });


  }


  addAuto() {
    //enviar a bas e datos los datos del automovil de esta persona 
    console.log('enviar a bas e datos los datos del automovil de esta persona ')
    //let var =exists base de datos = revisar en la base de datos si existe automovil
    //if(var)
       this.myservices.carExists = true;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
