const imageDivs = document.querySelectorAll(".Skills-cards");
let activeText = imageDivs[0].querySelector(".image-text");

imageDivs.forEach(function (div) {
  const imgText = div.querySelector(".image-text");
  div.addEventListener("click", function () {
    activeText.style.display = "none";
    imgText.style.display = "block";
    activeText = imgText;
  });
});

const cards = document.querySelectorAll(".Skills-cards");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
  });
});
