let b = getCookie("name");
if (b == "") {
  setName();
  b = getCookie("kaisu");
}
let n = getCookie("kaisu");
document.write(b + "さん、" + n + "回目のご訪問ありがとう。");
n++;
setCookie("kaisu", n);
