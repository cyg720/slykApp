import { Component } from '@angular/core';
import {IonicPage,  NavController} from 'ionic-angular';
import {HospitalAnalysisProvider} from "./provider/hospitalAnalysisProvider";
import {Utils} from "../../framwork/provider/utils";
import {BaseCtrl} from "../../framwork/controller/ctrl.impl";
import { Storage } from '@ionic/storage';
import {HospitalAnalysisVo} from "./vo/HospitalAnalysis";
import {MENUS} from "../../framwork/const/urlPermission";
import {LimitVo} from "../../framwork/entity/Limit";

/**
 * 医院分析
 */
@IonicPage()
@Component({
  selector: 'page-hospital-analysis',
  templateUrl: 'hospital-analysis.html',
})
export class HospitalAnalysisPage extends BaseCtrl{
  enabled:boolean;
  limit:any = {"offset":1,"limit":2,"total":0};//默认第一页 每页三条
  icon:string;
  display:string;
  hospAnalysisList:HospitalAnalysisVo[] = [];
  constructor(public navCtrl: NavController,
              private hospitalProvider:HospitalAnalysisProvider,
              private utils:Utils,
              public  storage: Storage) {
    super(navCtrl,storage);
    this.display = `none`;
    this.icon = MENUS.WZ8SZSl0JCDR2aBBSw4_YYFX.icon;
    Utils.showLoading().setTimeout(()=>{ this.init(this) });
  }
  //获取数据
  init(_){
    _.hospitalProvider.getHospitalAnalysisList(this.limit).subscribe((d:LimitVo)=>{
      _.limit = d;
      _.hospAnalysisList = new HospitalAnalysisVo().convertList(d.content);
      _.display = `block`;
      Utils.hideLoading();
    });
  }

  //跳转详情页面
  toHospitalAnalysisDetails(f:HospitalAnalysisVo){
    if(f.state){
      super.push('HospitalAnalysisDetailsPage',f).then();
    }else{
      this.utils.showMsg('该报表正在生成中');
    }
  }
  //上拉加载中
  doInfinite(infiniteScroll){
    if((this.limit.total - (this.limit.offset * this.limit.limit)) > 0){
      this.limit.offset++;
      this.limit.content = "";
      this.hospitalProvider.getHospitalAnalysisList(this.limit)
        .subscribe((d:LimitVo)=>{
          this.hospAnalysisList.push(...new HospitalAnalysisVo().convertList(d.content));
          infiniteScroll.complete();
        });
    }else{
      infiniteScroll.enable(true);
      this.utils.showMsg("没有更多数据了");
    }
  }
}
