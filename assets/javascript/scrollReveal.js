const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `.Header, .Inicio, .Sobre, h1, h2, h3, p
  `,
  { interval: 100 }
);
