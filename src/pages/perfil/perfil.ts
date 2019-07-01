import { Component, NgZone, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, Events, Content, ViewController, LoadingController } from 'ionic-angular';
import { HomeServiceProvider } from '../../providers/home-service/home-service';
import { CarPage } from '../car/car';
import { ThrowStmt } from '@angular/compiler';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  @ViewChild(Content) content: Content;
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

  profileExists: boolean;
  preferenciasObjetos;
  enviarPreferencias;
  loadingControllerSave;

  constructor(public navCtrl: NavController, public events: Events, private viewCtrl: ViewController,
    public navParams: NavParams, public apiRestService: RestApiServiceProvider,
    public myservices: HomeServiceProvider, private zone: NgZone,
    public modalCtrl: ModalController, public loadingCtrl: LoadingController,
    private camera: Camera, public alertController: AlertController) {

    this.perfil_val = this.perfil();
    // this.events.subscribe('updateScreen', () => {
    //   this.zone.run(() => {
    //     this.getPreferencesUser();
    //   });
    // });


  }


  ionViewDidLoad() {
    this.getPreferencesUser();
    this.getUserInfo(this.myservices.usuarioCedula);
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

  ionViewDidEnter() {


  }



  private getUserInfo(cedula: string) {
    this.apiRestService.getUsuario(cedula)
      .subscribe((resp) => {
        if (resp.items[0].foto != null)
          this.myservices.userData.foto = 'data:image/png;base64,' + resp.items[0].foto;
        this.myservices.userData.primer_nombre = resp.items[0].primer_nombre;
        this.myservices.userData.segundo_nombre = resp.items[0].segundo_nombre;
        this.myservices.userData.primer_apellido = resp.items[0].primer_apellido;
        this.myservices.userData.email = resp.items[0].correo_institucional;
        this.myservices.userData.celular = resp.items[0].telefono_movil;

      },
        (error) => {
          console.error(error);
        });
  }


  private actionListenerPreferencias(chat, musica, fumar, id_chat, id_musica, id_fumar) {
    // array con preferncias  del ususario 
    // params nivel de cada preferencia 
    this.preferenciasObjetos = [{
      id: 'C',
      codigo_preferencia: id_chat,
      nivel: chat,
      iconos: 'chatboxes',
      titulo: 'Conversar',
      nivel_edited: chat
    },
    {
      id: 'M',
      codigo_preferencia: id_musica,
      nivel: musica,
      iconos: 'musical-notes',
      titulo: 'Escuchar m\u00FAsica',
      nivel_edited: musica
    },
    {
      id: 'F',
      codigo_preferencia: id_fumar,
      nivel: fumar,
      iconos: 'no-smoking',
      titulo: 'Fumar',
      nivel_edited: fumar
    }];
  }

  private getPreferencesUser() {
    this.apiRestService.getUsuarioPreferences(this.myservices.usuarioCedula)
      .subscribe((resp) => {
        //reorganizar el objto JSON
        this.actionListenerPreferencias(resp.items[0].nivel,
          resp.items[1].nivel, resp.items[2].nivel, resp.items[0].cod_preferencia,
          resp.items[1].cod_preferencia, resp.items[2].cod_preferencia);
        console.log('resp: ', resp.items);
        this.viewCtrl._didEnter();//llamar al lifecycle ionviewdidenter para la actualizacion 
        if (resp != null)
          if (this.loadingControllerSave != undefined) {
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
            this.loadingControllerSave.dismiss();
          }
      });
  }


  rbngroupPreferencias(event, objeto) {
    console.log('evento: ', event, 'de: ', objeto.titulo, 'obj: ', objeto);

    if (objeto.id == 'C')
      this.preferenciasObjetos[0].nivel_edited = +event
    else if (objeto.id == 'M')
      this.preferenciasObjetos[1].nivel_edited = +event
    else
      this.preferenciasObjetos[2].nivel_edited = +event
    console.log('arrayenviar: ', this.preferenciasObjetos)

  }

  actionEditButton() {
    //hacer que boton editar se averdadero ara el view HMTL
    //tarer informacion preferencias y telefono desde la consulta api rest

    //cargar datos
    this.editarBoton = true;
    this.telefono = this.myservices.userData.celular;
    console.log('arrayenviar: ', this.preferenciasObjetos)
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
    this.loadingControllerSave = this.loadingCtrl.create();
    this.loadingControllerSave.present();
    //enviar datos
    console.log('save edit')
    this.editarBoton = false;
    this.preview = false;

    let cedula = this.myservices.usuarioCedula;
    for (let obj of this.preferenciasObjetos) {
      this.apiRestService.updateProfilePreferences(cedula, obj.codigo_preferencia, obj.nivel_edited).subscribe((resp) => {
        console.log('resp: ', resp);
      });
      this.getPreferencesUser();//llamar a las preferncias del usuario y dentr de este async llamar al lyfecicle ionViewDidEnter
      //no  poner dentro del async update por que devuelve error pero si ejecuta el update

    }
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
    //volver a llamar a las preferncias  

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
      preferencias: { chat: 3, fumar: 2, musica: 1 },
      auto: {
        placa: "PCC0629",
        modelo: "IBIZA",
        marca: "SEAT",
        color: "Negro",
        imagen: "assets/imgs/01.png"
      }
    }
  }


}//end class
