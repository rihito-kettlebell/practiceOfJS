function bgChange() {
  //　ラジオボタンの数 -1
  let imax = document.f1.iro.length - 1;
  for (i = 0; i <= imax; i++) {
    if (document.f1.iro[i].checked) {
      document.bgColor = document.f1.iro[i].value;
    }
  }
}
