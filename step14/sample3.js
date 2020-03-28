function ans(){
  let input,check;
  input = prompt("答えを入力してください","");
  check = input % 1;
  if(input == "岩手県"){
    alert("正解です");
  }else if(input == "北海道"){
    alert("北海道は県ではありません");
  }else{
    alert("間違いです");
  }
}