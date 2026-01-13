document.addEventListener('DOMContentLoaded', () => {

  /* ============================
     1. ABRIR / FECHAR DETALHES
     (ISOLADO POR CARD)
  ============================ */
  document.querySelectorAll('.plan-card').forEach(card => {
    const toggleBtn = card.querySelector('.toggle');
    const details = card.querySelector('.plan-details');

    toggleBtn.addEventListener('click', () => {
      details.classList.toggle('open');
      toggleBtn.textContent = details.classList.contains('open')
        ? 'Fechar detalhes'
        : 'Ver o que está incluso';
    });
  });

  /* ============================
     2. COPY PLAN (FEEDBACK VISUAL)
  ============================ */
  document.querySelectorAll('.copy').forEach(btn => {
    btn.addEventListener('click', async () => {
      const card = btn.closest('.plan-card');
      const text = card.innerText.trim();

      try {
        await navigator.clipboard.writeText(text);
        const original = btn.textContent;
        btn.textContent = 'Copiado ✓';
        btn.disabled = true;

        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
        }, 1400);
      } catch {
        alert('Erro ao copiar o plano.');
      }
    });
  });

  /* ============================
     3. REVEAL SUAVE AO SCROLL
  ============================ */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.plan-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(12px)';
      card.style.transition = 'opacity .6s ease, transform .6s ease';
      observer.observe(card);
    });
  }

  /* ============================
     4. CONTADOR DE PREÇO ANIMADO
  ============================ */
  document.querySelectorAll('.price').forEach(priceEl => {
    const value = parseInt(priceEl.textContent.replace(/\D/g, ''), 10);
    if (!value) return;

    let current = 0;
    const step = Math.max(1, Math.floor(value / 40));

    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      priceEl.textContent = `R$ ${current.toLocaleString('pt-BR')}`;
    }, 20);
  });

  /* ============================
     5. DESTAQUE INTELIGENTE
     AO PASSAR O MOUSE
  ============================ */
  document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
      card.style.transition = 'transform .25s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

});
