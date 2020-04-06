document.addEventListener("DOMContentLoaded", function () {
  let books = [
    { title: "タイトル1", price: 1000 },
    { title: "タイトル2", price: 2000 },
    { title: "タイトル3", price: 3000 },
  ];

  // コンテンツを貯めるためのDocumentFragmentオブジェクトを生成
  let frag = document.createDocumentFragment();

  // 配列booksの内容を順番に<li>要素に整形
  // for(let i = 0 ; i<books.length; i++){
  //   let b = books[i];
  //   let li = document.createElement("li");
  //   let text = document.createTextNode(b.title + ":" + b.price + "円");
  //   li.appendChild(text);
  //   frag.appendChild(li);
  // }

  //上記をforEachメソッドで書き換えた
  books.forEach(function(book){
    let li = document.createElement("li");
    let text = document.createTextNode(book.title + ":" + book.price + "円");
    li.appendChild(text);
    frag.appendChild(li);
  });

  // id="list"を取得し、要素群をまとめて文書ツリーに追加
  document.getElementById("list").appendChild(frag);
}, false);