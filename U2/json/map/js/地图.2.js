//初始化
var ahChart = echarts.init(document.getElementById("anhui"));


// 缩放的数值范围
//ajax 
$.get('./json/map/anhui.json',function(anhuiJSON){ 
    echarts.registerMap('anhui',anhuiJSON) //注册，并给它名称
    var option ={
        geo:{//地图专用
            type: 'map',//固定值
            map:'anhui', //植入地图名称
            // roam:true, //鼠标进行缩放
            label:{
                show: true,
            },
            // zoom:0.8,//初始缩放比例，布尔，num
            // 当前指向的中心
            center:[115.814204,32.890124],//地图：安徽阜阳
        },
        series:[
            {
                
            }
        ]
    };
    ahChart.setOption(option);
})  



