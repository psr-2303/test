//基于准备好的DOM，初始化ECharts图表
var myChart = echarts.init(document.getElementById("main"));

var option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        top: '7%',
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
        right: '6%',
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            smooth: true,   //设置平滑
            lineStyle: {    //设置折线宽度
                width: 0,
            },
            showSymbol: false,  //不显示标记点
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            smooth: true,   //设置平滑
            lineStyle: {    //设置折线宽度
                width: 0,
            },
            showSymbol: false,  //不显示标记点
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            smooth: true,   //设置平滑
            lineStyle: {    //设置折线宽度
                width: 0,
            },
            showSymbol: false,  //不显示标记点
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            smooth: true,   //设置平滑
            lineStyle: {    //设置折线宽度
                width: 0,
            },
            showSymbol: false,  //不显示标记点
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            smooth: true,   //设置平滑
            lineStyle: {    //设置折线宽度
                width: 0,
            },
            showSymbol: false,  //不显示标记点
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

//使用刚指定的配置项和数据显示图表
myChart.setOption(option);