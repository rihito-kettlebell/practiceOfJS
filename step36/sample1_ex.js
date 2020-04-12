document.addEventListener("DOMContentLoaded", function(){
  let data = {
    title: "java",
    price: 2680,
    show: function(){
      console.log(this.title + "/" + this.price + "円");
    } 
  };

  // 以下ではエラーになる
  // document.getElementById("btn").addEventListener("click", data.show, false);
  // 以下で書き換える
  document.getElementById("btn").addEventListener("click", data.show.bind(data), false);
}, false);