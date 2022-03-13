//基于准备好的DOM，初始化ECharts图表
var myChart = echarts.init(document.getElementById("main"));

// 设置标题样式,写在前面
mytextStyle = {
    //  css
    color: "green",
    fonStyle: "normal", //italic斜体 oblique倾斜
    dontweight: "normal", //文字粗细
    // bold|bolider|ligher|100|200|300|400……
    fontFaily: "黑体", //字体
    fontSize: 10,
};


//指定图表的配置项和数据
var option = {
    title:{
        top:-0,
        // textStyle:mytextStyle,
        text:"未来一周变化",
    },
    legend:{
        show:true,//显示可不写
        type:'plain',//'plain'（普通）和'scroll'（可滚动翻页）
        orient:"horizontal",//布局方向，horizontal水平可不写
        // vertical 垂直
        itemGap:10, //图例间隔
        textStyle:{color:'orange'},
        
        // x:100,
        y:25,

        backgoundColor:"gray",
        borderColor:"#f2f2f2",
        borderWidth:2,
        padding:2,
    },

    // x坐标轴
    xAxis:{
        data:['周一','周二','周三','周四', '周五', '周六', '周日'],

    },

    yAxis:[
        {
            type:"value",
            axisLabel:{ formatter:'{value} ml'}
            // 格式化单位
        },
        { //第二条坐标轴
            type:"value",
            axisLabel:{ formatter:'{value} °C'},
            splitLine:{
                show:false,
            }//分割线 不理解
        }
    ],

    series: [
        {
            name: '某一年的蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6],
        },
        {
            name: '某一年的降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6]
        },
        {
            name: '某一年的最高气温',
            smooth:true,
            type: 'line',
            yAxisIndex: 1,
            data: [11, 11, 15, 13, 12, 13, 10]
        },
        {
            name:'某一年的最低气温',
            smooth:true,
            type:"line",
            yAxisIndex:1,
            data:[-2, 1,2, 5, 3, 2, 0]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表 setOption设置配置
myChart.setOption(option);