var myChart = echarts.init(document.getElementById("main"));


var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/ec-option-doc-statistics-201604.json'
$.get(ROOT_PATH, function (data) {
  // setOption(data)

  console.log(data)
  console.log(Object.fromEntries(data))
  // function traverse(data){
  //   for (var key in data) {
  //     if(typeof (data[key])=="object"){ 
  //         traverse(data[key]);
  //     }else{ 
  //       console.log(key +":"+data[key])
  //     }
  //   }
  // }
  

  function traverse(data) {
    let item1 = []
    let count1 = []
    // for (let i = 0; i < data.length; i++) {
      for (var key in data) {
        // console.log(key)
        // item1.push(key);
        if (typeof (data[key]) == "object") {
          traverse(data[key]);
        }
        else if (typeof (data[key]) == "number") {
          traverse(data[key]);

        }
        item1.push(key);
        count1.push(data[key]);
        // console.log(key + ":" + data[key])
      }
    // }
    return item1, count1;
  }
  var dat = traverse(data)
  console.log(dat[0])
  setOption(dat)
}
)
function setOption(data) {
  var option = {
    tooltip: {

      formatter: function (dat) {

        // var value = dat.count1;
        // var treePathdata = dat.item1;
        // var treePath = []; //路径
        // // console.log(treePathdata);
        // for (var i = 1; i < treePathdata.length; i++) {
        //   treePath.push(treePathdata[i]);
        // }


        // treePath.push(item1)
        // return treePath.join('/') + '<br>' + 'class: ' + value + ' KB';
      },

      series: [
        {
          type: 'treemap',
          data: data,
        }

      ]

    }
  }
  myChart.setOption(option);
}


