import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidesPage } from './slides';

@NgModule({
  declarations: [
    SlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidesPage),
  ],
})
export class SlidesPageModule {}
