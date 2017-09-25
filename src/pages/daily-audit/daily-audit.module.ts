import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyAuditPage } from './daily-audit';

@NgModule({
  declarations: [
    DailyAuditPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyAuditPage),
  ],
  exports: [
    DailyAuditPage
  ]
})
export class DailyAuditPageModule {}
