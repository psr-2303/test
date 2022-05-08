//基于准备好的DOM，初始化ECharts图表
var myChart = echarts.init(document.getElementById("main"));

var ROOT_PATH ='https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data';
$.get(ROOT_PATH+'/disk.tree.json', function (data) {
    setOption(data)
})

function setOption(data) {
    var option = {
        tooltip: {
            formatter: function (info) {
                // console.log(info);
                var value = info.value;
                var treePathInfo = info.treePathInfo;
                var treePath = []; //路径
                for (var i = 1; i < treePathInfo.length; i++) {
                    treePath.push(treePathInfo[i].name);
                }
                return treePath.join('/') + '<br>' + 'Disk Usage: ' + value + ' KB';
            }
        },
        series: [
            {
                type: 'treemap',
                data: data,
                leafDepth: 2,
                roam: 'false',
                visibleMin: 1000,
                childrenVisibleMin: 2000,
                label: {
                    show: true,
                    formatter: '{b}'
                },
                itemStyle:{
                    borderWidth:5,
                    borderColor:'#666'
                },
            }
        ]
    }
    myChart.setOption(option);
}