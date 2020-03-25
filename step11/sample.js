let i = 0;
function judge() {
  i++;
  switch (i) {
    case 1:
      alert("[ヒント]今回は北海道は省きます");
      break;
    case 2:
      alert("[ヒント]東北地方にある県です");
      break;
    default:
      alert("答えは岩手県です");
      break;
  }
}
