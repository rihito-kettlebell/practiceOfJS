let now = new Date();
let hh = now.getHours();
let mm = now.getMinutes();
document.write("ただいま" + hh + "時" + mm + "分。");
if(hh < 7 || hh >= 20) {
  document.bgColor = "#0000cc";
  document.fgColor = "#ffff33";
} else if (hh < 17) {
  document.bgColor = "ffffff";
  document.fgColor = "000000";
}else{
  document.bgColor = "ffcc66";
  document.fgColor = "666666";
}