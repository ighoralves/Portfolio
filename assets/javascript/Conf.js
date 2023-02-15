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

var logoDesktop = document.querySelector(".Header-logo");
var logoMobile = document.querySelector(".logoMobile");

function toggleLogo() {
  if (window.innerWidth < 500) {
    logoDesktop.style.display = "none";
    logoMobile.style.display = "block";
  } else {
    logoDesktop.style.display = "block";
    logoMobile.style.display = "none";
  }
}

window.addEventListener("resize", toggleLogo);
toggleLogo();
