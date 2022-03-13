//初始化
var myChart=echarts.init(document.getElementById("main"));

var option ={
    // 乌拉！
    color: ['#f19066', '#f5cd79', '#546de5', '#e15f41', '#c44569', '#786fa6', '#f8a5c2', '#63cdda', '#ea8685', '#596275', '#574b90', '#f78fb3', '#3dc1d3', '#e66767', '#303952','#f3a683', '#f7d794', '#778beb', '#e77f67', '#cf6a87'],
    legend: {
        show: true,
        // legend的data要和 series的name保持一致
        data: ['蒸发量', '降水量','温度'],
    },
    grid:{
        show:true,
        x:50,
        width:"70%",
        height:"80%",
    },
    tooltip: {
        
        borderColor: '#fff',
    },
    xAxis:{
        type:'category',
        data:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis:[
        {   
            name:"温度",
            min:0,
            max:30,
            type:'value',
            position:"left",
            axisLabel:{
                formatter:function(value){
                    return value +' °C'
                },
                
            },
            nameTextStyle:{//坐标轴名字样式
                color:"#546de5",
            },
            axisLine:{ //坐标轴轴线
                show:true,
                lineStyle:{
                    color:"#546de5",
                }
                
            }
            
        },
        {
            name:"蒸发量",
            type:'value',
            position:"right",
            splitLine:{
                show:false,
            },
            axisLabel:{
                formatter:'{value} ml',
                
            },
            nameTextStyle:{//坐标轴名字样式
                color:"#f19066",
            },
            axisLine:{ //坐标轴轴线
                show:true,
                lineStyle:{
                    color:"#f19066",
                }
                
            }
            
        },
        {
            name:"降水量",
            type:'value',
            position:"right",
            min:0,
            max:300,
            offset:60,
            axisLabel:{
                formatter:'{value} ml',
                
            },
            nameTextStyle:{//坐标轴名字样式
                color:"#f5cd79",
            },
            axisLine:{ //坐标轴轴线
                show:true,
                lineStyle:{
                    color:"#f5cd79",
                }
                
            }
        },
    ],

    series:[
        {
            name:'蒸发量',
            type:'bar',
            yAxisIndex:1,
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'降水量',
            type:'bar',
            yAxisIndex:2,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'温度',
            type:'line',
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
        

    ]

}

myChart.setOption(option);