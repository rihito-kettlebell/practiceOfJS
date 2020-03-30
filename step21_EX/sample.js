// ボールをクリックする
let ball = document.getElementById("ball");
ball.onmousedown = function(){
  console.log("クリックされました!");
}

//画像位置制御のため、positionをabsoluteにする。
ball.style.position = "absolute";

/**
 * マウスがクリックされたとき、onMoveメソッドにイベントを登録する(addEvebtListener)
 * clientX 画面左上から横距離
 * clientY 画面左上から縦距離
 * offsetWidth   要素の横幅を取得
 * offsetHeight  要素の高さを取得
 * style.top, style.left css変更加える
 */
ball.onmousedown = function(event){
  document.addEventListener("mousemove",onMove);
}
let onMove = function(event){
  let x = event.clientX;
  let y = event.clientY;
  let width = ball.offsetWidth;
  let height = ball.offsetHeight;
  ball.style.top = (y-height/2) + "px";
  ball.style.left = (x-width/2) + "px";
}

/**
 * Element.getBoundingClientRect() メソッドは、要素の寸法と、そのビューポートに対する位置返す
 * 
 * 最後に、マウスポインタへ付与したイベントを解除する。
 */
ball.onmouseup = function(event){
  let x = event.clientX;
  let y = event.clientY;
  let width = ball.offsetWidth;
  let height = ball.offsetHeight;
  // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
  let gomibakoRect = gomibako.getBoundingClientRect();
  //　かごの内側にボールが来た時にクリックで、ボールを削除
  if((x>=gomibakoRect.left && x<=(gomibakoRect.left+gomibakoRect.width)) && (y>=gomibakoRect.top && y<=(gomibakoRect.top+gomibakoRect.height))){
    let app = document.getElementById("app");
    app.removeChild(ball);
  }
  document.removeEventListener("mousemove",onMove);
}