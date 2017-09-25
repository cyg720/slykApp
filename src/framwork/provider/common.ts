
import {Injectable} from "@angular/core";
import {UserVo} from "../entity/User";
import {AppInfoVo} from "../entity/AppInfo";

/**
 * 每次登陆APP上下文中的 共享值
 */
@Injectable()
export class AppCommonConst{
  private _user:UserVo;

  private _appInfo:AppInfoVo;

  constructor(){
    this.user = new UserVo();
    this.appInfo = new AppInfoVo();
  }

  get appInfo(): AppInfoVo {
    return this._appInfo;
  }

  set appInfo(value: AppInfoVo) {
    this._appInfo = value;
  }

  get user(): UserVo {
    return this._user;
  }

  set user(value: UserVo) {
    this._user = value;
  }
}
