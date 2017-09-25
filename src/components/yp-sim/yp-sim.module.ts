import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YpSimComponent } from './yp-sim';

@NgModule({
  declarations: [
    YpSimComponent,
  ],
  imports: [
    IonicPageModule.forChild(YpSimComponent),
  ],
  exports: [
    YpSimComponent
  ]
})
export class YpSimComponentModule {}
