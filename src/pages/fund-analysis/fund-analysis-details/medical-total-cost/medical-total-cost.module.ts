import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalTotalCostPage } from './medical-total-cost';

@NgModule({
  declarations: [
    MedicalTotalCostPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalTotalCostPage),
  ],
  exports: [
    MedicalTotalCostPage
  ]
})
export class MedicalTotalCostPageModule {}
