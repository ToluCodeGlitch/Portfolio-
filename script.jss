// Simple effect: Load fade-in on scroll (future-proofing for more animations)
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});
