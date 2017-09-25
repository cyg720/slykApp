import { Component } from '@angular/core';
import {Storage} from "@ionic/storage";
import {FundSimulationVo} from "../../pages/fund-simulation/vo/FundSimulation";
import {FundSimulationProvider} from "../../pages/fund-simulation/provider/fundSimulationProvider";
import {FundSimulationParamsDrugVo} from "../../pages/fund-simulation/vo/FundSimulationParamsDrug";
import {SIMPARAM} from "../../pages/fund-simulation/vo/simConst";
import {Utils} from "../../framwork/provider/utils";

@Component({
  selector: 'yp-sim',
  templateUrl: 'yp-sim.html'
})
export class YpSimComponent {

  option:string="add";

  fundSimulation:FundSimulationVo;
  drugs:FundSimulationParamsDrugVo;
  constructor(public storage: Storage,
              private fundProvider:FundSimulationProvider) {
    this.drugs = new FundSimulationParamsDrugVo();
    this.storage.get(SIMPARAM).then(data=>{
      this.fundSimulation = data;
      this.initData(this.fundSimulation.id);
    });
  }

  initData(id:string){
    let _ = this;
    Utils.showLoading().setTimeout(()=>{
      _.fundProvider.getParam_drug(id).subscribe((d)=>{
        _.drugs = d;
        Utils.hideLoading();
      });
    })

  }
}
