function setCookie(key, data){
  let outdata = key + "=" + encodeURIComponent(data);
  let now = new Date();
  let yy = now.getFullYear();
  yy++;
  now.setFullYear(yy);
  let extime = now.toUTCString();
  document.cookie = outdata + ";expires=" + extime;
}

function getCookie(key){
  let tmp = document.cookie + ";";
  let s = tmp.indexOf(key);
  if(s == -1){
    return("");
  }else{
    s = s + key.length + 1;
    let e = tmp.indexOf(";", s);
    let data0 = tmp.substring(s, e);
    let data = decodeURIComponent(data0);
    return data;
  }
}

function setName(){
  a = prompt("あなたの名前を入力してください");
  if(a == ""){
    setName();
  }
  setCookie("name", a);
  setCookie("kaisu", 1);
}