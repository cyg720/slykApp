import {ngHttpService} from "./ngHttp/ngHttpService";
import {Observable} from "rxjs/Observable";
import { Injectable } from '@angular/core';
import {Response} from "@angular/http";
import {ResponseObjectVo} from "../entity/ResponseObject";
import {TIMEOUT} from "../const/appConstsData";
import {HTTPResponse} from "@ionic-native/http";

@Injectable()
export class BaseProvider{

  constructor(private ngHttp:ngHttpService) {  }

  /**
   * get方法
   * @param url
   * @param call
   * @param paramMap
   * @param response 默认 false  返回 conten  true 返回 ResponseObjectVo
   * @returns {any}
   */
  public get(url:string,paramMap?: Map<string,any> | any):Observable<any>{
    return Observable.create((observable)=>{
        let b:boolean = false;
        let sub = this.ngHttp.get(url,this.addParam(paramMap));
        sub.subscribe((res:Response)=>{
          b=true;
          let r:ResponseObjectVo = new ResponseObjectVo().convertOne(res.json());
          if(res.status == ngHttpService.STATUS_200){
            observable.next(r);
          }else{
            observable.error(ngHttpService.getErrorMessge(res.status));
          }
        },(e)=>{
          b=true;
          observable.error(ngHttpService.getErrorMessge(e.status));
        });
        setTimeout(()=>{
          if(!b){
            sub.subscribe().unsubscribe();
            observable.error(ngHttpService.getErrorMessge(ngHttpService.STATUS_2));
          }
        },TIMEOUT);
    });
  }

  /**
   * @param url
   * @param call
   * @param paramMap
   * @param response 默认 false  返回 conten  true 返回 ResponseObjectVo
   * @returns {any}
   */
  public post(url:string,paramMap?: Map<string,any> | any):Observable<any>{
    return Observable.create((observable)=>{
        let b:boolean = false;
          let sub = this.ngHttp.post(url,this.addParam(paramMap));
          sub.subscribe((res:Response)=>{
            b=true;
            let r:ResponseObjectVo = new ResponseObjectVo().convertOne(res.json());
            if(res.status == ngHttpService.STATUS_200){
              observable.next(r);
            }else{
              observable.error(ngHttpService.getErrorMessge(res.status));
            }
          },(e)=>{
            b=true;
            observable.error(ngHttpService.getErrorMessge(e.status));
          });
          setTimeout(()=>{
            if(!b){
              sub.subscribe().unsubscribe();
              observable.error(ngHttpService.getErrorMessge(ngHttpService.STATUS_2));
            }
          },TIMEOUT);
    });
  }

//每次请求都会附带
  private addParam(paramMap:object){
    return paramMap;
    /*let param:any = {"token":this.appCommonConst.user.token};
    if(typeof paramMap == "object"){
      return Object.assign(paramMap,param);
    }else{
      return param
    }*/
  }
  /***
   * 登陆专用不需要token
   * @param url
   * @param call
   * @param paramMap
   * @param response
   * @returns {any}
   */
  public loginPost(url:string,paramMap?: Map<string,any> | any):Observable<any>{
    return Observable.create((observable)=>{
      let b:boolean = false;
      let sub = this.ngHttp.loginPost(url,paramMap);
        sub.subscribe((res:Response)=>{
        b=true;
        let r:ResponseObjectVo = new ResponseObjectVo().convertOne(res.json());
        if(res.status == ngHttpService.STATUS_200 && r ){
              observable.next(r);
        }else{
          observable.error(ngHttpService.getErrorMessge(res.status));
        }
      },(e)=>{
        b=true;
        observable.error(ngHttpService.getErrorMessge(e.status));
      });
      setTimeout(()=>{
        if(!b){
          sub.subscribe().unsubscribe();
          observable.error(ngHttpService.getErrorMessge(ngHttpService.STATUS_2));
        }
      },TIMEOUT);
    });
  }

  /**
   * 文件下载
   * @param url
   * @param paramMap
   * @returns {Observable<Response>}
   */
  public downloadFile(url,paramMap):Observable<any>{
    return this.ngHttp.downloadFile(url,this.addParam(paramMap));
  }

 //原生post请求
  public nativePost(url:string,body:any):Observable<any>{
    return Observable.create((observer)=>{
      this.ngHttp.nativePost(url,body).then((r:HTTPResponse)=>{
        if(r.status == 200){
          let vo:ResponseObjectVo = new ResponseObjectVo().convertOne(r.data);
          observer.next(vo);
        }else{
          observer.error(ngHttpService.getErrorMessge(r.status));
        }
      }).catch((e)=>{
        observer.error(ngHttpService.getErrorMessge(e.status));
      })
    });
  }
  //原生get请求
  public nativeGet(url,body):Observable<any>{
    return Observable.create((observer)=>{
      this.ngHttp.nativeGet(url,body).then((r:HTTPResponse)=>{
        if(r.status == 200){
          let vo:ResponseObjectVo = new ResponseObjectVo().convertOne(r.data);
          observer.next(vo);
        }else{
          observer.error(ngHttpService.getErrorMessge(r.status));
        }
      }).catch((e)=>{
        observer.error(ngHttpService.getErrorMessge(e.status));
      })
    });
  }

  //原生上传文件请求
  public nativeUploadFile(url, body,filePath, name):Observable<any>{
    return Observable.create((observer)=>{
      this.ngHttp.nativeUploadFile(url,body,filePath, name).then((r:HTTPResponse)=>{
        if(r.status == 200){
          let vo:ResponseObjectVo = new ResponseObjectVo().convertOne(r.data);
          observer.next(vo);
        }else{
          observer.error(ngHttpService.getErrorMessge(r.status));
        }
      }).catch(e=>{
        observer.error(ngHttpService.getErrorMessge(e.status));
      })
    })
  }
  //原生下载文件
  public nativeDownloadFile(url, body,filePath):Observable<any>{
    return Observable.create((observer)=>{
      this.ngHttp.nativeDownloadFile(url, body,filePath).then((r)=>{
        observer.next(r);
      }).catch(e=>{
        observer.error(e);
      })
    });
  }

}
