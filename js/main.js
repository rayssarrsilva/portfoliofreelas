// === MENU MOBILE ===
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = `
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  `;
  document.querySelector('.header .container').appendChild(menuToggle);

  const nav = document.querySelector('.nav');
  const bars = document.querySelectorAll('.bar');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('responsive');
    bars.forEach(bar => bar.classList.toggle('active'));
  });

  // Fechar menu ao clicar em um link (mobile)
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('responsive');
      bars.forEach(bar => bar.classList.remove('active'));
    });
  });

  // === SMOOTH SCROLL ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // === BOTÃO VOLTAR AO TOPO ===
  const backToTop = document.createElement('a');
  backToTop.href = '#top';
  backToTop.className = 'back-to-top';
  backToTop.innerHTML = '↑';
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  // === ANIMAÇÃO DE ENTRADA (opcional, já no CSS) ===
  // Nada adicional necessário — tudo feito com CSS

  // === TOQUE DE CHARME: botão de WhatsApp com ícone animado (opcional) ===
  // Já está no CSS com hover, mas você pode adicionar sons ou micro-interações futuramente
});