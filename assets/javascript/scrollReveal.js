const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
  reset: true,
});

scrollReveal.reveal(
  `#home, h2, h3, p, #about, #skills, #projects
  `,
  { interval: 100 }
);
