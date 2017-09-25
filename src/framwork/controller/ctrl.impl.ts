import {NavController, NavOptions, ViewController} from "ionic-angular";
import {Page} from "ionic-angular/navigation/nav-util";
import { Storage } from '@ionic/storage';
import {ICtrl, PARAMS_POP, PARAMS_POP_TO, PARAMS_PUSH} from "./ctrl.interface";
import {Injectable} from "@angular/core";


/**
 * ICtrl 接口实现类
 */
@Injectable()
export class BaseCtrl implements ICtrl{

  constructor(public navCtrl: NavController,
              public  storage: Storage ){

  }

  public push(page: Page | string, params?: any, opts?: NavOptions, done?: Function):Promise<any>{
    return this.storage.set(PARAMS_PUSH,params).then(()=>{
      return this.navCtrl.push(page,params,opts,()=>{
        this.removePushParams();
        done;
      });
    });
  }

  public pop(params?: any,opts?: NavOptions, done?: Function):Promise<any>{
    return this.storage.set(PARAMS_POP,params).then(()=>{
      return this.navCtrl.pop(opts,()=>{
        this.removePopParams();
        done;
      });
    });
  }

  public popTo(page: Page | string | ViewController, params?: any, opts?: NavOptions, done?: Function): Promise<any>{
    return this.storage.set(PARAMS_POP_TO,params).then(()=>{
      return this.navCtrl.popTo(page,params,opts,()=>{
        this.removePopToParams();
        done;
      });
    });
  }

  public getPushParams():Promise<any>{
    return this.return_(PARAMS_PUSH);
  }

  public getPopParams():Promise<any>{
    return this.return_(PARAMS_POP);
  }

  public getPopToParams():Promise<any>{
    return this.return_(PARAMS_POP_TO);
  }

  public removePushParams():void{
    this.storage.remove(PARAMS_PUSH).catch();
  }

  public removePopParams():void{
     this.storage.remove(PARAMS_POP).catch();
  }

  public removePopToParams():void{
     this.storage.remove(PARAMS_POP_TO).catch();
  }

  private return_(key:string):Promise<any>{
    let this_ = this;
    return new Promise((resolve)=>{
      this.storage.get(key).then(par=>{
        let param:any = par;
        this_.storage.remove(key).then(()=>{
          return resolve(param);
        }).catch(()=>{
          return resolve(param);
        })
      })
    })
  }
}
