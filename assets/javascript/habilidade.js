var imageDivs = document.querySelectorAll(".image-div");

imageDivs.forEach(function (div) {
  var imgText = div.querySelector(".image-text");
  div.addEventListener("mouseover", function () {
    imgText.style.display = "block";
  });
  div.addEventListener("mouseout", function () {
    imgText.style.display = "none";
  });
});
