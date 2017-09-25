import {Http, RequestOptionsArgs, Request, Response, RequestOptions,Headers} from "@angular/http";
import {BaseNgHttp} from "./nghttp.impl";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Utils} from "../utils";
import {AppCommonConst} from "../common";
import {HTTP, HTTPResponse} from "@ionic-native/http";


@Injectable()
export class ngHttpService extends BaseNgHttp{

  constructor(private ngHttp:Http,
              private nativeHttp:HTTP,
              private appCommonConst:AppCommonConst){
      super();
  }

  /**
   * @param url
   * @param paramMap
   * @returns {Observable<Response>}
   */
  get(url: string, paramMap?: any) : Observable<Response>{
      return this.ngHttp.get(url,new RequestOptions({
        params: paramMap,
        headers: this.canvertHeader()
      }));
  }

  /**
   * @param url
   * @param paramMap
   * @returns {Observable<Response>}
   */
  post(url: string, paramMap: any) : Observable<Response>{
      return this.ngHttp.post(url,{},new RequestOptions({
        headers: this.canvertHeader(),
        params: paramMap,
      }));
  }

  downloadFile(url: string, paramMap: any) : Observable<Response>{
    return this.ngHttp.post(url,{},new RequestOptions({
      headers: new Headers({
        'Content-Type': 'text/plain;charset=UTF-8',
        'token': this.appCommonConst.user.token
      }),
      params: paramMap,
    }));
  }

  //登陆专用
  loginPost(url: string, paramMap: any) : Observable<Response>{
    return this.ngHttp.post(url,{},new RequestOptions({
      headers: this.canvertHeader(true),
      params: paramMap,
    }));
  }

  /**
   * @param url
   * @param paramMap
   * @returns {Observable<Response>}
   */
  put(url: string, paramMap: any) : Observable<Response>{
      return this.ngHttp.put(url,{},new RequestOptions({
        headers: this.canvertHeader(),
        params: paramMap,
      }));
  }

  /**
   * @param url
   * @param paramMap
   * @returns {Observable<Response>}
   */
  delete(url: string, paramMap:any) : Observable<Response>{
    return this.ngHttp.get(url,new RequestOptions({
      params: paramMap,
      headers: this.canvertHeader()
    }));
  }

  request(url: string|Request, options?: RequestOptionsArgs) : Observable<Response>{
    return this.ngHttp.request(url,options);
  }
  patch(url: string, body: any, options?: RequestOptionsArgs) : Observable<Response>{
      return this.ngHttp.patch(url,body,options);
  }
  head(url: string, options?: RequestOptionsArgs) : Observable<Response>{
      return this.ngHttp.head(url,options);
  }
  options(url: string, options?: RequestOptionsArgs) : Observable<Response>{
    return this.ngHttp.options(url,options);
  }

  private canvertHeader(login?:boolean):Headers{
    if(login){
      return new Headers({
        'Accept': 'application/json;charset=utf-8',
        'Content-Type': 'text/plain;charset=UTF-8',
      })
    }else{
      return new Headers({
        'token': this.appCommonConst.user.token,
        'Accept': 'application/json;charset=utf-8',
        'Content-Type': 'text/plain;charset=UTF-8',
      })
    }
  }

  /**
   *请求参数需要格式化的方法
   * @param paramMap
   * @returns {URLSearchParams}
   */
  public buildURLCanvertParams(paramMap:any): URLSearchParams {
    let params = new URLSearchParams();
    if (!paramMap) {
      return params;
    }
    for (let key in paramMap) {
      let val = paramMap[key];
      if (val instanceof Date) {
        val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
      }
      params.set(key, val);
    }
    return params;
  }

  /**
   * 将对象 转换成 name=**&age=23&address=***
   * @param obj
   * @returns {string}
   */
  private param(obj):any{
      var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
      for (name in obj) {
        value = obj[name];
        if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += this.param(innerObj) + '&';
          }
        }
        else if (value instanceof Object) {
          for (subName in value) {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += this.param(innerObj) + '&';
          }
        }
        else if (value !== undefined && value !== null)
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
      }
      return query.length ? query.substr(0, query.length - 1) : query;
    };

  //原生post请求
  nativePost(url,body):Promise<HTTPResponse>{
    return this.nativeHttp.post(url, body, this.getNativeHeader());
  }
  //原生post请求
  nativeGet(url,body):Promise<HTTPResponse>{
    return this.nativeHttp.get(url, body, this.getNativeHeader());
  }
  //原生上传文件
  nativeUploadFile(url, body,filePath, name):Promise<HTTPResponse>{
    return this.nativeHttp.uploadFile(url, body, this.getNativeHeader(true), filePath, name);
  };
  //原生下载文件
  nativeDownloadFile(url, body,filePath):Promise<HTTPResponse>{
    return this.nativeHttp.downloadFile(url, body, this.getNativeHeader(true), filePath);
  };

  //原生 请求头 转换
  private getNativeHeader(isFile?:boolean){
    if(isFile){
      return {
        'token': this.appCommonConst.user.token,
        'Accept': 'application/json;charset=utf-8',
      };
    }else{
      return {
        'token': this.appCommonConst.user.token,
        'Accept': 'application/json;charset=utf-8',
        'Content-Type': 'text/plain;charset=UTF-8',
      };
    }
  }

}
