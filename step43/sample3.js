document.addEventListener(
  "DOMContentLoaded",
  function () {
    // start time
    let timer = window.setInterval(function () {
      let dat = new Date();
      document.getElementById("result").textContent = dat.toLocaleTimeString();
    }, 5000);

    // stop timer
    document.getElementById("btn").addEventListener("click", function(){
      window.clearInterval(timer)
    }, false)
  },
  false
);
