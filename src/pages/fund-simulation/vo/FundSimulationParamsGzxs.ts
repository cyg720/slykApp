import {Convert} from "../../../framwork/convert/convert.impl";
import {GzxsVo} from "./gzxs";
import {Utils} from "../../../framwork/provider/utils";

/**
 * mapping 映射json数据
 */
const mapping:any = {
  id:"id",
  //----------------------------------------
  ylbxbl_jm:"ylbxbl_jm",//乙类报销比例 居民
  ylbxbl_zg:"ylbxbl_zg",//乙类报销比例 职工

  //-----------------------------------------------
  zyzf_zg_ddzz:"zyzf_zg_ddzz",//住院支付职工 当地在职
  zyzf_zg_ddtx:"zyzf_zg_ddtx",//住院支付职工 当地退休
  zyzf_zg_zwdzz:"zyzf_zg_zwdzz",//住院支付职工 转外地在职
  zyzf_zg_zwdtx:"zyzf_zg_zwdtx",//住院支付职工 转外地退休
  zyzf_zg_90ys:"zyzf_zg_90ys",//住院支付职工 90岁以上

  zyzf_jm_sqfwjg:"zyzf_jm_sqfwjg",//住院支付居民 社区服务机构
  zyzf_jm_yjyy:"zyzf_jm_yjyy",//住院支付居民 一级医院
  zyzf_jm_ejyy:"zyzf_jm_ejyy",//住院支付居民 二级医院
  zyzf_jm_sjyy:"zyzf_jm_sjyy",//住院支付居民 三级医院
  zyzf_jm_zgzfbl:"zyzf_jm_zgzfbl",//住院支付居民 最高支付比例
//--------------------------------------------------------------
  mtbx_zg_yl:"mtbx_zg_yl",//门特报销比例 职工 乙类
  mtbx_zg_bl:"mtbx_zg_bl",//门特报销比例 职工 丙类
  mtbx_zg_dl:"mtbx_zg_dl",//门特报销比例 职工 丁类

  mtbx_jm_yl:"mtbx_jm_yl",//门特报销比例 居民 乙类
  mtbx_jm_bl:"mtbx_jm_bl",//门特报销比例 居民 丙类
  mtbx_jm_dl:"mtbx_jm_dl",//门特报销比例 居民 丁类
//-----------------------------------------------------------------
  fdx_zg_ndfdx:"fdx_zg_ndfdx",//封顶线 职工 年都封顶线
  fdx_zg_ylmt:"fdx_zg_ylmt",//封顶线 职工 乙类门特
  fdx_zg_blmt:"fdx_zg_blmt",//封顶线 职工 丙类门特
  fdx_zg_dlmt:"fdx_zg_dlmt",//封顶线 职工 丁类门特
  fdx_zg_tsdgbl:"fdx_zg_tsdgbl",//封顶线 职工 同时患有多个丙类

  fdx_jm_ndfdx:"fdx_jm_ndfdx",//封顶线 居民 年都封顶线
  fdx_jm_ylmt:"fdx_jm_ylmt",//封顶线 居民 乙类门特
  fdx_jm_blmt:"fdx_jm_blmt",//封顶线 居民 丙类门特
  fdx_jm_dlmt:"fdx_jm_dlmt",//封顶线 居民 丁类门特
  fdx_jm_tsdgbl:"fdx_jm_tsdgbl",//封顶线 居民 同时患有多个丙类
  //---------------------------------------------------------
  qfx_zg_yjyy:"qfx_zg_yjyy",//起伏线 职工 一级医院
  qfx_zg_ejyy:"qfx_zg_ejyy",//起伏线 职工 二级医院
  qfx_zg_sjyy:"qfx_zg_sjyy",//起伏线 职工 三级医院
  qfx_zg_zswyy:"qfx_zg_zswyy",//起伏线 职工 转市外医院
  qfx_zg_jlmt:"qfx_zg_jlmt",//起伏线 职工 门特甲类
  qfx_zg_dlmt:"qfx_zg_dlmt",//起伏线 职工 门特丁类
  qfx_zg_zdqfx:"qfx_zg_zdqfx",//起伏线 职工 最低起伏线

  qfx_jm_sqfwjg:"qfx_jm_sqfwjg",//起伏线 职工 社区服务机构
  qfx_jm_yjyy:"qfx_jm_yjyy",//起伏线 职工 一级医院
  qfx_jm_ejyy:"qfx_jm_ejyy",//起伏线 职工 二级医院
  qfx_jm_sjyy:"qfx_jm_sjyy",//起伏线 职工 三级医院
  qfx_jm_zswyy:"qfx_jm_zswyy",//起伏线 职工 转市外医院
  qfx_jm_jlmt:"qfx_jm_jlmt",//起伏线 职工 门特甲类
  qfx_jm_dlmt:"qfx_jm_dlmt",//起伏线 职工 门特丁类
  qfx_jm_zdqfx:"qfx_jm_zdqfx",//起伏线 职工 最低起伏线
  qfx_jm_sqfwjgzd:"qfx_jm_sqfwjgzd",//起伏线 职工 社区服务机构最低起伏线

}

/**
 * 基金仿真 参数的 规则系数
 */
export class FundSimulationParamsGzxsVo implements Convert<FundSimulationParamsGzxsVo>{

  public id:string;
    //----------------------------------------
  public ylbxbl_show:boolean;
  public ylbxbl_jm:GzxsVo;//乙类报销比例 居民
  public ylbxbl_zg:GzxsVo;//乙类报销比例 职工

   //-----------------------------------------------
  public zyzf_zg_show:boolean;
  public zyzf_jm_show:boolean;
  public zyzf_zg_ddzz:GzxsVo;//住院支付职工 当地在职
  public zyzf_zg_ddtx:GzxsVo;//住院支付职工 当地退休
  public zyzf_zg_zwdzz:GzxsVo;//住院支付职工 转外地在职
  public zyzf_zg_zwdtx:GzxsVo;//住院支付职工 转外地退休
  public zyzf_zg_90ys:GzxsVo;//住院支付职工 90岁以上

  public zyzf_jm_sqfwjg:GzxsVo;//住院支付居民 社区服务机构
  public zyzf_jm_yjyy:GzxsVo;//住院支付居民 一级医院
  public zyzf_jm_ejyy:GzxsVo;//住院支付居民 二级医院
  public zyzf_jm_sjyy:GzxsVo;//住院支付居民 三级医院
  public zyzf_jm_zgzfbl:GzxsVo;//住院支付居民 最高支付比例
    //--------------------------------------------------------------
  public mtbx_zg_show:boolean;
  public mtbx_jm_show:boolean;
  public mtbx_zg_yl:GzxsVo;//门特报销比例 职工 乙类
  public mtbx_zg_bl:GzxsVo;//门特报销比例 职工 丙类
  public mtbx_zg_dl:GzxsVo;//门特报销比例 职工 丁类

  public mtbx_jm_yl:GzxsVo;//门特报销比例 居民 乙类
  public mtbx_jm_bl:GzxsVo;//门特报销比例 居民 丙类
  public mtbx_jm_dl:GzxsVo;//门特报销比例 居民 丁类
    //-----------------------------------------------------------------
  public fdx_zg_show:boolean;
  public fdx_jm_show:boolean;
  public fdx_zg_ndfdx:GzxsVo;//封顶线 职工 年都封顶线
  public fdx_zg_ylmt:GzxsVo;//封顶线 职工 乙类门特
  public fdx_zg_blmt:GzxsVo;//封顶线 职工 丙类门特
  public fdx_zg_dlmt:GzxsVo;//封顶线 职工 丁类门特
  public fdx_zg_tsdgbl:GzxsVo;//封顶线 职工 同时患有多个丙类

  public fdx_jm_ndfdx:GzxsVo;//封顶线 居民 年都封顶线
  public fdx_jm_ylmt:GzxsVo;//封顶线 居民 乙类门特
  public fdx_jm_blmt:GzxsVo;//封顶线 居民 丙类门特
  public fdx_jm_dlmt:GzxsVo;//封顶线 居民 丁类门特
  public fdx_jm_tsdgbl:GzxsVo;//封顶线 居民 同时患有多个丙类
    //---------------------------------------------------------
  public qfx_zg_show:boolean;
  public qfx_jm_show:boolean;
  public qfx_zg_yjyy:GzxsVo;//起伏线 职工 一级医院
  public qfx_zg_ejyy:GzxsVo;//起伏线 职工 二级医院
  public qfx_zg_sjyy:GzxsVo;//起伏线 职工 三级医院
  public qfx_zg_zswyy:GzxsVo;//起伏线 职工 转市外医院
  public qfx_zg_jlmt:GzxsVo;//起伏线 职工 门特甲类
  public qfx_zg_dlmt:GzxsVo;//起伏线 职工 门特丁类
  public qfx_zg_zdqfx:GzxsVo;//起伏线 职工 最低起伏线

  public qfx_jm_sqfwjg:GzxsVo;//起伏线 职工 社区服务机构
  public qfx_jm_yjyy:GzxsVo;//起伏线 职工 一级医院
  public qfx_jm_ejyy:GzxsVo;//起伏线 职工 二级医院
  public qfx_jm_sjyy:GzxsVo;//起伏线 职工 三级医院
  public qfx_jm_zswyy:GzxsVo;//起伏线 职工 转市外医院
  public qfx_jm_jlmt:GzxsVo;//起伏线 职工 门特甲类
  public qfx_jm_dlmt:GzxsVo;//起伏线 职工 门特丁类
  public qfx_jm_zdqfx:GzxsVo;//起伏线 职工 最低起伏线
  public qfx_jm_sqfwjgzd:GzxsVo;//起伏线 职工 社区服务机构最低起伏线

  constructor(){
    this.id = "";
    this.ylbxbl_show=false;
    this.ylbxbl_jm = new GzxsVo();//乙类报销比例 居民
    this.ylbxbl_zg = new GzxsVo();//乙类报销比例 职工
    this.zyzf_zg_show = false;
    this.zyzf_jm_show = false;
    this.zyzf_zg_ddzz = new GzxsVo();//住院支付职工 当地在职
    this.zyzf_zg_ddtx = new GzxsVo();//住院支付职工 当地退休
    this.zyzf_zg_zwdzz = new GzxsVo();//住院支付职工 转外地在职
    this.zyzf_zg_zwdtx = new GzxsVo();//住院支付职工 转外地退休
    this.zyzf_zg_90ys = new GzxsVo();//住院支付职工 90岁以上
    this.zyzf_jm_sqfwjg = new GzxsVo();//住院支付居民 社区服务机构
    this.zyzf_jm_yjyy = new GzxsVo();//住院支付居民 一级医院
    this.zyzf_jm_ejyy = new GzxsVo();//住院支付居民 二级医院
    this.zyzf_jm_sjyy = new GzxsVo();//住院支付居民 三级医院
    this.zyzf_jm_zgzfbl = new GzxsVo();//住院支付居民 最高支付比例
    this.mtbx_zg_show = false;
    this.mtbx_jm_show = false;
    this.mtbx_zg_yl = new GzxsVo();//门特报销比例 职工 乙类
    this.mtbx_zg_bl = new GzxsVo();//门特报销比例 职工 丙类
    this.mtbx_zg_dl = new GzxsVo();//门特报销比例 职工 丁类
    this.mtbx_jm_yl = new GzxsVo();//门特报销比例 居民 乙类
    this.mtbx_jm_bl = new GzxsVo();//门特报销比例 居民 丙类
    this.mtbx_jm_dl = new GzxsVo();//门特报销比例 居民 丁类
    this.fdx_zg_show = false;
    this.fdx_jm_show = false;
    this.fdx_zg_ndfdx = new GzxsVo();//封顶线 职工 年都封顶线
    this.fdx_zg_ylmt = new GzxsVo();//封顶线 职工 乙类门特
    this.fdx_zg_blmt = new GzxsVo();//封顶线 职工 丙类门特
    this.fdx_zg_dlmt = new GzxsVo();//封顶线 职工 丁类门特
    this.fdx_zg_tsdgbl = new GzxsVo();//封顶线 职工 同时患有多个丙类
    this.fdx_jm_ndfdx = new GzxsVo();//封顶线 居民 年都封顶线
    this.fdx_jm_ylmt = new GzxsVo();//封顶线 居民 乙类门特
    this.fdx_jm_blmt = new GzxsVo();//封顶线 居民 丙类门特
    this.fdx_jm_dlmt = new GzxsVo();//封顶线 居民 丁类门特
    this.fdx_jm_tsdgbl = new GzxsVo();//封顶线 居民 同时患有多个丙类
    this.qfx_zg_show = false;
    this.qfx_jm_show = false;
    this.qfx_zg_yjyy = new GzxsVo();//起伏线 职工 一级医院
    this.qfx_zg_ejyy = new GzxsVo();//起伏线 职工 二级医院
    this.qfx_zg_sjyy = new GzxsVo();//起伏线 职工 三级医院
    this.qfx_zg_zswyy = new GzxsVo();//起伏线 职工 转市外医院
    this.qfx_zg_jlmt = new GzxsVo();//起伏线 职工 门特甲类
    this.qfx_zg_dlmt = new GzxsVo();//起伏线 职工 门特丁类
    this.qfx_zg_zdqfx = new GzxsVo();//起伏线 职工 最低起伏线
    this.qfx_jm_sqfwjg = new GzxsVo();//起伏线 职工 社区服务机构
    this.qfx_jm_yjyy = new GzxsVo();//起伏线 职工 一级医院
    this.qfx_jm_ejyy = new GzxsVo();//起伏线 职工 二级医院
    this.qfx_jm_sjyy = new GzxsVo();//起伏线 职工 三级医院
    this.qfx_jm_zswyy = new GzxsVo();//起伏线 职工 转市外医院
    this.qfx_jm_jlmt = new GzxsVo();//起伏线 职工 门特甲类
    this.qfx_jm_dlmt = new GzxsVo();//起伏线 职工 门特丁类
    this.qfx_jm_zdqfx = new GzxsVo();//起伏线 职工 最低起伏线
    this.qfx_jm_sqfwjgzd = new GzxsVo();//起伏线 职工 社区服务机构最低起伏线
  }

  convertList(d):FundSimulationParamsGzxsVo[]{
    let result:FundSimulationParamsGzxsVo[] = [];
    d.forEach((d)=>{
      result.push(this.convertOne(d));
    });
    return result;
  }

  convertOne(d):FundSimulationParamsGzxsVo{
    return this.convert(d);
  }

  convert(d):FundSimulationParamsGzxsVo{
    let v = new FundSimulationParamsGzxsVo();
    if(Utils.isNull(d)){return v;};
    v.id = d[mapping['id']];
    v.ylbxbl_jm = new GzxsVo().convertOne(d[mapping['ylbxbl_jm']]);
    v.ylbxbl_zg = new GzxsVo().convertOne(d[mapping['ylbxbl_zg']]);
    v.ylbxbl_show = this._show_([v.ylbxbl_jm,v.ylbxbl_zg]);

    v.zyzf_zg_ddzz = new GzxsVo().convertOne(d[mapping['zyzf_zg_ddzz']]);
    v.zyzf_zg_ddtx = new GzxsVo().convertOne(d[mapping['zyzf_zg_ddtx']]);
    v.zyzf_zg_zwdzz = new GzxsVo().convertOne(d[mapping['zyzf_zg_zwdzz']]);
    v.zyzf_zg_zwdtx = new GzxsVo().convertOne(d[mapping['zyzf_zg_zwdtx']]);
    v.zyzf_zg_90ys = new GzxsVo().convertOne(d[mapping['zyzf_zg_90ys']]);
    v.zyzf_jm_sqfwjg = new GzxsVo().convertOne(d[mapping['zyzf_jm_sqfwjg']]);
    v.zyzf_jm_yjyy = new GzxsVo().convertOne(d[mapping['zyzf_jm_yjyy']]);
    v.zyzf_jm_ejyy = new GzxsVo().convertOne(d[mapping['zyzf_jm_ejyy']]);
    v.zyzf_jm_sjyy = new GzxsVo().convertOne(d[mapping['zyzf_jm_sjyy']]);
    v.zyzf_jm_zgzfbl = new GzxsVo().convertOne(d[mapping['zyzf_jm_zgzfbl']]);
    v.zyzf_zg_show = this._show_([v.zyzf_zg_ddzz,v.zyzf_zg_ddtx,v.zyzf_zg_zwdzz,v.zyzf_zg_zwdtx,v.zyzf_zg_90ys]);
    v.zyzf_jm_show = this._show_([v.zyzf_jm_sqfwjg,v.zyzf_jm_yjyy,v.zyzf_jm_ejyy,v.zyzf_jm_sjyy,v.zyzf_jm_zgzfbl]);

    v.mtbx_zg_yl = new GzxsVo().convertOne(d[mapping['mtbx_zg_yl']]);
    v.mtbx_zg_bl = new GzxsVo().convertOne(d[mapping['mtbx_zg_bl']]);
    v.mtbx_zg_dl = new GzxsVo().convertOne(d[mapping['mtbx_zg_dl']]);
    v.mtbx_jm_yl = new GzxsVo().convertOne(d[mapping['mtbx_jm_yl']]);
    v.mtbx_jm_bl = new GzxsVo().convertOne(d[mapping['mtbx_jm_bl']]);
    v.mtbx_jm_dl = new GzxsVo().convertOne(d[mapping['mtbx_jm_dl']]);
    v.mtbx_zg_show =this._show_([v.mtbx_zg_yl,v.mtbx_zg_bl,v.mtbx_zg_dl]);
    v.mtbx_jm_show =this._show_([v.mtbx_jm_yl,v.mtbx_jm_bl,v.mtbx_jm_dl]);

    v.fdx_zg_ndfdx = new GzxsVo().convertOne(d[mapping['fdx_zg_ndfdx']]);
    v.fdx_zg_ylmt = new GzxsVo().convertOne(d[mapping['fdx_zg_ylmt']]);
    v.fdx_zg_blmt = new GzxsVo().convertOne(d[mapping['fdx_zg_blmt']]);
    v.fdx_zg_dlmt = new GzxsVo().convertOne(d[mapping['fdx_zg_dlmt']]);
    v.fdx_zg_tsdgbl = new GzxsVo().convertOne(d[mapping['fdx_zg_tsdgbl']]);
    v.fdx_jm_ndfdx = new GzxsVo().convertOne(d[mapping['fdx_jm_ndfdx']]);
    v.fdx_jm_ylmt = new GzxsVo().convertOne(d[mapping['fdx_jm_ylmt']]);
    v.fdx_jm_blmt = new GzxsVo().convertOne(d[mapping['fdx_jm_blmt']]);
    v.fdx_jm_dlmt = new GzxsVo().convertOne(d[mapping['fdx_jm_dlmt']]);
    v.fdx_jm_tsdgbl = new GzxsVo().convertOne(d[mapping['fdx_jm_tsdgbl']]);
    v.fdx_zg_show = this._show_([v.fdx_zg_ndfdx,v.fdx_zg_ylmt,v.fdx_zg_blmt,v.fdx_zg_dlmt,v.fdx_zg_tsdgbl]);
    v.fdx_jm_show = this._show_([v.fdx_jm_ndfdx,v.fdx_jm_ylmt,v.fdx_jm_blmt,v.fdx_jm_dlmt,v.fdx_jm_tsdgbl]);

    v.qfx_zg_yjyy = new GzxsVo().convertOne(d[mapping['qfx_zg_yjyy']]);
    v.qfx_zg_ejyy = new GzxsVo().convertOne(d[mapping['qfx_zg_ejyy']]);
    v.qfx_zg_sjyy = new GzxsVo().convertOne(d[mapping['qfx_zg_sjyy']]);
    v.qfx_zg_zswyy = new GzxsVo().convertOne(d[mapping['qfx_zg_zswyy']]);
    v.qfx_zg_jlmt = new GzxsVo().convertOne(d[mapping['qfx_zg_jlmt']]);
    v.qfx_zg_dlmt = new GzxsVo().convertOne(d[mapping['qfx_zg_dlmt']]);
    v.qfx_zg_zdqfx = new GzxsVo().convertOne(d[mapping['qfx_zg_zdqfx']]);

    v.qfx_jm_sqfwjg = new GzxsVo().convertOne(d[mapping['qfx_jm_sqfwjg']]);
    v.qfx_jm_yjyy = new GzxsVo().convertOne(d[mapping['qfx_jm_yjyy']]);
    v.qfx_jm_ejyy = new GzxsVo().convertOne(d[mapping['qfx_jm_ejyy']]);
    v.qfx_jm_sjyy = new GzxsVo().convertOne(d[mapping['qfx_jm_sjyy']]);
    v.qfx_jm_zswyy = new GzxsVo().convertOne(d[mapping['qfx_jm_zswyy']]);
    v.qfx_jm_jlmt = new GzxsVo().convertOne(d[mapping['qfx_jm_jlmt']]);
    v.qfx_jm_dlmt = new GzxsVo().convertOne(d[mapping['qfx_jm_dlmt']]);
    v.qfx_jm_zdqfx = new GzxsVo().convertOne(d[mapping['qfx_jm_zdqfx']]);
    v.qfx_jm_sqfwjgzd = new GzxsVo().convertOne(d[mapping['qfx_jm_sqfwjgzd']]);
    v.qfx_zg_show = this._show_([v.qfx_zg_yjyy,v.qfx_zg_ejyy,v.qfx_zg_sjyy,v.qfx_zg_zswyy,v.qfx_zg_jlmt,v.qfx_zg_dlmt, v.qfx_zg_zdqfx]);
    v.qfx_jm_show = this._show_([v.qfx_jm_sqfwjg,v.qfx_jm_yjyy,v.qfx_jm_ejyy,v.qfx_jm_sjyy,v.qfx_jm_zswyy,v.qfx_jm_jlmt,v.qfx_jm_dlmt,v.qfx_jm_zdqfx,v.qfx_jm_sqfwjgzd]);

    return v;
  }

  private _show_(v:GzxsVo[]):boolean{
    let result:boolean = false;
     v.forEach((i)=>{
        if(i instanceof GzxsVo){
          result = true;
        }
     });
    return result;
  }

}
