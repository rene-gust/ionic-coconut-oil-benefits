import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreatmentsForIllnessesPage } from './treatments-for-illnesses';

@NgModule({
  declarations: [
    TreatmentsForIllnessesPage,
  ],
  imports: [
    IonicPageModule.forChild(TreatmentsForIllnessesPage),
  ],
})
export class TreatmentsForIllnessesPageModule {}
