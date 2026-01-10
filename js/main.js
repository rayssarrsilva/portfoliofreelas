// Carrinho Global
let cart = [];
let cartCount = 0;

// Função para adicionar ao carrinho
function addToCart(planName, price) {
  const item = {
    id: Date.now(),
    name: planName,
    price: price
  };
  cart.push(item);
  updateCart();
  showCartModal();
}

// Atualiza o carrinho visualmente
function updateCart() {
  cartCount = cart.length;
  document.getElementById('cart-count').textContent = cartCount;

  const cartItemsDiv = document.getElementById('cartItems');
  cartItemsDiv.innerHTML = '';

  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <span>${item.name}</span>
      <span>R$ ${item.price.toFixed(2)}</span>
      <span class="cart-item-remove" onclick="removeFromCart(${item.id})">×</span>
    `;
    cartItemsDiv.appendChild(itemDiv);
  });

  document.getElementById('cartTotal').textContent = `R$ ${total.toFixed(2)}`;
}

// Remove item do carrinho
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

// Limpa o carrinho
function clearCart() {
  cart = [];
  updateCart();
}

// Mostra o modal do carrinho
function showCartModal() {
  document.getElementById('cartModal').style.display = 'flex';
}

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {

  // Fechar modais
  const closeButtons = document.querySelectorAll('.close, .close-popup');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.modal, .popup').style.display = 'none';
    });
  });

  // Fecha ao clicar fora
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal') || event.target.classList.contains('popup')) {
      event.target.style.display = 'none';
    }
  });

  // Animação ao rolar
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 100);
    }
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Pop-up de desconto após 30 segundos
  setTimeout(() => {
    const popup = document.getElementById('discountPopup');
    if (popup) popup.style.display = 'flex';
  }, 30000);

  // Copiar código
  window.copyCode = function() {
    const code = document.getElementById('discountCode').textContent;
    navigator.clipboard.writeText(code)
      .then(() => alert('Código copiado com sucesso!'))
      .catch(err => console.error('Erro ao copiar:', err));
  };

  // Mostrar contrato
  window.showContract = function() {
    document.getElementById('contractModal').style.display = 'flex';
  };

  // Download contrato
  window.downloadContract = function() {
    const contractText = document.getElementById('contractText').textContent;
    const blob = new Blob([contractText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'contrato_rnr_solutions.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Finalizar compra
  window.checkout = function() {
    alert('Obrigado pela compra! Em breve entraremos em contato para finalizar.');
    clearCart();
    document.getElementById('cartModal').style.display = 'none';
  };

  // Formulário de contato
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Mensagem enviada com sucesso! Entraremos em contato em até 24h.');
      this.reset();
    });
  }

  // 🔹 ROTAÇÃO DAS CITAÇÕES (CARD IMPONENTE)
  const quotes = document.querySelectorAll('.quote');
  if (quotes.length > 1) {
    let current = 0;

    setInterval(() => {
      quotes[current].classList.remove('active');
      current = (current + 1) % quotes.length;
      quotes[current].classList.add('active');
    }, 3000);  
  }
});
