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
};

/**
 * 基金分析详情页面的 费用类别 分析
 */
export class FundAnalysisDetailsCostTypeVo implements Convert<FundAnalysisDetailsCostTypeVo>{

  public  name:string;
  public  value:number;
  public  tbzz:number;

  constructor(){
    this.name = "";
    this.value = 0;
    this.tbzz = 0;
  }

  convertList(d):FundAnalysisDetailsCostTypeVo[]{
    let result:FundAnalysisDetailsCostTypeVo[] = [];
    d = d|| [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  };

  convertOne(d):FundAnalysisDetailsCostTypeVo{
    return this.convert(d);
  }

  convert(d):FundAnalysisDetailsCostTypeVo{
    let v = new FundAnalysisDetailsCostTypeVo();
    if(Utils.isNull(d)){return v;};
    v.name = Utils.fmtEmpty(d[mapping['name']]);
    v.value = Utils.fmtEmpty(d[mapping['value']],EMPTY.B);
    v.tbzz = Utils.fmtEmpty(d[mapping['tbzz']],EMPTY.B);
    return v;
  }


}
