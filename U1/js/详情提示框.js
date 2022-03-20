//基于准备好的DOM，初始化ECharts图表
var myChart = echarts.init(document.getElementById("main"));
//指定图表的配置项和数据
var xDataArr = ['张三', '李四', '王五', '赵六', '刘七', '陈八', '肖九', '谢十']
var yDataArr = [88, 92, 63, 77, 94, 80, 72, 86]


var option = {
    title: {
        text: "成绩"
    },
    tooltip:{ //详情提示框

    },
    xAxis: {
        type: 'category',
        data: xDataArr
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            type: 'bar',
            data: yDataArr
        }
    ]


};

// 使用刚指定的配置项和数据显示图表 setOption设置配置
myChart.setOption(option);

