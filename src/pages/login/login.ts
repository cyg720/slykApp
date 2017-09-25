import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {LoginProvider} from "../home/provider/loginProvider";
import {UserVo} from "../../framwork/entity/User";

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private user:UserVo;
  private isDisabled:boolean;
  private str:string;

  constructor(private navCtrl: NavController,
              private loginProvider:LoginProvider ) {
    this.user = new UserVo();
    this.user.userName = `admin`;
    this.user.password = `111111`;
    this.isDisabled = false;
    this.str = `登陆`;
  }
  /**
   * 登陆请求
   */
  public longin(){
    this.isDisabled = true;
    this.str = `登陆中`;
    this.loginProvider.LoginValiUser(this.user).subscribe((b:boolean)=>{
      this.isDisabled = false;
      this.str = `登陆`;
      if(b){
        this.navCtrl.setRoot("HomePage").catch();
      }
    });
  }
}
