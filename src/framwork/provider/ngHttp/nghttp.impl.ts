import {INgHttp} from "./nghttp.interface";
import {RequestOptionsArgs,Request,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

export abstract class BaseNgHttp implements INgHttp{

  abstract request(url: string|Request, options?: RequestOptionsArgs) : Observable<Response>
  abstract get(url: string, options?: RequestOptionsArgs) : Observable<Response>
  abstract post(url: string, body: any, options?: RequestOptionsArgs) : Observable<Response>
  abstract put(url: string, body: any, options?: RequestOptionsArgs) : Observable<Response>
  abstract delete(url: string, options?: RequestOptionsArgs) : Observable<Response>
  abstract patch(url: string, body: any, options?: RequestOptionsArgs) : Observable<Response>
  abstract head(url: string, options?: RequestOptionsArgs) : Observable<Response>
  abstract options(url: string, options?: RequestOptionsArgs) : Observable<Response>

  static readonly STATUS_200:number = 200;
  static readonly STATUS_200_NAME:string = "请求成功";

  static readonly STATUS_0:number = 0;
  static readonly STATUS_0_NAME:string = "请求响应错误，请检查网络";

  static readonly STATUS_404:number = 404;
  static readonly STATUS_404_NAME:string = "请求链接不存在，请联系管理员";

  static readonly STATUS_405:number = 405;
  static readonly STATUS_405_NAME:string = "服务器请求方法错误，请联系管理员";

  static readonly STATUS_500:number = 500;
  static readonly STATUS_500_NAME:string = "服务器出错，请稍后再试";

  static readonly STATUS_9:number = 9;
  static readonly STATUS_9_NAME:string = "未知错误，请检查网络";

  static readonly STATUS_1:number = 1;
  static readonly STATUS_1_NAME:string = "登陆过期，请重新登陆";

  static readonly STATUS_2:number = 2;
  static readonly STATUS_2_NAME:string = "服务器响应超时，稍后再试";

  static getErrorMessge(status:number = BaseNgHttp.STATUS_9){
    switch (status){
      case BaseNgHttp.STATUS_200:
        return BaseNgHttp.STATUS_200_NAME;
      case BaseNgHttp.STATUS_0:
        return BaseNgHttp.STATUS_0_NAME;
      case BaseNgHttp.STATUS_404:
        return BaseNgHttp.STATUS_404_NAME;
      case BaseNgHttp.STATUS_405:
        return BaseNgHttp.STATUS_405_NAME;
      case BaseNgHttp.STATUS_500:
        return BaseNgHttp.STATUS_500_NAME;
      case BaseNgHttp.STATUS_1:
        return BaseNgHttp.STATUS_1_NAME;
      case BaseNgHttp.STATUS_2:
        return BaseNgHttp.STATUS_2_NAME;
      default:
        return BaseNgHttp.STATUS_9_NAME;
    }

  }
}
