import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage,  NavController} from 'ionic-angular';
import {Utils} from "../../../framwork/provider/utils";
import {BaseCtrl} from "../../../framwork/controller/ctrl.impl";
import { Storage } from '@ionic/storage';
import {HospitalAnalysisVo} from "../vo/HospitalAnalysis";
import {HospitalAnalysisProvider} from "../provider/hospitalAnalysisProvider";
import {HospitalAnalysisDetailsCostTypeVo} from "../vo/HospitalAnalysisDetailsCostType";
import {HospitalAnalysisDetailsVo} from "../vo/HospitalAnalysisDetails";
import {HospitalAnalysisDetailsIndexVo} from "../vo/HospitalAnalysisDetailsIndex";
import {HospitalAnalysisDetailsDiseaseVo} from "../vo/HospitalAnalysisDetailsDisease";
import {HospitalAnalysisDetailsProjectVo} from "../vo/HospitalAnalysisDetailsProject";
import {HospitalAnalysisDetailsDrugVo} from "../vo/HospitalAnalysisDetailsDrug";
import {ageAnalysisChartHosp, costTypeChart} from "../chart";
import {Observable} from "rxjs/Observable";
import {SC_ICON} from "../../../framwork/const/appConstsData";

@IonicPage()
@Component({
  selector: 'page-hospital-analysis-details',
  templateUrl: 'hospital-analysis-details.html',
})
export class HospitalAnalysisDetailsPage extends BaseCtrl{

  @ViewChild('pie1') pie1: ElementRef;
  @ViewChild('pie3') pie3: ElementRef;
  display:string;

  colors_:any[] = ['#0284C1','#00A1E8','#7ED5FC'];
  colors:any[] = [{background:this.colors_[0]},
                  {background: this.colors_[1]},
                  {background: this.colors_[2]}];

  title:string;
  shoucang:string;

  hospitalAnalysis:HospitalAnalysisVo;
  costTypeVoList:HospitalAnalysisDetailsCostTypeVo[];
  hospitalAnalysisDetails:HospitalAnalysisDetailsVo;
  hospitalAnalysisDetailsIndex:HospitalAnalysisDetailsIndexVo[];
  hospitalAnalysisDetailsDisease:HospitalAnalysisDetailsDiseaseVo[];
  hospitalAnalysisDetailsProject:HospitalAnalysisDetailsProjectVo[];
  hospitalAnalysisDetailsDrug:HospitalAnalysisDetailsDrugVo[];

  constructor(public navCtrl: NavController,
              private utils:Utils,
              public  storage: Storage,
              private hospitalProvider:HospitalAnalysisProvider) {
    super(navCtrl,storage);
    this.hospitalAnalysisDetails = new HospitalAnalysisDetailsVo();
    this.display = `none`;
    this.shoucang = SC_ICON.wsc;
    Utils.showLoading().setTimeout(()=>{ this.init(this) });
  }

  init(_){
    super.getPushParams().then((param)=>{
      _.hospitalAnalysis = param;
      _.title = param.name;
      _.isFavorite(_.hospitalAnalysis.id);

      _.getData(_.hospitalAnalysis.id).subscribe(d=>{
        _.display = `block`;
        //获取医疗总费用和统筹支付费用
        _.hospitalAnalysisDetails = d[0];
        //获取 费用类别 分析数据
        _.costTypeVoList = d[2];
        //获取指标分析数据
        _.hospitalAnalysisDetailsIndex = d[3];
        //治疗疾病排名
        _.hospitalAnalysisDetailsDisease = d[4];
        //项目排名
        _.hospitalAnalysisDetailsProject = d[5];
        //药品排名
        _.hospitalAnalysisDetailsDrug = d[6];
        _.setChart(d[1],d[2]);
        Utils.hideLoading();
      });
    })
  }

  setChart(age,cost){
    //获取年龄段分析数据
    ageAnalysisChartHosp(age, this.pie3.nativeElement,['#0284C1','#00A1E8']);
    //获取 费用类别 分析数据
    costTypeChart(cost,this.pie1.nativeElement,['#0284C1','#00A1E8','#7ED5FC']);
  }

  getData(id){
    let observableBatch = [];
    //获取医疗总费用和统筹支付费用
    observableBatch.push(this.hospitalProvider.getFundAnalysisDetails(id));
    //获取年龄段分析数据
    observableBatch.push(this.hospitalProvider.getAgeAnalysisData(id));
    //获取 费用类别 分析数据
    observableBatch.push(this.hospitalProvider.getCostTypeData(id));
    //获取指标分析数据
    observableBatch.push(this.hospitalProvider.getIndexAnalysisData(id));
    //治疗疾病排名
    observableBatch.push(this.hospitalProvider.getDiseaseData(id));
    //项目排名
    observableBatch.push(this.hospitalProvider.getProjectData(id));
    //药品排名
    observableBatch.push(this.hospitalProvider.getDrugData(id));
    return Observable.combineLatest(observableBatch);
  }

  //初始化判断是否收藏了
  isFavorite(id:string){
    this.utils.isFavorite(id).subscribe((b)=>{
      if(b.boo){
        this.shoucang = SC_ICON.sc;
      }
    });
  }

  //点击收藏
  favorite(){
    if(this.shoucang == SC_ICON.sc){//取消收藏
      this.utils.unFavorite(this.hospitalAnalysis.id).subscribe(d=>{
        if(d){
          this.shoucang = SC_ICON.wsc;
          this.utils.showMsg("取消收藏");
        }else{
          this.shoucang = SC_ICON.sc;
          this.utils.showMsg("收藏成功失败");
        }
      });
    }else if(this.shoucang == SC_ICON.wsc){//点击收藏
      this.utils.setFavorite(this.hospitalAnalysis).subscribe(d=>{
        if(d){
          this.shoucang = SC_ICON.sc;
          this.utils.showMsg("收藏成功");
        }else{
          this.shoucang = SC_ICON.wsc;
          this.utils.showMsg("收藏失败");
        }
      });
    }
  }

  toView(page:string){
    super.push(page,{"hosp":this.hospitalAnalysis,"hospDetails":this.hospitalAnalysisDetails}).then();
  }
}
