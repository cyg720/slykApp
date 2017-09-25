import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  id:"id",
  //----------------------------------------
  add_del:"add_del",//add or  delete
  type:"type",//甲类 or 乙类
  ypmc:"ypmc",//药品名称
  ypbm:"ypbm"//药品编码
}

/**
 * 基金仿真 参数的 规则系数
 */
export class DrugVo implements Convert<DrugVo>{

  public id:string;
    //----------------------------------------
  public add_del:string;//add or  delete
  public type:string;//甲类 or 乙类
  public ypmc:string;//药品名称
  public ypbm:string;//药品编码

  constructor(){
    this.id = "";
    this.add_del = "";
    this.type = "";
    this.ypmc = "";
    this.ypbm = "";
  }

  convertList(d):DrugVo[]{
    let result:DrugVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):DrugVo{
    return this.convert(d);
  }

  convert(d):DrugVo{
    let v = new DrugVo();
    if(Utils.isNull(d)){return v;};
    v.id =  Utils.fmtEmpty(d[mapping['id']]);
    v.add_del =  Utils.fmtEmpty(d[mapping['add_del']]);
    v.type =  Utils.fmtEmpty(d[mapping['type']]);
    v.ypmc =  Utils.fmtEmpty(d[mapping['ypmc']]);
    v.ypbm =  Utils.fmtEmpty(d[mapping['ypbm']]);
    return v;
  }

}
