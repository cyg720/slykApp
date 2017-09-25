import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射
 */
const mapping:any = {
  name:"name",//显示的名称
  rc:"rc",//人次
  jcfy:"jcfy",//均次费用
  tjjz:"tjjz"//同级均值
}

/**
 * 医院分析详情页面的 top5 药品 VO  implements Convert<HospitalAnalysisDetailsDrugVo>
 */
export class HospitalAnalysisDetailsDrugVo implements Convert<HospitalAnalysisDetailsDrugVo>{

  public  name:string;
  public  rc:number;
  public  jcfy:number;
  public  tjjz:number;

  constructor(){
    this.name = "";
    this.rc = 0;
    this.jcfy = 0;
    this.tjjz = 0;
  }

  convertList(d):HospitalAnalysisDetailsDrugVo[]{
    let result:HospitalAnalysisDetailsDrugVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  };

  convertOne(d):HospitalAnalysisDetailsDrugVo{
    return this.convert(d);
  }

  convert(d):HospitalAnalysisDetailsDrugVo{
    let v = new HospitalAnalysisDetailsDrugVo();
    if(Utils.isNull(d)){return v;};
    v.name = Utils.fmtEmpty(d[mapping['name']]);
    v.rc = Utils.fmtEmpty(d[mapping['rc']],EMPTY.B);
    v.jcfy = Utils.fmtEmpty(d[mapping['jcfy']],EMPTY.B);
    v.tjjz = Utils.fmtEmpty(d[mapping['tjjz']],EMPTY.B);
    return v;
  }


}
