function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 220 * i);
  });
}

const textAuto = document.querySelector(".autotext");
typeWriter(textAuto);
