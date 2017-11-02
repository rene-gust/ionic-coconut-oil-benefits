import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealingWoundsPage } from './healing-wounds';

@NgModule({
  declarations: [
    HealingWoundsPage,
  ],
  imports: [
    IonicPageModule.forChild(HealingWoundsPage),
  ],
})
export class HealingWoundsPageModule {}
