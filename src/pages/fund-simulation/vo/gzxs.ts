import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  qian:"qian",
  hou:"hou"
}

/**
 * 基金仿真 list 的对象
 */
export class GzxsVo implements Convert<GzxsVo>{

  public  qian:string;
  public  hou:string;

  constructor(){
    this.qian = "";
    this.hou = "";
  }

  convertList(d):GzxsVo[]{
    let result:GzxsVo[] = [];
    if(!d){return null;}
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):GzxsVo{
    if(!d){return null}
    return this.convert(d);
  }

  convert(d):GzxsVo{
    let v = new GzxsVo();
    if(Utils.isNull(d)){return v;};
    v.qian = Utils.fmtEmpty(d[mapping['qian']]);
    v.hou = Utils.fmtEmpty(d[mapping['hou']]);
    return v;
  }


}
