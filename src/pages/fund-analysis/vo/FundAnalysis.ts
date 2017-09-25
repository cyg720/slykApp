import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {FAVORITETYPE} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  name:"tittle",
  id:"id",
  state:"status",
  stateStr:"statusDesc",
  date:"timeDesc",
  county:"districtName",
}

/**
 * 基金分析 list 的对象
 */
export class FundAnalysisVo implements Convert<FundAnalysisVo>{

  public  id:string;//id
  public  name:string;//名称
  public  state:boolean;//状态
  public  stateStr:string;//状态描述
  public  date:string;//生成时间
  public  county:string;//区县
  public favoriteType:string;//收藏夹类型

  constructor(){
    this.id = "";//id
    this.name = "";//名称
    this.state = false;//状态
    this.stateStr = "";//状态描述
    this.date = "";//生成时间
    this.county = "";//区县
    this.favoriteType = FAVORITETYPE.A;
  }

  convertList(d):FundAnalysisVo[]{
    let result:FundAnalysisVo[] = [];
    d = d || [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):FundAnalysisVo{
    return this.convert(d);
  }

  convert(d):FundAnalysisVo{
    let v = new FundAnalysisVo();
    if(Utils.isNull(d)){return v;};
    v.name = Utils.fmtEmpty(d[mapping['name']]);
    v.id = Utils.fmtEmpty(d[mapping['id']]);
    v.state = Utils.fmtEmpty(d[mapping['state']]) == 1 ? true : false;
    v.stateStr = Utils.fmtEmpty(d[mapping['stateStr']]);
    v.date = Utils.fmtEmpty(d[mapping['date']]);
    v.county = Utils.fmtEmpty(d[mapping['county']]);
    v.favoriteType = FAVORITETYPE.A;
    return v;
  }


}
