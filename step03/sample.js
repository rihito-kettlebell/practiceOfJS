let total = 4800;
let a = new Array(3);
a[0] = 2000;
a[1] = 400;
a[2] = 500;
//チェックがあれば足す、外れたら引く
function goukei(i){
  if(document.forms[0].elements[i].checked == true){
    total = total + a[i];
  } else {
    total = total - a[i];
  }
  document.forms[0].elements[3].value = total;
}
