var dom_4 = document.getElementById("main_4");
var myChart_4 = echarts.init(dom_4);
var app_2 = {};

var option4;

const dataone = {
  name: 'flare',
  children: [
    {
      name: 'data',
      children: [
        {
          name: 'converters',
          children: [
            { name: 'Converters', value: 721 },
            { name: 'DelimitedTextConverter', value: 4294 }
          ]
        },
        {
          name: 'DataUtil',
          value: 3322
        }
      ]
    },
    {
      name: 'display',
      children: [
        { name: 'DirtySprite', value: 8833 },
        { name: 'LineSprite', value: 1732 },
        { name: 'RectSprite', value: 3623 }
      ]
    },
    {
      name: 'flex',
      children: [{ name: 'FlareVis', value: 4116 }]
    },
    {
      name: 'query',
      children: [
        { name: 'AggregateExpression', value: 1616 },
        { name: 'And', value: 1027 },
        { name: 'Arithmetic', value: 3891 },
        { name: 'Average', value: 891 },
        { name: 'BinaryExpression', value: 2893 },
        { name: 'Comparison', value: 5103 },
        { name: 'CompositeExpression', value: 3677 },
        { name: 'Count', value: 781 },
        { name: 'DateUtil', value: 4141 },
        { name: 'Distinct', value: 933 },
        { name: 'Expression', value: 5130 },
        { name: 'ExpressionIterator', value: 3617 },
        { name: 'Fn', value: 3240 },
        { name: 'If', value: 2732 },
        { name: 'IsA', value: 2039 },
        { name: 'Literal', value: 1214 },
        { name: 'Match', value: 3748 },
        { name: 'Maximum', value: 843 },
        {
          name: 'methods',
          children: [
            { name: 'add', value: 593 },
            { name: 'and', value: 330 },
            { name: 'average', value: 287 },
            { name: 'count', value: 277 },
            { name: 'distinct', value: 292 },
            { name: 'div', value: 595 },
            { name: 'eq', value: 594 },
            { name: 'fn', value: 460 },
            { name: 'gt', value: 603 },
            { name: 'gte', value: 625 },
            { name: 'iff', value: 748 },
            { name: 'isa', value: 461 },
            { name: 'lt', value: 597 },
            { name: 'lte', value: 619 },
            { name: 'max', value: 283 },
            { name: 'min', value: 283 },
            { name: 'mod', value: 591 },
            { name: 'mul', value: 603 },
            { name: 'neq', value: 599 },
            { name: 'not', value: 386 },
            { name: 'or', value: 323 },
            { name: 'orderby', value: 307 },
            { name: 'range', value: 772 },
            { name: 'select', value: 296 },
            { name: 'stddev', value: 363 },
            { name: 'sub', value: 600 },
            { name: 'sum', value: 280 },
            { name: 'update', value: 307 },
            { name: 'variance', value: 335 },
            { name: 'where', value: 299 },
            { name: 'xor', value: 354 },
            { name: 'x_x', value: 264 }
          ]
        },
        { name: 'Minimum', value: 843 },
        { name: 'Not', value: 1554 },
        { name: 'Or', value: 970 },
        { name: 'Query', value: 13896 },
        { name: 'Range', value: 1594 },
        { name: 'StringUtil', value: 4130 },
        { name: 'Sum', value: 791 },
        { name: 'Variable', value: 1124 },
        { name: 'Variance', value: 1876 },
        { name: 'Xor', value: 1101 }
      ]
    },
    {
      name: 'scale',
      children: [
        { name: 'IScaleMap', value: 2105 },
        { name: 'LinearScale', value: 1316 },
        { name: 'LogScale', value: 3151 },
        { name: 'OrdinalScale', value: 3770 },
        { name: 'QuantileScale', value: 2435 },
        { name: 'QuantitativeScale', value: 4839 },
        { name: 'RootScale', value: 1756 },
        { name: 'Scale', value: 4268 },
        { name: 'ScaleType', value: 1821 },
        { name: 'TimeScale', value: 5833 }
      ]
    }
  ]
};
//数据二
var data2 = {
    name: 'flare',
    children: [
    {
    name: 'flex',
    children: [{ name: 'FlareVis', value: 4116 }]
    },
    {
    name: 'scale',
    children: [
    { name: 'IScaleMap', value: 2105 },
    { name: 'LinearScale', value: 1316 },
    { name: 'LogScale', value: 3151 },
    { name: 'OrdinalScale', value: 3770 },
    { name: 'QuantileScale', value: 2435 },
    { name: 'QuantitativeScale', value: 4839 },
    { name: 'RootScale', value: 1756 },
    { name: 'Scale', value: 4268 },
    { name: 'ScaleType', value: 1821 },
    { name: 'TimeScale', value: 5833 }
    ]
    },
    {
    name: 'display',
    children: [{ name: 'DirtySprite', value: 8833 }]
    }
    ]
    };
// data.forEach(function (datum, index) {
//   });
option4 = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  series: [
    {
      type: 'tree',
      // 第一个图
      id: 0,
      name: 'tree1',
      data: [dataone],
      top: '10%',
      left: '8%',
      bottom: '22%',
      right: '20%',
      symbolSize: 7,
      // 折线图
      edgeShape: 'polyline',
      // 分叉点与子树父节点的距离占整个子树高度的百分比。
      edgeForkPosition: '63%',
      initialTreeDepth: 3,
      lineStyle: {
        width: 2
      },
      label: {
        backgroundColor: '#fff',
        position: 'right',
        // 垂直居中
        verticalAlign: 'middle',
        align: 'right'
      },
      // 叶子结点
      leaves: {
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'left'
        }
      },
      emphasis: {
        focus: 'descendant'
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750,
    //   层数
      initialTreeDepth: 2,

      layout:'orthogonal',
      //layout = 'orthogonal'生效
      //  从右至左 ，LR,TB,BT
      orient:'RL',
    },
    {
        type: 'tree',
        name: 'tree2',
        data: [data2],
        top: '20%',
        left: '60%',
        bottom: '22%',
        right: '18%',
        symbolSize: 7,
        label: {
        position: 'left',
        verticalAlign: 'middle',
        align: 'right'
        },
        leaves: {
        label: {
        position: 'right',
        verticalAlign: 'middle',
        align: 'left'
        }
        },
        emphasis: {
        focus: 'descendant'
        },
        }
  ]
};

if (option4 && typeof option4 === 'object') {
    myChart_4.setOption(option4);
}
