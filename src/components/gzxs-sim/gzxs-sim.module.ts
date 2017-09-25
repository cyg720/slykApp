import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GzxsSimComponent } from './gzxs-sim';

@NgModule({
  declarations: [
    GzxsSimComponent,
  ],
  imports: [
    IonicPageModule.forChild(GzxsSimComponent),
  ],
  exports: [
    GzxsSimComponent
  ]
})
export class GzxsSimComponentModule {}
