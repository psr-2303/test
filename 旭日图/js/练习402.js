//初始化
var myChart = echarts.init(document.getElementById("main"));


$.ajax({
    type: 'get',
    url: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/flare.json',
    dataType: 'json',
    success: function (res) {
        console.log(res)
        let data_1 = res.children
        console.log(data_1)

        cak(data_1)
        function cak(data) {
            var option = {
                visualMap: {
                    type: 'continuous',
                    min: 0,
                    max: 20000,
                    inRange: {
                        color: ['#CA9972', '#C0A139', '#413632', '#B43E34','#E0D9C4']
                    }
                },
                series: {
                    type: 'sunburst',
                    data: data,
                    radius: ["30%", "100%"],
                    label: {
                        // 最小角度不显示该文字
                        minAngle:40,
                        fontSize:10,
                        // rotate: 0,
                        // show: false,
                        align: 'center',
                        // 也可设置维度
                        formatter: '{b}'
                    },
                    // 圆角
                    // itemStyle: {
                    //     borderRadius: 7,
                    //     borderWidth: 2
                    //     },
                    // 高亮
                    emphasis: {
                        // 聚焦祖先节点(ancestor)或者子孙节点（默认）
                        focus: 'ancestor'
                    },
                    levels: [
                        {}, //空白，留给数据下钻点
                        { //最内侧
                            radius: ["10%", "20%"],
                            itemStyle: {
                                color: '#CD4949'
                            },
                            label: {
                                rotate: 0
                            }

                        },
                        {
                            radius: ["20%", "40%"],
                            itemStyle: {
                                color: '#F47251'
                            },
                            label: {
                                // show:false,
                                rotate: 'radial'
                            }
                        },
                        {
                            radius: ["40%", "60%"],
                            itemStyle: {
                                color: '#FFC75F'
                            },
                            label: {
                                // show:false,
                                rotate: 'radial'

                            },
                        },
                        {
                            radius: ["60%", "80%"],
                            label: {
                                // show:false,
                                // rotate: 0
                                position: 'outside',
                                rotate: 'tangential',
                            }
                        }, ,
                        {
                            radius: ["80%", "90%"],
                            label: {
                                // rotate: 0
                                position: 'outside',
                                rotate: 'tangential',
                            }
                        },

                    ]

                }


            }
            myChart.setOption(option);
        }
    }
})

// 分割线