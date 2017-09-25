import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {TotalControlProvider} from "../provider/totalControlProvider";
import {BaseCtrl} from "../../../framwork/controller/ctrl.impl";
import {Storage} from "@ionic/storage";
import {TotalControlVo} from "../vo/totalControl";
import {TotalControlHospitalVo} from "../vo/totalControlHospital";
import {Utils} from "../../../framwork/provider/utils";
import {SC_ICON} from "../../../framwork/const/appConstsData";

@IonicPage()
@Component({
  selector: 'page-total-control-details',
  templateUrl: 'total-control-details.html',
})
export class TotalControlDetailsPage extends BaseCtrl{

  title:string;
  shoucang:string;
  display:string;
  totalControl:TotalControlVo;
  totalHospitalList:TotalControlHospitalVo[];
  totalHospitalList_:TotalControlHospitalVo[];

  constructor(public navCtrl: NavController,
              public storage: Storage ,
              private utils:Utils,
              private totalProvider:TotalControlProvider) {
    super(navCtrl,storage);
    this.display = `none`;
    this.shoucang = SC_ICON.wsc;
    Utils.showLoading().setTimeout(()=>{ this.init(this) });
  }

  //页面加载时运行 初始化数据
  init(_){
    super.getPushParams().then((param:TotalControlVo)=>{
      _.title = param.name;
      _.totalControl = param;
      _.isFavorite(_.totalControl.id);
      _.totalProvider.postTotalControlHospitalList({"id":_.totalControl.id}).subscribe((data:TotalControlHospitalVo[])=>{
        _.display = `block`;
        _.totalHospitalList = data;
        _.totalHospitalList_ = data;
        Utils.hideLoading();
      });

    })
  }


  toHospitalDetails(param:TotalControlHospitalVo){
    super.push('TotalControlHospitalDetailsPage',param).then();
  }

  getItems(ev: any) {
    let val = ev.target.value;
    let items_:TotalControlHospitalVo[] = [];
    if (val && val.trim() != '') {
      this.totalHospitalList.forEach((i)=>{
        if(i.name.indexOf(val) >= 0 ){
          items_.push(i);
        }
      });
      this.totalHospitalList = items_;
    }else{
      this.totalHospitalList = this.totalHospitalList_;
    }
  }

  onClear(){
    this.totalHospitalList = this.totalHospitalList_;
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
      this.utils.unFavorite(this.totalControl.id).subscribe(d=>{
        if(d){
          this.shoucang = SC_ICON.wsc;
          this.utils.showMsg("取消收藏");
        }else{
          this.shoucang = SC_ICON.sc;
          this.utils.showMsg("收藏成功失败");
        }
      });
    }else if(this.shoucang == SC_ICON.wsc){//点击收藏
      this.utils.setFavorite(this.totalControl).subscribe(d=>{
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
