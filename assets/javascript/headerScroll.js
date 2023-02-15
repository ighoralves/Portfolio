window.onscroll = function () {
  var menu = document.getElementById("nav");
  if (window.pageYOffset > 10) {
    menu.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
  }
};
