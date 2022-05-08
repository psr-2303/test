// var myChart = echarts.init(document.getElementById("main"));

// 
// 
// $.get('json/test.json',function(data){
//     // myChart.setOption(option);
//     console.log(data);

//     let axisData = []
//     for (var i=0; i<data.length;i++){
//         var height = data[i].height
//         var weight = data[i].weight
//         var newArr =[height,weight]
//         axisData.push(newArr)
//     }



//     myChart.setOption(option);
// })
//初始化

var myChart = echarts.init(document.getElementById("main"));


// 获取身高体重

myChart.showLoading()
// for (var i)
// 脱离0值比例 scale:true
// 气泡图 symbolsize 散点大小 回调函数
$.get('./json/test.json', function (data) {
    console.log(data);

    var axisData = []
    for (var i = 0; i < data.length; i++) {
        var height = data[i].height;
        var weight = data[i].weight;
        var itemArr = [height, weight] //arg
        axisData.push(itemArr)

    }
    // console.log(itemArr)
    myChart.hideLoading()
    var option = {
        xAxis: {
            type: 'value',
            scale: true,// 脱离0值比例
        },
        yAxis: {
            type: 'value',
            scale: true,
        },
        //markArea
        series: [
            {
                type: 'effectScatter', //涟漪动画
                showEffectOn: "emphasis", //高亮鼠标点击
                data: axisData,
                // type: "scatter",
                SymbolSize: function (arg) {
                    //console.log(参数)
                    var weight = arg[1]
                    var height = arg[0] / 100
                    // BMI > 28 则代表肥胖, 肥胖的人用大的散点标识, 正常的人用小散点标识
                    // BMI: 体重/ 身高*身高 kg m
                    var bmi = weight / (height * height)
                    if (bmi > 28) {
                        return 15
                    }
                    return 10
                },

                itemStyle: { //散点颜色
                    // color:'green',

                    color: function (arg) {
                        // console.log(arg)
                        // console.log(arg.data)
                        var weight = arg.data[1] //data
                        var height = arg.data[0] / 100
                        var bmi = weight / (height * height)
                        if (bmi > 28) {
                            return 'red'
                        }
                        return 'green'
                    }
                }
            },


        ]
    }

    myChart.setOption(option);
    // 
})



// 2
var myChart2 = echarts.init(document.getElementById("main2"));
console.log('hi')
function makeRandomData() {
    return [
        {
            value: Math.random(),
            name: 'A'
        },
        {
            value: Math.random(),
            name: 'B'
        },
        {
            value: Math.random(),
            name: 'C'
        }
    ];
}
var option2 = {
    series: [
        {
            type: 'pie',
            radius: [0, '50%'],
            data: makeRandomData()
        }
    ]
};
setInterval(function () {
    myChart2.setOption({
        series: {
            data: makeRandomData()
        }
    });
}, 1500);
myChart2.setOption(option2);


//3 组合
var myChart3 = echarts.init(document.getElementById("main3"));
var xDataArr = ['张三', '李四', '王五', '闰土', '小明', '茅台', '二妞', '大强']
var yDataArr = [88, 92, 63, 77, 94, 80, 72, 86]
var option3 = {
    xAxis: {
        type: 'category',
        data: xDataArr
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            type: 'bar',
            data: yDataArr,
            markPoint: {
                data: [
                    {
                        type: 'max', name: '最大值'
                    },
                    {
                        type: 'min', name: '最小值'
                    }
                ]
            },
            markLine: {
                data: [
                    {
                        type: 'average', name: '平均值'
                    }
                ]
            },
            label: {
                show: true,
                rotate: 60
            },
            barWidth: '30%'
        }
    ]
};
myChart3.setOption(option3)

var btn = document.getElementById('modify');
btn.onclick = function () {
    var newArr = [68, 62, 93, 67, 64, 90, 52, 36]
    // setOption的方法可以被调用多次
    // 新的option 和旧的option配置
    // 新旧option配置项他们之间不是替换的关系,是相互整合的关系
    // 我们在设置新的option的时候,只需要考虑到将变化的配置项配置就可以了
    var option4 = {
        series: [
            {
                data: newArr,
            }
        ]
    };
    myChart3.setOption(option4)
}
var btnAdd = document.getElementById('add')
btnAdd.onclick = function () {
    setInterval(function () {
        //增加数据
        xDataArr.push('小明')
        yDataArr.push(parseInt(50 + Math.random() * 10))
        var option5 = {
            xAxis: {
                data: xDataArr
            },
            series: [
                {
                    data: yDataArr
                }
            ]
        }
        myChart3.setOption(option5)
    }, 1000)
}