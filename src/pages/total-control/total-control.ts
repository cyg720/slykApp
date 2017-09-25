import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {TotalControlProvider} from "./provider/totalControlProvider";
import {TotalControlVo} from "./vo/totalControl";
import {BaseCtrl} from "../../framwork/controller/ctrl.impl";
import {Storage} from "@ionic/storage";
import {Utils} from "../../framwork/provider/utils";
import {MENUS} from "../../framwork/const/urlPermission";

/**
 * 总额控制
 */
@IonicPage()
@Component({
  selector: 'page-total-control',
  templateUrl: 'total-control.html',
})
export class TotalControlPage extends BaseCtrl{
  icon:string;
  totalControlList:TotalControlVo[];
  private display:string;
  constructor(public navCtrl: NavController,
              public storage: Storage,
              public totalControl:TotalControlProvider) {
    super(navCtrl,storage);
    this.display = `none`;
    this.icon = MENUS.QuxBUDMgPxzrl45rZPG_ZEKZ.icon;
    Utils.showLoading().setTimeout(()=>{ this.init(this) });
  }

  init(_){
    _.totalControl.getTotalControlList().subscribe((data:TotalControlVo[])=>{
      _.totalControlList = data;
      _.display = `block`;
      Utils.hideLoading();
    });
  };
  //获取数据
  toTotalControlDetails(tc:TotalControlVo){
    super.push('TotalControlDetailsPage',tc).then();
  }

}
