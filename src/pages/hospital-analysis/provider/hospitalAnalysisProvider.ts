import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {MENUS} from "../../../framwork/const/urlPermission";
import {HospitalAnalysisDetailsAgeVo} from "../vo/HospitalAnalysisDetailsAge";
import {HospitalAnalysisDetailsCostTypeVo} from "../vo/HospitalAnalysisDetailsCostType";
import {HospitalAnalysisDetailsVo} from "../vo/HospitalAnalysisDetails";
import {HospitalAnalysisDetailsIndexVo} from "../vo/HospitalAnalysisDetailsIndex";
import {HospitalAnalysisDetailsDiseaseVo} from "../vo/HospitalAnalysisDetailsDisease";
import {HospitalAnalysisDetailsProjectVo} from "../vo/HospitalAnalysisDetailsProject";
import {HospitalAnalysisDetailsDrugVo} from "../vo/HospitalAnalysisDetailsDrug";
import {HospitalAnalysisDetailsTotalVo} from "../vo/HospitalAnalysisDetailsTotal";
import {HospitalAnalysisDetailsPayVo} from "../vo/HospitalAnalysisDetailsPay";
import {BaseProvider} from "../../../framwork/provider/BaseProvider";
import {Utils} from "../../../framwork/provider/utils";
import {ResponseObjectVo} from "../../../framwork/entity/ResponseObject";
import {LimitVo} from "../../../framwork/entity/Limit";


@Injectable()
export class HospitalAnalysisProvider {


  constructor(private baseProvider:BaseProvider,
              private utils:Utils) {}

  //获取基金 list页面数据 ok
  public getHospitalAnalysisList(param:any):Observable<LimitVo>{
    return Observable.create((observable)=>{
      let limit = new LimitVo();
      this.baseProvider.get(MENUS.WZ8SZSl0JCDR2aBBSw4_YYFX.submenu.list(),param)
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

  //新增医院分析 ok
  public addHospitalAnalysis(param:any):Observable<boolean>{
    return Observable.create((observable)=>{
      this.baseProvider.get(MENUS.WZ8SZSl0JCDR2aBBSw4_YYFX.submenu.add(),param)
        .subscribe((d:ResponseObjectVo)=>{
        this.utils.showMsg(d.content);
        observable.next(d.success);
      },(error)=>{
        observable.next(false);
        this.utils.showMsg(error);
      });
    });
  }

  //获取年龄段分析数据 ok
  public getAgeAnalysisData(id:string):Observable<HospitalAnalysisDetailsAgeVo>{
    return Observable.create((observable)=>{
      let r = new HospitalAnalysisDetailsAgeVo();
      this.baseProvider.get(MENUS.WZ8SZSl0JCDR2aBBSw4_YYFX.submenu.ageDetails()+id)
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

  //获取费用类别分析
  public getCostTypeData(id:string):Observable<HospitalAnalysisDetailsCostTypeVo[]>{
    return Observable.create((observable)=>{
      this.baseProvider.get(MENUS.WZ8SZSl0JCDR2aBBSw4_YYFX.submenu.costTypeDetails()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(new HospitalAnalysisDetailsCostTypeVo().convertList(d.content));
        }else{
          observable.next([]);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next([]);
        this.utils.showMsg(error);
      });
    });
  }

  //根据ID获取医疗总费用和统筹支付费用
  public getFundAnalysisDetails(id:string):Observable<HospitalAnalysisDetailsVo>{
    return Observable.create((observable)=>{
      let r = new HospitalAnalysisDetailsVo();
      this.baseProvider.get(MENUS.WZ8SZSl0JCDR2aBBSw4_YYFX.submenu.details()+id)
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

  //获取指标分析数据
  public getIndexAnalysisData(id:string):Observable<HospitalAnalysisDetailsIndexVo[]>{
    return Observable.create((observable)=>{
      this.baseProvider.get(MENUS.WZ8SZSl0JCDR2aBBSw4_YYFX.submenu.indexDetails()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(new HospitalAnalysisDetailsIndexVo().convertList(d.content));
        }else{
          observable.next([]);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next([]);
        this.utils.showMsg(error);
      });
    });
  }

  //治疗疾病排名 top 5
  public getDiseaseData(id:string):Observable<HospitalAnalysisDetailsDiseaseVo[]> {
    return Observable.create((observable)=>{
      this.baseProvider.get(MENUS.WZ8SZSl0JCDR2aBBSw4_YYFX.submenu.diseaseDetails()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(new HospitalAnalysisDetailsDiseaseVo().convertList(d.content));
        }else{
          observable.next([]);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next([]);
        this.utils.showMsg(error);
      });
    });
  }

  //项目排名 top 5
  public getProjectData(id:string):Observable<HospitalAnalysisDetailsProjectVo[]> {
    return Observable.create((observable)=>{
      this.baseProvider.get(MENUS.WZ8SZSl0JCDR2aBBSw4_YYFX.submenu.projectDetails()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(new HospitalAnalysisDetailsProjectVo().convertList(d.content));
        }else{
          observable.next([]);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next([]);
        this.utils.showMsg(error);
      });
    });
  }

  //药品排名 top 5
  public getDrugData(id:string):Observable<HospitalAnalysisDetailsDrugVo[]> {
    return Observable.create((observable)=>{
      this.baseProvider.get(MENUS.WZ8SZSl0JCDR2aBBSw4_YYFX.submenu.drugDetails()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(new HospitalAnalysisDetailsDrugVo().convertList(d.content));
        }else{
          observable.next([]);
          this.utils.showMsg(d.content);
        }
      },(error)=>{
        observable.next([]);
        this.utils.showMsg(error);
      });
    });
  }

  //根据ID 获取基金详情 中的 医疗总费用详情
  public getMedicalTotalCost(id):Observable<HospitalAnalysisDetailsTotalVo>{
    return Observable.create((observable)=>{
      let r= new HospitalAnalysisDetailsTotalVo();
      this.baseProvider.get(MENUS.WZ8SZSl0JCDR2aBBSw4_YYFX.submenu.totalDetails()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          this.utils.showMsg(d.content);
          observable.next(r);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }

  //根据ID 获取基金详情 中的 统筹支付费用详情
  public getWholePayCost(id:string):Observable<HospitalAnalysisDetailsPayVo>{
    return Observable.create((observable)=>{
      let r= new HospitalAnalysisDetailsPayVo();
      this.baseProvider.get(MENUS.WZ8SZSl0JCDR2aBBSw4_YYFX.submenu.wholePayDetails()+id)
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
