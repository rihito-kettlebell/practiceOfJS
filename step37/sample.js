let current = new Date();
let nam = document.getElementsByName("time");
// 要素群を指定するため、配列
nam[0].value = current.toLocaleTimeString();

let kurasu = document.getElementsByClassName("kurasu");
console.log(kurasu[0].textContent);
kurasu[0].textContent = "置き替えました";