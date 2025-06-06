const hamToggle = document.getElementById('hamToggle');
const navLinks = document.getElementById('navLinks');

hamToggle.addEventListener('click', () => {
  hamToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

