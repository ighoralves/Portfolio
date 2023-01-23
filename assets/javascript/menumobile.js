const btn = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefaul();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btn.addEventListener("click", toggleMenu);
btn.addEventListener("touchstart", toggleMenu);
