import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TotalControlHospitalDetailsPage } from './total-control-hospital-details';

@NgModule({
  declarations: [
    TotalControlHospitalDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TotalControlHospitalDetailsPage),
  ],
  exports: [
    TotalControlHospitalDetailsPage
  ]
})
export class TotalControlHospitalDetailsPageModule {}
