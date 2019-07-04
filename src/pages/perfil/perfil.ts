import { Component, NgZone, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, Events, Content, ViewController, LoadingController } from 'ionic-angular';
import { HomeServiceProvider } from '../../providers/home-service/home-service';
import { CarPage } from '../car/car';
import { ThrowStmt } from '@angular/compiler';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  @ViewChild(Content) content: Content;
  contactForm;
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
  marca;//arrays para ion-select
  valplaca;
  valmarca;
  modelo;
  colores = ['AMARILLO', 'AZUL OSCURO', 'AZUL', 'BEIGE', 'BLANCO', 'GRIS OSCURO', 'GRIS', 'MARRON', 'MORADO', 'NARANJA', 'NEGRO',
    'ROJO OSCURO', 'ROJO', 'ROSA', 'VERDE OSCURO', 'VERDE'];
  profileExists: boolean;
  preferenciasObjetos;
  enviarPreferencias;
  loadingControllerSave;
  carObject = { placa: null, foto: null, marca: null, modelo: null, color: null, codigo_marca: null, codigo_modelo: null, codigo_vehiculo: null }


  constructor(public navCtrl: NavController, public events: Events, private viewCtrl: ViewController,
    public navParams: NavParams, public apiRestService: RestApiServiceProvider,
    public myservices: HomeServiceProvider, private zone: NgZone, private fb: FormBuilder,
    public modalCtrl: ModalController, public loadingCtrl: LoadingController,
    private camera: Camera, public alertController: AlertController) {

    this.perfil_val = this.perfil();
    this.initForm();

  }


  ionViewDidLoad() {
    this.getPreferencesUser();
    this.getUserInfo();
    this.getMarcaModelo();
    this.getVehiculoInfo();
    this.conductor = this.myservices.conductor;
    //this.carExists = this.myservices.carExists;
    this.profileExists = this.myservices.profileExists;

    if (!this.profileExists) {
      this.addBoton = true;
      this.personalData = "";
      this.telefono = "";
    }
    console.log('ionViewDidLoad PerfilPage');
  }


  private initForm() {
    this.contactForm = this.fb.group({
      placa: ['', Validators.required],
      color: ['', Validators.required],
      modelo: ['', Validators.required],
      foto: ['', Validators.required]
    });
  }

  public getVehiculoInfo() {
    this.carExists = false;
    this.apiRestService.getVehiculoInfo().subscribe((resp) => {
      if (resp.items[0].placa != null) {
        this.carExists = true;

        this.carObject.placa = resp.items[0].placa;
        this.carObject.marca = resp.items[0].marca;
        this.carObject.modelo = resp.items[0].modelo;
        this.carObject.color = resp.items[0].color;
        this.carObject.codigo_marca = resp.items[0].id_marca;
        this.carObject.codigo_modelo = resp.items[0].id_modelo;
        this.carObject.codigo_vehiculo = resp.items[0].codigo_vehiculo;
        this.carObject.foto = resp.items[0].foto;

        if (resp != null)
          if (this.loadingControllerSave != undefined)
            this.loadingControllerSave.dismiss();
      }
    });
  }


  ionViewDidEnter() { }

  inputUpperCase(valor) {
    // console.log('event: ', valor);
    // this.valplaca = valor._value.toUpperCase();

  }

  private getMarcaModelo(modelo?: number) {
    this.apiRestService.getMarcaModelo(modelo).subscribe((resp) => {
      console.log('respuesta marcamodelo: ', resp);
      if (modelo != null || undefined) {
        this.modelo = resp.respuesta;
        console.log('this.modelo: ', this.modelo);
      } else {
        this.marca = resp.respuesta;
        console.log('this.marca: ', this.marca);
      }
      //console.log('respmarcamodelo: ', resp.items[0].marca_modelo);
    });
  }


  private getUserInfo() {
    this.apiRestService.getUsuario()
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
    this.apiRestService.getUsuarioPreferences()
      .subscribe((resp) => {
        //reorganizar el objto JSON
        this.actionListenerPreferencias(resp.items[0].nivel,
          resp.items[1].nivel, resp.items[2].nivel, resp.items[0].cod_preferencia,
          resp.items[1].cod_preferencia, resp.items[2].cod_preferencia);
        console.log('resp: ', resp.items);
        // this.viewCtrl._didEnter();//llamar al lifecycle ionviewdidenter para la actualizacion 
        if (resp != null)
          if (this.loadingControllerSave != undefined)
            this.loadingControllerSave.dismiss();
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
    console.log('arrayenviar: ', this.preferenciasObjetos);



    if (this.detalle == "automovil") {
      console.log('carObject: ', this.carObject);
      //this.carObject.foto = this.carObject.foto.replace('data:image/png;base64,', '');

      this.contactForm.controls.placa.setValue(this.carObject.placa);
      this.valplaca = this.carObject.placa;
      //this.contactForm.controls.marca.setValue(this.carObject.marca);
      this.valmarca = this.carObject.codigo_marca;
      this.getMarcaModelo(this.valmarca);
      this.contactForm.controls.modelo.setValue(this.carObject.codigo_modelo);
      this.contactForm.controls.color.setValue(this.carObject.color);
      this.contactForm.controls.foto.setValue(this.carObject.foto);
      console.log('contactForm.value: ', this.contactForm.value);

    }
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

    if (this.detalle == "automovil") {
      //enviar a bas e datos los datos del automovil de esta persona 
      console.log('enviar a bas e datos los datos del automovil de esta persona ')
      //let var =exists base de datos = revisar en la base de datos si existe automovil
      //if(var)

      this.addBoton = false;
      console.log('this.contactForm.value: ', this.contactForm.value);
      if (!this.carExists)
        this.apiRestService.updateAutomovil(this.contactForm.value).subscribe((resp) => {
          this.carExists = true;
          //this.myservices.carExists = true;
          console.log('resp update automiv: ', resp);

        }, (error) => { console.log('error: ', error) });
      else
        //codigo listado sacar de listado de vechiulos JSON cod_vehiculoo 
        this.apiRestService.updateAutomovil(this.contactForm.value, this.carObject.codigo_vehiculo)
          .subscribe((resp) => {
            console.log('resp update automiv: ', resp);
            this.getVehiculoInfo();//refresh data
          }, (error) => console.log('error: ', error));

    }

    if (this.detalle == "datos" || !this.conductor) {
      this.profileExists = true;
      this.myservices.profileExists = true;
      this.addBoton = false;
      let cedula = this.myservices.usuarioCedula;
      let index = 1;
      for (let obj of this.preferenciasObjetos) {
        this.apiRestService.updateProfilePreferences(cedula, obj.codigo_preferencia, obj.nivel_edited, this.telefono).subscribe((resp) => {
          console.log('resp: ', resp);
          if (index == this.preferenciasObjetos.length) {//para que haga la solicitud al API  una sola vez
            console.log('llamar al refresh');
            this.getPreferencesUser();//llamar a las preferncias del usuario 
            this.getUserInfo();//refresh los datos de usuario
          }
          index++;
        });
      }
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
      this.contactForm.controls.foto.setValue(imgUrl);
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
