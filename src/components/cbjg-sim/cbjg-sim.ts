import { Component } from '@angular/core';
import {FundSimulationVo} from "../../pages/fund-simulation/vo/FundSimulation";
import {FundSimulationParamsCbjgVo} from "../../pages/fund-simulation/vo/FundSimulationParamsCbjg";
import {FundSimulationProvider} from "../../pages/fund-simulation/provider/fundSimulationProvider";
import {SIMPARAM} from "../../pages/fund-simulation/vo/simConst";
import {Storage} from "@ionic/storage";
import {Utils} from "../../framwork/provider/utils";

@Component({
  selector: 'cbjg-sim',
  templateUrl: 'cbjg-sim.html'
})
export class CbjgSimComponent {

  option:string = "add";

  fundSimulation:FundSimulationVo;
  cbjgs:FundSimulationParamsCbjgVo;
  constructor(public storage: Storage,
              private fundProvider:FundSimulationProvider) {
    this.cbjgs = new FundSimulationParamsCbjgVo();
    this.storage.get(SIMPARAM).then(data=>{
      this.fundSimulation = data;
      this.initData(this.fundSimulation.id);
    });
  }

  initData(id:string){
    let _ = this;
    Utils.showLoading().setTimeout(()=>{
        _.fundProvider.getParam_cbjg(id).subscribe((d)=>{
        _.cbjgs = d;
        Utils.hideLoading();
      });
    })
  }

}
