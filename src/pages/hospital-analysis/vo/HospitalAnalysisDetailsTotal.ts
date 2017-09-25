import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射
 */
const mapping:any = {
  monthName:"totalName",//年龄段显示的名称
  bnz:"bnz",//本年值
  snz:"snz"//上年值
}

/**
 * 医院分析详情页面的 医疗总费用 详情
 */
export class HospitalAnalysisDetailsTotalVo implements Convert<HospitalAnalysisDetailsTotalVo>{

  public  monthName:string[];//年龄段展示的名称
  public  bnz:number[];//本期值
  public  snz:number[];//上年值

  constructor(){
    this.monthName = [];
    this.bnz = [];
    this.snz = [];
  }

  convertList(d):HospitalAnalysisDetailsTotalVo[]{
    return [];
  };

  convertOne(d):HospitalAnalysisDetailsTotalVo{
    return this.convert(d);
  }

  convert(d):HospitalAnalysisDetailsTotalVo{
    let v = new HospitalAnalysisDetailsTotalVo();
    if(Utils.isNull(d)){return v;};
    v.monthName = Utils.fmtEmpty(d[mapping['monthName']]);
    v.bnz = Utils.fmtEmpty(d[mapping['bnz']],EMPTY.B);
    v.snz = Utils.fmtEmpty(d[mapping['snz']],EMPTY.B);
    return v;
  }


}
