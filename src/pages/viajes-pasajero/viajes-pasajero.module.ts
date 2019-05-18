import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViajesPasajeroPage } from './viajes-pasajero';

@NgModule({
  declarations: [
    ViajesPasajeroPage,
  ],
  imports: [
    IonicPageModule.forChild(ViajesPasajeroPage),
  ],
})
export class ViajesPasajeroPageModule {}
