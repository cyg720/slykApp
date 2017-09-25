declare let c3;
/**
 * 医院仿真情况
 * @param c3
 * @param data
 * @param el
 */
export function TotalCtrlChart(data,el){
  setTimeout(()=>{
    c3.generate({
      bindto: el,
      data: {
        columns: [
          ['使用率', data]
        ],
        type: 'gauge'
      },
      gauge: {
        label: {
          format: function(value, ratio) {
            return value+'%'
          },
          show: true
        },
        width: 10
      },
      color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'],
        threshold: {
          values: [30, 60, 90, 100]
        }
      },
      size: {
        height: 180
      }
    });
  },100);
}
