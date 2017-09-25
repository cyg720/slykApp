import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage,NavController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {BaseCtrl} from "../../../../framwork/controller/ctrl.impl";
import {FundAnalysisVo} from "../../vo/FundAnalysis";
import {FundAnalysisDetailsVo} from "../../vo/FundAnalysisDetails";
import {FundAnalysisProvider} from "../../provider/FundAnalysisProvider";
import { wholePayCostChartsAna} from "../../chart";
import {Utils} from "../../../../framwork/provider/utils";

@IonicPage()
@Component({
  selector: 'page-whole-pay-cost',
  templateUrl: 'whole-pay-cost.html',
})
export class WholePayCostPage extends BaseCtrl{

  @ViewChild('ageAnalysis') pie1: ElementRef;

  display:string;

  colors_:any[] = ['#0284C1','#00A1E8','#7ED5FC'];
  colors:any[] = [{background:this.colors_[0]},
    {background: this.colors_[1]},
    {background: this.colors_[2]}];

  fundAnalysis:FundAnalysisVo;
  fundAnalysisDetails:FundAnalysisDetailsVo;

  constructor(public navCtrl: NavController,
              private fundProvider:FundAnalysisProvider,
              public  storage: Storage) {
    super(navCtrl,storage);
    this.display = `none`;
    Utils.showLoading().setTimeout(()=>{this.init(this)});
  }

  init(_) {
    super.getPushParams().then((param)=>{
      _.fundAnalysis = param.fund;
      _.fundAnalysisDetails = param.fundDetails;
      //获取数据
      _.fundProvider.getWholePayCost("123456").subscribe((data)=>{
        wholePayCostChartsAna(data,_.pie1.nativeElement,['#0284C1','#00A1E8']);
        _.display = `block`;
        Utils.hideLoading();
      });
    })
  }
}
