import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {BaseCtrl} from "../../../framwork/controller/ctrl.impl";
import {Storage} from "@ionic/storage";
import {Utils} from "../../../framwork/provider/utils";
import {FAVORITE, FAVORITETYPE} from "../../../framwork/const/appConstsData";
import {MENUS} from "../../../framwork/const/urlPermission";

/**
 * 收藏夹功能
 */
@IonicPage()
@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
})
export class CollectionPage extends BaseCtrl{

  list:any[];
  type:any;
  icon1:string;
  icon2:string;
  icon3:string;
  icon4:string;
  check:boolean;
  constructor(public navCtrl: NavController,
              public storage: Storage,
              private utils:Utils) {
    super(navCtrl,storage);
    this.list = [];
    this.type = FAVORITETYPE;
    this.icon1 = MENUS.QuxBUDMgPxzrl45rZPG_ZEKZ.icon;
    this.icon2 = MENUS.WZ8SZSl0JCDR2aBBSw4_YYFX.icon;
    this.icon3 = MENUS.Ssl0ekz4e7WMCwSTkWS_JJFX.icon;
    this.icon4 = MENUS.GFCtusAduXB7IxcG9AV_JJFZ.icon;
    this.check = true;
  }

  //初始化
  ionViewDidEnter() {
    this.init();
  }

  init(){
    Utils.showLoading();
    this.utils.getValue(FAVORITE).subscribe(d=>{
      this.list = d;
      if(d&&d.length<=0){
        this.utils.showMsg("无收藏数据");
      }
      Utils.hideLoading();
    });
  }

  //跳转页面
  toPage(page:any){
    switch (page.favoriteType){
      case this.type.A:
        super.push('FundAnalysisDetailsPage',page).then();
        break;
      case this.type.B:
        super.push('HospitalAnalysisDetailsPage',page).then();
        break;
      case this.type.C:
        super.push('TotalControlDetailsPage',page).then();
        break;
      case this.type.D:
        super.push('FundSimulationDetailsPage',page).then();
        break;
      default:
        this.utils.showMsg(`不存在的类型`);
        break;
    }
  }

  //解除收藏
  onFavorite(id:string){
      this.utils.unFavorite(id).subscribe(d=>{
        if(d){
          this.utils.showMsg("取消收藏成功");
        }else{
          this.utils.showMsg("取消收藏失败");
        }
        this.init();
      });
  }

}
