
//基于准备好的DOM，初始化ECharts图表
var myChart = echarts.init(document.getElementById("main"));

function getVirtulData() {
    // new Date()当前时间 parseDate时间
    var today = echarts.number.parseDate(new Date());
    var dayTime = 3600 * 24 * 1000;
    var thatday = today - dayTime * 365;

    var data = [];
    for (var time = thatday; time < today; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 1000)
        ]);

    }
    return {
        data,
        today: echarts.format.formatTime('yyyy-MM-dd', today),
        thatday: echarts.format.formatTime('yyyy-MM-dd', thatday),
    };
}

option = {
    tooltip:{
        trigger:'item',
        formatter: '日期,数值 <br> {c}',
        borderColor:'#fff',
    },
    visualMap: {
        show: false,
        min: 0,
        inRange: {
            color: ['#1E90FF', '#AFEEEE', '#00CED1', '#48D1CC', '#40E0D0', '#00FFFF']
        },
        max: 10000,
    },
    // 日历
    calendar: {
        // 范围
        range: [getVirtulData()['thatday'], getVirtulData()['today']],
        itemStyle: {
            borderColor: "#fff",
            borderWidth: 8,
        },
        // 取消分割线
        splitLine: {
            show: false,
        }
    },
    label: {
        // show:true,
    },
    series: {
        name: '热力图',
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtulData()['data'],
    },
    emphasis:{
        focus: 'self'
    }
};


myChart.setOption(option);
