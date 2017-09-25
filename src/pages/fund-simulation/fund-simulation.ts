import { Component } from '@angular/core';
import {IonicPage,NavController} from 'ionic-angular';
import {FundSimulationProvider} from "./provider/fundSimulationProvider";
import {Utils} from "../../framwork/provider/utils";
import {BaseCtrl} from "../../framwork/controller/ctrl.impl";
import {Storage} from "@ionic/storage";
import {FundSimulationVo} from "./vo/FundSimulation";
import {MENUS} from "../../framwork/const/urlPermission";
import {LimitVo} from "../../framwork/entity/Limit";

/**
 * 基金仿真
 */
@IonicPage()
@Component({
  selector: 'page-fund-simulation',
  templateUrl: 'fund-simulation.html',
})
export class FundSimulationPage extends BaseCtrl{

  enabled:boolean;
  limit:any = {"offset":1,"limit":2,"total":0};//默认第一页 每页三条
  display:string;
  icon:string;
  fundSimulationList:FundSimulationVo[];
  constructor(public navCtrl: NavController,
              public storage: Storage,
              private simulationProvider:FundSimulationProvider,
              public utils:Utils) {
    super(navCtrl,storage);
    this.display = `none`;
    this.icon = MENUS.GFCtusAduXB7IxcG9AV_JJFZ.icon;
    Utils.showLoading().setTimeout(()=>{this.init(this)});
  }

  //获取数据
  init(_){
    this.simulationProvider.getFundSimulationList(this.limit).subscribe((d:LimitVo)=>{
      _.limit = d;
      _.fundSimulationList = new FundSimulationVo().convertList(d.content);
      _.display = `block`;
      Utils.hideLoading();
    });
  }

  toFundSimulationDetails(f:FundSimulationVo){
      super.push('FundSimulationDetailsPage',f).then();
  }

  //上拉加载中
  doInfinite(infiniteScroll){
    if((this.limit.total - (this.limit.offset * this.limit.limit)) > 0){
      this.limit.offset++;
      this.limit.content = "";
      this.simulationProvider.getFundSimulationList(this.limit)
        .subscribe((d:LimitVo)=>{
          this.fundSimulationList.push(...new FundSimulationVo().convertList(d.content));
          infiniteScroll.complete();
        });
    }else{
      infiniteScroll.enable(true);
      this.utils.showMsg("没有更多数据了");
    }
  }
}
