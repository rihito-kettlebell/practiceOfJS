document.addEventListener("DOMContentLoaded", function(){
  // 指定された要素elemがクリックされた回数をカウントするクラス
  let Counter = function(elem){
    this.count = 0;
    this.elem = elem;
    //
    // elem.addEventListener("click", function(){
    //   this.count++;
    //   this.show();
    // }, false);
    // 上記ではエラーとなるため、以下で書き換える
    elem.addEventListener("click", () => {
      this.count++;
      this.show();
    }, false);
  };

  //showメソッド
  Counter.prototype.show = function(){
    console.log(this.elem.id + "は" + this.count + "回クリックされた");
  };

  //btnに紐づけ
  let c = new Counter(document.getElementById("btn"));
}, false);