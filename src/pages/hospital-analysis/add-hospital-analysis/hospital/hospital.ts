import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {BaseCtrl} from "../../../../framwork/controller/ctrl.impl";
import {HOSPITAL} from "../../../../framwork/const/appConstsData";

@IonicPage()
@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html',
})
export class HospitalPage extends BaseCtrl {

  items: any[];
  constructor(public navCtrl: NavController,
              public storage: Storage) {
    super(navCtrl,storage);
    this.initData();
  }
  initData(){
    return this.items = HOSPITAL;
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
