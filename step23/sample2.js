function check() {
  let kotae = document.forms[0].elements[1].value;
  let eigo = document.forms[0].elements[0].checked;
  if (eigo) {
    console.log(kotae);
    switch (kotae) {
      case "apple":
        alert("正解です!");
        break;
      case "Apple":
        alert("正解です!");
        break;
      case "APPLE":
        alert("正解です!");
        break;
      default:
        alert("間違いです!");
        break;
    }
  } else {
    console.log(kotae);
    switch (kotae) {
      case "りんご":
        alert("正解です!");
        break;
      case "リンゴ":
        alert("正解です!");
        break;
      case "林檎":
        alert("正解です!");
        break;
      default:
        alert("間違いです!");
        break;
    }
  }
}
