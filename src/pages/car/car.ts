import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
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
  previewimg: any;
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
    private camera: Camera, public myservices: EnvironmentVarService, public alertCtrl: AlertController) {
    this.initForm();
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad CarPage');
    this.getMarcaModelo();
    if (this.navParams.data.car != null || undefined)
      this.getVehiculoInfo(this.navParams.data.car);
    else
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

  public getVehiculoInfo(conductor?: string) {
    if (!this.saveEdit) {
      this.loadingControllerSave = this.loadingCtrl.create();
      this.loadingControllerSave.present();
    }

    this.myservices.carExists = false;
    this.apiRestService.getVehiculoInfo(conductor).subscribe((resp) => {
      if (resp.items[0].PLACA != null || undefined) {
        this.myservices.carExists = true;
        this.carObject.placa = resp.items[0].PLACA;
        this.carObject.marca = resp.items[0].MARCA;
        this.carObject.modelo = resp.items[0].MODELO;
        this.carObject.color = resp.items[0].COLOR;
        this.carObject.codigo_marca = resp.items[0].ID_MARCA;
        this.carObject.codigo_modelo = resp.items[0].ID_MODELO;
        this.carObject.codigo_vehiculo = resp.items[0].CODIGO_VEHICULO;
        if (resp.items[0].FOTO != null || undefined) {
          this.carObject.foto = this.myservices.sanitizeUrl('data:image/png;base64,' + resp.items[0].FOTO);
        }
      } else
        this.myservices.carExists = false;
      if (this.loadingControllerSave != undefined)
        this.loadingControllerSave.dismiss();
    });
    this.myservices.carExists = undefined;
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
    let fotoAuto = b64toBlob(this.myservices.getBase64(this.carObject.foto), 'image/png');
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

    console.log('this.contactForm.value: ', this.contactForm.value);
    if ((this.contactForm.value.placa == null || undefined) ||
      (this.contactForm.value.color == null || undefined) ||
      (this.contactForm.value.modelo == null || undefined))
      this.enterAlert();
    this.apiRestService.updateAutomovil(this.contactForm.value).subscribe((resp) => {
      if (resp.respuesta == 200)
        this.addBoton = false;
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

  private enterAlert() {
    const alert = this.alertCtrl.create({
      title: 'Datos incompletos',
      message: 'Revise que haya ingresado todos los datos.<br> La foto puede actualizar despu&eacute;s',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        handler: () => {
          if (this.loadingControllerSave != null || undefined)
            this.loadingControllerSave.dismiss();
        }
      }]
    })
    alert.present()
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


  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Fotograf&iacute;a del auto',
      message: '<img src="assets/imgs/auto_model.jpg"><br>La fotograf&iacutea debe ser visible tanto frontal como lateral.',
      buttons: ['OK']
    });
    alert.present();
  }






}
