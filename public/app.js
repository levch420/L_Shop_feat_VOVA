const productsEl = document.getElementById('products');
const cartEl = document.getElementById('cart');
const totalEl = document.getElementById('total');

const cart = [];

function renderCart() {
  cartEl.innerHTML = '';
  let total = 0;

  for (const item of cart) {
    const li = document.createElement('li');
    li.textContent = `${item.title} - ${item.price} ₽`;
    cartEl.appendChild(li);
    total += item.price;
  }

  totalEl.textContent = String(total);
}

function addToCart(product) {
  cart.push(product);
  renderCart();
}

async function loadProducts() {
  const res = await fetch('/api/products');
  const products = await res.json();

  for (const product of products) {
    const li = document.createElement('li');
    li.textContent = `${product.title} (${product.category}) - ${product.price} ₽`;

    const btn = document.createElement('button');
    btn.textContent = 'Добавить';
    btn.addEventListener('click', () => addToCart(product));

    li.appendChild(btn);
    productsEl.appendChild(li);
  }
}

loadProducts().catch((err) => {
  productsEl.innerHTML = `<li>Ошибка загрузки: ${err.message}</li>`;
});
