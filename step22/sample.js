let xday = new Date(2026, 5, 10);
let now = new Date();
// Dateオブジェクトの差をミリ秒で計算し、1日単位に変換
let ms = xday.getTime() - now.getTime();
let days = ms/(24 * 60 * 60 * 1000);
// 小数点以下を切り上げ、整数にする
days = Math.ceil(days);
document.write(days);
