import { Component } from '@angular/core';
import {FundSimulationVo} from "../../pages/fund-simulation/vo/FundSimulation";
import {FundSimulationParamsProjectVo} from "../../pages/fund-simulation/vo/FundSimulationParamsProject";
import {FundSimulationProvider} from "../../pages/fund-simulation/provider/fundSimulationProvider";
import {SIMPARAM} from "../../pages/fund-simulation/vo/simConst";
import {Storage} from "@ionic/storage";
import {Utils} from "../../framwork/provider/utils";

@Component({
  selector: 'xm-sim',
  templateUrl: 'xm-sim.html'
})
export class XmSimComponent {

  option:string = "add";
  fundSimulation:FundSimulationVo;
  projects:FundSimulationParamsProjectVo;
  constructor(public storage: Storage,
              private fundProvider:FundSimulationProvider) {
    this.projects = new FundSimulationParamsProjectVo();
    this.storage.get(SIMPARAM).then(data=>{
      this.fundSimulation = data;
      this.initData(this.fundSimulation.id);
    });
  }

  initData(id:string){
    let _ = this;
    Utils.showLoading().setTimeout(()=>{
      _.fundProvider.getParam_project(id).subscribe((d)=>{
        _.projects = d;
        Utils.hideLoading();
      });
    })

  }

}
