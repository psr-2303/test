

//基于准备好的DOM，初始化ECharts图表
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);

// 加载数据
var ROOT_PATH =
    'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

$.get(ROOT_PATH + '/data/asset/data/hangzhou-tracks.json', function (data) {
    console.log(data)
    // 连接两个或以上的数组，不改变原有数组
    var points = [].concat.apply(
        [],
        data.map(function (track) {
            
            // console.log(track)
            return track.map(function (seg) {
                // console.log(seg[0])
                // console.log(seg.coord.concat([1]))
                return seg.coord.concat([1]);
            });
        })
    );
    setOption(points) //调用函数
});
function setOption(data) {
    var option = {
        // tooltip: {

        // },
        // 百度地图
        bmap: {
            // 中心点
            center: [120.13066322374, 30.240018034923],
            zoom: 14,
            roam: true, //是否运行用户缩放
            mapStyleV2:{
                // 样式id，与用户密钥一致
                styleId:'dd4dfec3d5da64a8adb9f13126830dde'
            }
        },
        visualMap: {
            show: false,
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red']
                
            }
        },
        series: [
            {
                type: 'heatmap',
                // 坐标系
                coordinateSystem: 'bmap',
                data: data,
                pointSize: 5,
                blurSize: 6
            }
        ]

    }
    myChart.setOption(option);
}


