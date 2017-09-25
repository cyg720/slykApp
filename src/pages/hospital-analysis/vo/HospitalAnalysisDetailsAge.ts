import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射
 */
const mapping:any = {
  ageName:"ageName",//年龄段显示的名称
  bnz:"bnz",//本年值
  snz:"snz"//上年值
}

/**
 * 医院分析详情页面的 年龄段分析
 */
export class HospitalAnalysisDetailsAgeVo implements Convert<HospitalAnalysisDetailsAgeVo>{

  public  ageName:string[];//年龄段展示的名称
  public  bnz:number[];//本期值
  public  snz:number[];//上年值

  constructor(){
    this.ageName = [];
    this.bnz = [];
    this.snz = [];
  }

  convertList(d):HospitalAnalysisDetailsAgeVo[]{
    return [];
  };

  convertOne(d):HospitalAnalysisDetailsAgeVo{
    return this.convert(d);
  }

  convert(d):HospitalAnalysisDetailsAgeVo{
    let v = new HospitalAnalysisDetailsAgeVo();
    if(Utils.isNull(d)){return v;};
    v.ageName = Utils.fmtEmpty(d[mapping['ageName']],EMPTY.D);
    v.bnz = Utils.fmtEmpty(d[mapping['bnz']],EMPTY.D);
    v.snz = Utils.fmtEmpty(d[mapping['snz']],EMPTY.D);
    return v;
  }


}
