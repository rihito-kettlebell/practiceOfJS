document.addEventListener("DOMContentLoaded", function(){
  let data = {
    title: "java",
    price: 2680,
    // handleEvwntメソッドを使うことでbindを使わなくてよくなる
    handleEvent: function(){
      console.log(this.title + "/" + this.price + "円");
    } 
  };

  // bind()を使わなくてよくなる
  document.getElementById("btn").addEventListener("click", data, false);
}, false);