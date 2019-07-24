import { Component, NgZone, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, Events, Content, ViewController, LoadingController } from 'ionic-angular';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';
import { CarPage } from '../car/car';
import { ThrowStmt } from '@angular/compiler';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import b64toBlob from 'b64-to-blob';
//var b64toBlob = require('b64-to-blob');
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  @ViewChild(Content) content: Content;

  perfil_val;
  conductor: boolean;
  personalData: string;
  telefono: string;
  editarBoton: boolean = false;
  addBoton: boolean = false;
  profileExists: boolean;
  preferenciasObjetos;
  enviarPreferencias;
  loadingCrtlRefresh;
  //loadingControllerBegin;
  saveEdit: boolean = false;
  carObject = {
    placa: null, foto: null, marca: null, modelo: null,
    color: null, codigo_marca: null, codigo_modelo: null, codigo_vehiculo: null
  };


  constructor(public navCtrl: NavController, public events: Events, private viewCtrl: ViewController,
    public navParams: NavParams, public apiRestService: RestApiServiceProvider,
    public myservices: EnvironmentVarService, private zone: NgZone, private fb: FormBuilder,
    public modalCtrl: ModalController, public loadingCtrl: LoadingController,
    private camera: Camera, public alertController: AlertController) {

    this.perfil_val = this.perfil();


  }


  ionViewDidLoad() {
    this.getPreferencesUser();
    this.getUserInfo();
    this.getDependencias();

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


  ionViewDidEnter() { }

  inputUpperCase(valor) {
    // console.log('event: ', valor);
    // this.valplaca = valor._value.toUpperCase();

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

  public getDependencias() {
    this.apiRestService.getDependencias().subscribe((resp) => {
      this.myservices.userData.dependencia = resp.items[0].tipo_persona+'\n';
      this.myservices.userData.dependencia = this.myservices.userData.dependencia + resp.items[0].imparte_clase_en;

      console.log('dependeicas: ', this.myservices.userData.dependencia);
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
    //solo para que que inicie loading ctrontroller al incio de la paagina, 
    //si vienes desde save edit ya no se presenta por que ya esta declarado 
    if (!this.saveEdit) {
      this.loadingCrtlRefresh = this.loadingCtrl.create();
      this.loadingCrtlRefresh.present();
    }

    this.apiRestService.getUsuarioPreferences()
      .subscribe((resp) => {
        //reorganizar el objto JSON
        this.actionListenerPreferencias(resp.items[0].nivel,
          resp.items[1].nivel, resp.items[2].nivel, resp.items[0].cod_preferencia,
          resp.items[1].cod_preferencia, resp.items[2].cod_preferencia);
        console.log('resp: ', resp.items);
        // this.viewCtrl._didEnter();//llamar al lifecycle ionviewdidenter para la actualizacion 
        if (resp != null)
          if (this.loadingCrtlRefresh != undefined)
            this.loadingCrtlRefresh.dismiss();
        // else if (this.loadingControllerBegin != undefined)
        //   this.loadingControllerBegin.dismiss();
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
    this.loadingCrtlRefresh = this.loadingCtrl.create();
    this.loadingCrtlRefresh.present();//begin loding ctrl to refresh 
    this.saveEdit = true;
    //enviar datos
    console.log('save edit')
    this.editarBoton = false;


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

    //volver a traer datos desde base de datos para ver el autmovil editado o guardado REFRESH
    //volver a llamar a las preferncias  

  }

  closeDialogEditSave() {

    if (this.editarBoton)
      this.editarBoton = false;
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
