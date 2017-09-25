import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CbjgSimComponent } from './cbjg-sim';

@NgModule({
  declarations: [
    CbjgSimComponent,
  ],
  imports: [
    IonicPageModule.forChild(CbjgSimComponent),
  ],
  exports: [
    CbjgSimComponent
  ]
})
export class CbjgSimComponentModule {}
