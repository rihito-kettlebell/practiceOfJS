document.addEventListener("DOMContentLoaded", function () {
  let list = document.getElementById("list");
  let pic = document.getElementById("pic");
  let del = document.getElementById("del");

  // <ul id="list" 配下のリンクをクリックしたときの処理
  list.addEventListener("click", function (e) {
    // data-isbn属性からアンカータグにひも付いたisbn値を取得
    let isbn = e.target.getAttribute("data-isbn");

    // isbn値が取得できた場合のみ処理を実行
    if (isbn) {
      // <img>要素を生成
      let img = document.createElement("img");
      img.src = "http://www.wings.msn.to/books/" + isbn + "/" + isbn + ".jpg";
      img.alt = e.target.textContent;
      img.height = 150;
      img.width = 108;
      // <div>要素配下に<img>要素が存在するか (画像を表示中か) を確認
      if(pic.getElementsByTagName("img").length > 0){
        // 存在する場合、新たな要素で置換
        pic.replaceChild(img, pic.lastChild);
      }else{
        // 存在しない場合、新たに追加し、[削除]ボタンを有効に
        del.disabled = false;
        pic.appendChild(img);
      }
    }
  }, false);
  
  //削除ボタンがクリックされたとき
  del.addEventListener("click", function(){
    // <div id="pic"配下の子要素を削除し、[削除]ボタンを無効に
    pic.removeChild(pic.lastChild);
    del.disabled = true;
  }, false);
}, false);
