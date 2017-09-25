import {Injectable} from "@angular/core";
import {AppVersion} from "@ionic-native/app-version";
import {Observable} from "rxjs/Observable";
import {AppCommonConst} from "../../../framwork/provider/common";
import {FileUtils} from "../../../framwork/provider/fileUtls";
import {BaseProvider} from "../../../framwork/provider/BaseProvider";
import {Utils} from "../../../framwork/provider/utils";
import {APKNAME} from "../../../framwork/const/appConstsData";
import {MENUS} from "../../../framwork/const/urlPermission";
import {FileOpener} from "@ionic-native/file-opener";

/**
 * 个人中心
 */
@Injectable()
export class PersonalCenterProvider{

  constructor(private appVersion: AppVersion,
              private app:AppCommonConst,
              private fileUtils:FileUtils,
              private utils:Utils,
              private fileOpener: FileOpener,
              private baseProvider:BaseProvider){

  }

  //获取当前版本号
  public getVersion():Promise<any>{
    return this.appVersion.getVersionNumber();
  }

  //检查是否有版本更新
  public checkAppVersion():Observable<boolean>{
    return Observable.create((observer)=>{
      this.getVersion().then(d=>{
        if(this.app.appInfo.version == d){
          observer.next(true);
        }else{
          observer.next(false);
        }
      })
    });
  }


  //下载APK文件
  public downloadApk(){
    let apkPath = this.fileUtils.dataDirectory+"/"+APKNAME;
    //let uuid:number = this.utils.createNotification("下载数联易康App中，约"+this.app.appInfo.size+"兆");
    let _ = this;
    _.utils.showMsg("后台下载中...");
    _.baseProvider.nativeDownloadFile(MENUS.COMMON_URL.dowdloadApk(),
      {path:_.app.appInfo.apkUrl},apkPath).subscribe((d)=>{
        if(d.isFile){
          _.fileUtils.checkFile(APKNAME).then(()=>{
            _.utils.showMsg("下载安装包完成",1000);
            _.fileOpener.open(apkPath,'application/vnd.android.package-archive').then().catch();
          }).catch(()=>{
            _.utils.showMsg("下载安装包失败")
          })
        }
      },()=>{
        _.utils.showMsg("下载安装包失败")
      });

    /*
     //this.utils.updataNotification("点击安装App",uuid);
    this.utils.clickNotification((d)=>{
        console.log(d,"点击安装App");
    })*/

  }

}
