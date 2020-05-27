window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("file").addEventListener(
    "change",
    function (e) {
      let input = document.getElementById("file").files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function (e) {
          document.getElementById("result").src = reader.result;
        },
        true
      );
      reader.readAsDataURL(input);
    },
    true
  );
});
