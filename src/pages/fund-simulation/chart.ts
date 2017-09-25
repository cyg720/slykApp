import {FundSimulationDetailsHospitalVo} from "./vo/FundSimulationDetailsHospital";
import {FundSimulationDetailsAgeVo} from "./vo/FundSimulationDetailsAge";
import {FundSimulationDetailsHospLevelVo} from "./vo/FundSimulationDetailsHospLevel";
declare let c3;
/**
 * 医院仿真情况
 * @param c3
 * @param data
 * @param el
 */
export function hospitalChartSim(data:FundSimulationDetailsHospitalVo,el,color){

  let name = data.name;
  let sjz = data.sjz;
  let fzz = data.fzz;
  setTimeout(()=>{
    c3.generate({
      bindto: el,
      data: {
        x:"x",
        columns: [
          ["x",...name],
          ['实际值', ...sjz],
          ['仿真值', ...fzz]
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
            return value+"万";
          }
        }
      }
    });
  },100);
}

/**
 * 年龄段 图表分析
 * @param data
 * @param el
 */
export function ageChartSim(data:FundSimulationDetailsAgeVo,el,color){
  let name = data.ageName;
  let sjz = data.sjz;
  let fzz = data.fzz;
  setTimeout(()=>{
    c3.generate({
      bindto: el,
      data: {
        x:"x",
        columns: [
          ["x",...name],
          ['实际值', ...sjz],
          ['仿真值', ...fzz]
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
 * 医院等级 图表
 * @param data
 * @param el
 */
export function hospLevelChartSim(data:FundSimulationDetailsHospLevelVo,el,color){
  let name = data.hospLevelName;
  let sjz = data.sjz;
  let fzz = data.fzz;
  let lbh = data.lbh;
  setTimeout(()=>{
    c3.generate({
      bindto: el,
      data: {
        x:"x",
        columns: [
          ["x",...name],
          ['实际值', ...sjz],
          ['仿真值', ...fzz],
          ['量变化', ...lbh]
        ],
        type: 'bar'
      },
      color: {
        pattern: color
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
          ratio: 0.3
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
