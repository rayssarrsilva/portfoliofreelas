// ========== CARRINHO VISÍVEL ==========
let carrinho = {
  plano: null,
  hospedagem: null,
  manutencao: null
};

// Atualiza a exibição do carrinho
function atualizarCarrinho() {
  const container = document.getElementById('itens-carrinho');
  const miniCarrinho = document.getElementById('mini-carrinho');
  const btnFinalizar = document.getElementById('finalizar-pedido');
  const btnEnviar = document.getElementById('enviar-pedido');

  const itens = [];
  if (carrinho.plano) itens.push(`Plano: ${carrinho.plano}`);
  if (carrinho.hospedagem) itens.push(`Hospedagem: ${carrinho.hospedagem}`);
  if (carrinho.manutencao) itens.push(`Manutenção: ${carrinho.manutencao}`);

  if (itens.length > 0) {
    container.innerHTML = '<li>' + itens.join('</li><li>') + '</li>';
    miniCarrinho.style.display = 'block';
    if (btnEnviar) btnEnviar.style.display = 'block';
    if (btnFinalizar) btnFinalizar.style.display = 'block';
  } else {
    miniCarrinho.style.display = 'none';
    if (btnEnviar) btnEnviar.style.display = 'none';
    if (btnFinalizar) btnFinalizar.style.display = 'none';
  }
}

// ========== DADOS DOS PLANOS ==========
// ========== DADOS DOS PLANOS (ATUALIZADO 2025) ==========
const planos = {
  "start": {
    titulo: "Plano Start+ — Presença Profissional",
    preco: "R$ 500",
    promessa: `
      <p>Você precisa <strong>ter presença online profissional</strong> para não perder clientes — mesmo começando agora.</p>
      <ul>
        <li>Seu negócio <strong>passa confiança</strong> quando alguém pesquisa por você.</li>
        <li>O cliente <strong>te encontra, entende o que você faz e entra em contato</strong>.</li>
        <li>Seu site funciona bem no celular e carrega rápido.</li>
      </ul>
    `,
    detalhes: `
      <h4>O que você recebe:</h4>
      <ul>
        <li>Site One Page profissional (Sobre, Serviços, Contato)</li>
        <li>Design limpo e moderno (padrão 2025)</li>
        <li>Totalmente responsivo (celular, tablet e desktop)</li>
        <li>Botão de WhatsApp funcional</li>
        <li>Formulário de contato simples</li>
        <li>Domínio + hospedagem por 1 ano</li>
        <li>SSL (site seguro – HTTPS)</li>
        <li>Configuração básica de SEO (títulos e descrições)</li>
        <li>Indexação no Google</li>
        <li>Instagram Feed integrado</li>
        <li>Entrega em até 14 dias úteis</li>
        <li>7 dias para ajustes após entrega</li>
      </ul>
      <h4>Diferencial:</h4>
      <p>Site pronto para uso real — não é modelo genérico abandonado depois da entrega.</p>
    `,
  },
  
  
  "essencial": {
    titulo: "Plano Essencial — Geração de Clientes",
    preco: "A partir de R$ 1.000",
    promessa: `
      <p>Você já tem negócio rodando e precisa <strong>atrair clientes de forma consistente</strong> — não apenas existir online.</p>
      <ul>
        <li>Seu site <strong>ajuda o cliente a decidir por você</strong>.</li>
        <li>Você aparece melhor nas buscas locais.</li>
        <li>Está pronto para anúncios e crescimento.</li>
      </ul>
    `,
    detalhes: `
      <h4>O que você recebe (tudo do Start+ +):</h4>
      <ul>
        <li>Site institucional com 5 páginas</li>
        <li>Textos estratégicos focados em conversão</li>
        <li>SEO local estruturado</li>
        <li>Google Meu Negócio configurado ou otimizado</li>
        <li>Integração com Google Maps</li>
        <li>CTAs estratégicos em todas as páginas</li>
        <li>E-mail profissional com domínio próprio</li>
        <li>Estrutura pronta para anúncios (Meta e Google)</li>
        <li>Hospedagem mais robusta</li>
        <li>Área administrativa/li>
        <li>Entrega em até 20 dias úteis</li>
        <li>30 dias de suporte pós-entrega</li>
      </ul>
      <h4>Diferencial:</h4>
      <p>Site pensado para vender e escalar — não apenas “bonito”.</p>
    `
  }
};

// ========== MODAL DE PLANOS ==========
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const planoId = btn.dataset.plano;
    const plano = planos[planoId];
    if (!plano) return;

    document.getElementById('modal-titulo').textContent = plano.titulo;
    document.getElementById('tab-promessa').innerHTML = plano.promessa;
    document.getElementById('tab-detalhes').innerHTML = plano.detalhes;

    const btnAdicionar = document.getElementById('botao-quero-plano');
    if (btnAdicionar) {
      btnAdicionar.dataset.plano = planoId;
      btnAdicionar.textContent = `Adicionar ${planoId === 'start' ? 'Start+' : 'Essencial'} ao carrinho`;
    }

    document.getElementById('modal-plano').style.display = 'flex';
    document.getElementById('modal-overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
});

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('tab-btn')) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    e.target.classList.add('active');
    const tabId = e.target.dataset.tab;
    document.getElementById(`tab-${tabId}`).classList.add('active');
  }
});

document.querySelectorAll('.close-modal, #modal-overlay').forEach(el => {
  el.addEventListener('click', () => {
    document.getElementById('modal-plano').style.display = 'none';
    document.getElementById('modal-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
  });
});

// ========== ADICIONAR PLANO DO MODAL ==========
document.getElementById('botao-quero-plano')?.addEventListener('click', function() {
  const planoId = this.dataset.plano;
  if (!planoId) return;
  const nome = planoId === 'start' ? 'Start+' : 'Essencial';
  carrinho.plano = nome;
  document.getElementById('modal-plano').style.display = 'none';
  document.getElementById('modal-overlay').style.display = 'none';
  document.body.style.overflow = 'auto';
  atualizarCarrinho();
});

// ========== ADICIONAR / REMOVER ITENS ==========
function toggleItem(tipo, valor) {
  if (carrinho[tipo] === valor) {
    carrinho[tipo] = null;
  } else {
    carrinho[tipo] = valor;
  }
  atualizarCarrinho();
}

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', function() {
    const tipo = this.dataset.type;
    const valor = this.dataset.value;
    toggleItem(tipo, valor);
  });
});

// ========== FINALIZAR PEDIDO ==========
function enviarCarrinho() {
  let msg = "Olá! Gostaria de fechar um pedido com os seguintes itens:\n\n";
  if (carrinho.plano) msg += `• Plano: ${carrinho.plano}\n`;
  if (carrinho.hospedagem) msg += `• Hospedagem: ${carrinho.hospedagem}\n`;
  if (carrinho.manutencao) msg += `• Manutenção: ${carrinho.manutencao}\n`;
  msg += "\nPor favor, podemos agendar uma reunião de briefing para alinhar detalhes?";
  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/34991282814?text=${encoded}`, '_blank');
}

document.getElementById('finalizar-pedido')?.addEventListener('click', enviarCarrinho);
document.getElementById('enviar-pedido')?.addEventListener('click', enviarCarrinho);

// ========== TRANSIÇÕES DE ALTA QUALIDADE ENTRE SEÇÕES ==========
document.addEventListener('DOMContentLoaded', () => {
  const sections = [
    { selector: '.hero',        effect: 'fade' },
    { selector: '.sobre',       effect: 'slide-left' },
    { selector: '.garantias',   effect: 'slide-right' },
    { selector: '.diferenciais', effect: 'rotate' },
    { selector: '#planos',      effect: 'zoom' },
    { selector: '#hospedagem',  effect: 'zoom' },
    { selector: '#manutencao',  effect: 'zoom' },
    { selector: '.contato',     effect: 'slide-up' }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let matched = null;
        for (const s of sections) {
          if (
            (s.selector.startsWith('#') && entry.target.id === s.selector.slice(1)) ||
            (s.selector.startsWith('.') && entry.target.classList.contains(s.selector.slice(1)))
          ) {
            matched = s;
            break;
          }
        }
        if (matched) {
          animateSection(entry.target, matched.effect);
          observer.unobserve(entry.target);
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  });

  sections.forEach(({ selector }) => {
    const el = document.querySelector(selector);
    if (el) observer.observe(el);
  });

  // Anima o hero imediatamente
  const hero = document.querySelector('.hero');
  if (hero) {
    setTimeout(() => animateSection(hero, 'fade'), 300);
  }
});

function animateSection(el, type) {
  el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  el.style.opacity = '1';
  
  switch (type) {
    case 'fade':
      el.style.transform = 'translateY(0)';
      break;
    case 'slide-left':
      el.style.transform = 'translateX(0)';
      break;
    case 'slide-right':
      el.style.transform = 'translateX(0)';
      break;
    case 'slide-up':
      el.style.transform = 'translateY(0)';
      break;
    case 'rotate':
      el.style.transform = 'rotateY(0) scale(1)';
      break;
    case 'zoom':
      el.style.transform = 'scale(1)';
      break;
  }
}