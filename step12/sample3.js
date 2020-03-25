let kai = new Array(3);
let i = 0;
function judge() {
  for (x = 1; x <= 200; x++) {
    let s = x * x * x - 53 * (x * x) + 620 * x - 1036;
    if (s == 0) {
      kai[i] = x;
      i++;
      if (i == 3) {
        break;
      }
    }
  }
  console.log(kai);
  alert("答えは" + kai[0] + "、" + kai[1] + "、" + kai[2] + "です");
  //  複数回押しても同じ答えとなるように初期化する
  kai = [];
  i = 0;
}
