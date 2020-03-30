// 0が日曜日
let youbi = new Array(7);
youbi[0] = "(日曜日)";
youbi[1] = "(月曜日)";
youbi[2] = "(火曜日)";
youbi[3] = "(水曜日)";
youbi[4] = "(木曜日)";
youbi[5] = "(金曜日)";
youbi[6] = "(土曜日)";

function nowTime() {
  let now = new Date();
  // 年, 西暦
  let yy = now.getFullYear();
  //　月, 0 ~ 11 なので1を足す
  let mm = now.getMonth();
  let dd = now.getDate();
  // 曜日
  let Wd = now.getDay();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let TSUKIHI = yy + "年" + (mm+1) + "月" + dd + "日";
  let JIKOKU = h + "時" + m + "分" + s + "秒";
  alert(TSUKIHI + youbi[Wd] + JIKOKU + "です");
  document.write(TSUKIHI + youbi[Wd] + JIKOKU + "です")

}
