import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HouseholdApplicationPage } from './household-application';

@NgModule({
  declarations: [
    HouseholdApplicationPage,
  ],
  imports: [
    IonicPageModule.forChild(HouseholdApplicationPage),
  ],
})
export class HouseholdApplicationPageModule {}
