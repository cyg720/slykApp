import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import { FAVORITETYPE} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  name:"fzName",
  id:"id",
  newDate:"fzTimeDesc",//新增时间
  endDate:"fzEndTimeDesc",//结束时间
  startDate:"fzStartTimeDesc",//开始时间
}

/**
 * 基金仿真 list 的对象
 */
export class FundSimulationVo implements Convert<FundSimulationVo>{

  public  id:string;//id
  public  name:string;//名称
  public  newDate:string;//新增时间
  public  endDate:string;//结束时间
  public  startDate:string;//开始时间
  public favoriteType:string;//收藏夹类型

  constructor(){
    this.id = "";
    this.name = "";
    this.newDate = "";
    this.endDate = "";
    this.startDate = "";
    this.favoriteType = FAVORITETYPE.D;
  }

  convertList(d):FundSimulationVo[]{
    let result:FundSimulationVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):FundSimulationVo{
    return this.convert(d);
  }

  convert(d):FundSimulationVo{
    let v = new FundSimulationVo();
    if(Utils.isNull(d)){return v;};
    v.name = Utils.fmtEmpty(d[mapping['name']]);
    v.id = Utils.fmtEmpty(d[mapping['id']]);
    v.newDate = Utils.fmtEmpty(d[mapping['newDate']]);
    v.endDate = Utils.fmtEmpty(d[mapping['endDate']]);
    v.startDate = Utils.fmtEmpty(d[mapping['startDate']]);
    v.favoriteType = FAVORITETYPE.D;
    return v;
  }


}
