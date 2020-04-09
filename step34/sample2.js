document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("btn");

  //　変数にfunctionを代入
  let listener = function () {
    window.alert("こんにちは");
  };

  // イベントリスナーを登録
  btn.addEventListener("click", listener, false);

  // イベントリスナーを破棄
  btn.removeEventListener("click", listener, false);
});
