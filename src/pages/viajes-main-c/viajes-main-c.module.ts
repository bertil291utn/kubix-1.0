import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViajesMainCPage } from './viajes-main-c';

@NgModule({
  declarations: [
    ViajesMainCPage,
  ],
  imports: [
    IonicPageModule.forChild(ViajesMainCPage),
  ],
})
export class ViajesMainCPageModule {}
