//基于准备好的DOM，初始化ECharts图表
var myChart = echarts.init(document.getElementById("main"));

//指定图表的配置项和数据
var option = {
    // 乌拉！
    color: ['#f3a683', '#f7d794', '#778beb', '#e77f67', '#cf6a87', '#f19066', '#f5cd79', '#546de5', '#e15f41', '#c44569', '#786fa6', '#f8a5c2', '#63cdda', '#ea8685', '#596275', '#574b90', '#f78fb3', '#3dc1d3', '#e66767', '#303952'],

    legend: {
        show: true,
        // legend的data要和 series的name保持一致
        data: ['蒸发量', '降水量', '最高气温', '最低气温'],
    },
    tooltip:{

    },
    toolbox:{

    },
    xAxis: [
        {
            type: 'category',
            position: "bottom",
            
            // 轴线 文本也绿了
            axisLine:{
                lineStyle:{
                    color:'green',
                    type:'solid',
                    width:2
                }
            },
            // 刻度标记
            axisTick:{
                show:true,
                length:10,
                lineStyle:{
                    color:'blue',
                    type:'solid',
                    width:2
                }
            },
            // 轴文本标记
            axisLabel:{
                show:true,
                interval:'auto',
                rotate:45,
                margin:8,
                formatter:'{value}月', //格式化
                textStyle:{
                    color:'blue',
                    fontFamily:'sans-serif',
                    fontSize:15,
                    fontStyle:'italic',
                    fontWeight:'bold'
                }
            },
            // 
            splitLine:{
               show:true,
               lineStyle:{
                   color:'#483d8b',
                   type:'dashed', //虚线dashed
                   width:1
               } 
            },
            splitArea:{
                show:true,
                areaStyle:{
                    color:['rgba(144,238,144,0.3)','rgba(135,200,250,0.3)']
                }
            },
            data: [
                '1', '2', '3', '4', '5', 
                // 个性化
                {
                    value:'6',
                    textStyle:{
                        color:'gray',
                        fontSize:30,
                        fontStyle:'normal',
                        fontWeight:'bold',
                    }
                },
                '7', '8', '9', '10', '11', '12'],
        },
        {   
            type:'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }],
    yAxis: [
        {
            type:"value",
            position:"left",
            // boundaryGap:[0,0.1],
            axisLine:{
                show:true,
                lineStyle:{
                    color:'red',
                    type:'dashed',
                    width:2
                }
            },
            axisTick:{
                show:true,
                length:10,
                lineStyle:{
                    color:'green',
                    type:'solid',
                    width:2
                }
            },
            // 标签文本
            axisLabel: {
                show: true,
                interval:'auto',
                rotate:-45,
                margin:18,
                formatter:'{value} ml',
                textStyle:{
                    color:'#1e90ff',
                    fontFamily:'verdana',
                    fontSize:10,
                    fontStyle:'normal',
                    fontWeight:'bold'
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#483d8b',
                    type:'dotted',
                    width:2
                }
            },
            splitArea:{
                show:true,
                areaStyle:{
                    color:['rgba(205,92,92,0.3)','rgba(255,215,0,0.3)']
                }
            }
            },
            {
                type:'value',
                splitNumber:10,
                axisLabel:{
                    formatter:function(value){
                        return value +' °C'
                    }
                },
                splitLine:{
                    show:false,
                }
            },

        //     // 坐标轴上刻度
        // }, 

        // {
        //     type:"value",
        //     position:"right",
        //     // 标签文本
        //     axisLabel: {
        //         show: true,
        //         formatter:'{value}°C',
        //     }
        // }
    ],
    series: [
        {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],

        },
        {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        },
        {
            name: '最高气温',
            smooth: true,
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
        },
        {
            name: '最低气温',
            smooth: true,
            type: "line",
            yAxisIndex:1,
            data: [12.0, 12.2, 13.3, 14.5, 16.3, 18.2, 28.3,33.4, 31.0, 24.5, 18.0, 16.2],
        }
    ]
};

// 使用刚指定的配置项和数据显示图表 setOption设置配置
myChart.setOption(option);