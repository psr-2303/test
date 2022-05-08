var myChart = echarts.init(document.getElementById("main"));


var option = {

    series: {
        type: 'graph',
        layout: 'none',
        data: [
            {
                name: 'Node 1',
                x: 300,
                y: 300,
                value: 100,
            },
            {
                name: 'Node 2',
                x: 800,
                y: 300,
                value: 200,
            },
            {
                name: 'Node 3',
                x: 550,
                y: 100,
                value: 300,
            },
            {
                name: 'Node 4',
                x: 550,
                y: 500,
                value: 400,
            }
        ],
        links: [
            {
                source: 0, //起始点，可以使用标号
                target: 1, //结束点，可以使用标号
                label: {
                    show: true //连线上的文本标签
                },
                lineStyle: {
                    width: 5,
                    curveness: 0.2 //边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                }
            },
            {
                source: 'Node 2', //起始点，可以使用name值
                target: 'Node 1', //结束点，可以使用name值
                label: {
                    show: true
                },
                lineStyle: {
                    curveness: 0.2
                }
            },
            {
                source: 'Node 1',
                target: 'Node 3'
            },
            {
                source: 'Node 2',
                target: 'Node 3'
            },
            {
                source: 'Node 2',
                target: 'Node 4'
            },
            {
                source: 'Node 1',
                target: 'Node 4'
            }
        ],
        symbolSize: 50, //节点标记的大小
        roam: true, //是否开启鼠标缩放和平移漫游
        label: {
            show: true //图形上的文本标签
        },
        lineStyle: { //线条的样式
            opacity: 0.9, //透明度
            width: 2,
            curveness: 0
        }

    }
};
myChart.setOption(option);