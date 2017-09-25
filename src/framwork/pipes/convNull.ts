import {Injectable, Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'conv_null'
})
@Injectable()
export class ConvNull implements PipeTransform {

  /**
   * 将null 或者 undefined  转为对应的 "" 或者 0
   * @param str
   * @param type 默认 0  转换 "" 1 转换 "0"
   * @returns {any}
   */
  transform(value: any, type:number = 0) {
    if(type == 0){
      if(value == null || value == undefined ){
        return "";
      }else{
        return value;
      }
    }else {
      if(value == null || value == undefined ){
        return "0";
      }else{
        return value;
      }
    }
  }
}
