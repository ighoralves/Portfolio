const mobileMenu = document.querySelector(".DarkLight");
const toggleButton = document.querySelector(".toggle");
const menu = document.querySelector(".Conf");

toggleButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  const isInsideMenu = menu.contains(event.target);
  if (!isInsideMenu && mobileMenu.classList.contains("show")) {
    mobileMenu.classList.remove("show");
  }
});
