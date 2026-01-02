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
const planos = {
  "start": {
    titulo: "Plano Start+ — Primeiro Resultado",
    promessa: `
      <p>Você não quer só um site. Quer <strong>ser encontrado no Google e atrair clientes reais</strong> — mesmo sendo autônomo(a) ou com orçamento limitado.</p>
      <ul>
        <li>Seu site <strong>nasce indexado</strong> — em poucos dias, você aparece nas buscas locais.</li>
        <li>Você <strong>atualiza tudo sozinho(a)</strong> — com treinamento prático e manual em vídeo.</li>
        <li>Nada de layout quebrado no celular — seu site <strong>funciona perfeitamente em todos os dispositivos</strong>.</li>
        <li>Seus visitantes viram clientes: <strong>WhatsApp estratégico + formulário de contato</strong> já configurados.</li>
        <li>Você recebe <strong>domínio, hospedagem, e-mail e segurança</strong> — tudo pronto, sem burocracia.</li>
        <li>Seu site é <strong>uma porta de entrada estratégica</strong> — não um “site morto”.</li>
      </ul>
    `,
    detalhes: `
      <h4>O que está incluído:</h4>
      <ul>
        <li>One Page personalizável (Sobre, Serviços, Portfólio, Depoimentos, Contato, Localização, Horários)</li>
        <li>Design alinhado à identidade da sua marca (cores, fontes, estilo)</li>
        <li>Domínio + hospedagem anuais inclusos</li>
        <li>fotos/vídeos otimizados e ilimitados</li>
        <li>Treinamento básico + documentação + manual em vídeo</li>
        <li>Totalmente responsivo (mobile-first)</li>
        <li>Carregamento rápido (imagens comprimidas + código leve)</li>
        <li>Indexação no Google + Search Console configurado</li>
        <li>Títulos, descrições e palavras-chave estratégicas</li>
        <li>Estrutura mínima de conversão (CTA claro)</li>
        <li>Botão de WhatsApp com mensagem pré-definida</li>
        <li>Formulário simples de contato</li>
        <li>Google Analytics (GA4) configurado</li>
        <li>SSL/HTTPS ativo + proteção contra XSS, clickjacking e arquivos sensíveis</li>
        <li>Estrutura preparada para upgrades futuros</li>
        <li>7 dias de ajustes após entrega</li>
        <li>Entrega em até 14 dias úteis</li>
      </ul>
      <h4 style="margin-top: 1.5rem;">Processo:</h4>
      <p><strong>1ª reunião (briefing):</strong> Entendemos sua marca, serviços, definimos textos, criamos contas no Google, enviamos contrato e alinhamos prazos.</p>
      <p><strong>2ª reunião (entrega):</strong> Apresentamos o site, entregamos senhas, e-mails, manuais e fazemos treinamento prático.</p>
    `
  },
  "essencial": {
    titulo: "Plano Essencial — Autoridade Local",
    promessa: `
      <p>Você quer <strong>ser a referência do seu bairro</strong> — não só mais um negócio no mapa. Com este plano, seu negócio aparece no <strong>topo do Google e no Google Maps</strong>, e seus visitantes viram clientes fiéis.</p>
      <ul>
        <li>Você <strong>domina o SEO local</strong> — com Google Meu Negócio 100% otimizado.</li>
        <li>Seu site <strong>conversa e vende</strong> — com textos estratégicos escritos para seu público.</li>
        <li>Você parece <strong>profissional e confiável</strong> — com até 5 páginas e estrutura institucional.</li>
        <li>Está <strong>pronto para anúncios</strong> — sem precisar refazer o site depois.</li>
        <li>Você tem <strong>e-mail profissional</strong> (ex: contato@seudominio.com.br) — que transmite credibilidade imediata.</li>
        <li>Seus clientes <strong>encontram você no Maps, veem avaliações e agendam pelo WhatsApp</strong> — tudo integrado.</li>
      </ul>
    `,
    detalhes: `
      <h4>O que está incluído (tudo do Start+ +):</h4>
      <ul>
        <li>Site institucional com até 5 páginas</li>
        <li>Copywriting estratégico (textos pensados para venda)</li>
        <li>SEO Local completo + configuração do Google Meu Negócio</li>
        <li>Google Maps integrado</li>
        <li>CTA estratégico em cada página</li>
        <li>E-mail corporativo vinculado ao domínio</li>
        <li>Estrutura pronta para anúncios (Facebook Pixel, Google Tag Manager)</li>
        <li>Integração com redes sociais</li>
        <li>Hospedagem média inclusa (até 500 acessos simultâneos)</li>
        <li>Entrega em 20 dias úteis</li>
        <li>1 mês de Manutenção Start incluso</li>
      </ul>
      <h4 style="margin-top: 1.5rem;">Ferramentas usadas:</h4>
      <p>Google Search Console, Google Analytics (GA4), PageSpeed Insights, Mobile-Friendly Test, Schema Markup para SEO local, SSL, compressão de imagens, proteções de segurança.</p>
      <h4 style="margin-top: 1rem;">Processo:</h4>
      <p>Mesmo do Start+, com foco extra em autoridade local, Google Meu Negócio e conversão.</p>
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