var dom_1 = document.getElementById("main_1");
var myChart_1 = echarts.init(dom_1);
var app_1 = {};

var option;

var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples'

$.get(ROOT_PATH + '/data/asset/data/flare.json', function (data) {
  myChart_1.hideLoading();
  data.children.forEach(function (datum, index) {
    index % 2 === 0 && (datum.collapsed = true);
  });
  myChart_1.setOption(
    (option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',
          data: [data],
          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',
          symbolSize: 7,
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              // verticalAlign: 'top',
              align: 'left', 
              // overflow: 'break',
            }
          },
          emphasis: {
            focus: 'descendant'
          },
          // // 默认打开
          // expandAndCollapse: true,
          // // 初始动画的时长
          // animationDuration: 550,
          // // 图例翻页时的动画时长。
          // animationDurationUpdate: 750,
          
          // 当layout = 'orthogonal'
          // layout:'orthogonal',
          // orient: 'TB'


        }
      ]
    })
  );
});

if (option && typeof option === 'object') {
    myChart_1.setOption(option1);
}