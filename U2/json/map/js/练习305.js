var myChart = echarts.init(document.getElementById("main"));
// 设定维度
var dataMax = [
    {
        name: '品牌', max: 100
    },
    {
        name: '内容', max: 100
    },
    {
        name: '可用性', max: 100
    },
    {
        name: '功能', max: 100
    },
]
var dataMax1 = [
    {
        name: '外观', max: 100
    },
    {
        name: '拍照', max: 100
    },
    {
        name: '系统', max: 100
    },
    {
        name: '性能', max: 100
    },
    {
        name: '屏幕', max: 100
    },
]
dataMax2=[
    {
        name: '1月', max: 100
    },
    {
        name: '2月', max: 100
    },
    {
        name: '3月', max: 100
    },
    {
        name: '4月', max: 100
    },
    {
        name: '5月', max: 100
    },
    {
        name: '6月', max: 100
    },
    {
        name: '7月', max: 100
    },
    {
        name: '8月', max: 100
    },
    {
        name: '9月', max: 100
    },
    {
        name: '10月', max: 100
    },
    {
        name: '11月', max: 100
    },
    {
        name: '12月', max: 100
    },
]
    
var data_1 = [60, 73, 85, 40]
var data_2 = [85, 90, 90, 95, 95]
var data_3 = [95, 80, 95, 90, 93]
var data_4 = [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3]
var data_5 = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]

var option = {
    color: ["#b8e994", "#82ccdd", "#6a89cc", "#f8c291", "#cd84f1",'#ea8685',],
    title:{
        text:"多雷达图",
    },
    tooltip: {},
    legend: {
        // data: ['某软件','某主食手机','某水果手机','降水量','蒸发量',],
    },
    radar: [
        {
            indicator: dataMax,
            radius:"30%",
            center:["20%","40%"],
        },
        {
            indicator: dataMax1,
            radius:"30%",
            center:["40%","60%"],
        },
        {
            indicator: dataMax2,
            shape: 'circle', //绘制圆形
            radius:"30%",
            
            center:["80%","40%"],
        },
    ],
    series: [
        
        {
            type: "radar",
            data: [
                
                {
                    name: '某软件',
                    value: data_1,
                }
            ],
            areaStyle: {

            }
        },
        {
            type: "radar",
            radarIndex: 1,
            data: [
    
                {
                    name: '某主食手机',
                    value: data_2,
                },
                {
                    name: '某水果手机',
                    value: data_3,
                }
            ],
            areaStyle: {
                
            }
        },

        {
            type: "radar",
            radarIndex: 2,
            symbol:'none',
            data: [
                {
                    name: '降水量',
                    value: data_4,
                },
                {
                    name: '蒸发量',
                    value: data_5,
                }
            ],
            areaStyle: {
                
            }
        }

    ]
}

myChart.setOption(option);