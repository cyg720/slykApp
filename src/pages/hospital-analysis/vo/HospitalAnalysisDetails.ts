import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  name:"name",
  id:"id",
  ylzfy:"ylzfy",
  ylzfy_fd:"ylzfy_fd",
  ylzfy_qntq:"ylzfy_qntq",
  ylzfy_qnqn:"ylzfy_qnqn",
  tczffy:"tczffy",
  tczffy_fd:"tczffy_fd",
  tczffy_qntq:"tczffy_qntq",
  tczffy_qnqn:"tczffy_qnqn",
}

/**
 * 医院分析 详情 的对象
 */
export class HospitalAnalysisDetailsVo implements Convert<HospitalAnalysisDetailsVo>{

  public  id:string;//id
  public  name:string;//名称

  public  ylzfy:number;//医疗总费用
  public  ylzfy_fd:number;//医疗总费用增长波动
  public  ylzfy_qntq:number;//医疗总费用 去年同期
  public  ylzfy_qnqn:number;//医疗总费用 去年全年

  public  tczffy:number;//统筹支付费用
  public  tczffy_fd:number;//统筹支付费用增长波动
  public  tczffy_qntq:number;//统筹支付费用 去年同期
  public  tczffy_qnqn:number;//统筹支付费用 去年全年

  constructor(){
    this.id = "";
    this.name = "";
    this.ylzfy = 0;
    this.ylzfy_fd = 0;
    this.ylzfy_qntq = 0;
    this.ylzfy_qnqn = 0;
    this.tczffy = 0;
    this.tczffy_fd = 0;
    this.tczffy_qntq = 0;
    this.tczffy_qnqn = 0;
  }

  convertList(d):HospitalAnalysisDetailsVo[]{
    return [];
  };

  convertOne(d):HospitalAnalysisDetailsVo{
    return this.convert(d);
  }

  convert(d):HospitalAnalysisDetailsVo{
    let v = new HospitalAnalysisDetailsVo();
    if(Utils.isNull(d)){return v;};
    v.name = Utils.fmtEmpty(d[mapping['name']]);
    v.id = Utils.fmtEmpty(d[mapping['id']]);

    v.ylzfy = Utils.fmtEmpty(d[mapping['ylzfy']],EMPTY.B);
    v.ylzfy_fd = Utils.fmtEmpty(d[mapping['ylzfy_fd']],EMPTY.B);
    v.ylzfy_qnqn = Utils.fmtEmpty(d[mapping['ylzfy_qnqn']],EMPTY.B);
    v.ylzfy_qntq = Utils.fmtEmpty(d[mapping['ylzfy_qntq']],EMPTY.B);

    v.tczffy = Utils.fmtEmpty(d[mapping['tczffy']],EMPTY.B);
    v.tczffy_fd = Utils.fmtEmpty(d[mapping['tczffy_fd']],EMPTY.B);
    v.tczffy_qnqn = Utils.fmtEmpty(d[mapping['tczffy_qnqn']],EMPTY.B);
    v.tczffy_qntq = Utils.fmtEmpty(d[mapping['tczffy_qntq']],EMPTY.B);

    return v;
  }


}
