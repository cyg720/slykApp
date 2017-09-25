import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {SIMPARAM} from "../../vo/simConst";

@IonicPage()
@Component({
  selector: 'page-fund-simulation-param',
  templateUrl: 'fund-simulation-param.html',
})
export class FundSimulationParamPage{

  petList:any[] = [];
  index:number = 0;

  constructor( public storage: Storage){
    this.petList = [{name:'gzxs',id:0},{name:'yp',id:1},{name:'xm',id:2},
                    {name:'cl',id:3},{name:'tsjb',id:4},{name:'cbjg',id:5}];
  }

  ionViewWillLeave(){
    this.storage.remove(SIMPARAM).then();
  }

  selectedSeg(e){
    let this_ = this;
    let name = e.value;
    this.petList.forEach(function (obj:any) {
        if(obj.name == name){
          this_.index = obj.id;
        }
    })
  }
  swipeEvent(e:any){
      let fx:number = e.direction;
      if(fx === 2){ //左滑动
        if(this.index != 0){
          this.index--;
        }
      }
      if(fx === 4){ //右滑动
        if(this.index != 5){
          this.index++;
        }
      }
  }

}
