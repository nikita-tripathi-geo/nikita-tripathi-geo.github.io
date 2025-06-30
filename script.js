// script.js
document.querySelectorAll('.sidebar nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.sidebar nav a.active').classList.remove('active');
    link.classList.add('active');
  });
});
