var myChart = echarts.init(document.getElementById("main"));
var builderJson = {
    "all": 10887,
    "charts": {  //各ECharts图表的json数据
        "地理坐标图": 3237, "路径图": 2164, "柱状图": 7561, "折线图": 7778,
        "饼图": 7355, "散点图": 2405, "K线图": 1842, "雷达图": 2090,
        "热力图": 1762, "矩形树图": 1593, "关系图": 2060, "盒须图": 1537,
        "平行坐标系": 1908, "仪表盘图": 2107, "漏斗图": 1692, "桑基图": 1568
    },
    "components": {  //各ECharts组件的json数据
        "地理坐标系组件": 2788, "标题组件": 9575, "图例组件": 9400,
        "提示组件": 9466, "直角坐标系组件": 9266, "图表标注组件": 3419,
        "图表标线组件": 2984, "时间线组件": 2739, "区域缩放组件": 2744,
        "视觉映射组件": 2466, "工具框组件": 3034, "极坐标系组件": 1945
    },
    "ie": 9743
};
var downloadJson = {  //各ECharts版本下载的json数据
    "完整版": 17365, "精简版": 4079,
    "常用版": 6929, "源代码版": 14890
};
var themeJson = {  //各ECharts下载的主题json数据
    "黑色主题": 1594, "信息主题": 925, "明亮主题": 1608,
    "罗马主题": 721, "马卡龙主题": 2179, "复古主题": 1982
};
var option = {
    title: [{  //配置标题组件
        text: '在线构建次数',
        subtext: '总计 ' + Object.keys(builderJson.charts).reduce(function (all, key) {
            return all + builderJson.charts[key];
        }, 0),
        x: '25%',
        textAlign: 'center'
    }, {  //配置标题组件
        text: '各图表组件的使用次数',
        subtext: '总计 ' + Object.keys(builderJson.components).reduce(function (all, key) {
            return all + builderJson.components[key];
        }, 0),
        x: '25%', y: '53%',
        textAlign: 'center'
    },{
        text: '各版本下载',
        subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
            return all + downloadJson[key];
        }, 0),
        x: '75%', textAlign: 'center'
    }, {
        text: '主题下载',
        subtext: '总计 ' + Object.keys(themeJson).reduce(function (all, key) {
            return all + themeJson[key];
        }, 0),
        x: '75%', y: '53%',
        textAlign: 'center'
    }],
    grid:[{  //配置网格组件
        top: '8%', width: '50%', bottom: '50%',
        left: 10, containLabel: true
    },
    {
        top: '58%', width: '50%',
        bottom: 0, top: '60%', left: 10, containLabel: true
    }
    ],
    xAxis:  [{  //配置x轴坐标系
        type: 'value',
        max: builderJson.all,
        splitLine: { show: false }
    }, {
        type: 'value',
        max: builderJson.all,
        gridIndex: 1,
        splitLine: { show: false }
    }],
    yAxis: [{  //配置y轴坐标系
        type: 'category',
        data: Object.keys(builderJson.charts),
        axisLabel: { rotate: 20 },
        splitLine: { show: false }
    }, {
        gridIndex: 1,
        type: 'category',
        data: Object.keys(builderJson.components),
        axisLabel: { rotate: 20 },
        splitLine: { show: false }
    }],
    series: [
        {
            type: 'bar',
            // 堆积图 名字一样
            stack: 'chart',
            z: 3,
            label: {
                position: 'right',
                show: true
            },
            // map遍历
            data: Object.keys(builderJson.charts).map(function (key) {
                return builderJson.charts[key];
            })
        },
        {
            type: 'bar', stack: 'chart', silent: true,
            itemStyle: { color: '#eee' },
            data: Object.keys(builderJson.charts).map(function (key) {
                return builderJson.all - builderJson.charts[key];
            })
        },
        {
            type: 'bar', stack: 'component', xAxisIndex: 1, yAxisIndex: 1, z: 3,
            label: { position: 'right', show: true },
            data: Object.keys(builderJson.components).map(function (key) {
                return builderJson.components[key];
            })
        },
        {
            type: 'bar', stack: 'component', silent: true,
            xAxisIndex: 1, yAxisIndex: 1,
            itemStyle: { color: '#eee' },
            data: Object.keys(builderJson.components).map(function (key) {
                return builderJson.all - builderJson.components[key];
            })
        },
        {
            type: 'pie', radius: [0, '30%'], center: ['75%', '25%'],
            data: Object.keys(downloadJson).map(function (key) {
                return {
                    name: key.replace('.js', ''),
                    value: downloadJson[key]
                }
            })
        }, {
            type: 'pie', radius: [0, '30%'], center: ['75%', '80%'],
            data: Object.keys(themeJson).map(function (key) {
                return {
                    name: key.replace('.js', ''),
                    value: themeJson[key]
                }
            })
        }
    ]
}
myChart.setOption(option);  //为echarts对象加载数据 