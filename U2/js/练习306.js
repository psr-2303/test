//基于准备好的DOM，初始化ECharts图表
var myChart = echarts.init(document.getElementById("main"));

//指定图表的配置项和数据
var option = {
    backgroundColor:"#1b1b1b",
    tooltip: {
        show: true,
        formatter:'{a} <br/> {c} {b}'
    },


    series:[
        {
            name:"速度",
            type:'gauge',
            min:0,
            max:200,
            splitNumber:10,
            radius:'50%', //改变大小
            axisLine:{
                lineStyle:{
                    color:[[0.2,'lime'],[0.8,'#1e90ff'],[1,'#ff4500']], 
                    width:3, 
                    shadowColor:'#fff',
                    shadowBlur:10,
                }
            },
            axisTick: {
                length:15,
                lingStyle: {
                    color:'auto',
                    shadowColor:'#fff',
                    shadowBlur:10,
                }
            },
            splitLine: { //分割线
                length:25,
                lingStyle: {
                    width:3,
                    color:'#fff',
                    shadowColor:'#fff',
                    shadowBlur:10,
                }
            },
            pointer:{
                shadowColor:'#fff',
                shadowBlur:5
            },
            title: { //name
                textStyle:{
                    fontWeight:'bolder',
                    fontSize:20,
                    fontStyle:'italic',
                    color:'#fff',
                    shadowColor:'#fff',
                    shadowBlur:10,
                }
            },
            detail: { //数值value
                backgroundColor:'rgba(30,144,255,0.8)',
                borderWidth:1,
                borderColor:'#fff',
                shadowColor:'#fff',
                shadowBlur:5,
                offsetCenter:[0,'50%'],
                textStyle:{
                    fontWeight:'bolder',
                    color:'#fff',
                }
            },
            data:[{value:40,name:'km/h'}]
        },
        {
            name:"转速",
            type:'gauge',
            center: ['25%', '55%'],//调位置
            min:0,
            max:7,
            splitNumber:7,
            radius:'30%',
            endAngle:45,
            axisLine:{ //圆环
                lineStyle:{
                    // 颜色的布局
                    color:[[0.143,'lime'],[0.72,'#1e90ff'],[1,'#ff4500']], 
                    width:2,  //曲线宽度
                    shadowColor:'#fff', 
                    shadowBlur:10,
                }
            },
            axisLabel: {
                fontWeight:'bolder',
                color:'#fff',
                shadowColor:'#fff',
                shadowBlur:10,
            },
            axisTick: {
                length:12,
                lingStyle: {
                    color:'auto',
                    shadowColor:'#fff',
                    shadowBlur:10,
                }
            },
            splitLine: { //分割线
                length:25,
                lingStyle: {
                    width:3,
                    color:'#fff',
                    shadowColor:'#fff',
                    shadowBlur:10,
                }
            },
            pointer:{
                width:5,
                shadowColor:'#fff',
                shadowBlur:5
            },
            title: {
                offsetCenter:[0,"-30%"],
                textStyle:{
                    fontWeight:'bolder',
                    // fontSize:20,
                    fontStyle:'italic',
                    color:'#fff',
                    shadowColor:'#fff',
                    shadowBlur:10,
                }
            },
            detail: {
                // backgroundColor:'rgba(30,144,255,0.8)',
                // borderWidth:1,
                borderColor:'#fff',
                shadowColor:'#fff',
                shadowBlur:5,
                width:80,
                height:30,
                offsetCenter:[25,'20%'],
                textStyle:{
                    fontWeight:'bolder',
                    color:'#fff',
                }
            },
            data:[{value:1.5,name:'x1000 r/min'}]
        },
        {
            name:"油表",
            type:'gauge',
            center: ['80%', '50%'],//调位置
            min:0,
            max:2,
            splitNumber:2,
            radius:'30%',
            endAngle:45,
            startAngle:135,
            axisLine:{ //圆环
                lineStyle:{
                    // 颜色的布局
                    color:[[0.2,'lime'],[0.8,'#1e90ff'],[1,'#ff4500']], 
                    width:2,  //曲线宽度
                    shadowColor:'#fff', 
                    shadowBlur:10,
                }
            },
            axisLabel: {
                fontWeight:'bolder',
                color:'#fff',
                shadowColor:'#fff',
                shadowBlur:10,
                // 自定义
                formatter: function(v){
                    // 格式化替换
                    // v,value值
                    switch(v+''){
                        case '0':return 'E';
                        case '1':return 'Gas';
                        case '2':return 'F';
                    }
                }
            },
            axisTick: {
                length:12,
                lingStyle: {
                    color:'auto',
                    shadowColor:'#fff',
                    shadowBlur:10,
                }
            },
            splitLine: { //大分割线
                length:15,
                lingStyle: {
                    width:3,
                    color:'#fff',
                    shadowColor:'#fff',
                    shadowBlur:10,
                }
            },
            pointer:{
                width:2,
                shadowColor:'#fff',
                shadowBlur:5
            },
            title: {
                show:false,
                // offsetCenter:[0,"-30%"],
                // textStyle:{
                //     fontWeight:'bolder',
                //     // fontSize:20,
                //     fontStyle:'italic',
                //     color:'#fff',
                //     shadowColor:'#fff',
                //     shadowBlur:10,
                
            },
            detail: {
                // backgroundColor:'rgba(30,144,255,0.8)',
                // borderWidth:1,
                // 
                show:false,
            },
            data:[{value:0.5,name:'gas'}]
        },
        {
            name:"水表",
            type:'gauge',
            center: ['80%', '50%'],//调位置
            min:0,
            max:2,
            splitNumber:2,
            radius:'30%',
            endAngle:225,
            startAngle:315,
            axisLine:{ //圆环
                lineStyle:{
                    // 颜色的布局
                    color:[[0.2,'lime'],[0.8,'#1e90ff'],[1,'#ff4500']], 
                    width:2,  //曲线宽度
                    shadowColor:'#fff', 
                    shadowBlur:10,
                }
            },
            axisLabel: {
                fontWeight:'bolder',
                color:'#fff',
                shadowColor:'#fff',
                shadowBlur:10,
                // 自定义
                formatter: function(v){
                    // 格式化替换
                    switch(v+''){
                        case '0':return 'H';
                        case '1':return 'Water';
                        case '2':return 'C';
                    }
                }
            },
            axisTick: {
                length:12,
                lingStyle: {
                    color:'auto',
                    shadowColor:'#fff',
                    shadowBlur:10,
                }
            },
            splitLine: { //大分割线
                length:15,
                lingStyle: {
                    width:3,
                    color:'#fff',
                    shadowColor:'#fff',
                    shadowBlur:10,
                }
            },
            pointer:{
                width:2,
                shadowColor:'#fff',
                shadowBlur:5
            },
            title: {
                show:false,
                // offsetCenter:[0,"-30%"],
                // textStyle:{
                //     fontWeight:'bolder',
                //     // fontSize:20,
                //     fontStyle:'italic',
                //     color:'#fff',
                //     shadowColor:'#fff',
                //     shadowBlur:10,
                
            },
            detail: {
                // backgroundColor:'rgba(30,144,255,0.8)',
                // borderWidth:1,
                // 
                show:false,
            },
            data:[{value:0.5,name:'gas'}]
        },
    ]
};

// 使用刚指定的配置项和数据显示图表 setOption设置配置
myChart.setOption(option);

