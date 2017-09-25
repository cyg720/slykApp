import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射
 */
const mapping:any = {
  monthName:"payName",//月份显示的名称
  bnz:"bnz",//本年值
  snz:"snz"//上年值
}

/**
 * 基金分析详情页面的 统筹支付费用
 */
export class FundAnalysisDetailsPayVo implements Convert<FundAnalysisDetailsPayVo>{

  public  monthName:string[];//月份展示的名称
  public  bnz:number[];//本期值
  public  snz:number[];//上年值

  constructor(){
    this.monthName = [];
    this.bnz = [];
    this.snz = [];
  }

  convertList(d):FundAnalysisDetailsPayVo[]{
    return [];
  };

  convertOne(d):FundAnalysisDetailsPayVo{
    return this.convert(d);
  }

  convert(d):FundAnalysisDetailsPayVo{
    let v = new FundAnalysisDetailsPayVo();
    if(Utils.isNull(d)){return v;};
    v.monthName = Utils.fmtEmpty(d[mapping['monthName']],EMPTY.D);
    v.bnz = Utils.fmtEmpty(d[mapping['bnz']],EMPTY.D);
    v.snz = Utils.fmtEmpty(d[mapping['snz']],EMPTY.D);
    return v;
  }


}
