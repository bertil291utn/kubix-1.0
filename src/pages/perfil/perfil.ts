import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeServiceProvider } from '../../providers/home-service/home-service';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  perfil_val;
  detalle: string = 'datos';
  conductor: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public myservices: HomeServiceProvider) {

    this.perfil_val = this.perfil();
  }

  ionViewDidLoad() {
    this.conductor = this.myservices.conductor;

    console.log('ionViewDidLoad PerfilPage');
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
