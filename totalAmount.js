process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const tmp = lines[1].split(" ");
  // console.log(tmp)
  // const sizePrice = {SS : tmp[0]/2, S : tmp[0], M : tmp[1], L : tmp[2], LL : tmp[2]*2}
  // console.log(sizePrice)
  // const test = "SS"
  // console.log(sizePrice.test)

  const sizePrice = [tmp[0]/2, tmp[0]/1, tmp[1]/1, tmp[2]/1, tmp[2]*2]
  console.log(sizePrice)

  let totalAmount = 0
  for (i=2; i<Number(lines[0])+2; i++) {
    // console.log(`${i}回目`)
    switch (lines[i]) {
      case "SS" :
        totalAmount += sizePrice[0]
        break
      case "S" :
        totalAmount += sizePrice[1]
        break
      case "M" :
        totalAmount += sizePrice[2]
        break
      case "L" :
        totalAmount += sizePrice[3]
        break
      case "LL" :
        totalAmount += sizePrice[4]
        break
    }
  }
  console.log(totalAmount)

  // S・M・Lの値段をsplitして変数に入れる、SSとLLも同時にやる
  // 注文数回、改行ごとに注文されたサイズを取得
  // →対応するサイズの金額を変数totalに+=していく
  // console.log(lines[0]);
});