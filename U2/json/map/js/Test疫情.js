var myChart = echarts.init(document.getElementById("main"));


let mapArr = []
let data0 = []

$.ajax({
    type: 'get',
    url: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5',
    dataType: 'jsonp',
    // success成功就会运行
    success: function (res) {
        // console.log(res.data);
        let obj = JSON.parse(res.data)
        console.log(obj)
        // console.log(obj.chinaAdd.confirm)
        // console.log(obj.areaTree[0].children)

        // 获取需要的字段/地图1
        let arr = obj.areaTree[0].children

        for (let i = 0; i < arr.length; i++) {
            let item = {
                name: arr[i].name,
                value: arr[i].total.nowConfirm,
            }
            mapArr.push(item)
        }
        // console.log(mapArr)
        setEchart(mapArr)


        // 获取国内新增数据

        Uptime = obj.lastUpdateTime
        // Uptime = farmat(Uptime)
        Ncf = obj.chinaAdd.confirm
        NlCH5 = obj.chinaAdd.localConfirmH5
        NiC = obj.chinaAdd.importedCase
        Nnif = obj.chinaAdd.noInfect

        // 现有
        ECf = obj.chinaTotal.nowConfirm
        ElcfH5 = obj.chinaTotal.localConfirmH5
        // E 914
        EnIf = obj.chinaTotal.noInfect

        // Ndead =obj.chinaAdd.dead
        // Nheal =obj.chinaAdd.heal

        // NlocalConfirm = obj.chinaAdd.localConfirm

        data0 = [Uptime, Ncf, NlCH5, NiC, Nnif, ECf, ElcfH5, EnIf]
        setdata(data0)
        // document.getElementById("Upttime").innerHTML="数据更新至 "+Uptime
        // document.write(Uptime);
    }
})

// 地图
function setEchart(data) {

    // 缩放的数值范围
    //ajax 
    $.get('./json/map/china.json', function (chinaJSON) {
        echarts.registerMap('chinaMap', chinaJSON) //注册，并给它名称
        var option = {

            tooltip: {
                formatter: function (res) {
                    return res.name + ':' + res.value
                }
            },
            geo: {//地图专用
                type: 'map',//固定值
                map: 'chinaMap', //植入地图名称
                // roam:true, //鼠标进行缩放
                label: {
                    show: true,
                },
                zoom: 0.8,//初始缩放比例，布尔，num
            },
            // 视觉映射
            visualMap: {
                type: 'piecewise',
                pieces: [
                    {
                        min: 10000,
                        label: '>=10000',
                        color: '#b80909',
                    },
                    {
                        min: 1000,
                        max: 9999,
                        label: '1000-9999',
                        color: '#e64546',
                    },
                    {
                        min: 100,
                        max: 999,
                        label: '100-999',
                        color: '#f57567',
                    },
                    {
                        min: 10,
                        max: 99,
                        label: '10-9',
                        color: '#ff9985',
                    },
                    {
                        min: 1,
                        max: 9,
                        label: '1-9',
                        color: '#ead5d5',
                    },
                    {
                        max: 0,
                        label: '0',
                        color: '#efeeee',
                    },
                ]

            },
            series: [
                {
                    data: data,//形参
                    type: 'map',
                    geoIndex: 0,
                }
            ],
        };
        myChart.setOption(option);
    })
}

function setdata(data) {
    const app = Vue.createApp({
        data() {
            // 数据写入return

            return {
                Uptime: Uptime,
                Ncf: Ncf,
                NlCH5: NlCH5,
                NiC: NiC,
                Nnif: Nnif,
                ECf: ECf,
                ElcfH5: ElcfH5,
                EnIf: EnIf,

            }

        },
        // 存入方法
        methods: {
            farmat(num) {
                if (num == nill)
                    return;
                let n = parse(num).toString();
                let len = n.length;
                if (len <= 3) return m;
                if (n > 0) {
                    return m.slice(0, n) + "," + m.slice(n, len).match(/\d{3}/g).join(",")
                } else {
                    return m.slice(n, len).match(/\d{3}/g).join(",")
                }
            }

        }
    });
    //vm 根组件
    const vm = app.mount('#data0');
}



