import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EnvironmentVarService } from '../../providers/environmentVarService/environmentVarService';
import { FormBuilder, Validators } from '@angular/forms';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import b64toBlob from 'b64-to-blob';

@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {
  contactForm;
  //carExists: boolean;
  editarBoton: boolean = false;
  previewimg: string;
  preview: boolean = false;
  addBoton: boolean = false;
  marca;//arrays para ion-select
  valplaca;
  valmarca;
  modelo;
  saveEdit: boolean = false;
  colores = ['AMARILLO', 'AZUL OSCURO', 'AZUL', 'BEIGE', 'BLANCO', 'GRIS OSCURO', 'GRIS', 'MARRON', 'MORADO', 'NARANJA', 'NEGRO',
    'ROJO OSCURO', 'ROJO', 'ROSA', 'VERDE OSCURO', 'VERDE'];

  loadingControllerSave;
  carObject = {
    placa: null, foto: null, marca: null, modelo: null,
    color: null, codigo_marca: null, codigo_modelo: null, codigo_vehiculo: null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, public loadingCtrl: LoadingController,
    public viewCtrl: ViewController, public alertController: AlertController, public apiRestService: RestApiServiceProvider,
    private camera: Camera, public myservices: EnvironmentVarService) {
    this.initForm();
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad CarPage');
    this.getMarcaModelo();
    this.getVehiculoInfo();

    //cargar marca y modelo de auto desde base de datos 
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
    if (!this.saveEdit) {
      this.loadingControllerSave = this.loadingCtrl.create();
      this.loadingControllerSave.present();
    }

    this.myservices.carExists = false;
    this.apiRestService.getVehiculoInfo().subscribe((resp) => {
      if (resp.items[0].placa != null) {

        this.myservices.carExists = true;
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

  actionEditButton() {
    //hacer que boton editar se averdadero ara el view HMTL
    //tarer informacion preferencias y telefono desde la consulta api rest
    //cargar datos
    this.editarBoton = true;
    console.log('carObject: ', this.carObject);
    this.contactForm.controls.placa.setValue(this.carObject.placa);
    this.valplaca = this.carObject.placa;
    this.valmarca = this.carObject.codigo_marca;
    this.getMarcaModelo(this.valmarca);
    this.contactForm.controls.modelo.setValue(this.carObject.codigo_modelo);
    this.contactForm.controls.color.setValue(this.carObject.color);
    //this.contactForm.controls.foto.setValue(this.carObject.foto);
    let fotoAuto = b64toBlob(this.carObject.foto, 'image/png');
    this.contactForm.controls.foto.setValue(fotoAuto);
    console.log('contactForm.value: ', this.contactForm.value);

  }


  saveAndEdit() {
    this.loadingControllerSave = this.loadingCtrl.create();
    this.loadingControllerSave.present();
    this.saveEdit = true;
    //enviar datos
    console.log('save edit')
    this.editarBoton = false;
    this.preview = false;
    //enviar a bas e datos los datos del automovil de esta persona 
    console.log('enviar a bas e datos los datos del automovil de esta persona ')
    //let var =exists base de datos = revisar en la base de datos si existe automovil
    //if(var)
    this.addBoton = false;
    console.log('this.contactForm.value: ', this.contactForm.value);
    this.apiRestService.updateAutomovil(this.contactForm.value).subscribe((resp) => {
      console.log('resp update automiv: ', resp);
      this.getVehiculoInfo();//refresh data
    }, (error) => { console.log('error: ', error) });

    //volver a traer datos desde base de datos para ver el autmovil editado o guardado REFRESH
    //volver a llamar a las preferncias  
  }

  closeDialogEditSave() {
    // if (this.detalle == "automovil") {
    //   this.editarBoton = false;
    //   this.addBoton = false
    // }
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
      // console.log('imgurl: ', imgUrl)
      // this.contactForm.controls.foto.setValue(imgUrl);
      let fotoAuto = b64toBlob(imgUrl, 'image/png');
      this.contactForm.controls.foto.setValue(fotoAuto);
      if (imgUrl != undefined) {
        this.preview = true;
        this.previewimg = 'data:image/png;base64,' + imgUrl;
      }
    });
  }






}
