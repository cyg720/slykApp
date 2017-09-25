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
  clmc:"clmc",//材料名称
  clbm:"clbm"//材料编码
}

/**
 * 基金仿真 参数的 材料
 */
export class MaterialVo implements Convert<MaterialVo>{

  public id:string;
  public add_del:string;//add or  delete
  public type:string;//甲类 or 乙类
  public clmc:string;//材料名称
  public clbm:string;//材料编码
  public xjtz:string;//是否更改限价

  constructor(){
    this.id="";
    this.add_del="";//add or  delete
    this.type="";//甲类 or 乙类
    this.clmc="";//材料名称
    this.clbm="";//材料编码
    this.xjtz="";//是否更改限价
  }

  convertList(d):MaterialVo[]{
    let result:MaterialVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):MaterialVo{
    return this.convert(d);
  }

  convert(d):MaterialVo{
    let v = new MaterialVo();
    if(Utils.isNull(d)){return v;};
    v.id = Utils.fmtEmpty(d[mapping['id']]);
    v.add_del = Utils.fmtEmpty(d[mapping['add_del']]);
    v.type = Utils.fmtEmpty(d[mapping['type']]);
    v.clmc = Utils.fmtEmpty(d[mapping['clmc']]);
    v.clbm = Utils.fmtEmpty(d[mapping['clbm']]);
    v.xjtz = Utils.fmtEmpty(d[mapping['xjtz']],EMPTY.C) == true ? XJYTZ:XJWTZ;
    return v;
  }

}
