import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {Utils} from "../../framwork/provider/utils";
import {CallNumber} from "@ionic-native/call-number";
import {LoginProvider} from "../home/provider/loginProvider";
import {PersonalCenterProvider} from "./provider/personalCenterProvider";
import {AppCommonConst} from "../../framwork/provider/common";

@IonicPage()
@Component({
  selector: 'page-personal-center',
  templateUrl: 'personal-center.html',
})
export class PersonalCenterPage {

  private dian:string = ``;
  private version:string = ``;
  constructor(private navCtrl: NavController,
              private utils:Utils,
              private app:AppCommonConst,
              private callNumber: CallNumber,
              private loginProvider:LoginProvider,
              private alertCtrl: AlertController,
              private provider:PersonalCenterProvider) {
    this.check();
    this.getVersion();
  }

  //退出当前账号
  logout(){
    let confirm = this.alertCtrl.create({
      message: '确定退出该账号?',
      buttons: [
        {
          text: '取消'
        },
        {
          text: '确定',
          handler: () => {
            this.loginProvider.logoutUser(this.navCtrl);
          }
        }
      ]
    });
    confirm.present().then();
  }
  //检查更新App
  onUpdateApp(){
    let p = this.utils.presentLoading('检查更新中',1000);
      p.present().then(()=>{
        this.provider.checkAppVersion().subscribe((b:boolean)=>{
          if(b){
            this.utils.showMsg('已是最新版本');
          }else{
            p.dismissAll();
            this.utils.alertCtrl("确定更新App?,约"+this.app.appInfo.size+"M",() => {
              this.provider.downloadApk();
            }).present().catch();
          }
        });
      })
  }
  //联系我们
  onCall(){
    this.utils.alertCtrl("确定拨打电话?",() => {
      this.callNumber.callNumber('028-8888888', false).then();
    }).present().catch();

  }
  //检查app是否有更新
  check(){
    if(this.utils.isAndroid()){
      this.provider.checkAppVersion().subscribe(d=>{
        if(!d){
          this.dian = `icon-xiaoshudian`;
        }else{
          this.dian = ``;
        }
      });
    }
  }
  //获取当前版本号
  getVersion(){
    if(this.utils.isAndroid()){
      this.provider.getVersion().then(d=>{
        this.version = d;
      });
    }
  }
}
