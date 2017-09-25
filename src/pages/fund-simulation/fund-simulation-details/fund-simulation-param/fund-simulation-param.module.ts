import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundSimulationParamPage } from './fund-simulation-param';
import {CbjgSimComponentModule} from "../../../../components/cbjg-sim/cbjg-sim.module";
import {TsjbSimComponentModule} from "../../../../components/tsjb-sim/tsjb-sim.module";
import {ClSimComponentModule} from "../../../../components/cl-sim/cl-sim.module";
import {XmSimComponentModule} from "../../../../components/xm-sim/xm-sim.module";
import {YpSimComponentModule} from "../../../../components/yp-sim/yp-sim.module";
import {GzxsSimComponentModule} from "../../../../components/gzxs-sim/gzxs-sim.module";

@NgModule({
  declarations: [
    FundSimulationParamPage
  ],
  imports: [
    GzxsSimComponentModule,
    YpSimComponentModule,
    XmSimComponentModule,
    ClSimComponentModule,
    TsjbSimComponentModule,
    CbjgSimComponentModule,
    IonicPageModule.forChild(FundSimulationParamPage),
  ],
  exports: [
    FundSimulationParamPage
  ]
})
export class FundSimulationParamPageModule {}
