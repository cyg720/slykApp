import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage , NavController} from 'ionic-angular';
import {BaseCtrl} from "../../../../framwork/controller/ctrl.impl";
import {Storage} from "@ionic/storage";
import {TotalControlHospitalVo} from "../../vo/totalControlHospital";
import {TotalControlProvider} from "../../provider/totalControlProvider";
import {TotalControlParamsVo} from "../../vo/totalControlParams";
import {TotalControlMonthDetailsVo} from "../../vo/totalControlMonthDetails";
import {Observable} from "rxjs/Observable";
import {TotalCtrlChart} from "../../chart";
import {Utils} from "../../../../framwork/provider/utils";

@IonicPage()
@Component({
  selector: 'page-total-control-hospital-details',
  templateUrl: 'total-control-hospital-details.html',
})
export class TotalControlHospitalDetailsPage extends BaseCtrl{
  hospitalName:string;
  @ViewChild('meter') meter:ElementRef;
  display:string;
  totalhospital:TotalControlHospitalVo;
  totalParams:TotalControlParamsVo;
  totalMonthDetails:TotalControlMonthDetailsVo[];

  constructor(public navCtrl: NavController,
              public storage: Storage,
              private totalProvider:TotalControlProvider) {
    super(navCtrl,storage);
    this.totalhospital = new TotalControlHospitalVo();
    this.totalParams = new TotalControlParamsVo();
    this.display = `none`;
    Utils.showLoading().setTimeout(()=>{ this.init(this) });
  }
  //页面加载时运行 初始化数据
  init(_){
    super.getPushParams().then((param:TotalControlHospitalVo)=>{
      _.totalhospital = param;
      _.hospitalName = param.name;

      _.getData({"id":_.totalhospital.id}).subscribe(d=>{
        _.display = `block`;
        _.totalParams = d[0];
        _.totalMonthDetails = d[1];
        _.setChart((_.totalhospital.bnyjs / _.totalhospital.bnzb).toFixed(2))
        Utils.hideLoading();

      });
    });
  }

  //渲染图表
  setChart(data){
    TotalCtrlChart(data,this.meter.nativeElement);
  }

  //获取数据
  getData(id):Observable<any>{
    let observableBatch = [];
    //根据ID 获取总额控制 医院list
    observableBatch.push(this.totalProvider.postTotalControlParams(id));
    //根据ID 获取总额控制 医院list
    observableBatch.push(this.totalProvider.postTotalControlMonthDetails(id));
    return Observable.combineLatest(observableBatch);
  }

}
