//初始化
var myChart = echarts.init(document.getElementById("main"));

var option = {
    // 乌拉！
    color: ['#63cdda', '#ea8685', '#786fa6', '#f8a5c2', '#f19066', '#f5cd79', '#546de5', '#e15f41', '#c44569', '#596275', '#574b90', '#f78fb3', '#3dc1d3', '#e66767', '#303952', '#f3a683', '#f7d794', '#778beb', '#e77f67', '#cf6a87'],
    legend: {

    },
    toolbox: {

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {  
            type: 'shadow',  
        },
        borderColor:'#fff',
    },
    xAxis: {
        type: "value",
    },
    yAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    series: [

        {
            name: '直接访问',
            type: 'bar',
            stack: "233",
            data: [320, 332, 301, 334, 390, 330, 320],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    }
                },
                emphasis: {  //鼠标经过
                    focus: 'series',
                }


            }
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: "233",
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    }
                },
                emphasis: {  
                    focus: 'series',
                },
            },
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: "233",
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    }
                },
                emphasis: {  
                    focus: 'series',
                },
            },
        }
        ,
        {
            name: '搜索引擎',
            type: 'bar',
            stack: "233",
            data: [820, 832, 901, 934, 1290, 1330, 1320],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    }
                },
                emphasis: {  
                    focus: 'series',
                },
            },
        }
    ]

}

myChart.setOption(option);