import { Component } from '@angular/core';
import {FundSimulationVo} from "../../pages/fund-simulation/vo/FundSimulation";
import {FundSimulationParamsMaterialVo} from "../../pages/fund-simulation/vo/FundSimulationParamsMaterial";
import {FundSimulationProvider} from "../../pages/fund-simulation/provider/fundSimulationProvider";
import {SIMPARAM} from "../../pages/fund-simulation/vo/simConst";
import {Storage} from "@ionic/storage";
import {Utils} from "../../framwork/provider/utils";

@Component({
  selector: 'cl-sim',
  templateUrl: 'cl-sim.html'
})
export class ClSimComponent {

  option:string = "add";
  fundSimulation:FundSimulationVo;
  materials:FundSimulationParamsMaterialVo;
  constructor(public storage: Storage,
              private fundProvider:FundSimulationProvider) {
    this.materials = new FundSimulationParamsMaterialVo();
    this.storage.get(SIMPARAM).then(data=>{
      this.fundSimulation = data;
      this.initData(this.fundSimulation.id);
    });
  }

  initData(id:string){
    let _ = this;
    Utils.showLoading().setTimeout(()=>{
        _.fundProvider.getParam_material(id).subscribe((d)=>{
        _.materials = d;
        Utils.hideLoading();
      });
    })

  }
}
