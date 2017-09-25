import {Convert} from "../../../framwork/convert/convert.impl";
import {FWWTZ, FWYTZ} from "./simConst";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  id:"id",
  //----------------------------------------
  add_del:"add_del",//add or  delete update
  type:"type",//甲or乙or 丙 丁
  fwtz:"fwtz",//是否更改范围
  tsjbmc:"tsjbmc",//特殊疾病名称
  tsjbbm:"tsjbbm"//特殊疾病编码
}

/**
 * 基金仿真 参数的 疾病
 */
export class DiseaseVo implements Convert<DiseaseVo>{

  public id:string;
    //----------------------------------------
  public add_del:string;//add or  delete update
  public type:string;//甲or乙or 丙 丁
  public tsjbmc:string;//特殊疾病名称
  public tsjbbm:string;//特殊疾病编码
  public fwtz:string;//是否更改范围

  constructor(){
    this.id = "";
    this.add_del = "";
    this.type = "";
    this.tsjbmc = "";
    this.tsjbbm = "";
    this.fwtz = "";
  }

  convertList(d):DiseaseVo[]{
    let result:DiseaseVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):DiseaseVo{
    return this.convert(d);
  }

  convert(d):DiseaseVo{
    let v = new DiseaseVo();
    if(Utils.isNull(d)){return v;};
    v.id = Utils.fmtEmpty(d[mapping['id']]);
    v.add_del = Utils.fmtEmpty(d[mapping['add_del']]);
    v.type = Utils.fmtEmpty(d[mapping['type']]);
    v.tsjbmc = Utils.fmtEmpty(d[mapping['tsjbmc']]);
    v.tsjbbm = Utils.fmtEmpty(d[mapping['tsjbbm']]);
    v.fwtz = Utils.fmtEmpty(d[mapping['fwtz']],EMPTY.C) == true ? FWYTZ:FWWTZ;
    return v;
  }

}
