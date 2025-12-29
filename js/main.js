// Dados dos planos (mantidos iguais)
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
        <li>Até 20 fotos/vídeos otimizados</li>
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
    `,
    whatsappMsg: "Olá! Gostaria de contratar o Plano Start+ da Real Result Solutions. Meu negócio é: [descreva brevemente]."
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
    `,
    whatsappMsg: "Olá! Gostaria de contratar o Plano Essencial da Real Result Solutions. Meu negócio é: [descreva brevemente]."
  },
  "manutencao-start": {
    titulo: "Manutenção Start",
    promessa: `<p>Você não precisa mais se preocupar com quedas, atualizações ou segurança básica. Nós cuidamos disso para você — com simplicidade e tranquilidade.</p>`,
    detalhes: `<ul><li>Atualizações de texto simples</li><li>Backup mensal</li><li>Monitoramento 24/7 do site no ar</li><li>Suporte de até 1h por dia útil</li></ul>`,
    whatsappMsg: "Olá! Gostaria de contratar a Manutenção Start da Real Result Solutions."
  },
  "manutencao-essencial": {
    titulo: "Manutenção Essencial",
    promessa: `<p>Seu SEO não para de melhorar. Você recebe relatórios claros do que foi feito e do que melhorou — sem precisar entender de tecnologia.</p>`,
    detalhes: `<ul><li>Tudo do Start</li><li>Atualizações semanais (texto, imagens, vídeos)</li><li>Manutenção de SEO mensal</li><li>Backup quinzenal</li><li>Suporte de até 3h por dia útil</li></ul>`,
    whatsappMsg: "Olá! Gostaria de contratar a Manutenção Essencial da Real Result Solutions."
  },
  "manutencao-avancada": {
    titulo: "Manutenção Avançada",
    promessa: `<p>Você para de gastar energia com tecnologia e foca no que sabe fazer de melhor: atender, vender e crescer. Nós otimizamos seu site continuamente — com dados reais.</p>`,
    detalhes: `<ul><li>Tudo do Essencial</li><li>SEO contínuo e evolutivo</li><li>Monitoramento diário de conversões</li><li>Melhorias mensais com base em dados</li><li>Otimização contínua de performance</li><li>Ajustes estratégicos em CTAs e velocidade</li><li>Relatório mensal detalhado</li><li>Suporte prioritário 24h</li></ul>`,
    whatsappMsg: "Olá! Gostaria de contratar a Manutenção Avançada da Real Result Solutions."
  }
};

// Função para atualizar o link do WhatsApp no modal
function atualizarWhatsApp(planoId) {
  const plano = planos[planoId];
  if (!plano) return;

  const whatsappLink = document.getElementById('whatsapp-link');
  if (whatsappLink) {
    const encodedMsg = encodeURIComponent(plano.whatsappMsg);
    whatsappLink.href = `https://wa.me/34991282814?text=${encodedMsg}`;
  }
}

// Abrir modal
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const planoId = btn.dataset.plano;
    const plano = planos[planoId];
    
    if (!plano) return;
    
    document.getElementById('modal-titulo').textContent = plano.titulo;
    document.getElementById('tab-promessa').innerHTML = plano.promessa;
    document.getElementById('tab-detalhes').innerHTML = plano.detalhes;
    
    // Atualiza o link do WhatsApp
    atualizarWhatsApp(planoId);
    
    // Mostra modal
    document.getElementById('modal-plano').style.display = 'flex';
    document.getElementById('modal-overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
});

// Fechar modal
document.querySelectorAll('.close-modal, #modal-overlay').forEach(el => {
  el.addEventListener('click', () => {
    document.getElementById('modal-plano').style.display = 'none';
    document.getElementById('modal-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
  });
});

// Trocar abas
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('tab-btn')) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    
    e.target.classList.add('active');
    const tabId = e.target.dataset.tab;
    document.getElementById(`tab-${tabId}`).classList.add('active');
  }
});