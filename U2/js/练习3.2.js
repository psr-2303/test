//初始化
var myChart = echarts.init(document.getElementById("main"));

var option = {
   color: ["#b8e994", "#82ccdd", "#6a89cc", "#f8c291", "#cd84f1"],
   title: {
      x: 50,
      text: "堆叠区域图"
   },
   grid: {
      x: 50,
      y: 80,
      containLabel: true, //包含坐标轴

   },
   legend: {
      y: 40,
   },
   toolbox: {
      x2: 70,
      feature: {
         saveAsImage: {
            type: "png",
         }
      }
   },
   tooltip: {
      trigger: 'axis',
      axisPointer: {
         type: "cross",//默认显示标签

      }
   },
   xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      boundaryGap: false,
   },
   yAxis: {

   },
   series: [
      {
         name: '邮件营销',
         type: 'line',
         stack: "233",
         data: [120, 132, 101, 134, 90, 230, 210],
         smooth: true, //平滑
         areaStyle: { //让线和x轴形成一个面
             opacity:0.6,
             color: {

               type: 'linear',
               x: 0.2,
               y: 0.7,
               x2: 0.4,
               y2: 1,
               colorStops: [{
                  offset: 0,
                  color: '#b8e994',
               }, {
                  offset: 1,
                  color: '#079992',
               }
               ]
            }

         },
         lineStyle: {//折线宽度
            width: 0,
         },
         showSymbol: false,//不显示标记点
         emphasis: {
            focus: 'series',
         }
      },

      {
         name: '联盟广告',
         type: 'line',
         stack: "233",
         data: [220, 182, 191, 234, 290, 330, 310],
         smooth: true,
         areaStyle: {
            opacity:0.6,
             color: {

               type: 'linear',
               x: 0.2,
               y: 0,
               x2: 0.6,
               y2: 1,
               colorStops: [{
                  offset: 0,
                  color: '#82ccdd',
               }, {
                  offset: 1,
                  color: '#ffb8b8',
               }
               ]
             }
         },
         lineStyle: {//折线宽度
            width: 0,
         },
         showSymbol: false,
         emphasis: {
            focus: 'series',
         }

      },
      {
         name: '视频广告',
         type: 'line',
         stack: "233",
         data: [150, 212, 201, 154, 190, 330, 410],
         smooth: true,
         areaStyle: {
            opacity:0.6,
            color: {

              type: 'linear',
              x: 0.2,
              y: 0,
              x2: 0.6,
              y2: 1,
              colorStops: [{
                 offset: 0,
                 color: '#6a89cc',
              }, {
                 offset: 1,
                 color: '#7efff5',
              }
              ]
            }
         },
         lineStyle: {//折线宽度
            width: 0,
         },
         showSymbol: false,
         emphasis: {
            focus: 'series',
         }

      },
      {
         name: '直接访问',
         type: 'line',
         stack: "233", //推叠
         data: [320, 332, 301, 334, 390, 330, 320],
         smooth: true,
         areaStyle: {
            opacity:0.6,
            color: {

              type: 'linear',
              x: 0.2,
              y: 0,
              x2: 0.6,
              y2: 1,
              colorStops: [{
                 offset: 0,
                 color: '#f8c291',
              }, {
                 offset: 1,
                 color: '#fa983a',
              }
              ]
            }
         },
         lineStyle: {//折线宽度
            width: 0,
         },
         showSymbol: false,
         emphasis: {
            focus: 'series',
         }

      },

      {
         name: '搜索引擎',
         type: 'line',
         stack: "233",
         data: [820, 832, 901, 934, 1290, 1330, 1320],
         smooth: true,
         areaStyle: {
            opacity:0.6,
            color: {

              type: 'linear',
              x: 0.2,
              y: 0,
              x2: 0.6,
              y2: 1,
              colorStops: [{
                 offset: 0,
                 color: '#cd84f1',
              }, {
                 offset: 1,
                 color: '#a29bfe',
              }
              ]
            }
         },
         lineStyle: {//折线宽度
            width: 0,
         },
         showSymbol: false,
         emphasis: {
            focus: 'series',
         }

      },

   ]
}

myChart.setOption(option);