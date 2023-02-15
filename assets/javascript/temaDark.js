const themeToggle = document.getElementById("chk");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("Light");
});
