import {Convert} from "../../../framwork/convert/convert.impl";
import {ProjectVo} from "./project";
import {SIM_ADD, SIM_DELETE, SIM_J, SIM_UPDATE, SIM_Y} from "./simConst";
import {Utils} from "../../../framwork/provider/utils";

/**
 * 基金仿真 参数的 药品参数
 */
export class FundSimulationParamsProjectVo implements Convert<FundSimulationParamsProjectVo>{

  public add_j_data:ProjectVo[];//
  public add_y_data:ProjectVo[];//
  public add_j_show:boolean;//
  public add_y_show:boolean;//

  public delete_j_data:ProjectVo[];//
  public delete_y_data:ProjectVo[];//
  public delete_j_show:boolean;//
  public delete_y_show:boolean;//

  public update_j_data:ProjectVo[];//
  public update_y_data:ProjectVo[];//
  public update_j_show:boolean;//
  public update_y_show:boolean;//

  public resource:ProjectVo[];//原数据

  constructor(){
    this.add_j_data=[];//
    this.add_y_data=[];//
    this.add_j_show=false;//
    this.add_y_show=false;//

    this.delete_j_data=[];//
    this.delete_y_data=[];//
    this.delete_j_show=false;//
    this.delete_y_show=false;//

    this.update_j_data=[];//
    this.update_y_data=[];//
    this.update_j_show=false;//
    this.update_y_show=false;//

    this.resource=[];//原数据
  }

  convertList(d):FundSimulationParamsProjectVo[]{
    return [];
  }

  convertOne(d):FundSimulationParamsProjectVo{
    return this.convert(d);
  }

  convert(d):FundSimulationParamsProjectVo{
    let v = new FundSimulationParamsProjectVo();
    if(Utils.isNull(d)){return v;};
    v.resource = new ProjectVo().convertList(d);

    v.add_j_data = this.type_show_(v.resource,SIM_ADD,SIM_J);
    v.add_y_data = this.type_show_(v.resource,SIM_ADD,SIM_Y);
    v.add_j_show = v.add_j_data.length > 0 ? true : false;
    v.add_y_show = v.add_y_data.length > 0 ? true : false;

    v.delete_j_data = this.type_show_(v.resource,SIM_DELETE,SIM_J);
    v.delete_y_data = this.type_show_(v.resource,SIM_DELETE,SIM_Y);
    v.delete_j_show = v.delete_j_data.length > 0 ? true : false;
    v.delete_y_show = v.delete_y_data.length > 0 ? true : false;

    v.update_j_data = this.type_show_(v.resource,SIM_UPDATE,SIM_J);
    v.update_y_data = this.type_show_(v.resource,SIM_UPDATE,SIM_Y);
    v.update_j_show = v.update_j_data.length > 0 ? true : false;
    v.update_y_show = v.update_y_data.length > 0 ? true : false;

    return v;
  }

  private type_show_(body:ProjectVo[],str:string,type:string):ProjectVo[]{
    let re:ProjectVo[] = [];
    body.forEach((val:ProjectVo)=>{
      if(val.add_del == str && val.type == type){
        re.push(val);
      }
    })
    return re;
  }

}
