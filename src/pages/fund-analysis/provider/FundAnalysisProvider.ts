import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {FundAnalysisDetailsVo} from "../vo/FundAnalysisDetails";
import {FundAnalysisDetailsAgeVo} from "../vo/FundAnalysisDetailsAge";
import {FundAnalysisDetailsHospLevelVo} from "../vo/FundAnalysisDetailsHospLevel";
import {FundAnalysisDetailsCostTypeVo} from "../vo/FundAnalysisDetailsCostType";
import {FundAnalysisDetailsPayVo} from "../vo/FundAnalysisDetailsPay";
import {FundAnalysisDetailsTotalVo} from "../vo/FundAnalysisDetailsTotal";
import {MENUS} from "../../../framwork/const/urlPermission";
import {BaseProvider} from "../../../framwork/provider/BaseProvider";
import {ResponseObjectVo} from "../../../framwork/entity/ResponseObject";
import {Utils} from "../../../framwork/provider/utils";
import {LimitVo} from "../../../framwork/entity/Limit";

@Injectable()
export class FundAnalysisProvider{


  constructor(private baseProvider:BaseProvider,private utils:Utils){

  }

  //获取基金 list页面数据
  public getFundAnalysisList(mapParam:any):Observable<LimitVo>{
    return Observable.create((observable)=>{
      let limit = new LimitVo();
      this.baseProvider.get(MENUS.Ssl0ekz4e7WMCwSTkWS_JJFX.submenu.list(),mapParam)
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

  //新增基金报告
  public addFundAnalysis(param:any):Observable<boolean>{
    return Observable.create((observable)=>{
      this.baseProvider.get(MENUS.Ssl0ekz4e7WMCwSTkWS_JJFX.submenu.add(),param)
        .subscribe((d:ResponseObjectVo)=>{
          observable.next(d.success);
          this.utils.showMsg(d.message);
      },(error)=>{
        observable.next(false);
        this.utils.showMsg(error);
      });
    });
  }

  //根据ID获取医疗总费用和统筹支付费用
  public getFundAnalysisDetails(id:any):Observable<FundAnalysisDetailsVo>{
    return Observable.create((observable)=>{
      let r = new FundAnalysisDetailsVo();
      this.baseProvider.get(MENUS.Ssl0ekz4e7WMCwSTkWS_JJFX.submenu.details(),id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.message);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }

  //根据ID获取费用类别分析
  public getCostType(id:any):Observable<FundAnalysisDetailsCostTypeVo[]>{
    return Observable.create((observable)=>{
      this.baseProvider.get(MENUS.Ssl0ekz4e7WMCwSTkWS_JJFX.submenu.costTypeDetails(),id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          console.log(d,"getCostType");
          observable.next(new FundAnalysisDetailsCostTypeVo().convertList(d.content));
        }else{
          observable.next([]);
          this.utils.showMsg(d.message);
        }
      },(error)=>{
        observable.next([]);
        this.utils.showMsg(error);
      });
    });
  }

  //根据ID获取参保机构等级分析
  public getHospLevel(id:any):Observable<FundAnalysisDetailsHospLevelVo[]>{
    return Observable.create((observable)=>{
      this.baseProvider.get(MENUS.Ssl0ekz4e7WMCwSTkWS_JJFX.submenu.hospLevelDetails(),id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(new FundAnalysisDetailsHospLevelVo().convertList(d.content));
        }else{
          observable.next([]);
          this.utils.showMsg(d.message);
        }
      },(error)=>{
        observable.next([]);
        this.utils.showMsg(error);
      });
    });
  }

  //根据ID获取年龄段分析
  public getAge(id:any):Observable<FundAnalysisDetailsAgeVo>{
    return Observable.create((observable)=>{
      let r = new FundAnalysisDetailsAgeVo();
      this.baseProvider.get(MENUS.Ssl0ekz4e7WMCwSTkWS_JJFX.submenu.ageDetails(),id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.message);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }

  //根据ID 获取基金详情 中的 医疗总费用详情
  public getMedicalTotalCost(id):Observable<FundAnalysisDetailsTotalVo>{
    return Observable.create((observable)=>{
      let r = new FundAnalysisDetailsTotalVo();
      this.baseProvider.get( MENUS.Ssl0ekz4e7WMCwSTkWS_JJFX.submenu.totalDetails()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.message);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }

  //根据ID 获取基金详情 中的 统筹支付费用详情
  public getWholePayCost(id):Observable<FundAnalysisDetailsPayVo>{
    return Observable.create((observable)=>{
      let r = new FundAnalysisDetailsPayVo();
      this.baseProvider.get(MENUS.Ssl0ekz4e7WMCwSTkWS_JJFX.submenu.wholePayDetails()+id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.message);
        }
      },(error)=>{
        observable.next(r);
        this.utils.showMsg(error);
      });
    });
  }
}
