import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HospitalAnalysisPage } from './hospital-analysis';

@NgModule({
  declarations: [
    HospitalAnalysisPage,
  ],
  imports: [
    IonicPageModule.forChild(HospitalAnalysisPage),
  ],
  exports: [
    HospitalAnalysisPage
  ]
})
export class HospitalAnalysisPageModule {}
