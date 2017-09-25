import {Convert} from "../../../framwork/convert/convert.impl";
import {XJWTZ, XJYTZ} from "./simConst";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  id:"id",
  //----------------------------------------
  add_del:"add_del",//add or  delete
  type:"type",//甲类 or 乙类
  xjtz:"xjtz",//是否更改限价
  xmmc:"xmmc",//项目名称
  xmbm:"xmbm"//项目编码
}

/**
 * 基金仿真 参数的 项目系数
 */
export class ProjectVo implements Convert<ProjectVo>{

  public id:string;
  public add_del:string;//add or  delete
  public type:string;//甲类 or 乙类
  public xmmc:string;//项目名称
  public xmbm:string;//项目编码
  public xjtz:string;//是否更改限价

  constructor(){
    this.id="";
    this.add_del="";//add or  delete
    this.type="";//甲类 or 乙类
    this.xmmc="";//项目名称
    this.xmbm="";//项目编码
    this.xjtz="";//是否更改限价
  }

  convertList(d):ProjectVo[]{
    let result:ProjectVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):ProjectVo{
    return this.convert(d);
  }

  convert(d):ProjectVo{
    let v = new ProjectVo();
    if(Utils.isNull(d)){return v;};
    v.id = Utils.fmtEmpty(d[mapping['id']]);
    v.add_del = Utils.fmtEmpty(d[mapping['add_del']]);
    v.type = Utils.fmtEmpty(d[mapping['type']]);
    v.xmmc = Utils.fmtEmpty(d[mapping['xmmc']]);
    v.xmbm = Utils.fmtEmpty(d[mapping['xmbm']]);
    v.xjtz = Utils.fmtEmpty(d[mapping['xjtz']],EMPTY.C) == true ? XJYTZ:XJWTZ;
    return v;
  }

}
