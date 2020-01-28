var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    console.log("scrol")
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar")[0].style.top = "0";
  } else {
    document.getElementsByClassName("navbar")[0].style.top = "-56px";
  }
  prevScrollpos = currentScrollPos;
}