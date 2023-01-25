const botaoVerMais = document.querySelector(".btns1");
const projetos = document.querySelectorAll(".hide");

function clickTo(e) {
  projetos.forEach((elemento) => {
    if (elemento.classList.contains("hide")) {
      elemento.classList.remove("hide");
      elemento.classList.add("visivel");
      botaoVerMais.innerHTML = "Ver menos";
    } else {
      elemento.classList.add("hide");
      elemento.classList.remove("visivel");
      botaoVerMais.innerHTML = "Ver mais";
    }
  });
}

function maisProjetos(elemento) {
  elemento.addEventListener("click", clickTo);
}

maisProjetos(botaoVerMais);
