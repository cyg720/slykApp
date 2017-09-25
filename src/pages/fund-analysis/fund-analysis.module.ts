import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundAnalysisPage } from './fund-analysis';

@NgModule({
  declarations: [
    FundAnalysisPage,
  ],
  imports: [
    IonicPageModule.forChild(FundAnalysisPage),
  ],
  exports: [
    FundAnalysisPage
  ]
})
export class FundAnalysisPageModule {}
