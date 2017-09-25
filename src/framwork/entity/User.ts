import {Convert} from "../convert/convert.impl";
import {Utils} from "../provider/utils";
import {EMPTY} from "../const/appConstsData";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  id:"id",
  userName:"userName",
  password:"password",
  token:"token",
  loginDate:"loginDate",
  state:"state",
  responseMsg:"responseMsg"
}

/**
 * 用户 对象
 */
export class UserVo implements Convert<UserVo>{

  public  id:string;// 用户ID
  public  userName:string;// 用户名
  public  password:string;// 密码
  public  token:string;// token
  public  loginDate:string;// 登陆时间
  public  state:boolean;// 登陆成功失败状态
  public  responseMsg:string;// 登陆成功失败 信息

  constructor(){
    this.id = "";
    this.userName = "";
    this.password = "";
    this.token = "";
    this.loginDate = "";
    this.state = false;
    this.responseMsg = "";
  }

  convertList(d):UserVo[]{
    let result:UserVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):UserVo{
    return this.convert(d);
  }

  convert(d):UserVo{
    d = d || {};
    let v = new UserVo();
    v.id = Utils.fmtEmpty(d[mapping['id']]);
    v.userName = Utils.fmtEmpty(d[mapping['userName']]);
    v.password = Utils.fmtEmpty(d[mapping['password']]);
    v.token = Utils.fmtEmpty(d[mapping['token']]);
    v.loginDate = Utils.fmtEmpty(d[mapping['loginDate']]);
    v.state = Utils.fmtEmpty(d[mapping['state']],EMPTY.C);
    v.responseMsg = Utils.fmtEmpty(d[mapping['responseMsg']]);
    return v;
  }


}
