function goLink(){
  let n = document.f1.links.selectedIndex;
  if(n!=0 && n!=1 && n!=7){
    location.href = document.f1.links.options[n].value;
  }
}