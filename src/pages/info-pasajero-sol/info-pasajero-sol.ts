import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-info-pasajero-sol',
  templateUrl: 'info-pasajero-sol.html',
})
export class InfoPasajeroSolPage {
  perfil_val;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.perfil_val = this.perfil();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPasajeroSolPage');
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


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
