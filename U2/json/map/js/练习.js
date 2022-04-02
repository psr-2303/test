var myChart = echarts.init(document.getElementById("root"));

var option = {
    // 图例
    legend: {

    },
    // 坐标轴
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },

    series: [
        {
            name: '直接访问',
            type: 'bar',
            stack: 'ye',
            data: [320, 332, 301, 334, 390, 330, 320],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    }
                },
                emphasis:{
                    focus: 'series'
                }

            }
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: 'ye',
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    }
                },
                emphasis:{
                    focus: 'series'
                }

            }
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: 'ye',
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    }
                },
                emphasis:{
                    focus: 'series'
                }

            }
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: 'ye',
            data: [150, 212, 201, 154, 190, 330, 410],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    }
                },
                emphasis:{
                    focus: 'series'
                }

            }
        },
        {
            name: '搜索引擎',
            type: 'bar',
            stack: 'ye',
            data: [820, 832, 901, 934, 1290, 1330, 1320],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    }
                },
                emphasis:{
                    focus: 'series'
                }

            }
        }
    ]
}

myChart.setOption(option);