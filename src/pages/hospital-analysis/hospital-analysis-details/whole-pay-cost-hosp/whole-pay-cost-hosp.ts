import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {BaseCtrl} from "../../../../framwork/controller/ctrl.impl";
import {Storage} from "@ionic/storage";
import {HospitalAnalysisProvider} from "../../provider/hospitalAnalysisProvider";
import {HospitalAnalysisVo} from "../../vo/HospitalAnalysis";
import {HospitalAnalysisDetailsVo} from "../../vo/HospitalAnalysisDetails";
import {wholePayCostChartHosp} from "../../chart";
import {Utils} from "../../../../framwork/provider/utils";


@IonicPage()
@Component({
  selector: 'page-whole-pay-cost-hosp',
  templateUrl: 'whole-pay-cost-hosp.html',
})
export class WholePayCostHospPage extends BaseCtrl{

  @ViewChild('pie1') pie1: ElementRef;
  display:string;
  colors_:any[] = ['#0284C1','#00A1E8','#7ED5FC'];
  colors:any[] = [{background:this.colors_[0]},
    {background: this.colors_[1]},
    {background: this.colors_[2]}];

  hospAnalysis:HospitalAnalysisVo;
  hospAnalysisDetails:HospitalAnalysisDetailsVo;

  constructor(public navCtrl: NavController,
              public storage: Storage,
              private hospitalProvider:HospitalAnalysisProvider) {
    super(navCtrl,storage);
    this.hospAnalysisDetails = new HospitalAnalysisDetailsVo();
    this.display = `none`;
    Utils.showLoading().setTimeout(()=>{ this.init(this) });
  }
  init(_) {
    super.getPushParams().then((param)=>{
      _.hospAnalysis = param.hosp;
      _.hospAnalysisDetails = param.hospDetails;

      _.hospitalProvider.getWholePayCost(_.hospAnalysis.id).subscribe((data)=>{
        _.display = `block`;
        wholePayCostChartHosp(data,_.pie1.nativeElement,['#0284C1','#00A1E8']);
        Utils.hideLoading();
      });

    })
  }
}
