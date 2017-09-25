import {Events} from 'ionic-angular';
import {Injectable} from '@angular/core';
import {Utils} from "../utils";

@Injectable()
export class HttpInterceptHandle {
  constructor(public events: Events,
              public utils:Utils) {
      events.subscribe('request:before', (url, options) => {
      console.info('%c 请求前 %c', 'color:blue', '', 'url', url);
    });

    events.subscribe('request:success', (url, options, res) => {
      console.info('%c 请求成功 %c', 'color:green', '', 'url', url);
    });

    events.subscribe('request:error', (url, options, error) => {
      console.info('%c 请求失败 %c', 'color:red', '', 'url', url);
    });
  }

}
