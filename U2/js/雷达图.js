var myChart = echarts.init(document.getElementById("main"));
// 设定维度
var dataMax = [
    {
        name: '易用性', max: 100
    },
    {
        name: '功能', max: 100
    },
    {
        name: '拍照', max: 100
    },
    {
        name: '跑分', max: 100
    },
    {
        name: '续航', max: 100
    }

]

// 具体数据
var hwScore = [80, 90, 80, 82, 90]
var zxScore = [70, 82, 75, 70, 78]

var option = {
    // 维度 ,必备
    radar: [{
        indicator: dataMax,
        // 绘制类型
        shape: 'circle',//'polygon' : 多边形
        // 位置
        center: ['20%', '30%'],
        radius: '30%', //缩小雷达图
    },
    {
        indicator: dataMax,
        // 绘制类型
        shape: 'circle',//'polygon' : 多边形
        radius: '30%', //缩小雷达图
        center: ['40%', '50%'],
    },
    {
        indicator: dataMax,
        // 绘制类型
        shape: 'circle',//'polygon' : 多边形
        radius: 50, //缩小雷达图
        center: ['70%', '90%'],
    },
    ],
    legend: {
        
    },
    series: [
        {
            indicator: dataMax,//雷达图,必备
            symbol:'none', //图形
            type: 'radar',

            data: [ //共享维度，所以同一个data
                {
                    name: '华为手机1',
                    value: hwScore
                },
                {
                    name: '中兴手机1',
                    value: zxScore
                }
            ],
            label: {
                show: true,
            },
            areaStyle: {

            },
        },
        {
            type: 'radar',//雷达图,必备
            // Symbol:'none', //图形
            radarIndex: 1,
            data: [ //共享维度，所以同一个data
                {
                    name: '华为手机1',
                    value: hwScore
                },
                {
                    name: '中兴手机1',
                    value: zxScore
                }
            ],
            label: {
                show: true,
            },
            areaStyle: {

            },
        },
        {
            type: 'radar',//雷达图,必备
            // Symbol:'none', //图形
            radarIndex: 2,
            data: [ //共享维度，所以同一个data
                {
                    name: '华为手机1',
                    value: hwScore
                },
                {
                    name: '中兴手机1',
                    value: zxScore
                }
            ],
            label: {
                show: true,
            },
            areaStyle: {

            },
        }
    ]

}

myChart.setOption(option);