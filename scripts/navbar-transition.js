// Nav bar transition script

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
console.log(currentScrollPos,prevScrollpos);
  if (prevScrollpos > currentScrollPos+2) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-68px";
  }
  prevScrollpos = currentScrollPos;
}