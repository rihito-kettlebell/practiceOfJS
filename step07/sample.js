// define global variable
let kai;
let a = new Array(3);
let b = new Array(3);

a[0] = 5;
a[1] = 12;
a[2] = 18;
b[0] = 33;
b[1] = 14;
b[2] = 65;


// 積
// htmlより数値を渡すときは直接記入、文字列を渡す時は''で囲む
function seki(i){
  kai = a[i] * b[i];
  console.log(kai);
  alert("答えは"+kai+"です");
}