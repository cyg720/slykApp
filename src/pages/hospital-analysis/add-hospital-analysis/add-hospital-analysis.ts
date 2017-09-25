import {Component, DoCheck} from '@angular/core';
import {IonicPage,NavController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {BaseCtrl} from "../../../framwork/controller/ctrl.impl";
import {HospitalAnalysisProvider} from "../provider/hospitalAnalysisProvider";
import {Utils} from "../../../framwork/provider/utils";

@IonicPage()
@Component({
  selector: 'page-add-hospital-analysis',
  templateUrl: 'add-hospital-analysis.html',
})
export class AddHospitalAnalysisPage extends BaseCtrl implements DoCheck{

  myYear:string;
  hpspitalName:string = "";
  addDisabled:boolean = true;//是否禁用新增按钮
  constructor(public navCtrl: NavController,
              public storage: Storage,
              private hospitalProvider:HospitalAnalysisProvider) {
    super(navCtrl,storage);
  }

  ngDoCheck(){
    if(Utils.isNotNull(this.hpspitalName) && Utils.isNotNull(this.myYear)){
      this.addDisabled = false;
    }
  }

  ionViewWillEnter(){
    super.getPopParams().then((d)=>{
      if(d){
        this.hpspitalName = d.name;
      }else{
        this.addDisabled = true;
      }
    }).catch(()=>{
      this.hpspitalName = null;
      this.addDisabled = true;
    })
  }

  //跳转至选择医院页面
  toHospital(){
    this.navCtrl.push('HospitalPage').then();
  }
  //新增医院分析
  addHospitalAnalysls(){
    let f:any = {hpspitalName:this.hpspitalName,year:this.myYear};
    this.hospitalProvider.addHospitalAnalysis(f)
      .subscribe((b:boolean)=>{
        if(b){
          super.pop().then();
        }
    });
  }
}
