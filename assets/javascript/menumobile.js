const btn = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefaul();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btn.addEventListener("click", toggleMenu);
btn.addEventListener("touchstart", toggleMenu);

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}
