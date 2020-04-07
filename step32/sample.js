document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.getElementById("btn").addEventListener(
      "click",
      function () {
        // textbox取得
        let name = document.getElementById("name");
        let url = document.getElementById("url");
        // <a>要素を生成
        let anchor = document.createElement("a");
        // <a>要素のhref属性を設定
        anchor.href = url.value;
        // テキストノードを生成し、<a>要素の直下に追加
        let text = document.createTextNode(name.value);
        anchor.appendChild(text);
        // <br>要素を生成
        let br = document.createElement("br");
        let list = document.getElementById("list");
        // <div>要素の直下に<a>/ <br>要素の順番で追加
        list.append(anchor);
        list.append(br);
      },
      false
    );
  },
  false
);
