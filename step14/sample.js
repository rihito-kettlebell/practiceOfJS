function koyakusu() {
  let a, b, small, ax, bx;
  a = prompt("1つ目の数値を入力してください","ここに答えを入力してください");
  b = prompt("2つ目の数値を入力してください"<"ここに答えを入力してください");
  if (a >= b) {
    small = b;
  } else {
    small = a;
  }
  for (i = small; i >= 1; i--) {
    if (a % i == 0 && b % i == 0) {
      alert("最大公約数は" + i + "です");
      break;
    }
  }
}
