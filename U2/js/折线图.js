//初始化
var myChart = echarts.init(document.getElementById("main"));
var xDataArr = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
var yDataArr = [3000, 2800, 900, 1000, 800, 700, 1400, 1300, 900, 1000, 800, 600]
var option = {
    xAxis: {
        type: 'category',
        data: xDataArr,
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            type: 'line',
            data: yDataArr
        }
    ]

   //markArea
}

myChart.setOption(option);