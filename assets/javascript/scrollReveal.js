const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 3000,
  reset: true,
});

scrollReveal.reveal(
  `#home, #about, #skills, #projects
  `,
  { interval: 100 }
);
