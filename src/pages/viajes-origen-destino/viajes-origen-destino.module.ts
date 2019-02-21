import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViajesOrigenDestinoPage } from './viajes-origen-destino';

@NgModule({
  declarations: [
    ViajesOrigenDestinoPage,
  ],
  imports: [
    IonicPageModule.forChild(ViajesOrigenDestinoPage),
  ],
})
export class ViajesOrigenDestinoPageModule {}
