document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Marxton — Future of Space!");

  // Smooth scroll for internal page links (anchors starting with #)
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
