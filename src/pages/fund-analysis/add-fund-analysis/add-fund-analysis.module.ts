import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFundAnalysisPage } from './add-fund-analysis';
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    AddFundAnalysisPage,
  ],
  imports: [
    MultiPickerModule,
    IonicPageModule.forChild(AddFundAnalysisPage),
  ],
  exports: [
    AddFundAnalysisPage
  ]
})
export class AddFundAnalysisPageModule {}
