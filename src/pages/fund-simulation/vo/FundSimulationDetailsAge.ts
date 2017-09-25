import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射
 */
const mapping:any = {
  ageName:"ageName",//年龄段显示的名称
  sjz:"sjz",//实际值
  fzz:"fzz",//仿真值
}

/**
 * 基金仿真详情页面的 年龄段仿真分析
 */
export class FundSimulationDetailsAgeVo implements Convert<FundSimulationDetailsAgeVo>{

  public  ageName:string[];
  public  sjz:number[];
  public  fzz:number[];

  constructor(){
    this.ageName = [];
    this.sjz = [];
    this.fzz = [];
  }

  convertList(d):FundSimulationDetailsAgeVo[]{
    return [];
  };

  convertOne(d):FundSimulationDetailsAgeVo{
    return this.convert(d);
  }

  convert(d):FundSimulationDetailsAgeVo{
    let v = new FundSimulationDetailsAgeVo();
    if(Utils.isNull(d)){return v;};
    v.ageName = Utils.fmtEmpty(d[mapping['ageName']],EMPTY.D);
    v.sjz = Utils.fmtEmpty(d[mapping['sjz']],EMPTY.D);
    v.fzz = Utils.fmtEmpty(d[mapping['fzz']],EMPTY.D);
    return v;
  }


}
