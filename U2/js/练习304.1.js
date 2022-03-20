//基于准备好的DOM，初始化ECharts图表
var myChart = echarts.init(document.getElementById("main"));

var ROOT_PATH =
   'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
const weatherIcons = {
   Sunny: ROOT_PATH + '/data/asset/img/weather/sunny_128.png',
   Cloudy: ROOT_PATH + '/data/asset/img/weather/cloudy_128.png',
   Showers: ROOT_PATH + '/data/asset/img/weather/showers_128.png'
};

//指定图表的配置项和数据
var option = {
   title: {
      text: '天气情况统计',
      subtext: '虚构数据',
      left: 'center'
   },
   tooltip: {
      trigger: 'item',
      formatter: '城市  数据/占比 <br/>{b} : {c} ({d}%)'
   },
   legend: {
      // orient: 'vertical',
      // top: 'middle',
      bottom: 10,
      left: 'center',
      data: ['西凉', '益州', '兖州', '荆州', '幽州']
   },
   series: [
      {
         type: 'pie',
         radius: '65%',
         center: ['50%', '50%'],
         selectedMode:'single',
         selectedOffset:10,
         data: [
            {
               value: 1548, name: '幽州',
               label: {
                  formatter: [
                     '{title|{b}}{abg|}',
                     ' {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
                     '{hr|}',
                     ' {Sunny|}{value|202}{rate|55.3%}',
                     ' {Cloudy|}{value|142}{rate|38.9%}',
                     ' {Showers|}{value|21}{rate|5.8%}'
                  ].join('\n'),
                  backgroundColor: '#eee',
                  borderColor: '#777',
                  borderWidth: 1,
                  borderRadius: 4,
                  rich: {
                     title: {
                        color: '#eee',
                        align: 'center'
                     },
                     abg: {
                        backgroundColor: '#333',
                        width: '100%',
                        align: 'right',
                        height: 25,
                        borderRadius: [4, 4, 0, 0]
                     },
                     Sunny: {
                        height: 30,
                        align: 'left',
                        backgroundColor: {
                           image: weatherIcons.Sunny
                        }
                     },
                     Cloudy: {
                        height: 30,
                        align: 'left',
                        backgroundColor: {
                           image: weatherIcons.Cloudy
                        }
                     },
                     Showers: {
                        height: 30,
                        align: 'left',
                        backgroundColor: {
                           image: weatherIcons.Showers
                        }
                     },
                     weatherHead: {
                        color: '#333',
                        height: 24,
                        align: 'left'
                     },
                     hr: {
                        borderColor: '#777',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                     },
                     value: {
                        width: 10,
                        padding: [0, 20, 0, 30],
                        align: 'right'
                     },
                     valueHead: {
                        color: '#333',
                        width: 10,
                        padding: [0, 20, 0, 30],
                        align: 'center'
                     },
                     rate: {
                        width: 20,
                        align: 'right',
                        padding: [0, 10, 0, 0]
                     },
                     rateHead: {
                        color: '#333',
                        width: 20,
                        align: 'center',
                        padding: [0, 10, 0, 0]
                     }
                  }

               }
            },
            { value: 535, name: '荆州' },
            { value: 510, name: '兖州' },
            { value: 634, name: '益州' },
            { value: 735, name: '西凉' }
         ],
         emphasis: {
            itemStyle: {
               shadowBlur: 10,
               shadowOffsetX: 2,
               shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
         },
         
      }
   ]
};

// 使用刚指定的配置项和数据显示图表 setOption设置配置
myChart.setOption(option);

