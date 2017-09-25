import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClSimComponent } from './cl-sim';

@NgModule({
  declarations: [
    ClSimComponent,
  ],
  imports: [
    IonicPageModule.forChild(ClSimComponent),
  ],
  exports: [
    ClSimComponent
  ]
})
export class ClSimComponentModule {}
