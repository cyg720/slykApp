import {Page} from "ionic-angular/navigation/nav-util";
import {NavOptions, ViewController} from "ionic-angular";

/**
 * 重写NavController 以满足pop返回不能带参数回去。
 * 用storage多包装了一次参数存取
 */
export interface ICtrl{

  push(page: Page | string, params?: any, opts?: NavOptions, done?: Function):Promise<any>;

  pop(params?: any,opts?: NavOptions, done?: Function):Promise<any>;

  popTo(page: Page | string | ViewController, params?: any, opts?: NavOptions, done?: Function): Promise<any>;

  getPushParams():Promise<any>;

  getPopParams():Promise<any>;

  getPopToParams():Promise<any>;

  removePushParams():void;

  removePopParams():void;

  removePopToParams():void;

}
export declare const PARAMS_POP = "params_pop";
export declare const PARAMS_PUSH = "params_push";
export declare const PARAMS_POP_TO = "params_pop_to";
