import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {BaseCtrl} from "../../../../framwork/controller/ctrl.impl";
import {COUNTY} from "../../../../framwork/const/appConstsData";

@IonicPage()
@Component({
  selector: 'page-county',
  templateUrl: 'county.html',
})
export class CountyPage extends BaseCtrl{

  items: any[];

  constructor( navCtrl: NavController,storage: Storage) {
    super(navCtrl,storage);
    this.initData();
  }

  initData(){
    return this.items = COUNTY;
  }

  getItems(ev: any) {
    let val = ev.target.value;
    let items_:any[] = [];
    if (val && val.trim() != '') {
      this.initData().forEach((i:any)=>{
        if(i.name.indexOf(val) >= 0 ){
          items_.push(i);
        }
      });
      this.items = items_;
    }else{
      this.initData();
    }
  }
  onClear(){
    this.initData();
  }
  toBack(param:any){
    super.pop(param).then();
  }
}
