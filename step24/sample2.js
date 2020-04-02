function openLink() {
  let n = document.f1.links.selectedIndex;
  if (n != 0) {
    window.open(document.f1.links.options[n].value);
  }
}
