// Dynamic border tone for fixed navbar on page scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.borderColor = '#bbbbbb';
  } else {
    navbar.style.borderColor = '#e5e5e5';
  }
});

// Update active navigation link styling on click
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(item => item.style.color = 'var(--text-secondary)');
    this.style.color = 'var(--text-primary)';
  });
});
