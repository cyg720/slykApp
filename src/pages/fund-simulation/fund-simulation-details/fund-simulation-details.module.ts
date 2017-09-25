import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundSimulationDetailsPage } from './fund-simulation-details';

@NgModule({
  declarations: [
    FundSimulationDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(FundSimulationDetailsPage),
  ],
  exports: [
    FundSimulationDetailsPage
  ]
})
export class FundSimulationDetailsPageModule {}
