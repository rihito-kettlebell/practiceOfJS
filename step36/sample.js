/**
 * 処理について
 * 特定のイベントリスナーだけ実行し、上位ノード(親ノード)のイベントリスナーは無視したいときに使う
 */
document.addEventListener("DOMContentLoaded", function(){
  // <a id="inner">要素のイベントリスナー
  document.getElementById("inner").addEventListener("click", function(e){
    window.alert("innerリスナー1が発生");
    //　今回のポイントは次の処理
    // e.stopPropagation();
    // 直ちに処理をキャンセルしたいばあいは以下の処理
    // e.stopImmediatePropagation();
    // さらに、イベント自体の挙動を直ちにキャンセル(具体的には最後のページ遷移をなくすこと)したい場合は以下の処理
    e.preventDefault();
    // ※ただし、キャンセルできないイベントもある。　可否の確認はcancelableでできる。可能なときはtrueが返る。
  }, false);

  document.getElementById("inner").addEventListener("click", function(e){
    window.alert("innerリスナー2が発生");
  }, false);

  // 親ノードである以下の処理はキャンセルされる
  document.getElementById("outer").addEventListener("click", function(e){
    window.alert("outerリスナーが発生");
  }, false);
});

// ※イベントハンドラーでキャンセルする方法もある。