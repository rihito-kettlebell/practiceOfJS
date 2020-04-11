document.addEventListener("DOMContentLoaded", function(){
  // <a id="inner">要素のclickイベントリスナー
  document.getElementById("inner").addEventListener("click", function(e){
    window.alert("#innerリスナー1が発生");
  }, false);

  document.getElementById("inner").addEventListener("click", function(e){
    window.alert("#innerリスナー2が発生");
  }, false);

  // <div id="outer">要素のclickイベントリスナー
  document.getElementById("outer").addEventListener("click", function(e){
    window.alert("#outerリスナーが発生");
  }, false);

}, false);