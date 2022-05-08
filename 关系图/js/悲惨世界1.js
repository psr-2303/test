var myChart = echarts.init(document.getElementById("main"));
var ROOT_PATH ='https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
$.get(ROOT_PATH + '/data/asset/data/les-miserables.json', function (graph) {
    console.log(graph);
    graph.nodes.forEach(function (node) {
        node.label = {
            show: node.symbolSize > 30
        };
    });
    var option = {
        title: {
            text: '悲惨世界人物关系图',
            top: 'top',
            left: 'center'
        },
        tooltip: {},
        legend: [
            
            {
                y:60,
                data: graph.categories.map(function (res) {
                    return res.name;
                })
            }
        ],
        series: [
            {
                name: '悲惨世界',
                type: 'graph',
                layout: 'none',
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                // roam: true,
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    // 'target' : 使用目标节点颜色
                    // source  聚焦当前高亮的数据所在的系列的所有图形。
                    color: 'target',
                    curveness: 0
                },
                emphasis: {
                    // adjacency和它有关系的节点
                    focus: 'adjacency',
                    lineStyle: {
                        width: 2
                    }
                }
            },
    
        ],
    
    
    
        // ]
    };
    // 
    
    myChart.setOption(option);
});



