import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Utils} from "../../framwork/provider/utils";
import {LoginProvider} from "./provider/loginProvider";
import {MenuVo} from "./vo/Menu";
import {BaseCtrl} from "../../framwork/controller/ctrl.impl";
import {Storage} from "@ionic/storage";
import {PersonalCenterProvider} from "../personal-center/provider/personalCenterProvider";

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BaseCtrl{

  private menus:MenuVo[];
  private display:string;
  private dian:string = ``;
  constructor(public navCtrl: NavController,
              private utils:Utils,
              public  storage: Storage,
              private loginProvider:LoginProvider,
              private personalCenterProvider:PersonalCenterProvider) {
    super(navCtrl,storage);
    this.display = `none`;
    Utils.showLoading().setTimeout(()=>{ this.init(); });
  }

  //初始化菜单
  private init(){
    this.loginProvider.getMenuList().subscribe((d:MenuVo[])=>{
      this.menus = d;
      this.display = `block`;
      this.check();
      Utils.hideLoading();
    });
  }

  //跳转菜单页面
  toPage(m:MenuVo){
    if(m.complete){
      super.push(m.url).then();
    }else{
      this.utils.showMsg("该功能正在开发中");
    }
  }

  //检查app是否有更新
  check(){
    this.loginProvider.getAppInfo().subscribe(()=>{
      if(this.utils.isAndroid()){
        this.personalCenterProvider.checkAppVersion().subscribe(d=>{
          if(!d){
            this.dian = `icon-xiaoshudian`;
          }else{
            this.dian = ``;
          }
        });
      }
    });
  }

}
