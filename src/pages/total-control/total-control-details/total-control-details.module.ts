import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TotalControlDetailsPage } from './total-control-details';

@NgModule({
  declarations: [
    TotalControlDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TotalControlDetailsPage),
  ],
  exports: [
    TotalControlDetailsPage
  ]
})
export class TotalControlDetailsPageModule {}
