import { Component } from '@angular/core';
import {FundSimulationVo} from "../../pages/fund-simulation/vo/FundSimulation";
import {FundSimulationParamsDiseaseVo} from "../../pages/fund-simulation/vo/FundSimulationParamsDisease";
import {FundSimulationProvider} from "../../pages/fund-simulation/provider/fundSimulationProvider";
import {SIMPARAM} from "../../pages/fund-simulation/vo/simConst";
import {Storage} from "@ionic/storage";
import {Utils} from "../../framwork/provider/utils";

@Component({
  selector: 'tsjb-sim',
  templateUrl: 'tsjb-sim.html'
})
export class TsjbSimComponent {

  option:string = "add";
  fundSimulation:FundSimulationVo;
  diseases:FundSimulationParamsDiseaseVo;

  constructor(private storage: Storage,
              private fundProvider:FundSimulationProvider) {
    this.diseases = new FundSimulationParamsDiseaseVo();
    this.storage.get(SIMPARAM).then(data=>{
      this.fundSimulation = data;
      this.initData(this.fundSimulation.id);
    });
  }

  initData(id:string){
    let _ = this;
    Utils.showLoading().setTimeout(()=>{
      _.fundProvider.getParam_disease(id).subscribe((d)=>{
        _.diseases = d;
        Utils.hideLoading();
      });
    })

  }

}
