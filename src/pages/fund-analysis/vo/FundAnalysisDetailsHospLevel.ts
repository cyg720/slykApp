import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";


/**
 * mapping 映射json数据
 */
const mapping:any = {
  name:"name",//名称
  value:"value",//值
  tbzz:"tbzz"//同比增长
}

/**
 * 基金分析详情页面的参保机构分析
 */
export class FundAnalysisDetailsHospLevelVo implements Convert<FundAnalysisDetailsHospLevelVo>{

  public  name:string; //名称
  public  value:number; //值
  public  tbzz:number; //同比增长

  constructor(){
    this.name = "";
    this.value = 0;
    this.tbzz = 0;
  }

  convertList(d):FundAnalysisDetailsHospLevelVo[]{
    let result:FundAnalysisDetailsHospLevelVo[] = [];
    d = d|| [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  };

  convertOne(d):FundAnalysisDetailsHospLevelVo{
    return this.convert(d);
  }

  convert(d):FundAnalysisDetailsHospLevelVo{
    let v = new FundAnalysisDetailsHospLevelVo();
    if(Utils.isNull(d)){return v;};
    v.name = Utils.fmtEmpty(d[mapping['name']]);
    v.value = Utils.fmtEmpty(d[mapping['value']],EMPTY.B);
    v.tbzz = Utils.fmtEmpty(d[mapping['tbzz']],EMPTY.B);
    return v;
  }


}
