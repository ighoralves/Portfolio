const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

scrollReveal.reveal(
  `#home, #about, #skills, #projects
  `,
  { interval: 100 }
);
