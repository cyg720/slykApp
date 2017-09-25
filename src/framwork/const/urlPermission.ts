// http://cdslyk.imwork.net:8070/portal/
//IP  cdslyk.imwork.net:8070  192.168.101.134:8000 101.134 0.104
export const SERVER_TEST_IP:string = "http://192.168.101.249:8000/portal//app";
export const SERVER_IP:string = "http://192.168.101.237:8989/portal/mobile";

//true 正式环境，false 测试环境
export const IDE:boolean = true;

//前台菜单ioni
export const MENUS:any = {
  "COMMON_URL":{ //公共url
    login:()=>{
      if(IDE) return `${SERVER_IP}/auth/mobileLogin`;
       return `${SERVER_TEST_IP}/fundAnalysis/user`;
    },
    logout:()=>{
      if(IDE) return `${SERVER_IP}/auth/mobileLoginOut`;
      return `${SERVER_TEST_IP}/fundAnalysis/logout`;
    },
    menu:()=>{
      if(IDE) return `${SERVER_IP}/menu/getMobileMenu`;
       return `${SERVER_TEST_IP}/fundAnalysis/menu`;
    },
    appInfo:()=>{
      if(IDE) return `${SERVER_IP}/app/info`;
      return `${SERVER_TEST_IP}/info/appInfo`;
    },
    dowdloadApk:()=>{
      if(IDE) return `${SERVER_IP}/app/downloadApk`;
      return `${SERVER_TEST_IP}/info/downloadApk`;
    }
  },
  "Ssl0ekz4e7WMCwSTkWS_JJFX":{// 基金分析
    icon:"icon-iconfontjijin",
    url:"FundAnalysisPage",
    submenu:{
      list:()=>{
        if(IDE) return `${SERVER_IP}/fund/list`;
         return `${SERVER_TEST_IP}/fundAnalysis/list`
      },
      add:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/fundAnalysis/add`
      },
      details:()=>{
        if(IDE) return `${SERVER_IP}/fund/getFundReportTotalDetails`;
        return `${SERVER_TEST_IP}/fundAnalysis/details/111`
      },
      totalDetails:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/fundAnalysis/details/total/`
      },
      wholePayDetails:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/fundAnalysis/details/pay/`
      },
      costTypeDetails:()=>{
        if(IDE) return `${SERVER_IP}/fund/getFundAnalysisDetailsFylxVo`;
        return `${SERVER_TEST_IP}/fundAnalysis/costType/1111`
      },
      hospLevelDetails:()=>{
        if(IDE) return `${SERVER_IP}/fund/getFundAnalysisDetailsCbdjVo`;
        return `${SERVER_TEST_IP}/fundAnalysis/hospLevel/1111`
      },
      ageDetails:()=>{
        if(IDE) return `${SERVER_IP}/fund/getFundAnalysisDetailsAgeVo`;
        return `${SERVER_TEST_IP}/fundAnalysis/age/111`
      }
    }
  },
  "WZ8SZSl0JCDR2aBBSw4_YYFX":{ //医院分析
    icon:"icon-fenxi",
    url:"HospitalAnalysisPage",
    submenu:{
      list:()=>{
        if(IDE) return `${SERVER_IP}/hospital/list`;
        return `${SERVER_TEST_IP}/hsopitalAnalysis/list`;
      },
      add:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/hsopitalAnalysis/add`
      },
      details:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/hsopitalAnalysis/details/`
      },
      ageDetails:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/hsopitalAnalysis/age/`
      },
      costTypeDetails:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/hsopitalAnalysis/cost/`
      },
      indexDetails:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/hsopitalAnalysis/details/index/`
      },
      diseaseDetails:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/hsopitalAnalysis/details/disease/`
      },
      projectDetails:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/hsopitalAnalysis/details/project/`
      },
      drugDetails:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/hsopitalAnalysis/details/drug/`
      },
      totalDetails:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/hsopitalAnalysis/details/total/`
      },
      wholePayDetails:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/hsopitalAnalysis/details/pay/`
      }
    }
  },
  "QuxBUDMgPxzrl45rZPG_ZEKZ":{//总额控制
    icon:"icon-kongzhixian",
    url:"TotalControlPage",
    submenu:{
      list:()=>{
        if(IDE) return `${SERVER_IP}/`;
        return `${SERVER_TEST_IP}/totalControl/list`;
      },
      hospitalList:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/totalControl/list/hospital`;
      },
      totalControlParams:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/totalControl/list/params`;
      },
      monthDetails:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/totalControl/list/monthDetails`;
      }
    }
  },
  "GFCtusAduXB7IxcG9AV_JJFZ":{//基金仿真
    icon:"icon-jijinqialiushui",
    url:"FundSimulationPage",
    submenu:{
      list:()=>{
        if(IDE) return `${SERVER_IP}/simulate/list`;
        return `${SERVER_TEST_IP}/fundSimulation/list`;
      },
      details:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/fundSimulation/details/`;
      },
      hospLevelDetails:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/fundSimulation/details/hospLevel/`;
      },
      ageDetails:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/fundSimulation/details/age/`;
      },
      hospitalDetails:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/fundSimulation/details/hospital/`;
      },
      gzxsParam:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/fundSimulation/details/param/gzxs/`;
      },
      drugParam:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/fundSimulation/details/param/drug/`;
      },
      projectParam:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/fundSimulation/details/param/project/`;
      },
      materialParam:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/fundSimulation/details/param/material/`;
      },
      diseaseParam:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/fundSimulation/details/param/disease/`;
      },
      cbjgParam:()=>{
        if(IDE) return ``;
        return `${SERVER_TEST_IP}/fundSimulation/details/param/cbjg/`;
      }
    }
  },
  "ZXV7mjknExFc5nuPeKn_RCJG":{//日常监管
    icon:"icon-richangjianguan",
    url:"DailySupervisionPage"
  },
  "OG4atvu5TJgxAiQScoh_MRJC":{//每日稽查
    icon:"icon-accAudit",
    url:"DailyAuditPage"
  },
  "FGsEkc6CprBlZW01HTb_ZBJK":{ //指标监控
    icon:"icon-zhibiaojiankong",
    url:"IndexSupervisionPage"
  }
};

