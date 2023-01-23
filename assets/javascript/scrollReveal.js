const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `.Header, .Inicio, .Sobre, .Habilidades
  `,
  { interval: 100 }
);
