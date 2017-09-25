import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexSupervisionPage } from './index-supervision';

@NgModule({
  declarations: [
    IndexSupervisionPage,
  ],
  imports: [
    IonicPageModule.forChild(IndexSupervisionPage),
  ],
  exports: [
    IndexSupervisionPage
  ]
})
export class IndexSupervisionPageModule {}
