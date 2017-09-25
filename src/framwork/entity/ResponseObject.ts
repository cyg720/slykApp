import {Convert} from "../convert/convert.impl";
import {Utils} from "../provider/utils";
import {EMPTY} from "../const/appConstsData";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  success:"success",
  content:"content",
  message:"message",
}

export class ResponseObjectVo implements Convert<ResponseObjectVo>{

  public uuid:string;
  public  success:boolean;//
  public  content:any;//
  public  message:string;//

  constructor(){
    this.success = false;
    this.content = "";
    this.message = "";
    this.uuid = Utils.uuid(16);
  }

  convertList(d):ResponseObjectVo[]{
    let result:ResponseObjectVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):ResponseObjectVo{
    return this.convert(d);
  }

  convert(d):ResponseObjectVo{
    let v = new ResponseObjectVo();
    d = d || {};
    v.success = Utils.fmtEmpty(d[mapping['success']],EMPTY.C);
    v.content = Utils.fmtEmpty(d[mapping['content']]);
    v.message = Utils.fmtEmpty(d[mapping['message']]);
    return v;
  }


}
