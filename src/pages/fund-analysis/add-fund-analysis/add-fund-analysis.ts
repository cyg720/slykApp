import {Component, DoCheck} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {INSURED_TYPE} from "../../../framwork/const/appConstsData";
import {BaseCtrl} from "../../../framwork/controller/ctrl.impl";
import {FundAnalysisProvider} from "../provider/FundAnalysisProvider";

@IonicPage()
@Component({
  selector: 'page-add-fund-analysis',
  templateUrl: 'add-fund-analysis.html',
})
export class AddFundAnalysisPage extends BaseCtrl implements DoCheck{

  county:any;//区县对象
  countyName:string = "";//区县名称
  myYear:string;//年
  insured_type:any;//参保类型
  addDisabled:boolean = true;//是否禁用新增按钮

  constructor(public navCtrl: NavController,
               public storage: Storage,
              private fundAnalysis:FundAnalysisProvider) {
    super(navCtrl,storage);
    this.insured_type = [{options:INSURED_TYPE}];
  }

  ngDoCheck(){
    if(this.myYear != null && this.county != null){
        this.addDisabled = false;
    }
  }

  ionViewWillEnter() {
    super.getPopParams().then((d)=>{
        if(d==null){
          this.addDisabled = true;
        }else{
          this.county = d;
          this.countyName = d.name;
        }
    }).catch(()=>{
      this.countyName = null;
      this.addDisabled = true;
    })
  }

  //跳转区县选择
  toCounty(){
    super.push('CountyPage').then();
  }

  //确定新增基金分析
  addFundAnalysls(){
    let f:any = {countyId:this.county.id,year:this.myYear};
    this.fundAnalysis.addFundAnalysis(f).subscribe((b:boolean)=>{
      if(b){
        super.pop().then();
      }
    });
  }

}
