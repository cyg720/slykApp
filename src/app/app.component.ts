import {Component, ViewChild} from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AppMinimize} from "@ionic-native/app-minimize";
import {Utils} from "../framwork/provider/utils";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {FAVORITE, USERKEY} from "../framwork/const/appConstsData";
import {UserVo} from "../framwork/entity/User";
import {AppCommonConst} from "../framwork/provider/common";
import {BaseProvider} from "../framwork/provider/BaseProvider";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  @ViewChild('myNav') nav: Nav;
  backButtonPressed:boolean = false;
  constructor(private platform: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private appMinimize: AppMinimize,
              private utils:Utils,
              private baseProvider:BaseProvider,
              private appCommonConst:AppCommonConst) {
    //启动完成隐藏启动屏幕
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initApp();
    });
  }

  //每次App启动时会执行一次用来初始化App的系统相关数据
  private initApp(){
    this.initIsHome();
    this.initFavorite();
    this.registerBackButtonAction();
  }

  //注册返回事件
  private registerBackButtonAction(){
    this.platform.registerBackButtonAction((): any => {
      let activeVC = this.nav.getActive();
      let page = activeVC.instance;
      if (page instanceof HomePage) {
        return this.showExit();//当前页面为HomePage，退出APP
      }else{
        if(page instanceof LoginPage){
          return this.showExit();
        }else{
          return this.nav.pop();
        }
      }
    }, 101);
  }

  //双击退出提示框
  private showExit(){
    if (this.backButtonPressed) { //当触发标志为true时，即2秒内双击返回按键则退出APP
      //this.platform.exitApp();
      this.appMinimize.minimize().then();
    } else {
      this.utils.showMsg('再按一次返回桌面');
      this.backButtonPressed = true;
      setTimeout(() => { //1.5秒内没有再次点击返回则将触发标志标记为false
        this.backButtonPressed = false;
      }, 1500)
    }
  }

  //初始化验证是否登陆过
  private initIsHome(){
    this.utils.getValue(USERKEY).subscribe((d:UserVo)=>{
      if(d && d.state&& d.token){
        this.rootPage = 'HomePage';
        this.appCommonConst.user = d;
      }else{
        this.rootPage = 'LoginPage';
      }
    });
  }

  //检查初始化 收藏夹
  private initFavorite(){
    this.utils.getValue(FAVORITE).subscribe(d=>{
      if(!d){
        this.utils.setValue(FAVORITE,[]).subscribe(()=>{});
      }
    });
  }

}

