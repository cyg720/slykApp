import {Convert} from "../convert/convert.impl";
import {Utils} from "../provider/utils";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  packageName:"packageName",
  name:"apkName",
  version:"apkVersion",
  desc:"apkDesc",
  apkUrl:"apkUrl",
  size:"apkSize",
  date:"releaseDate"  //正式上线时间
};

/**
 * app 应用 信息
 */
export class AppInfoVo implements Convert<AppInfoVo>{

  public  packageName:string;//
  public  name:string;//
  public  version:string;//
  public  desc:string;//
  public  apkUrl:string;//
  public  size:number;
  public  date:string;
  constructor(){
    this.packageName = "";
    this.name = "";
    this.version = "";
    this.desc = "";
    this.apkUrl = "";
    this.date = "";
    this.size = 0;
  }

  convertList(d):AppInfoVo[]{
    let result:AppInfoVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):AppInfoVo{
    return this.convert(d);
  }

  convert(d):AppInfoVo{
    let v = new AppInfoVo();
    d = d || {};
    v.packageName = Utils.fmtEmpty(d[mapping['packageName']]);
    v.name = Utils.fmtEmpty(d[mapping['name']]);
    v.version = Utils.fmtEmpty(d[mapping['version']]);
    v.desc = Utils.fmtEmpty(d[mapping['desc']]);
    v.apkUrl = Utils.fmtEmpty(d[mapping['apkUrl']]);
    v.size = Utils.fmtEmpty(d[mapping['size']]);
    v.date = Utils.fmtEmpty(d[mapping['date']]);
    return v;
  }


}
