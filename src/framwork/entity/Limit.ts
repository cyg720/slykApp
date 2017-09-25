
import {Convert} from "../convert/convert.impl";
import {Utils} from "../provider/utils";
import {EMPTY} from "../const/appConstsData";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  offset:"offset", //每页显示多少条
  limit:"limit",//第一页
  content:"rows",//内容
  total:"total" //总条数
};

export class LimitVo implements Convert<LimitVo>{

  offset:number;
  limit:number;
  content:any;
  total:number;

  constructor(){
    this.offset = 10;
    this.limit = 0;
    this.total = 0;
    this.content = "";
  }

  convertList(d):LimitVo[]{
    let result:LimitVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):LimitVo{
    return this.convert(d);
  }

  convert(d):LimitVo{
    let v = new LimitVo();
    d = d || {};
    v.offset = Utils.fmtEmpty(d[mapping['offset']],EMPTY.B);
    v.total = Utils.fmtEmpty(d[mapping['total']],EMPTY.B);
    v.limit = Utils.fmtEmpty(d[mapping['limit']],EMPTY.B);
    v.content = Utils.fmtEmpty(d[mapping['content']],EMPTY.D);
    return v;
  }

}
