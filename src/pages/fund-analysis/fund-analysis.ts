import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {FundAnalysisProvider} from "./provider/FundAnalysisProvider";
import {FundAnalysisVo} from "./vo/FundAnalysis";
import {Utils} from "../../framwork/provider/utils";
import {BaseCtrl} from "../../framwork/controller/ctrl.impl";
import { Storage } from '@ionic/storage';
import {MENUS} from "../../framwork/const/urlPermission";
import {LimitVo} from "../../framwork/entity/Limit";

/**
 * 基金分析
 */
@IonicPage()
@Component({
  selector: 'page-fund-analysis',
  templateUrl: 'fund-analysis.html',
})
export class FundAnalysisPage extends BaseCtrl{

  enabled:boolean;
  limit:any = {"offset":1,"limit":2,total:0};//默认第一页 每页三条
  icon:string;
  display:string;
  FundAnalysisList:FundAnalysisVo[] = [];
  constructor(public navCtrl: NavController,
              private utils:Utils,
              private fundAnalysis:FundAnalysisProvider,
              public  storage: Storage) {
    super(navCtrl,storage);
    this.display = `none`;
    this.icon = MENUS.Ssl0ekz4e7WMCwSTkWS_JJFX.icon;
    Utils.showLoading().setTimeout(()=>{this.init(this)});
  }
  //获取基金分析list数据
  init(_){
    this.fundAnalysis.getFundAnalysisList(this.limit)
      .subscribe((d:LimitVo)=>{
        this.limit = d;
        _.display = `block`;
        _.FundAnalysisList = new FundAnalysisVo().convertList(d.content);
        Utils.hideLoading();
      });
  }

  //跳转到新增基金分析页面
  toFundAnalysisDetails(f:FundAnalysisVo){
    if(f.state){
      super.push('FundAnalysisDetailsPage',f).then();
    }else{
      this.utils.showMsg('该报表正在生成中');
    }
  }

  //上拉加载中
  doInfinite(infiniteScroll){
    if((this.limit.total - (this.limit.offset * this.limit.limit)) > 0){
      this.limit.offset++;
      this.limit.content = "";
      this.fundAnalysis.getFundAnalysisList(this.limit)
        .subscribe((d:LimitVo)=>{
          this.FundAnalysisList.push(...new FundAnalysisVo().convertList(d.content));
          infiniteScroll.complete();
        });
    }else{
      infiniteScroll.enable(true);
      this.utils.showMsg("没有更多数据了");
    }
  }
}
