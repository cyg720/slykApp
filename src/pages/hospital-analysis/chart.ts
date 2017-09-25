import {HospitalAnalysisDetailsAgeVo} from "./vo/HospitalAnalysisDetailsAge";
import {HospitalAnalysisDetailsPayVo} from "./vo/HospitalAnalysisDetailsPay";
import {HospitalAnalysisDetailsTotalVo} from "./vo/HospitalAnalysisDetailsTotal";
import {HospitalAnalysisDetailsCostTypeVo} from "./vo/HospitalAnalysisDetailsCostType";
declare let c3;

/**
 * 年龄段 图表分析
 * @param data
 * @param el
 */
export function ageAnalysisChartHosp(data:HospitalAnalysisDetailsAgeVo,el,color){
  let name = data.ageName;
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
      },color: {
        pattern: color
      },
      bar: {
        width: {
          ratio: 0.2
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
 * 统筹 支付费用和
 * @param data
 * @param el
 */
export function wholePayCostChartHosp(data:HospitalAnalysisDetailsPayVo,el,color){
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
 * 统筹 支付费用和
 * @param data
 * @param el
 */
export function totalCostChartHosp(data:HospitalAnalysisDetailsTotalVo,el,color){
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
      },color: {
        pattern: color
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
 * 费用 类别 分析
 * @param data
 * @param el
 */
export function costTypeChart(data:HospitalAnalysisDetailsCostTypeVo[],el,color){

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
      },color: {
        pattern: color
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
