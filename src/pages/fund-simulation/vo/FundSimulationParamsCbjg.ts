import { SIM_ADD, SIM_DELETE, SIM_H_EJ, SIM_H_SJ, SIM_H_SQ, SIM_H_YJ, SIM_UPDATE } from "./simConst";
import {Convert} from "../../../framwork/convert/convert.impl";
import {CbjgVo} from "./cbjg";
import {Utils} from "../../../framwork/provider/utils";

/**
 * 基金仿真 参数的 参保机构
 */
export class FundSimulationParamsCbjgVo implements Convert<FundSimulationParamsCbjgVo>{

  public add_yj_data:CbjgVo[];//
  public add_ej_data:CbjgVo[];//
  public add_sj_data:CbjgVo[];//
  public add_sq_data:CbjgVo[];//
  public add_yj_show:boolean;//
  public add_ej_show:boolean;//
  public add_sj_show:boolean;//
  public add_sq_show:boolean;//

  public delete_yj_data:CbjgVo[];//
  public delete_ej_data:CbjgVo[];//
  public delete_sj_data:CbjgVo[];//
  public delete_sq_data:CbjgVo[];//
  public delete_yj_show:boolean;//
  public delete_ej_show:boolean;//
  public delete_sj_show:boolean;//
  public delete_sq_show:boolean;//

  public update_yj_data:CbjgVo[];//
  public update_ej_data:CbjgVo[];//
  public update_sj_data:CbjgVo[];//
  public update_sq_data:CbjgVo[];//
  public update_yj_show:boolean;//
  public update_ej_show:boolean;//
  public update_sj_show:boolean;//
  public update_sq_show:boolean;//

  public resource:CbjgVo[];//原数据

  constructor(){
    this.add_yj_data = [];//
    this.add_ej_data = [];//
    this.add_sj_data = [];//
    this.add_sq_data = [];//
    this.add_yj_show = false;//
    this.add_ej_show = false;//
    this.add_sj_show = false;//
    this.add_sq_show = false;//
    this.delete_yj_data= [];//
    this.delete_ej_data= [];//
    this.delete_sj_data= [];//
    this.delete_sq_data= [];//
    this.delete_yj_show = false;//
    this.delete_ej_show = false;//
    this.delete_sj_show = false;//
    this.delete_sq_show = false;//
    this.update_yj_data= [];//
    this.update_ej_data= [];//
    this.update_sj_data= [];//
    this.update_sq_data= [];//
    this.update_yj_show = false;//
    this.update_ej_show = false;//
    this.update_sj_show = false;//
    this.update_sq_show = false;//
    this.resource= [];//原数据
  }

  convertList(d):FundSimulationParamsCbjgVo[]{
    return [];
  }

  convertOne(d):FundSimulationParamsCbjgVo{
    return this.convert(d);
  }

  convert(d):FundSimulationParamsCbjgVo{
    let v = new FundSimulationParamsCbjgVo();
    if(Utils.isNull(d)){return v;};
    v.resource = new CbjgVo().convertList(d);

    v.add_yj_data = this.type_show_(v.resource,SIM_ADD,SIM_H_YJ);
    v.add_ej_data = this.type_show_(v.resource,SIM_ADD,SIM_H_EJ);
    v.add_sj_data = this.type_show_(v.resource,SIM_ADD,SIM_H_SJ);
    v.add_sq_data = this.type_show_(v.resource,SIM_ADD,SIM_H_SQ);
    v.add_yj_show = v.add_yj_data.length > 0 ? true : false;
    v.add_ej_show = v.add_ej_data.length > 0 ? true : false;
    v.add_sj_show = v.add_sj_data.length > 0 ? true : false;
    v.add_sq_show = v.add_sq_data.length > 0 ? true : false;

    v.delete_yj_data = this.type_show_(v.resource,SIM_DELETE,SIM_H_YJ);
    v.delete_ej_data = this.type_show_(v.resource,SIM_DELETE,SIM_H_EJ);
    v.delete_sj_data = this.type_show_(v.resource,SIM_DELETE,SIM_H_SJ);
    v.delete_sq_data = this.type_show_(v.resource,SIM_DELETE,SIM_H_SQ);
    v.delete_yj_show = v.delete_yj_data.length > 0 ? true : false;
    v.delete_ej_show = v.delete_ej_data.length > 0 ? true : false;
    v.delete_sj_show = v.delete_sj_data.length > 0 ? true : false;
    v.delete_sq_show = v.delete_sq_data.length > 0 ? true : false;

    v.update_yj_data = this.type_show_(v.resource,SIM_UPDATE,SIM_H_YJ);
    v.update_ej_data = this.type_show_(v.resource,SIM_UPDATE,SIM_H_EJ);
    v.update_sj_data = this.type_show_(v.resource,SIM_UPDATE,SIM_H_SJ);
    v.update_sq_data = this.type_show_(v.resource,SIM_UPDATE,SIM_H_SQ);
    v.update_yj_show = v.update_yj_data.length > 0 ? true : false;
    v.update_ej_show = v.update_ej_data.length > 0 ? true : false;
    v.update_sj_show = v.update_sj_data.length > 0 ? true : false;
    v.update_sq_show = v.update_sq_data.length > 0 ? true : false;

    return v;
  }

  private type_show_(body:CbjgVo[],str:string,type:string):CbjgVo[]{
    let re:CbjgVo[] = [];
    body.forEach((val:CbjgVo)=>{
      if(val.add_del == str && val.type == type){
        re.push(val);
      }
    });
    return re;
  }

}
