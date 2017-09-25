import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { XmSimComponent } from './xm-sim';

@NgModule({
  declarations: [
    XmSimComponent,
  ],
  imports: [
    IonicPageModule.forChild(XmSimComponent),
  ],
  exports: [
    XmSimComponent
  ]
})
export class XmSimComponentModule {}
