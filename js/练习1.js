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
        // {
        //     name:"Brazil",
        //     type:"bar",
        //     data:[18203,19325],
        // },
        // {
        //     name:"Indonesia",
        //     type:"bar",
        //     data:[23489,23438],
        // },
        // {
        //     name:"USA",
        //     type:"bar",
        //     data:[29034,31000],
        // },
        // {
        //     name:"India",
        //     type:"bar",
        //     data:[104970,121594],
        // },
        // {
        //     name:"China",
        //     type:"bar",
        //     data:[131744,134141],
        // },
        // {
        //     name:"World",
        //     type:"bar",
        //     data:[630230,681807],
        // }
    ]
}

// 使用刚指定的配置项显示
myChart.setOption(option);