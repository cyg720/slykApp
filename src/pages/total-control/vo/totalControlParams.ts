import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  id:"id",
  rszzb:"rszzb", //人数增长比
  jcfybhb:"jcfybhb", //均次费用变化比
  cfrybl:"cfrybl", //重复入院比例
  snkhdf:"snkhdf", //上年考核得分
  jsnjs1:"jsnjs1", //近三年结算
  jsnjs2:"jsnjs2", //近三年结算
  jsnjs3:"jsnjs3", //近三年结算
};

/**
 * 总额控制 详情参数 查看
 */
export class TotalControlParamsVo implements Convert<TotalControlParamsVo>{

  public id:string;//id
  public rszzb:string; //人数增长比
  public jcfybhb:string; //均次费用变化比
  public cfrybl:string; //重复入院比例
  public snkhdf:string; //上年考核得分
  public jsnjs1:ParamsVo; //近三年结算
  public jsnjs2:ParamsVo;//近三年结算
  public jsnjs3:ParamsVo; //近三年结算

  constructor(){
    this.id = "";
    this.rszzb = "";
    this.jcfybhb = "";
    this.cfrybl = "";
    this.snkhdf = "";
    this.jsnjs1 = new ParamsVo();
    this.jsnjs2 = new ParamsVo();
    this.jsnjs3 = new ParamsVo();
  }
  convertList(d):TotalControlParamsVo[]{
    let result:TotalControlParamsVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):TotalControlParamsVo{
    return this.convert(d);
  }

  convert(d):TotalControlParamsVo{
    let v = new TotalControlParamsVo();
    v.id = Utils.fmtEmpty(d[mapping['id']]);
    v.rszzb = Utils.fmtEmpty(d[mapping['rszzb']]);
    v.jcfybhb = Utils.fmtEmpty(d[mapping['jcfybhb']]);
    v.cfrybl = Utils.fmtEmpty(d[mapping['cfrybl']]);
    v.snkhdf = Utils.fmtEmpty(d[mapping['snkhdf']]);
    v.jsnjs1 = new ParamsVo().convertOne(d[mapping['jsnjs1']]);
    v.jsnjs2 = new ParamsVo().convertOne(d[mapping['jsnjs2']]);
    v.jsnjs3 = new ParamsVo().convertOne(d[mapping['jsnjs3']]);
    return v;
  }
}

const paramsMapping:any = {
  nian:"nian",//近三年
  value:"value", // value
};

export class ParamsVo implements Convert<ParamsVo>{

  public  nian:string;//
  public  value:string;//

  constructor(){
    this.nian = "";
    this.value = "";
  }

  convertList(d):ParamsVo[]{
    let result:ParamsVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):ParamsVo{
    return this.convert(d);
  }

  convert(d):ParamsVo{
    let v = new ParamsVo();
    if(Utils.isNull(d)){return v;};
    v.nian = Utils.fmtEmpty(d[paramsMapping['nian']]);
    v.value = Utils.fmtEmpty(d[paramsMapping['value']]);
    return v;
  }
}
