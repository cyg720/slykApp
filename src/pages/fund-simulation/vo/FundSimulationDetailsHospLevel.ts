import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射
 */
const mapping:any = {
  hospLevelName:"hospLevelName",//医院等级显示的名称
  sjz:"sjz",//实际值
  fzz:"fzz",//仿真值
  lbh:"lbh"//量变化
}

/**
 * 基金仿真详情页面的 医疗等级仿真分析
 */
export class FundSimulationDetailsHospLevelVo implements Convert<FundSimulationDetailsHospLevelVo>{

  public  hospLevelName:string[];
  public  sjz:number[];
  public  fzz:number[];
  public  lbh:number[];

  constructor(){
    this.hospLevelName = [];
    this.sjz = [];
    this.fzz = [];
    this.lbh = [];
  }

  convertList(d):FundSimulationDetailsHospLevelVo[]{
    return [];
  };

  convertOne(d):FundSimulationDetailsHospLevelVo{
    return this.convert(d);
  }

  convert(d):FundSimulationDetailsHospLevelVo{
    let v = new FundSimulationDetailsHospLevelVo();
    if(Utils.isNull(d)){return v;};
    v.hospLevelName = Utils.fmtEmpty(d[mapping['hospLevelName']],EMPTY.D);
    v.sjz = Utils.fmtEmpty(d[mapping['sjz']],EMPTY.D);
    v.fzz = Utils.fmtEmpty(d[mapping['fzz']],EMPTY.D);
    v.lbh = Utils.fmtEmpty(d[mapping['lbh']],EMPTY.D);
    return v;
  }


}
