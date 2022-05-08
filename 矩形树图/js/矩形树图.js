var myChart = echarts.init(document.getElementById("main"));


var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data'
$.get(ROOT_PATH + '/disk.tree.json', function (data) {
  setOption(data)
  console.log(data)

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
        // 展示2层
        leafDepth: 2,
        // 拖拽 true:缩放和平移均可 'scale'/'zoom':缩放 'move'/'pan':平移
        roam: 'false',
        // 某节点面积小于不显示
        visibleMin: 1000,
        // 某节点面积小于不显示，缩放时若大于则显示
        childrenVisibleMin: 2000,
        label: {
          show: true,
          formatter: '{b}:{c}'
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
          // 内部
          gapWidth: 5,
        },
        levels: [
          {
            itemStyle: {
              borderColor: '#777',
              borderWidth: 0,
              gapWidth: 5
            }
          },
          {
            itemStyle: {
              borderColor: '#555',
              borderWidth: 5,
              gapWidth: 1
            }
          },
          {
            // 色彩饱和度
            colorSaturation: [0.35, 0.5],
            itemStyle: {
              borderWidth: 5,
              gapWidth: 1,
              borderColorSaturation: 0.6
            }
          }
        ]

      }
    ]
  }
  myChart.setOption(option);
}


