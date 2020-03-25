function judge(){
  let total = 0;
  for(i=1;i<=100;i++){
    total+=i;
    if(total>200){
      break;
    }
  }
  alert("1から20までを合計すると"+total+"になります");
}