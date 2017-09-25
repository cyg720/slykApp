import {Injectable} from "@angular/core";
import {Toast} from "@ionic-native/toast";
import {AlertController, LoadingController, Platform} from "ionic-angular";
import {Storage} from "@ionic/storage";
import {Observable} from "rxjs/Observable";
import {EMPTY, FAVORITE} from "../const/appConstsData";
import {LocalNotifications} from "@ionic-native/local-notifications";

declare let SpinnerPlugin:any;

@Injectable()
export class Utils{

  constructor(private toast: Toast,
              private  storage: Storage,
              private platform: Platform,
              private alertController: AlertController,
              private localNotifications: LocalNotifications,
              private loadingCtrl: LoadingController){
  }

  //创建一个确认框
  public alertCtrl(message,call:Function){
    return this.alertController.create({
      message: message,
      buttons: [
        {
          text: '取消'
        },
        {
          text: '确定',
          handler: ()=>{
            call();
          }
        }
      ]
    });
  }

  //检查是否具有通知权限
  public checkNotification():Promise<boolean>{
    return this.localNotifications.hasPermission();
  }

  //产生一个本地通知
  public createNotification(text:string):number{
    let uuid:number = parseInt(Utils.uuid(8,8));
    this.localNotifications.schedule({
      id: uuid,
      text:text
    });
    return uuid;
  }
  //修改本地通知
  public updataNotification(text:string,id:number){
    this.localNotifications.update({
      id: id,
      text:text
    });
  }

  //取消一个本地通知
  public cancelNotification(id:number):Promise<any>{
      return this.localNotifications.cancel(id);
  }

  //取消全部本地通知
  public cancelAllNotification():Promise<any>{
    return this.localNotifications.cancelAll();
  }

  //点击本地通知
  public clickNotification(callback:Function){
    this.localNotifications.on("click", callback);
  }


  //删除Key
  public removeValue(key:string):Observable<boolean>{
    return Observable.create((d)=>{
      this.storage.remove(key).then(()=>{
        d.next(true);
      }).catch(()=>{
        d.next(false);
      });
    });
  }
//用 Storage 存储 获取 不存在则 返回 null
  public getValue(key:string):Observable<any>{
    return Observable.create((observable)=>{
      this.storage.get(key).then(d=>{
        if(d){
          observable.next(d);
        }else{
          observable.next(null);
        }
      }).catch(()=>{
        observable.next(null);
      })
    });
  }
  //存储 Storage 成功返回 true
  public setValue(key:string,value:any):Observable<boolean>{
    return Observable.create((observable)=>{
        this.storage.set(key,value).then(()=>{
          observable.next(true);
        }).catch(()=>{
          observable.next(false);
        })
    });
  }

  //加载中 组件
  public presentLoading(content='加载中...',duration = 10000) {
    let loading =  this.loadingCtrl.create({
      content: content,
      duration: duration,
      dismissOnPageChange:true
    });
    return loading;
  }

  //判断是不是在安卓上运行
  public isAndroid():boolean{
    return this.isMobile() && this.platform.is('android')
  }

  //是否真机环境
  public isMobile(): boolean {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }

  //显示提示消息信息
  public showMsg(message:string='操作完成', duration:number = 700, position:string ='bottom'){
    if(this.isAndroid()){
      this.toast.show(message,duration+"",position).subscribe()
    }else{
      console.warn(message);
    }
  }

  //收藏夹功能
  public setFavorite(vo:any):Observable<boolean>{
     return Observable.create((Observer)=>{
        this.getValue(FAVORITE).subscribe(d=>{
            this.isFavorite(d.id).subscribe(b=>{
              if(!b.boo){
                d.push(vo);
                this.setValue(FAVORITE,d).subscribe(c=>{
                  Observer.next(c);
                });
              }else{
                Observer.next(false);
              }
            })
        });
     });
  }

  //取消收藏
  public unFavorite(id:string):Observable<boolean>{
    return Observable.create((observer)=>{
      this.isFavorite(id).subscribe(a=>{
          if(a.boo){
            this.getValue(FAVORITE).subscribe(d=>{
               d.splice(a.index,1);
               this.setValue(FAVORITE,d).subscribe(c=>{
                 observer.next(c);
               })
            });
          }else{
            observer.next(true);
          }
      });
    });
  }

  //判断是否被收藏
  public isFavorite(id:string):Observable<any>{
    return Observable.create((o)=>{
        this.getValue(FAVORITE).subscribe(d=>{
          let boo:boolean = false;
          let index:number = -1;
            d.forEach((d,i)=>{
              if(d.id === id){
                boo = true;
                index = i;
              }
            });
          o.next({boo,index});
        });
    });
  }

  //******************************* 以下为 static 方法 *********************************************

  //显示加载中
  static showLoading(){
    document.getElementById("_loading_").setAttribute('style', 'display: block !important');
    return Utils;
  }
  //隐藏加载中
  static hideLoading(){
    document.getElementById("_loading_").setAttribute('style', 'display: none !important');
    return Utils;
  }

  static setTimeout(call:Function,time:number = 500){
      setTimeout(()=>{
        call();
      },time)
    return Utils;
  }

  /**
   * 产生全局 UUID
   * @param len 长度
   * @param radix 基数
   * @returns {string}
   */
  static uuid(len:number, radix?:number) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [], i;
    radix = radix || chars.length;
    if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
      let r;uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';uuid[14] = '4';
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join('');
  }

  /**
   * 格式化 空 转成 对应的默认值
   * @param val
   * @param fmt EMPTY
   * @returns {any}
   */
  static fmtEmpty(val:any,fmt?:string,defaultVal?:any):any{
    if(this.isNull(val)){
      if(this.isNotNull(defaultVal)){
        return defaultVal;
      }else{
        switch (fmt){
          case EMPTY.A :
            return "";
          case EMPTY.B :
            return 0;
          case EMPTY.C :
            return false;
          case EMPTY.D :
            return [];
          default:
            return ""
        }
      }
    }else{
      return val;
    }
  }

  //格式化date
  static dateFormat(date: Date, sFormat:string = 'yyyy-MM-dd'): string {
    let time = {
      Year: 0,
      TYear: '0',
      Month: 0,
      TMonth: '0',
      Day: 0,
      TDay: '0',
      Hour: 0,
      THour: '0',
      hour: 0,
      Thour: '0',
      Minute: 0,
      TMinute: '0',
      Second: 0,
      TSecond: '0',
      Millisecond: 0
    };
    time.Year = date.getFullYear();
    time.TYear = String(time.Year).substr(2);
    time.Month = date.getMonth() + 1;
    time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
    time.Day = date.getDate();
    time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
    time.Hour = date.getHours();
    time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
    time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
    time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
    time.Minute = date.getMinutes();
    time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
    time.Second = date.getSeconds();
    time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
    time.Millisecond = date.getMilliseconds();

    return sFormat.replace(/yyyy/ig, String(time.Year))
      .replace(/yyy/ig, String(time.Year))
      .replace(/yy/ig, time.TYear)
      .replace(/y/ig, time.TYear)
      .replace(/MM/g, time.TMonth)
      .replace(/M/g, String(time.Month))
      .replace(/dd/ig, time.TDay)
      .replace(/d/ig, String(time.Day))
      .replace(/HH/g, time.THour)
      .replace(/H/g, String(time.Hour))
      .replace(/hh/g, time.Thour)
      .replace(/h/g, String(time.hour))
      .replace(/mm/g, time.TMinute)
      .replace(/m/g, String(time.Minute))
      .replace(/ss/ig, time.TSecond)
      .replace(/s/ig, String(time.Second))
      .replace(/fff/ig, String(time.Millisecond))
  }

  //验证是否为空
  static isNull(str:any):boolean{
    return str == null || str == "" || typeof str === "undefined";
  }

  //验证是否不为空
  static isNotNull(str:any):boolean{
    return !this.isNull(str);
  }

  //去掉小数
  static parseInt(value:any){
    if(value){
      return parseInt(value);
    }else{
      return 0;
    }
  }

}
