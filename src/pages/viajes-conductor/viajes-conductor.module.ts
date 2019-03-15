import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViajesConductorPage } from './viajes-conductor';

@NgModule({
  declarations: [
    ViajesConductorPage,
  ],
  imports: [
    IonicPageModule.forChild(ViajesConductorPage),
  ],
})
export class ViajesConductorPageModule {}
