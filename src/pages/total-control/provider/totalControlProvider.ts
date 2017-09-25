import { Injectable } from '@angular/core';
import {TotalControlVo} from "../vo/totalControl";
import {Observable} from "rxjs/Observable";
import {MENUS} from "../../../framwork/const/urlPermission";
import {TotalControlHospitalVo} from "../vo/totalControlHospital";
import {TotalControlParamsVo} from "../vo/totalControlParams";
import {TotalControlMonthDetailsVo} from "../vo/totalControlMonthDetails";
import {BaseProvider} from "../../../framwork/provider/BaseProvider";
import {Utils} from "../../../framwork/provider/utils";
import {ResponseObjectVo} from "../../../framwork/entity/ResponseObject";

@Injectable()
export class TotalControlProvider {

  constructor(private baseProvider:BaseProvider,
              private utils:Utils) { }

  //获取总额控制 list
  public getTotalControlList():Observable<TotalControlVo[]>{
    return Observable.create((observable)=>{
          this.baseProvider.get(MENUS.QuxBUDMgPxzrl45rZPG_ZEKZ.submenu.list())
            .subscribe((d:ResponseObjectVo)=>{
              if(d.success){
                observable.next(new TotalControlVo().convertList(d.content));
              }else{
                observable.next([]);
                this.utils.showMsg(d.content);
              }
          },(e)=>{
            observable.next([]);
            this.utils.showMsg(e);
          });
    });
  }


  //根据ID 获取总额控制 医院list
  public postTotalControlHospitalList(id:any):Observable<TotalControlHospitalVo[]>{
    return Observable.create((observable)=>{
          this.baseProvider.post(MENUS.QuxBUDMgPxzrl45rZPG_ZEKZ.submenu.hospitalList(),id)
            .subscribe((d:ResponseObjectVo)=>{
            if(d.success){
              observable.next(new TotalControlHospitalVo().convertList(d.content));
            }else{
              observable.next([]);
              this.utils.showMsg(d.content);
            }
          },(e)=>{
            observable.next([]);
            this.utils.showMsg(e);
          });
    });
  }

  //根据ID 获取总额控制 参数
  public postTotalControlParams(id:any):Observable<TotalControlParamsVo>{
    return Observable.create((observable)=>{
      let r = new TotalControlParamsVo();
      this.baseProvider.post(MENUS.QuxBUDMgPxzrl45rZPG_ZEKZ.submenu.totalControlParams(),id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertOne(d.content));
        }else{
          observable.next(r);
          this.utils.showMsg(d.content);
        }
      },(e)=>{
        observable.next(r);
        this.utils.showMsg(e);
      });
    });
  }

  //根据ID 获取总额控制 月结算详情
  public postTotalControlMonthDetails(id:object):Observable<TotalControlMonthDetailsVo[]>{
    return Observable.create((observable)=>{
      let r = new TotalControlMonthDetailsVo();
      this.baseProvider.post(MENUS.QuxBUDMgPxzrl45rZPG_ZEKZ.submenu.monthDetails(),id)
        .subscribe((d:ResponseObjectVo)=>{
        if(d.success){
          observable.next(r.convertList(d.content));
        }else{
          observable.next([]);
          this.utils.showMsg(d.content);
        }
      },(e)=>{
        observable.next([]);
        this.utils.showMsg(e);
      });
    });
  }

}
