window.onload = function () {
  let btn = document.getElementById("btn");

  // イベントハンドラーを登録
  btn.onclick = function () {
    window.alert("こんにちは");
  };

  //イベントハンドラーの破棄
  btn.onclick = null;
};

/**
 * イベントハンドラーを削除するには、onxxxxxメソッドに対し、null値を設定する
 */
