import {SIM_ADD, SIM_B, SIM_D, SIM_DELETE, SIM_J, SIM_UPDATE, SIM_Y} from "./simConst";
import {Convert} from "../../../framwork/convert/convert.impl";
import {DiseaseVo} from "./disease";
import {Utils} from "../../../framwork/provider/utils";

/**
 * 基金仿真 参数的 疾病
 */
export class FundSimulationParamsDiseaseVo implements Convert<FundSimulationParamsDiseaseVo>{

  public add_j_data:DiseaseVo[];//
  public add_y_data:DiseaseVo[];//
  public add_b_data:DiseaseVo[];//
  public add_d_data:DiseaseVo[];//
  public add_j_show:boolean;//
  public add_y_show:boolean;//
  public add_b_show:boolean;//
  public add_d_show:boolean;//

  public delete_j_data:DiseaseVo[];//
  public delete_y_data:DiseaseVo[];//
  public delete_b_data:DiseaseVo[];//
  public delete_d_data:DiseaseVo[];//
  public delete_j_show:boolean;//
  public delete_y_show:boolean;//
  public delete_b_show:boolean;//
  public delete_d_show:boolean;//

  public update_j_data:DiseaseVo[];//
  public update_y_data:DiseaseVo[];//
  public update_b_data:DiseaseVo[];//
  public update_d_data:DiseaseVo[];//
  public update_j_show:boolean;//
  public update_y_show:boolean;//
  public update_b_show:boolean;//
  public update_d_show:boolean;//

  public resource:DiseaseVo[];//原数据

  constructor(){
    this.add_j_data=[];//
    this.add_y_data=[];//
    this.add_b_data=[];//
    this.add_d_data=[];//
    this.add_j_show=false;//
    this.add_y_show=false;//
    this.add_b_show=false;//
    this.add_d_show=false;//

    this.delete_j_data=[];//
    this.delete_y_data=[];//
    this.delete_b_data=[];//
    this.delete_d_data=[];//
    this.delete_j_show=false;//
    this.delete_y_show=false;//
    this.delete_b_show=false;//
    this.delete_d_show=false;//

    this.update_j_data=[];//
    this.update_y_data=[];//
    this.update_b_data=[];//
    this.update_d_data=[];//
    this.update_j_show=false;//
    this.update_y_show=false;//
    this.update_b_show=false;//
    this.update_d_show=false;//

    this.resource=[];//原数据
  }

  convertList(d):FundSimulationParamsDiseaseVo[]{
    return [];
  }

  convertOne(d):FundSimulationParamsDiseaseVo{
    return this.convert(d);
  }

  convert(d):FundSimulationParamsDiseaseVo{
    let v = new FundSimulationParamsDiseaseVo();
    if(Utils.isNull(d)){return v;};
    v.resource = new DiseaseVo().convertList(d);

    v.add_j_data = this.type_show_(v.resource,SIM_ADD,SIM_J);
    v.add_y_data = this.type_show_(v.resource,SIM_ADD,SIM_Y);
    v.add_b_data = this.type_show_(v.resource,SIM_ADD,SIM_B);
    v.add_d_data = this.type_show_(v.resource,SIM_ADD,SIM_D);
    v.add_j_show = v.add_j_data.length > 0 ? true : false;
    v.add_y_show = v.add_y_data.length > 0 ? true : false;
    v.add_b_show = v.add_b_data.length > 0 ? true : false;
    v.add_d_show = v.add_d_data.length > 0 ? true : false;

    v.delete_j_data = this.type_show_(v.resource,SIM_DELETE,SIM_J);
    v.delete_y_data = this.type_show_(v.resource,SIM_DELETE,SIM_Y);
    v.delete_b_data = this.type_show_(v.resource,SIM_DELETE,SIM_B);
    v.delete_d_data = this.type_show_(v.resource,SIM_DELETE,SIM_D);
    v.delete_j_show = v.delete_j_data.length > 0 ? true : false;
    v.delete_y_show = v.delete_y_data.length > 0 ? true : false;
    v.delete_b_show = v.delete_b_data.length > 0 ? true : false;
    v.delete_d_show = v.delete_d_data.length > 0 ? true : false;

    v.update_j_data = this.type_show_(v.resource,SIM_UPDATE,SIM_J);
    v.update_y_data = this.type_show_(v.resource,SIM_UPDATE,SIM_Y);
    v.update_b_data = this.type_show_(v.resource,SIM_UPDATE,SIM_B);
    v.update_d_data = this.type_show_(v.resource,SIM_UPDATE,SIM_D);
    v.update_j_show = v.update_j_data.length > 0 ? true : false;
    v.update_y_show = v.update_y_data.length > 0 ? true : false;
    v.update_b_show = v.update_b_data.length > 0 ? true : false;
    v.update_d_show = v.update_d_data.length > 0 ? true : false;

    return v;
  }

  private type_show_(body:DiseaseVo[],str:string,type:string):DiseaseVo[]{
    let re:DiseaseVo[] = [];
    body.forEach((val:DiseaseVo)=>{
      if(val.add_del == str && val.type == type){
        re.push(val);
      }
    })
    return re;
  }

}
