//基于准备好的DOM，初始化ECharts图表
var myChart = echarts.init(document.getElementById("main"));
var pieData = [
    {
        value: 11231,
        name: "淘宝",
    },
    {
        value: 22673,
        name: "京东"
    },
    {
        value: 6123,
        name: "唯品会"
    },
    {
        value: 8989,
        name: "1号店"
    },
    {
        value: 6700,
        name: "聚美优品"
    }
]


//指定图表的配置项和数据
var option = {
    //    radius:["50%","75%"] 圆环
    series: [
        {
            type: 'pie',
            data: pieData,
            label: {
                show: true,
                formatter: function (arg) {
                    return arg.data.name + '平台' + arg.data.value + '元\n' +
                        arg.percent + '%'
                }
            },
            // roseType: 'radius' 
            // 偏移
            selectedMode: 'multiple', 
            selectedOffset: 30,
            radius: ["50%", "75%"],
        },
        {
            name: "销售方式",
            type: 'pie',
            radius: "30%",
            label: {
                position: "inner"
            },
            data: [
                { value: 335, name: '超市' },
                { value: 679, name: '商场' },
                { value: 1548, name: '线上平台',selected:true }
            ],
            selectedMode: 'multiple', 
            selectedOffset:20,
        
        }
    ]
};

// 使用刚指定的配置项和数据显示图表 setOption设置配置
myChart.setOption(option);

