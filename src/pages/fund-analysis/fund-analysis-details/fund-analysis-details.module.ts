import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundAnalysisDetailsPage } from './fund-analysis-details';
import {ConvNull} from "../../../framwork/pipes/convNull";

@NgModule({
  declarations: [
    FundAnalysisDetailsPage,ConvNull
  ],
  imports: [
    IonicPageModule.forChild(FundAnalysisDetailsPage),
  ],
  exports: [
    FundAnalysisDetailsPage
  ]
})
export class FundAnalysisDetailsPageModule {}
