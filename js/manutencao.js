const data = {
  start: {
    title: "Manutenção Start",
    price: "R$ 80/mês ou R$ 700/ano",
    features: [
      "Atualizações simples de textos institucionais",
      "Backup mensal completo",
      "Monitoramento do site no ar 24/7",
      "Correções emergenciais básicas",
      "Suporte técnico de até 1h por dia útil"
    ]
  },
  essencial: {
    title: "Manutenção Essencial",
    price: "R$ 180/mês ou R$ 1.600/ano",
    features: [
      "Tudo o que está incluso no plano Start",
      "Atualizações semanais de textos, imagens e vídeos",
      "Manutenção mensal de SEO técnico e on-page",
      "Backup automático quinzenal",
      "Análise preventiva de falhas",
      "Suporte técnico de até 3h por dia útil"
    ]
  },
  avancada: {
    title: "Manutenção Avançada",
    price: "R$ 310/mês ou R$ 2.920/ano",
    features: [
      "SEO contínuo com otimizações estratégicas",
      "Monitoramento diário de conversão",
      "Otimização de performance e velocidade",
      "Ajustes estratégicos de CTAs",
      "Melhorias mensais baseadas em dados",
      "Relatório mensal detalhado",
      "Suporte prioritário",
      "Suporte técnico de até 3h por dia útil"
    ]
  }
};

const overlay = document.getElementById("overlay");
const title = document.getElementById("overlay-title");
const price = document.getElementById("overlay-price");
const list = document.getElementById("overlay-features");
const close = document.querySelector(".close");

/* Abrir overlay */
document.querySelectorAll(".plan-line").forEach(btn => {
  btn.addEventListener("click", () => {
    const plan = data[btn.dataset.plan];
    title.textContent = plan.title;
    price.textContent = plan.price;
    list.innerHTML = "";
    plan.features.forEach(f => {
      const li = document.createElement("li");
      li.textContent = f;
      list.appendChild(li);
    });
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

/* Fechar overlay */
close.addEventListener("click", closeOverlay);
overlay.addEventListener("click", e => {
  if (e.target === overlay) closeOverlay();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeOverlay();
});

function closeOverlay() {
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}
