document.addEventListener("DOMContentLoaded", function(){
  let elem = document.getElementById("elem");

  //　マウスポインタが乗ってる間は背景色変更
  elem.addEventListener("mouseover", function(){
    this.className = "highlight";
  }, false);

  // マウスポインタが外れたタイミングで背景色を戻す
  elem.addEventListener("mouseout", function(){
    this.className = "";
  }, false);

});