import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { HomeServiceProvider } from '../../providers/home-service/home-service';
import { CarPage } from '../car/car';
import { ThrowStmt } from '@angular/compiler';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  perfil_val;
  detalle: string = 'datos';
  conductor: boolean;
  carExists: boolean;
  personalData: string;
  telefono: string;
  editarBoton: boolean = false;
  previewimg: string;
  preview: boolean = false;
  addBoton: boolean = false;
  //varInterval;
  profileExists: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public myservices: HomeServiceProvider,
    public modalCtrl: ModalController,
    private camera: Camera, public alertController: AlertController) {

    this.perfil_val = this.perfil();
  }


  ionViewDidLoad() {
    this.conductor = this.myservices.conductor;
    this.carExists = this.myservices.carExists;
    this.profileExists = this.myservices.profileExists;

    if (!this.profileExists) {
      this.addBoton = true;
      this.personalData = "";
      this.telefono = "";
    }
    console.log('ionViewDidLoad PerfilPage');
  }

  actionEditButton() {
    this.editarBoton = true;
    this.personalData = this.perfil_val.informacion;
    this.telefono = this.perfil_val.telefono;
  }

  goToAuto() {
    let contactModal = this.modalCtrl.create(CarPage);
    contactModal.present();
  }

  activatechangeMode(event) {
    console.log(event)
    //this.evento = event;

  }

  saveAndEdit() {
    console.log('save edit')
    this.editarBoton = false;
    this.preview = false;
    if (this.detalle == "automovil") {
      //enviar a bas e datos los datos del automovil de esta persona 
      console.log('enviar a bas e datos los datos del automovil de esta persona ')
      //let var =exists base de datos = revisar en la base de datos si existe automovil
      //if(var)
      this.carExists = true;
      this.myservices.carExists = true;

      this.addBoton = false;
    }
    if (this.detalle == "datos") {
      this.profileExists = true;
      this.myservices.profileExists = true;
      this.addBoton = false;
    }

    //volver a traer datos desde base de datos para ver el autmovil editado o guardado REFRESH

  }

  closeDialogEditSave() {
    if (this.detalle == "automovil") {
      this.editarBoton = false;
      this.addBoton = false
    }
    if (this.preview)
      this.preview = false;
    if (this.editarBoton)
      this.editarBoton = false;

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
        this.previewimg = 'data:image/png;base64,' + imgUrl;
      }
    });


  }




  private perfil() {
    return {
      id: 1,
      nombre: "Pepito Adolfo",
      apellido: "Perez Hitler",
      fotografia: "assets/imgs/profileOK.jpg",
      ocupacion: 'Docente',
      facultad: "FICA",
      carrera: "Sistemas",
      genero: "Masculino",
      telefono: '09999999',
      informacion: 'Soy una persona reservada hablo lo necesario, no se permite fumar. Y siempre al servicio',
      auto: {
        placa: "PCC0629",
        modelo: "IBIZA",
        marca: "SEAT",
        color: "Negro",
        imagen: "assets/imgs/01.png"
      }
    }
  }



}
