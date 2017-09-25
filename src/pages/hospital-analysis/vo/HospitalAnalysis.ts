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
  date:"timeDesc"
}

/**
 * 医院分析 list 的对象
 */
export class HospitalAnalysisVo implements Convert<HospitalAnalysisVo>{

  public  id:string;//id
  public  name:string;//名称
  public  state:boolean;//状态
  public  stateStr:string;//状态描述
  public  date:string;//生成时间
  public favoriteType:string;//收藏夹类型

  constructor(){
    this.id = "";
    this.name = "";
    this.state = false;
    this.stateStr = "";
    this.date = "";
    this.favoriteType = FAVORITETYPE.B;
  }

  convertList(d):HospitalAnalysisVo[]{
    let result:HospitalAnalysisVo[] = [];
    if(Utils.isNull(d)){return result;};
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):HospitalAnalysisVo{
    return this.convert(d);
  }

  convert(d):HospitalAnalysisVo{
    let v = new HospitalAnalysisVo();
    if(Utils.isNull(d)){return v;};
    v.name = Utils.fmtEmpty(d[mapping['name']]);
    v.id = Utils.fmtEmpty(d[mapping['id']]);
    v.state = Utils.fmtEmpty(d[mapping['state']]) == 1 ? true : false;
    v.stateStr = Utils.fmtEmpty(d[mapping['stateStr']]);
    v.date = Utils.fmtEmpty(d[mapping['date']]);
    v.favoriteType = FAVORITETYPE.B;
    return v;
  }


}
