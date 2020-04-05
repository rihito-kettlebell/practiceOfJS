// setTimeout("処理test()など",時間＿ミリ秒)
// setInterval()の処理を途中で中段させるにはclearInterval()を使い、あらかじめID名をつけておく。
// ex) ID名 = setInterval("処理", 時間);
document.addEventListener(
  "DOMContentLoaded",
  function () {
    // タイマー設置
    let timer = window.setInterval(
      // 現在の時刻をresultに表示
      function () {
        let dat = new Date();
        document.getElementById(
          "result"
        ).textContent = dat.toLocaleTimeString();
      },
      1000
    );

    // ボタンクリック時にタイマー処理を中止
    document.getElementById("btn").addEventListener(
      "click",
      function () {
        window.clearInterval(timer);
      },
      false
    );
  },
  false
);
