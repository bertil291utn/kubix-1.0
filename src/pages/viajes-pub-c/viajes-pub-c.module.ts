import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViajesPubCPage } from './viajes-pub-c';

@NgModule({
  declarations: [
    ViajesPubCPage,
  ],
  imports: [
    IonicPageModule.forChild(ViajesPubCPage),
  ],
})
export class ViajesPubCPageModule {}
