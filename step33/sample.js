document.addEventListener("DOMContentLoaded", function(){
  let li = document.getElementsByTagName("li");
  console.log("生きたオブジェクト") ;
  console.log("変更前が" + li.length);
  
  let ul = document.getElementById("list");
  ul.appendChild(document.createElement("li"));
  console.log("変更後が" + li.length);
}, false);
