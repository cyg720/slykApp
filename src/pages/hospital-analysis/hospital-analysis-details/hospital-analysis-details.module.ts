import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HospitalAnalysisDetailsPage } from './hospital-analysis-details';

@NgModule({
  declarations: [
    HospitalAnalysisDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(HospitalAnalysisDetailsPage),
  ],
  exports: [
    HospitalAnalysisDetailsPage
  ]
})
export class HospitalAnalysisDetailsPageModule {}
