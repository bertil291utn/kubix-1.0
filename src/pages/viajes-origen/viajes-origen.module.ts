import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViajesOrigenPage } from './viajes-origen';

@NgModule({
  declarations: [
    ViajesOrigenPage,
  ],
  imports: [
    IonicPageModule.forChild(ViajesOrigenPage),
  ],
})
export class ViajesOrigenPageModule {}
