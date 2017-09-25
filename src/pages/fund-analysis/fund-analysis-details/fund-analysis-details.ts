import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage , NavController} from 'ionic-angular';
import {Utils} from "../../../framwork/provider/utils";
import {BaseCtrl} from "../../../framwork/controller/ctrl.impl";
import { Storage } from '@ionic/storage';
import {FundAnalysisProvider} from "../provider/FundAnalysisProvider";
import {FundAnalysisDetailsVo} from "../vo/FundAnalysisDetails";
import {FundAnalysisVo} from "../vo/FundAnalysis";
import {FundAnalysisDetailsHospLevelVo} from "../vo/FundAnalysisDetailsHospLevel";
import {FundAnalysisDetailsCostTypeVo} from "../vo/FundAnalysisDetailsCostType";
import {FundAnalysisDetailsAgeVo} from "../vo/FundAnalysisDetailsAge";
import {ageChartAna, costTypeChart, hospitalLevelCharts} from "../chart";
import {Observable} from "rxjs/Observable";
import {SC_ICON} from "../../../framwork/const/appConstsData";



@IonicPage()
@Component({
  selector: 'page-fund-analysis-details',
  templateUrl: 'fund-analysis-details.html',
})
export class FundAnalysisDetailsPage extends BaseCtrl {

  @ViewChild('costAnalysis') pie1: ElementRef;
  @ViewChild('hospitalLevelAnalysis') pie2: ElementRef;
  @ViewChild('ageAnalysis') pie3: ElementRef;
  display:string;

  fundAnalysis:FundAnalysisVo;
  fundAnalysisDetails:FundAnalysisDetailsVo;
  fundAnalysisDetailsAge:FundAnalysisDetailsAgeVo;
  title:string="";
  shoucang:string;

  hospLevelVoList:FundAnalysisDetailsHospLevelVo[];
  costTypeVoList:FundAnalysisDetailsCostTypeVo[];

  colors_:any[] = ['#0284C1','#00A1E8','#7ED5FC','#FFE1FF'];
  colors:any[] = [{background:this.colors_[0]},
                  {background: this.colors_[1]},
                  {background: this.colors_[2]},
                  {background: this.colors_[3]}];

  constructor(public navCtrl: NavController,
              private utils:Utils,
              public storage: Storage,
              public fundProvider:FundAnalysisProvider) {
    super(navCtrl,storage);
    this.fundAnalysisDetails = new FundAnalysisDetailsVo();
    this.display = `none`;
    this.shoucang = SC_ICON.wsc;
    Utils.showLoading().setTimeout(()=>{this.init(this)});
  }

  //页面加载时运行 初始化数据
  init(_){
    super.getPushParams().then((param)=>{
      _.fundAnalysis = param;
      _.title = param.name;
      _.isFavorite(_.fundAnalysis.id);
      _.getData().subscribe(d=>{
        _.display = `block`;
        _.fundAnalysisDetails = d[0];
        _.fundAnalysisDetailsAge = d[1];
        _.hospLevelVoList = d[2];
        _.costTypeVoList = d[3];
        _.setcChart(d[1],d[2],d[3]);
        Utils.hideLoading();
      });
    });
  }

  //渲染图表
  setcChart(age,hosp,cost){
    //年龄段 图表分析
    ageChartAna(age,this.pie3.nativeElement,['#0284C1','#00A1E8']);
    //医院等级分析
    hospitalLevelCharts(hosp, this.pie2.nativeElement,this.colors_);
    //费用类别分析
    costTypeChart(cost,this.pie1.nativeElement,['#0284C1','#00A1E8','#7ED5FC']);
  }

  //获取页面数据
  getData():Observable<any>{
      let observableBatch = [];
    //根据ID获取医疗总费用和统筹支付费用
      observableBatch.push(this.fundProvider.getFundAnalysisDetails({id:this.fundAnalysis.id}));
    //根据ID获取年龄段分析
       observableBatch.push(this.fundProvider.getAge({id:this.fundAnalysis.id}));
    //根据ID获取参保机构等级分析
       observableBatch.push(this.fundProvider.getHospLevel({id:this.fundAnalysis.id}));
    //根据ID获取费用类别分析
       observableBatch.push(this.fundProvider.getCostType({id:this.fundAnalysis.id}));
      return Observable.combineLatest(observableBatch);
  }

  //跳转详情子页面
  toView(page:string){
    super.push(page,{"fund":this.fundAnalysis,"fundDetails":this.fundAnalysisDetails}).then();
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
        this.utils.unFavorite(this.fundAnalysis.id).subscribe(d=>{
          if(d){
            this.shoucang = SC_ICON.wsc;
            this.utils.showMsg("取消收藏");
          }else{
            this.shoucang = SC_ICON.sc;
            this.utils.showMsg("取消收藏失败");
          }
        });
    }else if(this.shoucang == SC_ICON.wsc){//点击收藏
      this.utils.setFavorite(this.fundAnalysis).subscribe(d=>{
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

}
