const data = {
  essencial: {
    title: 'Infraestrutura Essencial',
    items: [
      'Servidor otimizado para SEO técnico',
      'HTTPS forçado com SSL automático',
      'Cache de página estático',
      'Proteção básica contra quedas',
      'Ambiente estável para sites institucionais'
    ]
  },
  profissional: {
    title: 'Infraestrutura Profissional',
    items: [
      'VPS Cloud isolada',
      'CDN global com cache inteligente',
      'Firewall de aplicação',
      'Monitoramento 24/7',
      'Relatórios técnicos mensais'
    ]
  },
  performance: {
    title: 'Infraestrutura Performance',
    items: [
      'Arquitetura escalável em cloud',
      'Balanceamento de carga',
      'Cache em múltiplas camadas',
      'Backup diário versionado',
      'Suporte técnico prioritário'
    ]
  }
};

const overlay = document.getElementById('infraOverlay');
const title = document.getElementById('infraTitle');
const list = document.getElementById('infraList');

document.querySelectorAll('.open-details').forEach(btn => {
  btn.addEventListener('click', e => {
    const plan = e.target.closest('.hosting-plan').dataset.plan;
    title.textContent = data[plan].title;
    list.innerHTML = '';
    data[plan].items.forEach(i => {
      const li = document.createElement('li');
      li.textContent = i;
      list.appendChild(li);
    });
    overlay.classList.add('active');
  });
});

document.querySelector('.close-overlay').onclick = () => {
  overlay.classList.remove('active');
};
