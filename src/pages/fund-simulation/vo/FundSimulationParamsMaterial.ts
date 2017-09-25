import {Convert} from "../../../framwork/convert/convert.impl";
import {SIM_ADD, SIM_DELETE, SIM_J, SIM_UPDATE, SIM_Y} from "./simConst";
import {MaterialVo} from "./material";
import {Utils} from "../../../framwork/provider/utils";

/**
 * 基金仿真 参数的 材料
 */
export class FundSimulationParamsMaterialVo implements Convert<FundSimulationParamsMaterialVo>{

  public add_j_data:MaterialVo[];//
  public add_y_data:MaterialVo[];//
  public add_j_show:boolean;//
  public add_y_show:boolean;//

  public delete_j_data:MaterialVo[];//
  public delete_y_data:MaterialVo[];//
  public delete_j_show:boolean;//
  public delete_y_show:boolean;//

  public update_j_data:MaterialVo[];//
  public update_y_data:MaterialVo[];//
  public update_j_show:boolean;//
  public update_y_show:boolean;//

  public resource:MaterialVo[];//原数据

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

  convertList(d):FundSimulationParamsMaterialVo[]{
    return [];
  }

  convertOne(d):FundSimulationParamsMaterialVo{
    return this.convert(d);
  }

  convert(d):FundSimulationParamsMaterialVo{
    let v = new FundSimulationParamsMaterialVo();
    if(Utils.isNull(d)){return v;};
    v.resource = new MaterialVo().convertList(d);

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

  private type_show_(body:MaterialVo[],str:string,type:string):MaterialVo[]{
    let re:MaterialVo[] = [];
    body.forEach((val:MaterialVo)=>{
      if(val.add_del == str && val.type == type){
        re.push(val);
      }
    })
    return re;
  }

}
