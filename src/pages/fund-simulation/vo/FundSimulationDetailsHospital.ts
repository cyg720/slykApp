import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射
 */
const mapping:any = {
  name:"name",//医院等级显示的名称
  sjz:"sjz",//实际值
  fzz:"fzz",//仿真值
}

/**
 * 基金仿真详情页面的 年龄段仿真分析
 */
export class FundSimulationDetailsHospitalVo implements Convert<FundSimulationDetailsHospitalVo>{

  public  name:string[];
  public  sjz:number[];
  public  fzz:number[];

  constructor(){
    this.name = [];
    this.sjz = [];
    this.fzz = [];
  }


  convertList(d):FundSimulationDetailsHospitalVo[]{
    return [];
  };

  convertOne(d):FundSimulationDetailsHospitalVo{
    return this.convert(d);
  }

  convert(d):FundSimulationDetailsHospitalVo{
    let v = new FundSimulationDetailsHospitalVo();
    if(Utils.isNull(d)){return v;};
    v.name = Utils.fmtEmpty(d[mapping['name']],EMPTY.D);
    v.sjz = Utils.fmtEmpty(d[mapping['sjz']],EMPTY.D);
    v.fzz = Utils.fmtEmpty(d[mapping['fzz']],EMPTY.D);
    return v;
  }


}
