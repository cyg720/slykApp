import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddHospitalAnalysisPage } from './add-hospital-analysis';

@NgModule({
  declarations: [
    AddHospitalAnalysisPage,
  ],
  imports: [
    IonicPageModule.forChild(AddHospitalAnalysisPage),
  ],
  exports: [
    AddHospitalAnalysisPage
  ]
})
export class AddHospitalAnalysisPageModule {}
