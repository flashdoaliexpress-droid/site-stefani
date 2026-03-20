// AOS Init
AOS.init({ duration: 800, once: true, offset: 60 });

// Menu mobile
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Fechar ao clicar em link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('active'));
  });
}

// FAQ Accordion
document.querySelectorAll('.faq-item__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    // Fechar todos
    document.querySelectorAll('.faq-item__btn').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.style.maxHeight = null;
    });
    // Abrir clicado
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + 'px';
    }
  });
});
