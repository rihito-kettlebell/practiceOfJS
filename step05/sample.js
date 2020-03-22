let a = 10;
let b = 4
let kotae = 0;

// wa
function wa(){
  alert("答えは" + kotae + "です。");
  kotae = a + b;
}

// sa
function sa(){
  kotae = a - b;
  console.log(kotae);
  alert("答えは" + kotae + "です。");
}

// seki
function seki(){
  kotae = a * b;
  console.log(kotae);
  alert("答えは" + kotae + "です。");
}

// syou　出力時に四捨五入をし、整数に変換している
function syou(){
  kotae = a / b;
  console.log(kotae);
  alert("答えは" + kotae.toFixed(0) + "です。");
}

// amari
function amari(){
  let kotae = a % b;
  console.log(kotae);
  alert("答えは" + kotae + "です。");
}