// Scroll fade-in
const faders = document.querySelectorAll('.fade-in');
const options = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.animation = 'fadeIn 1s forwards';
    appearOnScroll.unobserve(entry.target);
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Toggle more info
document.getElementById("toggleInfoBtn").addEventListener("click", function() {
  const details = document.getElementById("moreDetails");
  details.classList.toggle("hidden");
  this.textContent = details.classList.contains("hidden") ? "More About Me" : "Hide";
});
