//基于准备好的DOM，初始化ECharts图表
var myChart = echarts.init(document.getElementById("main"));

//指定图表的配置项和数据
var option = {
    // 乌拉！
    color: ['#f3a683', '#f7d794', '#778beb', '#e77f67', '#cf6a87', '#f19066', '#f5cd79', '#546de5', '#e15f41', '#c44569', '#786fa6', '#f8a5c2', '#63cdda', '#ea8685', '#596275', '#574b90', '#f78fb3', '#3dc1d3', '#e66767', '#303952'],

    legend: {
        show: true,
        data: ['蒸发量', '降水量', '最高气温', '最低气温'],
    },

    xAxis: [
        {
            type: 'category',
            position: "bottom",
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLine: {
                show: true,

            }

        },
        {
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }],
    yAxis: [
        {
            type:"value",
            position:"left",
        }, 
        {
            type:"value",
            position:"right",
            
        }
    ],
    series: [
        {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],

        },
        {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        },
        {
            name: '最高气温',
            smooth: true,
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
        },
        {
            name: '最低气温',
            smooth: true,
            type: "line",
            yAxisIndex:1,
            data: [12.0, 12.2, 13.3, 14.5, 16.3, 18.2, 28.3,33.4, 31.0, 24.5, 18.0, 16.2],
        }
    ]
};

// 使用刚指定的配置项和数据显示图表 setOption设置配置
myChart.setOption(option);