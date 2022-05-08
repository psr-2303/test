var dom4 = document.getElementById("main_3");

// 初始化
var myChart4 = echarts.init(dom4);
var app = {};

var option4;

var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples'

// Echarts异步加载数据，常配合JQ使用
myChart4.showLoading();

$.get(ROOT_PATH + '/data/asset/data/flare.json', function (data) {
	// 隐藏加载动画
	myChart4.hideLoading();

	// 加载的数据
	myChart4.setOption(
		(option4 = {
			tooltip: {
				//   提示框浮层的位置 可定位
				trigger: 'item',
				// 提示框
				triggerOn: 'mousemove'
			},
			series: [
				{
					// 树状图
					type: 'tree',
					// 因为是Object数据，需加[]
					data: [data],
					top: '18%',
					bottom: '14%',
					//布局 径向  默认正交
					layout: 'radial',
					// 点的图案 emptyCircle 空心圆
					// 'circle', 'rect', 'roundRect', 'triangle',
					//  'diamond'钻石, 'pin', 'arrow'箭头, 'none'
					symbol: 'emptyCircle',
					// 图案大小
					symbolSize: 7,
					// 默认展示层数
					initialTreeDepth: 3,
					// 图例翻页时的动画时长。
					animationDurationUpdate: 750,
					emphasis: {
						// 子孙节点
						focus: 'descendant'
					}
				}
			]
		})
	);
});

if (option4 && typeof option4 === 'object') {
	myChart4.setOption(option4);
}
