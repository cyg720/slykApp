import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  id:"id",
  //----------------------------------------
  add_del:"add_del",//add or  delete update
  type:"type",//一级二级三级 社区服务
  cbjgmc:"cbjgmc",//参保机构名称
  cbjgbm:"cbjgbm"//参保机构编码
};

/**
 * 基金仿真 参数的 参保机构
 */
export class CbjgVo implements Convert<CbjgVo>{

  public id:string;
    //----------------------------------------
  public add_del:string;//add or  delete update
  public type:string;// 一级二级三级 社区服务
  public cbjgmc:string;//参保机构名称
  public cbjgbm:string;//参保机构编码

  constructor(){
    this.id = "";
    this.add_del = "";
    this.type = "";
    this.cbjgmc = "";
    this.cbjgbm = "";
  }

  convertList(d):CbjgVo[]{
    let result:CbjgVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):CbjgVo{
    return this.convert(d);
  }

  convert(d):CbjgVo{
    let v = new CbjgVo();
    if(Utils.isNull(d)){return v;};
    v.id = Utils.fmtEmpty(d[mapping['id']]);
    v.add_del = Utils.fmtEmpty(d[mapping['add_del']]);
    v.type = Utils.fmtEmpty(d[mapping['type']]);
    v.cbjgmc = Utils.fmtEmpty(d[mapping['cbjgmc']]);
    v.cbjgbm = Utils.fmtEmpty(d[mapping['cbjgbm']]);

    return v;
  }

}
