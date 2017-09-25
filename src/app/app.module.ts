import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MyAgeDiretiveDirective } from '../framwork/directives/my-age-diretive';
import {Toast} from "@ionic-native/toast";
import {Utils} from "../framwork/provider/utils";
import {AppMinimize} from "@ionic-native/app-minimize";
import {CallNumber} from "@ionic-native/call-number";
import {IonicStorageModule} from "@ionic/storage";
import {HospitalAnalysisProvider} from "../pages/hospital-analysis/provider/hospitalAnalysisProvider";
import {TotalControlProvider} from "../pages/total-control/provider/totalControlProvider";
import {FundSimulationProvider} from "../pages/fund-simulation/provider/fundSimulationProvider";
import {FundAnalysisProvider} from "../pages/fund-analysis/provider/FundAnalysisProvider";
import {ngHttpService} from "../framwork/provider/ngHttp/ngHttpService";
import {Http, HttpModule, RequestOptions, XHRBackend} from "@angular/http";
import {HttpInterceptHandle} from "../framwork/provider/ngHttp/HttpInterceptHandle";
import {HttpIntercept} from "../framwork/provider/ngHttp/HttpIntercept";
import {BaseProvider} from "../framwork/provider/BaseProvider";
import {LoginProvider} from "../pages/home/provider/loginProvider";
import {AppCommonConst} from "../framwork/provider/common";
import {AppVersion} from "@ionic-native/app-version";
import {PersonalCenterProvider} from "../pages/personal-center/provider/personalCenterProvider";
import {HTTP} from "@ionic-native/http";
import { File } from '@ionic-native/file';
import {FileUtils} from "../framwork/provider/fileUtls";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {FileOpener} from "@ionic-native/file-opener";

export function httpFactory(backend: XHRBackend,
                            defaultOptions: RequestOptions,
                            httpInterceptHandle: HttpInterceptHandle) {
  return new HttpIntercept(backend, defaultOptions, httpInterceptHandle);
}

@NgModule({
  declarations: [
    MyApp,
    MyAgeDiretiveDirective
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
      preloadModules: true, //预加载
      iconMode: 'ios',//图标样式 统一使用 ios
      swipeBackEnabled:true,//是否启用本地iOS滑盖即可返回功能。
      mode:'ios',
      backButtonText:'返回',
      platforms: {
        android: {
          activator: 'highlight', //点击去掉特效
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpInterceptHandle,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions, HttpInterceptHandle]},
    Toast,
    Utils,
    AppMinimize,
    CallNumber,
    FundAnalysisProvider,
    HospitalAnalysisProvider,
    TotalControlProvider,
    FundSimulationProvider,
    ngHttpService,
    BaseProvider,
    LoginProvider,
    AppVersion,
    AppCommonConst,
    PersonalCenterProvider,
    HTTP,
    File,
    FileUtils,
    FileOpener,
    LocalNotifications
  ]
})
export class AppModule {}
