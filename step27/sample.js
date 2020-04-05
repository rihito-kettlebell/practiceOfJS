function kakudai(fn){
  let n = fn.lastIndexOf("/");
  let bfn = fn.substr(n+3, 9);
  document.BigPhoto.src = bfn;
}