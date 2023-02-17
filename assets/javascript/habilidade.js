const imageDivs = document.querySelectorAll(".image-div");

imageDivs.forEach(function (div) {
  const imgText = div.querySelector(".image-text");
  div.addEventListener("click", function () {
    imgText.style.display = "block";
  });
  div.addEventListener("toggle", function () {
    imgText.style.display = "none";
  });
});
