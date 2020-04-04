function uranai() {
  let a = Math.random() * 3;
  // 切り捨て
  a = Math.floor(a);
  switch (a) {
    case 0:
      alert("[大吉]");
      break;
    case 1:
      alert("[中吉]");
      break;
    default:
      alert("[小吉]");
      break;
  }
}
