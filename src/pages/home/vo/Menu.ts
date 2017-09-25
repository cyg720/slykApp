import {Convert} from "../../../framwork/convert/convert.impl";
import {Utils} from "../../../framwork/provider/utils";
import {EMPTY} from "../../../framwork/const/appConstsData";
import {MENUS} from "../../../framwork/const/urlPermission";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  key:"description",// 菜单唯一标识
  name:"name",//菜单名称
  complete:"iframe",// 是否开发完成
  status:"status" //是否显示
};

/**
 * 菜单 对象
 */
export class MenuVo implements Convert<MenuVo>{

  public key:string;
  //----------------------------------------
  public url:string;//路由地址
  public icon:string;// 菜单 icon 图标
  public name:string;//菜单名
  public complete:boolean;//是否开发完成
  public status:boolean;//是否显示

  constructor(){
    this.key = "";
    this.url = "";
    this.name = "";
    this.icon = "";
    this.status = false;
    this.complete = false;
  }

  convertList(d):MenuVo[]{
    let result:MenuVo[] = [];
    if(Utils.isNull(d)){return result;};
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }
  convertOne(d):MenuVo{
    return this.convert(d);
  }
  convert(d):MenuVo{
    let v = new MenuVo();
    if(Utils.isNull(d)){return v;};
    v.key = Utils.fmtEmpty(d[mapping['key']]);
    v.name = Utils.fmtEmpty(d[mapping['name']]);
    v.complete = Utils.fmtEmpty(d[mapping['complete']],EMPTY.C);
    v.url = Utils.fmtEmpty(MENUS[v.key].url);
    v.icon = Utils.fmtEmpty(MENUS[v.key].icon);
    v.status = Utils.fmtEmpty(d[mapping['status']],EMPTY.C);
    return v;
  }

}
