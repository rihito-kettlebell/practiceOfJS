let n = document.cookie;
// クッキーの値が、未設定ならば初回訪問。
if (n == "") {
  document.write("初回訪問です");
  setKaisu(1);
} else {
  console.log(n);
  n++;
  document.write(n + "回目の訪問です。");
  setKaisu(n);
}

// 「現在から1年後」を有効起源としてクッキーに保存する。
function setKaisu(s) {
  console.log(s);
  let now = new Date();
  let yy = now.getFullYear();
  yy++;
  now.setFullYear(yy);
  let extime = now.toUTCString()
  //　expiresの前にあるセミコロンは忘れやすいので注意。ここを間違えると、NaNとなる。
  document.cookie = s + ";expires=" + extime;
}
