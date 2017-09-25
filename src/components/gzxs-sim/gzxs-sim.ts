import {Component} from '@angular/core';
import {Storage} from "@ionic/storage";
import {FundSimulationVo} from "../../pages/fund-simulation/vo/FundSimulation";
import {FundSimulationParamsGzxsVo} from "../../pages/fund-simulation/vo/FundSimulationParamsGzxs";
import {FundSimulationProvider} from "../../pages/fund-simulation/provider/fundSimulationProvider";
import {SIMPARAM} from "../../pages/fund-simulation/vo/simConst";
import {Utils} from "../../framwork/provider/utils";

@Component({
  selector: 'gzxs-sim',
  templateUrl: 'gzxs-sim.html'
})
export class GzxsSimComponent {

  fundSimulation:FundSimulationVo;
  gzxs:FundSimulationParamsGzxsVo = new FundSimulationParamsGzxsVo();
  constructor(private storage: Storage,
              private fundProvider:FundSimulationProvider) {
    this.storage.get(SIMPARAM).then((data:FundSimulationVo)=>{
      this.fundSimulation = data;
      this.initData(this.fundSimulation.id);
    });
  }
  private initData(id:string){
    let _ =this;
    Utils.showLoading().setTimeout(()=>{
      _.fundProvider.getParam_gzxs(id).subscribe((d)=>{
        _.gzxs = d;
        Utils.hideLoading();
      });
    });
  }
}
