import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  id:"id",
  totalMoney:"totalMoney",//医疗报销总费用
  total_bd:"total_bd",//医疗报销总费用波动
  total_sj:"total_sj",//医疗报销总费用实际值
  total_fz:"total_fz",//医疗报销总费用仿真值

  zg_total:"zg_total",//职工报销总费用
  zg_total_sj:"zg_total_sj",//职工报销总费用实际值
  zg_total_fz:"zg_total_fz",//职工报销总费用仿真值

  jm_total:"jm_total",//居民报销总费用
  jm_total_sj:"jm_total_sj",//居民报销总费用实际值
  jm_total_fz:"jm_total_fz",//居民报销总费用仿真值

}

/**
 * 基金分析 详情 的对象
 */
export class FundSimulationDetailsVo implements Convert<FundSimulationDetailsVo>{

  public  id:string;//id
  public  totalMoney:string;
  public  total_bd:string;
  public  total_sj:number;
  public  total_fz:number;

  public  zg_total:number;
  public  zg_total_sj:number;
  public  zg_total_fz:number;

  public  jm_total:number;
  public  jm_total_sj:number;
  public  jm_total_fz:number;

  constructor(){
    this.id="";//id
    this.totalMoney="";
    this.total_bd="";
    this.total_sj=0;
    this.total_fz=0;
    this.zg_total=0;
    this.zg_total_sj=0;
    this.zg_total_fz=0;
    this.jm_total=0;
    this.jm_total_sj=0;
    this.jm_total_fz=0;
  }

  convertList(d):FundSimulationDetailsVo[]{
    return [];
  };

  convertOne(d):FundSimulationDetailsVo{
    return this.convert(d);
  }

  convert(d):FundSimulationDetailsVo{
    let v = new FundSimulationDetailsVo();
    if(Utils.isNull(d)){return v;};
    v.id = Utils.fmtEmpty(d[mapping['id']]);
    v.totalMoney = Utils.fmtEmpty(d[mapping['totalMoney']]);
    v.total_bd = Utils.fmtEmpty(d[mapping['total_bd']]);
    v.total_sj = Utils.fmtEmpty(d[mapping['total_sj']],EMPTY.B);
    v.total_fz = Utils.fmtEmpty(d[mapping['total_fz']],EMPTY.B);

    v.zg_total = Utils.fmtEmpty(d[mapping['zg_total']],EMPTY.B);
    v.zg_total_sj = Utils.fmtEmpty(d[mapping['zg_total_sj']],EMPTY.B);
    v.zg_total_fz = Utils.fmtEmpty(d[mapping['zg_total_fz']],EMPTY.B);

    v.jm_total = Utils.fmtEmpty(d[mapping['jm_total']],EMPTY.B);
    v.jm_total_sj = Utils.fmtEmpty(d[mapping['jm_total_sj']],EMPTY.B);
    v.jm_total_fz = Utils.fmtEmpty(d[mapping['jm_total_fz']],EMPTY.B);

    return v;
  }


}
