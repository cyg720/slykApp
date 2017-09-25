import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountyPage } from './county';

@NgModule({
  declarations: [
    CountyPage,
  ],
  imports: [
    IonicPageModule.forChild(CountyPage),
  ],
  exports: [
    CountyPage
  ]
})
export class CountyPageModule {}
