function goukei(){
  let total = 0;
  // for(i=0; i<=100; i++){
  //   if(i%2==0){
  //     total+=i;
  //   }
  // }
  for(i=2; i<=100; i=i+2){
    total += i;
  }
  alert(total);
}