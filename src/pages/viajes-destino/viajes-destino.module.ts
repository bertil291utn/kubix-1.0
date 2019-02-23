import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViajesDestinoPage } from './viajes-destino';

@NgModule({
  declarations: [
    ViajesDestinoPage,
  ],
  imports: [
    IonicPageModule.forChild(ViajesDestinoPage),
  ],
})
export class ViajesDestinoPageModule {}
