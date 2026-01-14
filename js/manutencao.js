(() => {
  const qsa = sel => Array.from(document.querySelectorAll(sel));
  const qs = sel => document.querySelector(sel);

  /* ======================================================
     1) ACORDEÃO PERFEITO (abre só o clicado, nunca os outros)
  ====================================================== */
  qsa('.toggle').forEach(btn => {
    const panel = qs(btn.dataset.target);

    btn.addEventListener('click', () => {
      const isOpen = panel.classList.contains('open');

      // fecha todos
      qsa('.details.open').forEach(d => {
        d.classList.remove('open');
        d.style.maxHeight = null;
        d.setAttribute('aria-hidden', 'true');
      });

      qsa('.toggle').forEach(b => b.setAttribute('aria-expanded', 'false'));

      // abre apenas o clicado
      if (!isOpen) {
        panel.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        panel.setAttribute('aria-hidden', 'false');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ======================================================
     2) ANIMAÇÃO DE CONTADOR DE PREÇO (suave e elegante)
  ====================================================== */
  qsa('.price').forEach(el => {
    const finalValue = Number(el.dataset.price);
    let current = 0;
    const step = Math.max(1, finalValue / 40);

    const interval = setInterval(() => {
      current += step;
      if (current >= finalValue) {
        current = finalValue;
        clearInterval(interval);
      }
      el.textContent = `R$ ${Math.round(current)}/mês`;
    }, 25);
  });

  /* ======================================================
     3) EFEITO MAGNÉTICO SUTIL NOS BOTÕES
  ====================================================== */
  qsa('.toggle').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0,0)';
    });
  });

  /* ======================================================
     4) REVELAÇÃO EM CASCATA DOS ITENS DO PLANO
  ====================================================== */
  qsa('.details').forEach(panel => {
    qsa('li', panel).forEach((li, i) => {
      li.style.opacity = 0;
      li.style.transform = 'translateY(6px)';
      panel.addEventListener('transitionend', () => {
        setTimeout(() => {
          li.style.transition = '0.3s ease';
          li.style.opacity = 1;
          li.style.transform = 'translateY(0)';
        }, i * 70);
      }, { once: true });
    });
  });

  /* ======================================================
     5) HOVER INTELIGENTE NO CARD (micro elevação)
  ====================================================== */
  qsa('.plan').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-6px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  /* ======================================================
     6) PROGRESS BAR DE LEITURA
  ====================================================== */
  const bar = document.createElement('div');
  Object.assign(bar.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '3px',
    background: '#111',
    width: '0%',
    zIndex: 9999
  });
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = `${(scrollY / h) * 100}%`;
  });

  /* ======================================================
     7) FRASES DE AUTORIDADE ROTATIVAS
  ====================================================== */
  const quotes = qsa('.quote');
  let qi = 0;
  setInterval(() => {
    quotes[qi].classList.remove('active');
    qi = (qi + 1) % quotes.length;
    quotes[qi].classList.add('active');
  }, 4000);

  /* ======================================================
     8) INTERAÇÃO DE FOCO NO PREÇO AO PASSAR O MOUSE
  ====================================================== */
  qsa('.plan').forEach(plan => {
    const price = plan.querySelector('.price');
    plan.addEventListener('mouseenter', () => {
      price.style.letterSpacing = '1px';
    });
    plan.addEventListener('mouseleave', () => {
      price.style.letterSpacing = '0';
    });
  });

  /* ======================================================
     9) SCROLL REVEAL SUAVE DOS CARDS
  ====================================================== */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = 1;
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  qsa('.plan').forEach(p => {
    p.style.opacity = 0;
    p.style.transform = 'translateY(20px)';
    p.style.transition = '0.6s ease';
    io.observe(p);
  });

  /* ======================================================
     10) FEEDBACK VISUAL DE CLIQUE NO BOTÃO
  ====================================================== */
  qsa('.toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.style.boxShadow = '0 0 0 3px rgba(0,0,0,.08)';
      setTimeout(() => btn.style.boxShadow = 'none', 200);
    });
  });

})();
