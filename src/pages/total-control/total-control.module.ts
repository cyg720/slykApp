import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TotalControlPage } from './total-control';

@NgModule({
  declarations: [
    TotalControlPage,
  ],
  imports: [
    IonicPageModule.forChild(TotalControlPage),
  ],
  exports: [
    TotalControlPage
  ]
})
export class TotalControlPageModule {}
