//基于准备好的DOM，初始化ECharts图表
var myChart = echarts.init(document.getElementById("main"));
//指定图表的配置项和数据

// 设置标题样式,写在前面
mytextStyle = {
    //  css
    color: "green",
    fonStyle: "normal", //italic斜体 oblique倾斜
    dontweight: "normal", //文字粗细
    // bold|bolider|ligher|100|200|300|400……
    fontFaily: "黑体", //字体
    fontSize: 20,
};

var option = {



    title: { //设置标题组件,包含主标题和副标题
        show: true,//显示

        // zlevel:0,  //一级层叠控制
        // z          //二级层叠控制
        text: 'HelloWorld',
        subtext: '23333', //副标题
        link: "https://bbs.saraba1st.com/2b/forum.php", //主标题链接跳转
        target: "blank", //self,当前打开，blank,新窗口
        sublink: "https://www.bilibili.com",
        subtarget: "self",

        x: 20, //left
        y: 5, //right

        textStyle: mytextStyle,// 设置标题样式
        subtextStyle:{
            color: "gray",
        },
        textAligh: "center",//水平对齐方式，可选为'auto'、left'、'right'、'center
        backgroundColor:"black", //标题背景
        borderWidth:2,  //标题宽度
        borderColor:"#f2f2f2", //标题边框颜色
        // padding:2,
        padding:[2,4,2,5],//数组
        itemGap:5,//间隔

    },
    tooltip: {}, //工具提示
    legend: {//配置图例组件，一个echarts图表中可以存在多个图例组件
        data: ['销量']
    },
    xAxis: {  //配置x轴坐标系
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {}, //配置y轴坐标系
    // 设置系列列表，type:图表类型
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],

    }]
    // 

};

// 使用刚指定的配置项和数据显示图表 setOption设置配置
myChart.setOption(option);

