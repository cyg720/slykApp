import { Injectable } from '@angular/core';
import {MENUS} from "../../../framwork/const/urlPermission";
import {Observable} from "rxjs/Observable";
import {FundSimulationDetailsVo} from "../vo/FundSimulationDetails";
import {FundSimulationDetailsHospLevelVo} from "../vo/FundSimulationDetailsHospLevel";
import {FundSimulationDetailsAgeVo} from "../vo/FundSimulationDetailsAge";
import {FundSimulationDetailsHospitalVo} from "../vo/FundSimulationDetailsHospital";
import {FundSimulationParamsGzxsVo} from "../vo/FundSimulationParamsGzxs";
import {FundSimulationParamsDrugVo} from "../vo/FundSimulationParamsDrug";
import {FundSimulationParamsProjectVo} from "../vo/FundSimulationParamsProject";
import {FundSimulationParamsMaterialVo} from "../vo/FundSimulationParamsMaterial";
import {FundSimulationParamsDiseaseVo} from "../vo/FundSimulationParamsDisease";
import {FundSimulationParamsCbjgVo} from "../vo/FundSimulationParamsCbjg";
import {BaseProvider} from "../../../framwork/provider/BaseProvider";
import {ResponseObjectVo} from "../../../framwork/entity/ResponseObject";
import {Utils} from "../../../framwork/provider/utils";
import {LimitVo} from "../../../framwork/entity/Limit";

@Injectable()
export class FundSimulationProvider {


  constructor(private baseProvider:BaseProvider,
              private utils:Utils) {

  }

  //获取基金仿真List
  public getFundSimulationList(mapParam:any):Observable<LimitVo>{
    return Observable.create((observable)=>{
      let limit = new LimitVo();
      this.baseProvider.get(MENUS.GFCtusAduXB7IxcG9AV_JJFZ.submenu.list(),mapParam)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(limit.convertOne(d.content));
        }else{
          observable.next(limit);
          this.utils.showMsg(d.message);
        }
      },(error)=>{
        observable.next(limit);
        this.utils.showMsg(error);
      });
    });
  }

  //获取基金仿真详情
  public getFundSimulationDetails(id:string):Observable<FundSimulationDetailsVo>{
    return Observable.create((observable)=>{
      let r = new FundSimulationDetailsVo();
      this.baseProvider.get(MENUS.GFCtusAduXB7IxcG9AV_JJFZ.submenu.details()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }

  //获取医院等级仿真费用
  public getHospLevelData(id:string):Observable<FundSimulationDetailsHospLevelVo>{
    return Observable.create((observable)=>{
      let r = new FundSimulationDetailsHospLevelVo();
      this.baseProvider.get(MENUS.GFCtusAduXB7IxcG9AV_JJFZ.submenu.hospLevelDetails()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }

  //获取年龄段仿真费用
  public getAgeData(id:string):Observable<FundSimulationDetailsAgeVo>{
    return Observable.create((observable)=>{
      let r = new FundSimulationDetailsAgeVo();
      this.baseProvider.get(MENUS.GFCtusAduXB7IxcG9AV_JJFZ.submenu.ageDetails()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }

  //获取医院仿真数据top5
  public getHospitalData(id:string):Observable<FundSimulationDetailsHospitalVo>{
    return Observable.create((observable)=>{
      let r = new FundSimulationDetailsHospitalVo();
      this.baseProvider.get(MENUS.GFCtusAduXB7IxcG9AV_JJFZ.submenu.hospitalDetails()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }

  //根据ID获取仿真参数  规则系数
  public getParam_gzxs(id:string):Observable<FundSimulationParamsGzxsVo>{
    return Observable.create((observable)=>{
      let r = new FundSimulationParamsGzxsVo();
      this.baseProvider.get(MENUS.GFCtusAduXB7IxcG9AV_JJFZ.submenu.gzxsParam()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }

  //根据ID获取仿真参数  药品
  public getParam_drug(id:string):Observable<FundSimulationParamsDrugVo>{
    return Observable.create((observable)=>{
      let r = new FundSimulationParamsDrugVo();
      this.baseProvider.get(MENUS.GFCtusAduXB7IxcG9AV_JJFZ.submenu.drugParam()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }

//根据ID获取仿真参数  项目
  public getParam_project(id:string):Observable<FundSimulationParamsProjectVo>{
    return Observable.create((observable)=>{
      let r = new FundSimulationParamsProjectVo();
      this.baseProvider.get(MENUS.GFCtusAduXB7IxcG9AV_JJFZ.submenu.projectParam()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }

  //根据ID获取仿真参数  材料
  public getParam_material(id:string):Observable<FundSimulationParamsMaterialVo>{
    return Observable.create((observable)=>{
      let r = new FundSimulationParamsMaterialVo();
      this.baseProvider.get(MENUS.GFCtusAduXB7IxcG9AV_JJFZ.submenu.materialParam()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }

  //根据ID获取仿真参数  很特殊疾病
  public getParam_disease(id:string):Observable<FundSimulationParamsDiseaseVo>{
    return Observable.create((observable)=>{
      let r = new FundSimulationParamsDiseaseVo();
      this.baseProvider.get(MENUS.GFCtusAduXB7IxcG9AV_JJFZ.submenu.diseaseParam()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }

  //根据ID获取仿真参数  参保机构
  public getParam_cbjg(id:string):Observable<FundSimulationParamsCbjgVo>{
    return Observable.create((observable)=>{
      let r = new FundSimulationParamsCbjgVo();
      this.baseProvider.get(MENUS.GFCtusAduXB7IxcG9AV_JJFZ.submenu.cbjgParam()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }
}
