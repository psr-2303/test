//基于准备好的DOM，初始化ECharts图表
var myChart = echarts.init(document.getElementById("main"));
//指定图表的配置项和数据
var option = {
    title:{ //设置标题组件,包含主标题和副标题
        text:'这里是绘制图表的标题',
        subtext:'这里是副标题'
    },
    tooltip:{}, //工具提示
    legend:{//配置图例组件，一个echarts图表中可以存在多个图例组件
        data:['销量']
    },
    xAxis:{  //配置x轴坐标系
        data:["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis:{}, //配置y轴坐标系
    series:[{
        name:'销量',
        type:'bar',
        data:[5,20,36,10,10,20]
    }]
};

// 使用刚指定的配置项和数据显示图表
myChart.setOption(option);

