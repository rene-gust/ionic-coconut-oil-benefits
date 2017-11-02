import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkinCarePage } from './skin-care';

@NgModule({
  declarations: [
    SkinCarePage,
  ],
  imports: [
    IonicPageModule.forChild(SkinCarePage),
  ],
})
export class SkinCarePageModule {}
