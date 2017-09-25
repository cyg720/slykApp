import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射
 */
const mapping:any = {
  monthName:"payName",//年龄段显示的名称
  bnz:"bnz",//本年值
  snz:"snz"//上年值
}

/**
 * 基金分析详情页面的 统筹支付费用
 */
export class HospitalAnalysisDetailsPayVo implements Convert<HospitalAnalysisDetailsPayVo>{

  public  monthName:string[];//年龄段展示的名称
  public  bnz:number[];//本期值
  public  snz:number[];//上年值

  constructor(){
    this.monthName = [];
    this.bnz = [];
    this.snz = [];
  }

  convertList(d):HospitalAnalysisDetailsPayVo[]{
    return [];
  };

  convertOne(d):HospitalAnalysisDetailsPayVo{
    return this.convert(d);
  }

  convert(d):HospitalAnalysisDetailsPayVo{
    let v = new HospitalAnalysisDetailsPayVo();
    if(Utils.isNull(d)){return v;};
    v.monthName = Utils.fmtEmpty(d[mapping['monthName']],EMPTY.D);
    v.bnz = Utils.fmtEmpty(d[mapping['bnz']],EMPTY.D);
    v.snz = Utils.fmtEmpty(d[mapping['snz']],EMPTY.D);
    return v;
  }


}
