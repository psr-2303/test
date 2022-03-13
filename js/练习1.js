// 初始化图表
var myChart = echarts.init(document.getElementById("main"));
// 图表配置
var option = {
    title: {
        text: "World Population",
    },
    legend: {
        show: true,

    },

    xAxis: {
        // data:["2011","2012"],
    },
    yAxis: {
        data: ["Brazil", "Indonesia", "USA", "India", "China", "World",]
    },
    markPoint:{

    },
    markLine:{},
    dataZoom:{},
    toolbox:{},
    tooltip:{},
    // visualMap:{},
    series: [
        {
            name: "2011",
            type: "bar",
            color:"#a29bfe",
            data: [18203,23489,29034, 104970,131744,630230]
        },
        {
            name: "2012",
            type: "bar",
            color:"#74b9ff",        
            data: [19325,23438,31000,121594,134141,681807]
        }
     
    ]
}

// 使用刚指定的配置项显示
myChart.setOption(option);