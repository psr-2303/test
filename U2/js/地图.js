//初始化
var myChart = echarts.init(document.getElementById("main"));

var airData = [{ name: '北京', value: 39.92 },{ name: '天津', value:39.13 },
{ name: '上海', value: 31.22 },{ name: '重庆', value: 66 },{
name: '河北', value: 147 },{ name: '河南', value: 113 },{ name: '云南',
value: 25.04 },{ name: '辽宁', value: 50 },{ name: '黑龙江', value: 114
},{ name: '湖南', value: 175 },{ name: '安徽', value: 117 },{ name: '山东', value: 92 },
{ name: '新疆', value: 84 },{ name: '江苏', value: 67 },
{ name: '浙江', value: 84 },{ name: '江西', value: 96 },{ name: '湖北',
value: 273 },{ name: '广西', value: 59 },{ name: '甘肃', value: 99 },{
name: '山西', value: 39 },{ name: '内蒙古', value: 58 },{ name: '陕西',
value: 61 },{ name: '吉林', value: 51 },{ name: '福建', value: 29 },{
name: '贵州', value: 71 },{ name: '广东', value: 38 },{ name: '青海',
value: 57 },{ name: '西藏', value: 24 },{ name: '四川', value: 58 },{
name: '宁夏', value: 52 },{ name: '海南', value: 54 },{ name: '台湾',
value: 88 },{ name: '香港', value: 66 },{ name: '澳门', value: 77 },{
name: '南海诸岛', value: 55 }]

// 散点坐标
var scatterData = [
    { 
        value:[115.814204,32.890124]
    }
]

// 缩放的数值范围
//ajax 
$.get('./json/map/china.json',function(chinaJSON){ 
    echarts.registerMap('chinaMap',chinaJSON) //注册，并给它名称
    var option ={
        geo:{//地图专用
            type: 'map',//固定值
            map:'chinaMap', //植入地图名称
            roam:true, //鼠标进行缩放
            label:{
                show: true,
            },
            zoom:0.8,//初始缩放比例，布尔，num
            // 当前指向的中心
            center:[116.407526,39.904030],//地图：安徽阜阳
        },
        // 视觉映射
        visualMap:{
            min:0,
            max:300,
            inRange:{ //颜色范围
                color:['white','green']
            },
            // 拖拽手柄调整选择区域
            calculable:true,

        },
        series: [
            {
                data:airData,
                type:'map',
                geoIndex:0,
            }, { 
                data:scatterData,
                type:'effectScatter', //涟漪动画
                coordinateSystem:'geo', //以geo地图为基础类型
                rippleEffect:{ //焦点大小
                    scale:10,
                }
            }
        ],
    };
    myChart.setOption(option);
})  



