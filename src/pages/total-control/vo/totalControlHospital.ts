import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  id:"id",//医院ID
  name:"name", //医院名称
  bnzb:"bnzb", // 本年指标
  snjy:"snjy", //上年结余
  bnjy:"bnjy",//本年结余
  nztz:"nztz",//年中调整
  bnyjs:"bnyjs",//本年已结算
  bnkhdf:"bnkhdf",//本年考核得分
  yljjs:"yljjs",//月累计结算
  nzqs:"nzqs",//年中清算
}

/**
 * 总额控制  医院 list 的对象
 */
export class TotalControlHospitalVo implements Convert<TotalControlHospitalVo>{

  public  id:string;//
  public  name:string;//
  public  bnzb:number;//
  public  snjy:number;//
  public  bnjy:number;//
  public  nztz:number;//
  public  bnyjs:number;//
  public  bnkhdf:number;//
  public  yljjs:number;//
  public  nzqs:number;//

  constructor(){
  this.id="";//
  this.name="";//
  this.bnzb=0;//
  this.snjy=0;//
  this.bnjy=0;//
  this.nztz=0;//
  this.bnyjs=0;//
  this.bnkhdf=0;//
  this.yljjs=0;//
  this.nzqs=0;//
  }

  convertList(d):TotalControlHospitalVo[]{
    let result:TotalControlHospitalVo[] = [];
    if(Utils.isNull(d)){return result;};
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):TotalControlHospitalVo{
    return this.convert(d);
  }

  convert(d):TotalControlHospitalVo{
    let v = new TotalControlHospitalVo();
    if(Utils.isNull(d)){return v;};
    v.id = Utils.fmtEmpty(d[mapping['id']]);
    v.name = Utils.fmtEmpty(d[mapping['name']]);
    v.bnzb = Utils.fmtEmpty(d[mapping['bnzb']],EMPTY.B);
    v.snjy = Utils.fmtEmpty(d[mapping['snjy']],EMPTY.B);
    v.bnjy = Utils.fmtEmpty(d[mapping['bnjy']],EMPTY.B);
    v.nztz = Utils.fmtEmpty(d[mapping['nztz']],EMPTY.B);
    v.bnyjs = Utils.fmtEmpty(d[mapping['bnyjs']],EMPTY.B);
    v.bnkhdf = Utils.fmtEmpty(d[mapping['bnkhdf']],EMPTY.B);
    v.yljjs = Utils.fmtEmpty(d[mapping['yljjs']],EMPTY.B);
    v.nzqs = Utils.fmtEmpty(d[mapping['nzqs']],EMPTY.B);
    return v;
  }


}
