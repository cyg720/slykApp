import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundSimulationPage } from './fund-simulation';

@NgModule({
  declarations: [
    FundSimulationPage,
  ],
  imports: [
    IonicPageModule.forChild(FundSimulationPage),
  ],
  exports: [
    FundSimulationPage
  ]
})
export class FundSimulationPageModule {}
