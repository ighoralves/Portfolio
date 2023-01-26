const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home, h2, h3, #about, #skills, #projects
  `,
  { interval: 100 }
);
