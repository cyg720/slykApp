import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";

/**
 * mapping 映射
 */
const mapping:any = {
  name:"name",//显示的名称
  bnz:"bnz",//本年值
  snz:"snz",//上年值
  tjjz:"tjjz"//同级均值
}

/**
 * 医院分析详情页面的 指标分析 VO
 */
export class HospitalAnalysisDetailsIndexVo implements Convert<HospitalAnalysisDetailsIndexVo>{

  public  name:string;//年龄段展示的名称
  public  bnz:number;//本期值
  public  snz:number;//上年值
  public  tjjz:number;//同级均值

  constructor(){
    this.name= "";
    this.bnz= 0;
    this.snz= 0;
    this.tjjz= 0;
  }

  convertList(d):HospitalAnalysisDetailsIndexVo[]{
    let result:HospitalAnalysisDetailsIndexVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  };

  convertOne(d):HospitalAnalysisDetailsIndexVo{
    return this.convert(d);
  }

  convert(d):HospitalAnalysisDetailsIndexVo{
    let v = new HospitalAnalysisDetailsIndexVo();
    if(Utils.isNull(d)){return v;};
    v.name = Utils.fmtEmpty(d[mapping['name']]);
    v.bnz = Utils.fmtEmpty(d[mapping['bnz']]);
    v.snz = Utils.fmtEmpty(d[mapping['snz']]);
    v.tjjz = Utils.fmtEmpty(d[mapping['tjjz']]);
    return v;
  }


}
