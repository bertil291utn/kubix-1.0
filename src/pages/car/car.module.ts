import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarPage } from './car';

@NgModule({
  declarations: [
    CarPage,
  ],
  imports: [
    IonicPageModule.forChild(CarPage),
  ],
})
export class CarPageModule {}
