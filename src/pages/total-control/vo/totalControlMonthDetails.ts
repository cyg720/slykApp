import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  id:"id",
  month:"month", //月份
  sbje:"sbje", //申报金额
  zkk:"zkk", //暂扣款
  jsje:"jsje" //结算金额
}
const monthsMapping:any ={
  "0":"一月","1":"二月","2":"三月","3":"四月","4":"五月","5":"六月",
  "6":"七月","7":"八月","8":"九月","9":"十月","10":"十一月","11":"十二月"
};
/**
 * 总额控制  详情 月结算 详情
 */
export class TotalControlMonthDetailsVo implements Convert<TotalControlMonthDetailsVo>{

  public  id:string;//id
  public  month:string;//
  public  sbje:string;//
  public  zkk:string;//
  public  jsje:string;//

  constructor(){
    this.id = "";
    this.month = "";
    this.sbje = "";
    this.zkk = "";
    this.jsje = "";
  }

  convertList(d):TotalControlMonthDetailsVo[]{
    let result:TotalControlMonthDetailsVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):TotalControlMonthDetailsVo{
    return this.convert(d);
  }

  convert(d):TotalControlMonthDetailsVo{
    let v = new TotalControlMonthDetailsVo();
    if(Utils.isNull(d)){return v;};
    v.id = Utils.fmtEmpty(d[mapping['id']]);
    v.month = monthsMapping[Utils.fmtEmpty(d[mapping['month']],EMPTY.A,"1")];
    v.sbje = Utils.fmtEmpty(d[mapping['sbje']]);
    v.zkk = Utils.fmtEmpty(d[mapping['zkk']]);
    v.jsje = Utils.fmtEmpty(d[mapping['jsje']]);
    return v;
  }


}
