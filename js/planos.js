const data = {
  real: [
    "Página única sem menu",
    "Botão de contato WhatsApp ou e-mail",
    "Links para redes sociais",
    "Imagens, vídeos e gifs do cliente",
    "Copywriting básico incluso",
    "Animações e interatividade básicas",
    "Hospedagem .com.br + SSL",
    "Entrega em até 7 dias úteis"
  ],
  result: [
    "Página única com até 5 seções",
    "Menu simples com scroll suave",
    "Botão de contato",
    "Copywriting incluso",
    "Hospedagem .com + SSL",
    "Integração Google Meu Negócio",
    "Carrinho, frete e prazo",
    "Entrega em até 12 dias úteis"
  ],
  solution: [
    "Até 8 seções personalizáveis",
    "Menu fixo com scroll suave",
    "Copywriting otimizado",
    "Feed do Instagram",
    "SEO básico completo",
    "Google Search Console",
    "Formulário de leads",
    "Entrega em até 20 dias úteis"
  ],
  realresult: [
    "Até 5 páginas institucionais",
    "Menu completo responsivo",
    "Formulário simples",
    "SEO básico",
    "Funcionalidades JS",
    "Hospedagem .com.br + SSL",
    "Entrega em até 16 dias úteis"
  ],
  realresultsolution: [
    "Até 10 páginas personalizadas",
    "Design exclusivo",
    "Formulário avançado / CRM",
    "SEO avançado",
    "Blog integrado",
    "Calculadoras e simulações",
    "Manutenção por 30 dias",
    "Entrega em até 30 dias úteis"
  ]
};

document.querySelectorAll(".plan").forEach(plan => {
  const btn = plan.querySelector(".toggle");
  const details = plan.querySelector(".details");
  const key = plan.dataset.plan;

  btn.addEventListener("click", () => {
    const open = details.classList.toggle("open");
    btn.textContent = open ? "Ocultar detalhes" : "Ver o que está incluso";

    if (open && !details.innerHTML) {
      const ul = document.createElement("ul");
      data[key].forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      details.appendChild(ul);
      details.style.maxHeight = ul.scrollHeight + "px";
    } else {
      details.style.maxHeight = null;
    }
  });
});
