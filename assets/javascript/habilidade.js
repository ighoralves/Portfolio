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

// function selecionarCard(event) {
//   // remove a classe "selecionado" de todos os cards
//   const cards = document.querySelectorAll(".card");
//   cards.forEach((card) => card.classList.remove("selecionado"));

//   // adiciona a classe "selecionado" apenas ao card clicado
//   const cardSelecionado = event.currentTarget;
//   cardSelecionado.classList.add("selecionado");
// }

// // adiciona um event listener para cada card
// const cards = document.querySelectorAll(".card");
// cards.forEach((card) => card.addEventListener("click", selecionarCard));
