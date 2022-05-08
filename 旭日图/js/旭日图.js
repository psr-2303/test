//初始化
var myChart = echarts.init(document.getElementById("main"));

var data = [
    {
        name: 'Grandpa',
        children: [
            {
                name: 'Uncle Leo',
                value: 15,
                children: [
                    {
                        name: 'Cousin Jack',
                        value: 2
                    },
                    {
                        name: 'Cousin Mary',
                        value: 5,
                        children: [
                            {
                                name: 'Jackson',
                                value: 2
                            }
                        ]
                    },
                    {
                        name: 'Cousin Ben',
                        value: 4
                    }
                ]
            },
            {
                name: 'Father',
                value: 10,
                children: [
                    {
                        name: 'Me',
                        value: 5
                    },
                    {
                        name: 'Brother Peter',
                        value: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'Nancy',
        children: [
            {
                name: 'Uncle Nike',
                children: [
                    {
                        name: 'Cousin Betty',
                        value: 1
                    },
                    {
                        name: 'Cousin Jenny',
                        value: 2
                    }
                ]
            }
        ]
    }
];
var option = {
    visualMap: {
        type: 'continuous',
        min: 0,
        max: 10,
        inRange: {
            color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
        }
    },

    series: {
        type: 'sunburst',
        data: data,
        radius: ["30%", "100%"],
        // 切向旋转tangential 径向旋转默认radial
        // right靠近外圈，left 靠近内圈
        rotate:'radial', 
        label: {

            rotate: 0,
            align: 'center',
            // 也可设置维度
            formatter: '{b}:{c}'
        },
        itemStyle: {
            borderRadius: 7,
            borderWidth: 2
            },
        emphasis: {
            // 聚焦祖先节点(ancestor)或者子孙节点（默认）
            focus: 'ancestor'
        },
        // 多层配置
        levels: [
            {}, //空白，留给数据下钻点
            { //最内侧
                radius: ["10%", "35%"],
                itemStyle: {
                    color: '#CD4949'
                },
                label: {
                    rotate: 0
                }

            },
            {
                radius: ["35%", "60%"],
                itemStyle: {
                    color: '#F47251'
                },
                label: {
                    rotate: 'radial'
                }
            },
            {
                radius: ["60%", "95%"],
                itemStyle: {
                    color: '#FFC75F'
                },
                label: {
                    rotate: 'radial'

                },

            },
            {
                radius: ["95%", "100%"],
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

// 分割线






