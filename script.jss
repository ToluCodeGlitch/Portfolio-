// Smooth scroll on anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Reveal sections on scroll
const faders = document.querySelectorAll(".fade-in, .fade-in-delay, .fade-in-delay2");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Project card hover glow effect
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 15px #64ffda80";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});

// Background parallax effect (optional visual flair)
document.addEventListener("mousemove", e => {
  document.body.style.backgroundPosition = `${e.clientX / 50}px ${e.clientY / 50}px`;
});
