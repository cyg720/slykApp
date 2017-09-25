import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TsjbSimComponent } from './tsjb-sim';

@NgModule({
  declarations: [
    TsjbSimComponent,
  ],
  imports: [
    IonicPageModule.forChild(TsjbSimComponent),
  ],
  exports: [
    TsjbSimComponent
  ]
})
export class TsjbSimComponentModule {}
