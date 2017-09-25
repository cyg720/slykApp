import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {BaseCtrl} from "../../../framwork/controller/ctrl.impl";
import {Utils} from "../../../framwork/provider/utils";
import {FundSimulationVo} from "../vo/FundSimulation";
import {FundSimulationProvider} from "../provider/fundSimulationProvider";
import {FundSimulationDetailsVo} from "../vo/FundSimulationDetails";
import {SIMPARAM} from "../vo/simConst";
import {ageChartSim, hospitalChartSim, hospLevelChartSim} from "../chart";
import {Observable} from "rxjs/Observable";
import {SC_ICON} from "../../../framwork/const/appConstsData";



@IonicPage()
@Component({
  selector: 'page-fund-simulation-details',
  templateUrl: 'fund-simulation-details.html',
})
export class FundSimulationDetailsPage extends BaseCtrl{

  @ViewChild('hospLevel') hospLevel:ElementRef;
  @ViewChild('ageAnalysis') ageAnalysis:ElementRef;
  @ViewChild('hospitalAnalysis') hospitalAnalysis:ElementRef;

  display:string;
  colors_:any[] = ['#0284C1','#00A1E8','#7ED5FC'];
  colors:any[] = [{background:this.colors_[0]},
    {background: this.colors_[1]},
    {background: this.colors_[2]}];

  title:string;
  shoucang:string;

  fundSimulation:FundSimulationVo;
  fundSimulationDetails:FundSimulationDetailsVo;
  constructor(public navCtrl: NavController,
              public storage: Storage,
              private simulationProvider:FundSimulationProvider,
              private utils:Utils) {
    super(navCtrl,storage);
    this.fundSimulationDetails = new FundSimulationDetailsVo();
    this.display = `none`;
    this.shoucang = SC_ICON.wsc;
    Utils.showLoading().setTimeout(()=>{this.init(this)});
  }

  //页面加载时运行 初始化数据
  init(_){
    super.getPushParams().then((param:FundSimulationVo)=>{
      _.fundSimulation = param;
      _.title = param.name;
      _.isFavorite(_.fundSimulation.id);

      _.getData(_.fundSimulation.id).subscribe(d=>{
        _.display = `block`;
        _.fundSimulationDetails = d[0];
        _.setChart(d[1],d[2],d[3]);
        Utils.hideLoading();
      });

    })
  }

  //渲染图表
  setChart(hospLevel,age,hosp){
    hospLevelChartSim(hospLevel,this.hospLevel.nativeElement,['#0284C1','#00A1E8','#7ED5FC']);
    ageChartSim(age,this.ageAnalysis.nativeElement,['#0284C1','#00A1E8']);
    hospitalChartSim(hosp,this.hospitalAnalysis.nativeElement,['#0284C1','#00A1E8']);
  }

  //获取数据
  getData(id){
    let observableBatch = [];
    //获取基金仿真详情
    observableBatch.push(this.simulationProvider.getFundSimulationDetails(id));
    //获取医院等级仿真费用
    observableBatch.push(this.simulationProvider.getHospLevelData(id));
    //获取年龄段仿真费用
    observableBatch.push(this.simulationProvider.getAgeData(id));
    //获取医院仿真数据top5
    observableBatch.push(this.simulationProvider.getHospitalData(id));
    return Observable.combineLatest(observableBatch);
  }

  //跳转查看参数页面
  toLookParam(){
    this.storage.set(SIMPARAM,this.fundSimulation).then();
    super.push('FundSimulationParamPage').then()
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
      this.utils.unFavorite(this.fundSimulation.id).subscribe(d=>{
        if(d){
          this.shoucang = SC_ICON.wsc;
          this.utils.showMsg("取消收藏");
        }else{
          this.shoucang = SC_ICON.sc;
          this.utils.showMsg("收藏成功失败");
        }
      });
    }else if(this.shoucang == SC_ICON.wsc){//点击收藏
      this.utils.setFavorite(this.fundSimulation).subscribe(d=>{
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
