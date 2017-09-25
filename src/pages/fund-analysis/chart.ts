import {FundAnalysisDetailsAgeVo} from "./vo/FundAnalysisDetailsAge";
import {FundAnalysisDetailsPayVo} from "./vo/FundAnalysisDetailsPay";
import {FundAnalysisDetailsTotalVo} from "./vo/FundAnalysisDetailsTotal";
import {FundAnalysisDetailsCostTypeVo} from "./vo/FundAnalysisDetailsCostType";
import {FundAnalysisDetailsHospLevelVo} from "./vo/FundAnalysisDetailsHospLevel";

declare let c3;

/**
 * 年龄段 图表分析
 * @param data
 * @param el
 */
export function ageChartAna(data:FundAnalysisDetailsAgeVo,el,color) {
  let name = data.ageName;
  let bnz = data.bnz;
  let snz = data.snz;
  setTimeout(() => {
    c3.generate({
      bindto: el,
      data: {
        x: "x",
        columns: [
          ["x", ...name],
          ['本年值', ...bnz],
          ['上年值', ...snz]
        ],
        type: 'bar'
      },padding: {
        right: 20,
        left: 40,
      },
      axis: {
        x: {
          type: 'category',
        }
      },
      legend: {
        show: false
      },
      bar: {
        width: {
          ratio: 0.2
        }
      },color: {
        pattern: color
      },
      tooltip: {
        format: {
          value: function (value, ratio, id) {
            return value + "万";
          }
        }
      }
    });
  }, 100);

}


/**
 * 统筹 支付费用和
 * @param data
 * @param el
 */
export function wholePayCostChartsAna(data:FundAnalysisDetailsPayVo,el,color){
  let name = data.monthName;
  let bnz = data.bnz;
  let snz = data.snz;
  setTimeout(()=>{
    c3.generate({
      bindto: el,
      data: {
        x:"x",
        columns: [
          ["x",...name],
          ['本年值', ...bnz],
          ['上年值', ...snz]
        ],
        type: 'bar'
      },padding: {
        right: 20,
        left: 40,
      },
      axis: {
        x: {
          type: 'category',
        }
      },color: {
        pattern: color
      },
      legend: {
        show: false
      },
      bar: {
        width: {
          ratio: 0.5
        }
      },
      tooltip: {
        format: {
          value: function (value, ratio, id) {
            return value+"万";
          }
        }
      }
    });
  },100);


}

/**
 * 医疗总费用
 * @param data
 * @param el
 */
export function totalCostChart(data:FundAnalysisDetailsTotalVo,el,color){
  let name = data.monthName;
  let bnz = data.bnz;
  let snz = data.snz;
  setTimeout(()=>{
    c3.generate({
      bindto: el,
      data: {
        x:"x",
        columns: [
          ["x",...name],
          ['本年值', ...bnz],
          ['上年值', ...snz]
        ],
        type: 'bar'
      },padding: {
        right: 20,
        left: 40,
      },
      axis: {
        x: {
          type: 'category',
        }
      },
      legend: {
        show: false
      },
      bar: {
        width: {
          ratio: 0.5
        }
      },color: {
        pattern: color
      },
      tooltip: {
        format: {
          value: function (value, ratio, id) {
            return value+"万";
          }
        }
      }
    });
  },100);
}

/**
 * 费用类别分析 扇形图表
 * @param data
 * @param el
 */
export function costTypeChart(data:FundAnalysisDetailsCostTypeVo[],el,color){
  let da:any = [];
  data.forEach(d=>{
    let a:any = [];
    a.push(d.name);
    a.push(d.value);
    da.push(a);
  });
  setTimeout(()=>{
    c3.generate({
      bindto: el,
      data: {
        columns: da,
        type: 'pie'
      },
      legend: {
        show: false
      },
      bar: {
        width: {
          ratio: 0.5
        }
      },color: {
        pattern: color
      },
      tooltip: {
        format: {
          value: function (value, ratio, id) {
            return value+"万";
          }
        }
      }
    });
  },100);

}

/**
 * 医院等级分析 扇形图表
 * @param data
 * @param el
 */
export function hospitalLevelCharts(data:FundAnalysisDetailsHospLevelVo[],el,color){

  let da:any = [];
  data.forEach(d=>{
    let a:any = [];
    a.push(d.name);
    a.push(d.value);
    da.push(a);
  });
  setTimeout(()=>{
    c3.generate({
      bindto: el,
      data: {
        columns: da,
        type: 'pie'
      },
      legend: {
        show: false
      },
      bar: {
        width: {
          ratio: 0.5
        }
      },color: {
        pattern: color
      },
      tooltip: {
        format: {
          value: function (value, ratio, id) {
            return value+"万";
          }
        }
      }
    });
  },100);


}
