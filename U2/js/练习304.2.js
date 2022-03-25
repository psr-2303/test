var myChart = echarts.init(document.getElementById("main"));
var pie0 = [
   {
      name: "直达",
      value: 335,
      selected: true,//设定默认值
   },
   {
      name: "营销广告",
      value: 679,
   },
   {
      name: "搜索引擎",
      value: 1548,
   },
]
var pie1 = [
   {
      name: "直达",
      value: 335,
      selected: true,//设定默认值
   },
   {
      name: "邮件营销",
      value: 310,
   },
   {
      name: "联盟广告",
      value: 234,
   },
   {
      name: "视频广告",
      value: 135,
   },
   {
      name: "百度",
      value: 1048,
   },
   {
      name: "谷歌",
      value: 251,
   },
   {
      name: "必应",
      value: 147,
   },
   {
      name: "其他",
      value: 102,
   },
]
var option = {
   grid:{
      containLabel: true, 
   },
   tooltip:{
      formatter:"访问来源"+"</br>"+"{b}:{c}({d}%)"
   },
   legend: {
      x: 20,
      orient: 'vertical'
   },
   series: [

      {
         x: 160,
         y: 100,
         type: 'pie',
         radius: '40%',
         data: pie0,
         // 偏移量，单选，
         selectedMode: 'single',
         selectedOffset: 5,
         // 设置文本内置饼图
         label: {
            position: "inner"
         },
      },
      {
         x: 160,
         y: 100,
         type: 'pie',
         radius: ["50%", "75%"],//1内半径，2外半径
         data: pie1,

         label: {
            // 格式化
            position:"outside", //定位，外侧
            // rotate:true, 径向排布
            // rotate:5,
            edgeDistance:"90%",
            formatter: [
               '{title|访问来源}{k233|}',
               '{hr|}',
               '{vn|{b}:} {vz|{c}} {vd|{d}%}',//{a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
            ].join('\n'),
            backgroundColor: '#eee',
            borderColor: '#777',
            borderWidth: 1,
            borderRadius: 4,
            width: 180,
            // 富文本样式设定
            rich: {

               title: {

                  color: '#eee',
                  align: 'center',
               },
               k233: {
                  backgroundColor: "#333",
                  width: '100%',
                  align: 'right',
                  height: 25,
                  borderRadius: [4, 4, 0, 0]
               },
               hr: {
                  borderColor: '#777',
                  width: '100%',
                  borderWidth: 0.1,
                  height: 0
               },
               // vn，vz vd
               vn: {
                  width:50,
                  height: 30,
                  align: 'center',
                  padding:5,
               },
               vz: {
                  width:60,
                  height:30,
                  align: 'left',
                  // lineheight:30,
                  fontSize:25,
               },
               vd: {
                  width:40,
                  color:"#eee",
                  backgroundColor: "#333",
                  align: 'center',
                  borderRadius: [2, 2, 2, 2]
               }
            }
         },
         labelLine:{
            show:true,
            showAbove:true, 
            length:30,
            // length:80, #第一段
   
            // length2:20,
            minTurnAngle:105,//引导线夹角
         }
      },
      
   ]
}

myChart.setOption(option);