var myChart3 = echarts.init(document.getElementById("main3"));
var ROOT_PATH ='https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
$.get(ROOT_PATH + '/data/asset/data/les-miserables.json', function (graph) {
    graph.nodes.forEach(function (node) {
        node.label = {
            // 把所有都=5
            show: node.symbolSize=5
        };
    });
    
    var option3 = {
        
        tooltip: {},
        legend: [
            {
                data: graph.categories.map(function (res) {
                    return res.name;
                })
            }
        ],
        series: [
            {
                name: '悲惨世界',
                type: 'graph',
                layout: 'force',
                // 斥力,映射范围
                force:{
                    repulsion:600,
                },
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
                    curveness: 0.1
                },
                emphasis: {
                    focus: 'adjacency',
                    lineStyle: {
                        width: 5
                    }
                }
            },
    
        ],
    
    
    
        // ]
    };
    // 
    
    myChart3.setOption(option3);
});



