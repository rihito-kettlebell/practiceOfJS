let name = document.cookie;
if (name == "") {
  setName();
}
document.write(name + "さん、ご訪問ありがとうございます。");

// セッター
function setName() {
  name = prompt("あなたの名前を入力してください", "");
  if (name == "") {
    setName();
  }
  let now = new Date();
  let yy = now.getFullYear();
  yy++;
  now.setFullYear(yy);
  let extime = now.toGMTString();
  document.cookie = name + ";expires=" + extime;
}
