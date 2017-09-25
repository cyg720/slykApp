import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, ConnectionBackend, RequestOptionsArgs} from '@angular/http';


import {Observable} from "rxjs";
import {HttpInterceptHandle} from "./HttpInterceptHandle";

@Injectable()
export class HttpIntercept extends Http {
  constructor(backend: ConnectionBackend,
              defaultOptions: RequestOptions,
              public httpInterceptHandle: HttpInterceptHandle) {
    super(backend, defaultOptions);
  }

  get(url: string, options ?: RequestOptionsArgs): Observable < Response > {
    this.httpInterceptHandle.events.publish("request:before", url, options);
    return Observable.create((observer) => {
      super.get(url, options).subscribe(res => {
        this.httpInterceptHandle.events.publish("request:success", url, options, res);
        observer.next(res);
      }, err => {
        this.httpInterceptHandle.events.publish("request:error", url, options, err);
        observer.error(err);
      });
    });
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.httpInterceptHandle.events.publish("request:before", url, options);
    return Observable.create((observer) => {
      super.post(url, body, options).subscribe(res => {
        this.httpInterceptHandle.events.publish("request:success", url, options, res);
        observer.next(res);
      }, err => {
        this.httpInterceptHandle.events.publish("request:error", url, options, err);
        observer.error(err);
      });
    });
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.httpInterceptHandle.events.publish("request:before", url, options);
    return Observable.create((observer) => {
      super.put(url, body, options).subscribe(res => {
        this.httpInterceptHandle.events.publish("request:success", url, options, res);
        observer.next(res);
      }, err => {
        this.httpInterceptHandle.events.publish("request:error", url, options, err);
        observer.error(err);
      });
    });
  }

  delete(url: string, options ?: RequestOptionsArgs): Observable < Response > {
    this.httpInterceptHandle.events.publish("request:before", url, options);
    return Observable.create((observer) => {
      super.delete(url, options).subscribe(res => {
        this.httpInterceptHandle.events.publish("request:success", url, options, res);
        observer.next(res);
      }, err => {
        this.httpInterceptHandle.events.publish("request:error", url, options, err);
        observer.error(err);
      });
    });
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.httpInterceptHandle.events.publish("request:before", url, options);
    return Observable.create((observer) => {
      super.patch(url, body, options).subscribe(res => {
        this.httpInterceptHandle.events.publish("request:success", url, options, res);
        observer.next(res);
      }, err => {
        this.httpInterceptHandle.events.publish("request:error", url, options, err);
        observer.error(err);
      });
    });
  }


  head(url: string, options ?: RequestOptionsArgs): Observable < Response > {
    this.httpInterceptHandle.events.publish("request:before", url, options);
    return Observable.create((observer) => {
      super.head(url, options).subscribe(res => {
        this.httpInterceptHandle.events.publish("request:success", url, options, res);
        observer.next(res);
      }, err => {
        this.httpInterceptHandle.events.publish("request:error", url, options, err);
        observer.error(err);
      });
    });
  }


  options(url: string, options ?: RequestOptionsArgs): Observable < Response > {
    this.httpInterceptHandle.events.publish("request:before", url, options);
    return Observable.create((observer) => {
      super.options(url, options).subscribe(res => {
        this.httpInterceptHandle.events.publish("request:success", url, options, res);
        observer.next(res);
      }, err => {
        this.httpInterceptHandle.events.publish("request:error", url, options, err);
        observer.error(err);
      });
    });
  }

}
