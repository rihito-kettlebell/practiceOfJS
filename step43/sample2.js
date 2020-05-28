document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.getElementById("fm").addEventListener(
      "submit",
      function (e) {
        if (!window.confirm("ページを送信しますか？")) {
          e.preventDefault();
        }
      },
      false
    );
  },
  false
);
