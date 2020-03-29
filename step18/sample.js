let array = new Array("00", "33", "66", "99", "CC", "FF");
let color, tda, tdb;
// iは赤
for (i = 0; i <= 5; i++) {
  document.write("<tr>");
  // jは緑
  for (j = 0; j <= 5; j++) {
    // kは青
    for (k = 0; k <= 5; k++) {
      color = "#" + array[i] + array[j] + array[k];
      tda = "background-color:" + color + ";";
      tdb = "document.bgColor='" + color + "';";
      document.write('<td style="' + tda + '" ' + 'onmouseover="' + tdb + '"></td>');// onmouseoverでイベントを起こす
    }
  }
  document.write("</tr>");
}
