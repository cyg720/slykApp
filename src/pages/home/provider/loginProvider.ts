import {Injectable} from "@angular/core";
import {BaseProvider} from "../../../framwork/provider/BaseProvider";
import {USERKEY} from "../../../framwork/const/appConstsData";
import {Observable} from "rxjs/Observable";
import {UserVo} from "../../../framwork/entity/User";
import {NavController} from "ionic-angular";
import {Utils} from "../../../framwork/provider/utils";
import {ResponseObjectVo} from "../../../framwork/entity/ResponseObject";
import {AppCommonConst} from "../../../framwork/provider/common";
import {MenuVo} from "../vo/Menu";
import {MENUS} from "../../../framwork/const/urlPermission";
import {AppInfoVo} from "../../../framwork/entity/AppInfo";


@Injectable()
export class LoginProvider{

  constructor(private baseProvider:BaseProvider,
              private  utils: Utils,
              private appCommonConst:AppCommonConst){

  }

  //效验用户名和密码
  public LoginValiUser(user:UserVo):Observable<boolean>{
    return Observable.create((observable)=>{
      if(Utils.isNull(user.userName)){
        this.utils.showMsg("用户名不能为空");
        observable.next(false);
      }else if(Utils.isNull(user.password)){
        this.utils.showMsg("密码不能为空");
        observable.next(false);
      }else{
        this.baseProvider.loginPost(MENUS.COMMON_URL.login(),user)
          .subscribe((d:ResponseObjectVo)=>{
            if(d.success){
              let user:UserVo = new UserVo().convertOne(d.content);
              if(user.state&&user.token){
                this.utils.setValue(USERKEY,user).subscribe((d:boolean)=>{
                  if(Utils.isNotNull(d)){
                    this.appCommonConst.user = user;
                    observable.next(true);
                  }
                })
              }else{
                this.utils.showMsg(user.responseMsg);
                observable.next(false);
              }
            }else{
              this.utils.showMsg(d.message);
              observable.next(false);
            }
          },(e)=>{
            this.utils.showMsg(e);
            observable.next(false);
          });
      }
    });
  }

  //根据用户名 获取 菜单
  public getMenuList():Observable<MenuVo[]>{
    return Observable.create((observable)=>{
      this.baseProvider.post(MENUS.COMMON_URL.menu()).subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(new MenuVo().convertList(d.content));
        }else{
          this.utils.showMsg(d.message);
          observable.next([]);
        }
      },(e)=>{
        this.utils.showMsg(e);
        observable.next([]);
      });
    });
  }

  //退出App
  public logoutUser(navCtrl: NavController):void{
    this.baseProvider.post(MENUS.COMMON_URL.logout()).subscribe(()=>{
      this.out(navCtrl);
      },()=>{
      this.out(navCtrl);
    });
  }
  private out(navCtrl: NavController):void{
    this.utils.removeValue(USERKEY).subscribe(()=>{
      this.utils.showMsg("退出成功");
      navCtrl.setRoot("LoginPage").then();
    });
  }

  //初始化检查App版本
  public getAppInfo():Observable<any>{
    return Observable.create((observable)=>{
      this.baseProvider.get(MENUS.COMMON_URL.appInfo()).subscribe((r)=>{
        if(r.success){
          this.appCommonConst.appInfo = new AppInfoVo().convertOne(r.content);
          observable.next(true);
        }else{
          this.utils.showMsg("App检查更新失败");
          observable.next(false);
        }
      },()=>{
        this.utils.showMsg("App检查更新失败");
        observable.next(false);
      });
    });
  }
}
