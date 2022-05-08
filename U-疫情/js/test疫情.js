var myChart = echarts.init(document.getElementById("chinamain"));


let mapArr = []
let data1 = []
let mapArr01 = []

$.ajax({
    type: 'get',
    url: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5',
    dataType: 'jsonp',
    // success成功就会运行
    success: function (res) {

        let obj = JSON.parse(res.data)
        // console.log(obj.areaTree[0]);

        // 现有
        let arr = obj.areaTree[0].children
        for (let i = 0; i < arr.length; i++) {
            let item = {
                name: arr[i].name,
                value: arr[i].total.nowConfirm,
            }
            let item2 = {
                name: arr[i].name,
                value: arr[i].today.confirm,
            }
            mapArr.push(item)
            mapArr01.push(item2)
        }
        // console.log(mapArr)
        setEchart(mapArr)

        window.onload = function () {
            document.getElementById("xianyou").onclick = function () {
                setEchart(mapArr)

            }
            document.getElementById("xinzen").onclick = function () {
                setEchart(mapArr01)
            }
        }

        // 获取国内新增数据
        // 更新时间
        Uptime = obj.lastUpdateTime
        // Uptime = farmat(Uptime)
        Ncf = obj.chinaAdd.confirm
        NlCH5 = obj.chinaAdd.localConfirmH5
        NiC = obj.chinaAdd.importedCase
        Nnif = obj.chinaAdd.noInfect

        // 现有
        ECf = obj.chinaTotal.nowConfirm
        ElcfH5 = obj.chinaTotal.localConfirmH5
        EnIf = obj.chinaTotal.noInfect
        // 累计
        Lconfirm = obj.chinaTotal.confirm
        Limcase = obj.chinaTotal.importedCase
        Lheal = obj.chinaTotal.heal
        Ldead = obj.chinaTotal.dead
        // 较昨日
        Jdead = obj.chinaAdd.dead

        data1 = [Uptime, Ncf, NlCH5, NiC, Nnif, ECf, ElcfH5, EnIf, Lconfirm, Limcase, Lheal, Ldead, Jdead]
        setdata(data1)
    }
})

// 地图
function setEchart(data) {

    // 缩放的数值范围
    //ajax 
    $.get('./json/china.json', function (chinaJSON) {
        echarts.registerMap('chinaMap', chinaJSON) //注册，并给它名称
        var option = {
            title: {
                top: "40px",
                left: '30%',
                text: '现有确诊病例数，排除治愈、死亡',
                textStyle: {
                    color: '#9fa09d',
                }

            },
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
                zoom: 1,//初始缩放比例，布尔，num
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
                Lconfirm: Lconfirm,
                Limcase: Limcase,
                Lheal: Lheal,
                Ldead: Ldead,
                Jdead: Jdead,
            }

        },
        // 存入方法
        methods: {
            farmat(num) {
                if (num == null)
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
    const vm = app.mount('.data1');
}



