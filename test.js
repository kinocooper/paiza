const { format } = require('path');

process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});

reader.on('close', () => {
  const tmp = lines[0].split(' ')
  const H = tmp[0]
  const W = tmp[1]
  const T = tmp[2]

  for(i=1;i<=H;i++){
    eval("var M" + i + "= {start : [" + i + " , 0 ] , now : [" + i + " , 0 ] , item : \"M" + i + "\"}" )
  }

  for(i=1;i<=W;i++){
    eval("var F" + i + "= {start : [ 0 , " + i + " ] , now : [ 0 , " + i + " ] , item : \"F" + i + "\"}" )
  }

  for(i=0;i<T;i++){
    // Mが右へ進行中かどうか　T/W が偶数のときは右へ進行中
    let m = Math.floor(i / W) % 2 === 0 ? 1 : -1
    // Fが下へ進行中かどうか　T/W が偶数のときは下へ進行中
    let f = Math.floor(i / H) % 2 === 0 ? 1 : -1
    // Mの移動
    for(j=1;j<=H;j++){
      eval("M" + j).now[1] += m;
    }
    // Fの移動
    for(j=1;j<=W;j++){
      eval("F" + j).now[0] += f;
    }
    // M全員に対してF全員が交差しているか調べ、交差してればitem交換
    for(j=1;j<=H;j++){
      // console.log(eval("M" + j).now)
      for(k=1;k<=W;k++){
        // console.log(eval("F" + k).now)
        if(eval("M" + j).now[0] === eval("F" + k).now[0] && eval("M" + j).now[1] === eval("F" + k).now[1]){
          const tmp = eval("M" + j).item
          eval("M" + j).item = eval("F" + k).item
          eval("F" + k).item = tmp
        }
      }
    }
  }
  // Mが最終的に持ってるアイテム・F〃を列挙
  for(i = 1; i <= H; i++){
    const itemArr = eval("M" + i).item.split("")
    console.log(`${itemArr[0]} ${itemArr[1]}`)
  }
  for(i = 1; i <= W; i++){
    const itemArr = eval("F" + i).item.split("")
    console.log(`${itemArr[0]} ${itemArr[1]}`)
  }
  console.log("\n")
})







