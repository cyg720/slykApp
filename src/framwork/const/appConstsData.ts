
//apk名称
export const APKNAME:string = "slyk.apk";

//userKey
export const USERKEY:string = "USERKEY";

//收藏KEY
export const FAVORITE:string = "FAVORITE";

//请求几秒未返回超时
export const TIMEOUT:number = 8000;

// 格式化 空 为默认值
export const EMPTY:any = {
   A:"A", //将空转换为 ""
   B:"B", //将空转换为 0
   C:"C", //将空转换为 false
   D:"D"  //将空转换为 []
};
//收藏夹 类型
export const FAVORITETYPE:any = {
  A:"A", //基金分析
  B:"B", //医院分析
  C:"C", //总额控制
  D:"D"  //基金仿真
}

//收藏 未收藏 图标
export const SC_ICON:any = {
  wsc:"ios-star-outline",
  sc:"star"
}

//年龄段 常量
export const AGEGROUP:string[] = ["0-6","7-17","18-40","41-65","65以上"];

//月份 常量
export const MONTH:string[] = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];

//医院等级 常量
export const HOSPITALLEVEL:string[] = ["一级医院","一级医院","一级医院"];


/**
 * 新增基金分析的参保类型
 */
export const INSURED_TYPE:any = [
  { text: '全部', value: '1' },
  { text: '职工', value: '2' },
  { text: '居民', value: '3' }
];
/**
 * 区县
 */
export const COUNTY:any = [
  {name:'全部',id:0},
  {name:'浦江县',id:1},{name:'锦溪县',id:2},
  {name:'白扎县',id:3},{name:'丽江县',id:4},
  {name:'都城县',id:5},{name:'柴玲县',id:6},
  {name:'潮人县',id:7},{name:'阿斯顿县',id:8},
  {name:'酷爱县',id:9},{name:'林肯县',id:10}
];

export const HOSPITAL:any = [
  {name:'成都华西医院',id:1},{name:'成都第一人民医院',id:2},
  {name:'成都军区医院',id:3},{name:'成都妇幼保健院',id:4},
  {name:'都城县第四人民医院',id:5},{name:'白癜风专科医院',id:6},
  {name:'飒飒飒飒飒飒专科医院',id:7},{name:'郫县人民医院',id:8},
  {name:'阿斯蒂芬医院',id:9},{name:'中医大神医院',id:10}
];
