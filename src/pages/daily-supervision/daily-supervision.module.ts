import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailySupervisionPage } from './daily-supervision';

@NgModule({
  declarations: [
    DailySupervisionPage,
  ],
  imports: [
    IonicPageModule.forChild(DailySupervisionPage),
  ],
  exports: [
    DailySupervisionPage
  ]
})
export class DailySupervisionPageModule {}
