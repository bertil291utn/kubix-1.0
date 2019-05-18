import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViajesPasajeroDetailPage } from './viajes-pasajero-detail';

@NgModule({
  declarations: [
    ViajesPasajeroDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ViajesPasajeroDetailPage),
  ],
})
export class ViajesPasajeroDetailPageModule {}
