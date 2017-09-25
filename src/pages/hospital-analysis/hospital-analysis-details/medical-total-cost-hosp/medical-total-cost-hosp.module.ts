import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalTotalCostHospPage } from './medical-total-cost-hosp';

@NgModule({
  declarations: [
    MedicalTotalCostHospPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalTotalCostHospPage),
  ],
  exports: [
    MedicalTotalCostHospPage
  ]
})
export class MedicalTotalCostHospPageModule {}
