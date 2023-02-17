window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  document.body.style.backgroundPositionY = offset * 0.1 + "px";
});
