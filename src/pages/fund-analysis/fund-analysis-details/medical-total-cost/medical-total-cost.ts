import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Utils} from "../../../../framwork/provider/utils";
import { Storage } from '@ionic/storage';
import {FundAnalysisVo} from "../../vo/FundAnalysis";
import {FundAnalysisDetailsVo} from "../../vo/FundAnalysisDetails";
import {FundAnalysisProvider} from "../../provider/FundAnalysisProvider";
import {BaseCtrl} from "../../../../framwork/controller/ctrl.impl";
import {totalCostChart} from "../../chart";

@IonicPage()
@Component({
  selector: 'page-medical-total-cost',
  templateUrl: 'medical-total-cost.html',
})
export class MedicalTotalCostPage extends BaseCtrl{

  @ViewChild('ageAnalysis_') pie1: ElementRef;

  display:string;

  colors_:any[] = ['#0284C1','#00A1E8','#7ED5FC'];
  colors:any[] = [
          {background:this.colors_[0]},
          {background: this.colors_[1]},
          {background: this.colors_[2]}
      ];
  fundAnalysis:FundAnalysisVo = new FundAnalysisVo();
  fundAnalysisDetails:FundAnalysisDetailsVo = new FundAnalysisDetailsVo();
  constructor(public navCtrl: NavController,
              private fundProvider:FundAnalysisProvider,
              public storage: Storage) {
    super(navCtrl,storage);
    this.display = `none`;
    Utils.showLoading().setTimeout(()=>{this.init(this)});
  }

  //初始化
  init(_){
    super.getPushParams().then((param)=>{
      _.fundAnalysis = param.fund;
      _.fundAnalysisDetails = param.fundDetails;
      //获取数据
      _.fundProvider.getMedicalTotalCost("123456").subscribe((data)=>{
        _.display = `block`;
        totalCostChart(data,_.pie1.nativeElement,['#0284C1','#00A1E8']);
        Utils.hideLoading();
      });
    })
  }
}
