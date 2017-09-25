import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {FAVORITETYPE} from "../../../framwork/const/appConstsData";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  id:"id",
  name:"name", //名字
  ysje:"ysje", //预算金额
  ljjsje:"ljjsje" //累计结算金额
}

/**
 * 总额控制  list 的对象
 */
export class TotalControlVo implements Convert<TotalControlVo>{

  public  id:string;//id
  public  name:string;//名称
  public  ysje:string;//
  public  ljjsje:string;//
  public favoriteType:string;//收藏夹类型

  constructor(){
    this.id = "";
    this.name = "";
    this.ysje = "";
    this.ljjsje = "";
    this.favoriteType = FAVORITETYPE.C;
  }

  convertList(d):TotalControlVo[]{
    let result:TotalControlVo[] = [];
    if(Utils.isNull(d)){return result;};
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):TotalControlVo{
    return this.convert(d);
  }

  convert(d):TotalControlVo{
    let v = new TotalControlVo();
    if(Utils.isNull(d)){return v;};
    v.name = Utils.fmtEmpty(d[mapping['name']]);
    v.id = Utils.fmtEmpty(d[mapping['id']]);
    v.ysje = Utils.fmtEmpty(d[mapping['ysje']]);
    v.ljjsje = Utils.fmtEmpty(d[mapping['ljjsje']]);
    v.favoriteType = FAVORITETYPE.C;
    return v;
  }


}
