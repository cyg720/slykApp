import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WholePayCostPage } from './whole-pay-cost';

@NgModule({
  declarations: [
    WholePayCostPage,
  ],
  imports: [
    IonicPageModule.forChild(WholePayCostPage),
  ],
  exports: [
    WholePayCostPage
  ]
})
export class WholePayCostPageModule {}
