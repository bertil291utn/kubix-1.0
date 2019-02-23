import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetHomePage } from './set-home';

@NgModule({
  declarations: [
    SetHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SetHomePage),
  ],
})
export class SetHomePageModule {}
