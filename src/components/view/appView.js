export default class View {
  constructor() {
    this.categoryTemplate = document.getElementById('categoryItemTemp');
    this.productTemplate = document.getElementById('productItemTemp');
    this.cartModal = document.getElementById('cartModal');
    this.cartCount = document.querySelector('.cart-count');
    this.checkoutModal = document.getElementById('checkoutModal');
    this.checkoutForm = document.getElementById('checkoutForm');
    this.checkoutSuccess = document.getElementById('checkoutSuccess');
  }

  init(categories, products) {
    this.renderCategories(categories);
    this.renderProducts(products);
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
      searchInput.value = '';
    }
  }

  renderCategories(categories) {
    const container = document.querySelector('.categories');
    container.innerHTML = '';

    categories.forEach((category) => {
      const clone = this.categoryTemplate.content.cloneNode(true);
      clone.querySelector('.category__item-name').textContent = category;
      container.append(clone);
    });

    const first = container.querySelector('.category__item');
    if (first) {
      first.classList.add('active');
    }
  }

  setActiveCategory(categoryName) {
    document.querySelectorAll('.category__item').forEach((el) => {
      const name = el.querySelector('.category__item-name')?.textContent;
      el.classList.toggle('active', name === categoryName);
    });
  }

  renderProducts(products) {
    const container = document.querySelector('.products');
    container.innerHTML = '';

    if (!products.length) {
      const empty = document.createElement('p');
      empty.className = 'products-empty';
      empty.textContent =
        'Ничего не найдено. Измените запрос в поиске или выберите другую категорию.';
      container.append(empty);
      return;
    }

    products.forEach((product) => {
      const clone = this.productTemplate.content.cloneNode(true);
      const item = clone.querySelector('.product__item');
      item.dataset.productId = String(product.id);
      clone.querySelector('.product__image').textContent = product.image;
      clone.querySelector('.product__title').textContent = product.title;
      clone.querySelector('.product__description').textContent = product.description;
      clone.querySelector('.product__price').textContent = `${product.price} ₽`;
      container.append(clone);
    });
  }

  updateCartCount(count) {
    this.cartCount.textContent = count;
  }

  renderCartItems(items, total) {
    const container = document.querySelector('.cart-items');
    container.innerHTML = '';
    items.forEach((item) => {
      const line = document.createElement('div');
      line.className = 'cart-line';
      line.innerHTML = `<span class="cart-line__title">${item.title}</span><span class="cart-line__sum">×${item.quantity} — ${
        item.price * item.quantity
      } ₽</span>`;
      container.append(line);
    });
    document.querySelector('.cart-total-price').textContent = `${total} ₽`;
  }

  toggleCart() {
    this.cartModal.classList.add('active');
  }

  closeCart() {
    this.cartModal.classList.remove('active');
  }

  openCheckoutModal() {
    if (!this.checkoutModal) return;
    this.checkoutModal.classList.add('active');
    this.checkoutForm?.classList.remove('hidden');
    this.checkoutSuccess?.classList.add('hidden');
    this.checkoutForm?.reset();
  }

  closeCheckoutModal() {
    this.checkoutModal?.classList.remove('active');
    this.checkoutForm?.classList.remove('hidden');
    this.checkoutSuccess?.classList.add('hidden');
  }

  showCheckoutSuccess(orderId, total) {
    this.checkoutForm?.classList.add('hidden');
    this.checkoutSuccess?.classList.remove('hidden');
    const textEl = this.checkoutSuccess?.querySelector('.checkout-success__text');
    if (textEl) {
      textEl.textContent = `Заказ ${orderId} принят. Сумма: ${total} ₽. Мы свяжемся с вами по телефону.`;
    }
  }
}
