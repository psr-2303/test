//初始化
var myChart = echarts.init(document.getElementById("main"));


const upColor = '#ec0000';
const upBorderColor = '#8A0000';
const downColor = '#00da3c';
const downBorderColor = '#008F28';

$.ajax({
    type: 'get',
    url: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/stock-DJI.json',
    dataType: 'json',
    success: function (res) {
        // 最后一个参数 交易量
        // console.log(res)
        let data_1 = splitData(res)
        console.log(data_1)

        cak(data_1)

        function splitData(rawData) {
            const categoryData = [];
            const values = [];
            for (let i = 0; i < rawData.length; i++) {
                categoryData.push(rawData[i][0]);
                // splice从下标0开始删除一个
                // pop
                rawData[i].splice(0, 1);
                // rawData[i].pop();
                values.push(rawData[i]);
            }
            return {
                categoryData: categoryData,
                values: values,
            }
        }
        // 均线
        function calculateMA(dayCount) {
            var result = [];
            for (var i = 0, len = data_1.values.length; i < len; i++) {
                if (i < dayCount) {
                    result.push('-');
                    continue;
                }
                var sum = 0;
                for (var j = 0; j < dayCount; j++) {
                    sum += data_1.values[i - j][1];
                }
                result.push(sum / dayCount);
            }
            return result;
        }

        function cak(data) {
            var option = {
                title:{
                    text:"道琼斯2004年1月2日-2016年6月12号年K线图"
                },
                grid:{
                    left:'10%',
                    right:'10%',
                    bottom:'15%',
                },
                legend: {
                    top:25,
                    data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
                },
                dataZoom:[
                    {
                        type: 'inside',
                        start:80,
                        end:100,
                    },{
                        show: true,
                        type:'slider',
                        top:'80%',
                        start:80,
                        end:100,
                    }
                ],
                tooltip:{
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    },
                    // label: {
                        
                    // }
                },
                xAxis: {
                    type: 'category',
                    data: data.categoryData,
                },
                yAxis: {
                    scale: true, //缩放
                    splitArea: {
                        show: true,
                    }
                },
                series: [
                    {
                        name: '日K',
                        type: 'k',
                        data: data.values,
                        itemStyle: {
                            color: upColor,
                            color0: downColor,
                            borderColor: upBorderColor,
                            borderColor0: downBorderColor,
                        },
                        // 标记点
                        markPoint: {
                            label: {
                                formatter: function (param) {
                                    return Math.round(param.value) //取整
                                }
                            },
                            data: [
                                {
                                    name: 'highest value',
                                    type: 'max',
                                    valueDim: 'highest'
                                },
                                {
                                    name: 'lowest value',
                                    type: 'min',
                                    valueDim: 'lowest'
                                },
                                {
                                    name: 'average value on close',
                                    type: 'average',
                                    valueDim: 'close'
                                },
                                
                            ]
                        },
                        // 标记线
                        markLine: {
                            symbol: ['none', 'none'],
                            data: [
                                [
                                    {
                                        name: 'from lowest to highest',
                                        type: 'min',
                                        valueDim: 'lowest',
                                        symbol: 'circle',
                                        symbolsize: 10,
                                        label: {
                                            show: false,
                                        },
                                        emphasis: {
                                            label: {
                                                show: false,
                                            }
                                        }
                                    },
                                    {
                                        type: 'max',
                                        valueDim: 'highest',
                                        symbol: 'circle',
                                        symbolsize: 10,
                                        label: {
                                            show: false,
                                        },
                                        emphasis: {
                                            label: {
                                                show: false,
                                            }
                                        }
                                    },
                                ],
                                {
                                    name: 'min line on close',
                                    type: 'min',
                                    valueDim: 'close',
                                },
                                {
                                    name: 'max line on close',
                                    type: 'max',
                                    valueDim: 'close',
                                },
                            ]
                        }

                    },
                    {
                        name: 'MA5',
                        type: 'line',
                        data: calculateMA(5),
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            opacity: 0.5,
                        }
                    },
                    {
                        name: 'MA10',
                        type: 'line',
                        data: calculateMA(10),
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            opacity: 0.5,
                        }
                    },
                    {
                        name: 'MA20',
                        type: 'line',
                        data: calculateMA(20),
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            opacity: 0.5,
                        }
                    },
                    {
                        name: 'MA30',
                        type: 'line',
                        data: calculateMA(30),
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            opacity: 0.5,
                        }
                    },

                ]

            }
            myChart.setOption(option);
        }
    }
})

// 分割线






