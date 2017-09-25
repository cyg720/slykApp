import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WholePayCostHospPage } from './whole-pay-cost-hosp';

@NgModule({
  declarations: [
    WholePayCostHospPage,
  ],
  imports: [
    IonicPageModule.forChild(WholePayCostHospPage),
  ],
  exports: [
    WholePayCostHospPage
  ]
})
export class WholePayCostHospPageModule {}
