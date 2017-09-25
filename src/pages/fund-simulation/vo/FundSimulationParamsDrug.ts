import {Convert} from "../../../framwork/convert/convert.impl";
import {DrugVo} from "./drug";
import {SIM_ADD, SIM_DELETE, SIM_J, SIM_Y} from "./simConst";
import {Utils} from "../../../framwork/provider/utils";

/**
 * 基金仿真 参数的 药品参数
 */
export class FundSimulationParamsDrugVo implements Convert<FundSimulationParamsDrugVo>{

  public add_j_data:DrugVo[];//
  public add_y_data:DrugVo[];//
  public add_j_show:boolean;//
  public add_y_show:boolean;//

  public delete_j_data:DrugVo[];//
  public delete_y_data:DrugVo[];//
  public delete_j_show:boolean;//
  public delete_y_show:boolean;//

  public resource:DrugVo[];//

  constructor(){
    this.add_j_data=[];//
    this.add_y_data=[];//
    this.add_j_show=false;//
    this.add_y_show=false;//
    this.delete_j_data=[];//
    this.delete_y_data=[];//
    this.delete_j_show=false;//
    this.delete_y_show=false;//
    this.resource=[];//
  }

  convertList(d):FundSimulationParamsDrugVo[]{
    return [];
  }

  convertOne(d):FundSimulationParamsDrugVo{
    return this.convert(d);
  }

  convert(d):FundSimulationParamsDrugVo{
    let v = new FundSimulationParamsDrugVo();
    if(Utils.isNull(d)){return v;};
    v.resource = new DrugVo().convertList(d);

    v.add_j_data = this.type_show_(v.resource,SIM_ADD,SIM_J);
    v.add_y_data = this.type_show_(v.resource,SIM_ADD,SIM_Y);
    v.add_j_show = v.add_j_data.length > 0 ? true : false;
    v.add_y_show = v.add_y_data.length > 0 ? true : false;

    v.delete_j_data = this.type_show_(v.resource,SIM_DELETE,SIM_J);
    v.delete_y_data = this.type_show_(v.resource,SIM_DELETE,SIM_Y);
    v.delete_j_show = v.delete_j_data.length > 0 ? true : false;
    v.delete_y_show = v.delete_y_data.length > 0 ? true : false;
    return v;
  }

  private type_show_(resource:DrugVo[],str:string,type:string):DrugVo[]{
    let re:DrugVo[] = [];
    resource.forEach((val:DrugVo)=>{
      if(val.add_del == str && val.type == type){
        re.push(val);
      }
    });
    return re;
  }

}
