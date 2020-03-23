function goukei(){
  let total = 0;
  // 初期値が2
  let bunbo = 2;
  let tmp;
  for(i=1 ; i<=10; i++){
    // 1/2^n
    tmp = 1/bunbo;
    total += tmp;
    // ex)分母に毎回２をかける
    bunbo = bunbo * 2;
  }
  alert("合計は"+total+"だよ!")
}