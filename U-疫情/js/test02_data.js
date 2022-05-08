// var worldMap2 = echarts.init(document.getElementById("worldData"));

$.ajax({
    type: 'get',
    url: 'https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoGlobalStatis,FAutoContinentStatis,FAutoGlobalDailyList,FAutoCountryConfirmAdd',

    dataType: 'json',
    success: function (res) {
        let data2 = []
        Uptime2 = res.data.FAutoGlobalStatis.lastUpdateTime
        Ncf2 = res.data.FAutoGlobalStatis.confirm
        Nco2 = res.data.FAutoGlobalStatis.nowConfirm
        Ndead2 = res.data.FAutoGlobalStatis.dead
        Nheal2 = res.data.FAutoGlobalStatis.heal

        data2 = [Uptime2, Ncf2, Nco2, Ndead2, Nheal2]
        setdata2(data2)
        // 地图2

        console.log(res)

    }
})
function setdata2(data) {
    const app = Vue.createApp({
        data() {
            // 数据写入return

            return {
                Uptime2: Uptime2,
                Ncf2: Ncf2,
                Nco2: Nco2,
                Ndead2: Ndead2,
                Nheal2: Nheal2,
            }

        },
    });
    //vm 根组件
    const vm = app.mount('#worldData');
}