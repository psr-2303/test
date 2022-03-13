//初始化
var myChart = echarts.init(document.getElementById("main"));

var option = {
    title: {
        text: '降水量 vs 蒸发量',
        subtext: 'Fake Data',
    },
    legend: {

    },
    toolbox: {
        show: true,
        right: "5%",
        feature: { //配置项
            dataView: {//数据图表
                show: true,
            },
            magicType: { //切换图表类型
                type: ['line', 'bar'],
            },
            restore: {
                show: true,
            },
            saveAsImage: {
                type: 'png',
            },

            myTool0: {
                show: true,

            }
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
        },
        borderColor: '#fff',
    },
    xAxis: {

        type: "category",

        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        // splitNumber: 1,//类目无效
        // splitLine: { //分割线
        //     show: true,
        //     interval: 6,
        //     lineStyle: {
        //         type: "dashed",
        //         dashOffset: 10,
        //     }
        // }
    },
    yAxis: [
        {
            type: "value",
            alignTicks: true,

        },
        {
            type: "value",
            show: false,

        },

    ],
    series: [
        {
            name: '降水量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
                // show:true,
                symbolSize: 40,
                data: [//标注点
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                ]
            },
            markLine: {//标记线
                precision: 1,
                data: [
                    {
                        name: "平均线",
                        type: 'average',

                    }
                ],
                label: {
                    show: true,
                    formatter: "{c}",
                    fontSize: 9,
                }
            }
        },
        {
            name: '蒸发量',
            type: 'bar',
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
                // show:true,

                data: [//标注点
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }

                ],

            },
            markLine: {//标记线
                precision: 1,
                data: [
                    {
                        name: "平均线",
                        type: 'average'
                    },
                    // {   
                    //     name:'标线',
                    //     coord:[10,12],
                    // }
                ],
                label: {
                    show: true,
                    formatter: "{c}",
                    fontSize: 9,
                }
            },

        },
    ]
}

myChart.setOption(option);