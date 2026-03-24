import Model from '../model';
import View from '../view/appView';

function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

export default class App {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  async start() {
    await this.model.init();
    this.view.init(this.model.getCategories(), this.model.getVisibleProducts());
    await this.refreshCartFromServer();
    this.bindEvents();
  }

  syncProductList() {
    this.view.renderProducts(this.model.getVisibleProducts());
  }

  async refreshCartFromServer() {
    const state = await this.model.getCartState();
    this.view.updateCartCount(state.count);
    this.view.renderCartItems(state.items, state.total);
  }

  bindEvents() {
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
      const onSearch = debounce(() => {
        this.model.setSearch(searchInput.value);
        this.syncProductList();
      }, 200);
      searchInput.addEventListener('input', onSearch);
    }

    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm?.addEventListener('submit', (ev) => {
      ev.preventDefault();
      this.onCheckoutSubmit(new FormData(checkoutForm));
    });

    document.addEventListener('click', (e) => {
      if (e.target.closest('.category__item')) {
        this.onCategoryChange(e.target.closest('.category__item'));
      }
      if (e.target.closest('.product__add-to-cart')) {
        this.onAddToCart(e.target.closest('.product__add-to-cart'));
      }
      if (e.target.closest('.cart-link')) {
        e.preventDefault();
        this.onCartToggle();
      }
      if (e.target.closest('.checkout-modal__close')) {
        this.view.closeCheckoutModal();
      } else if (e.target.closest('.cart-modal__close')) {
        this.onCartClose();
      }
      if (e.target.closest('.cart-checkout')) {
        e.preventDefault();
        this.onOpenCheckout();
      }
      if (e.target.closest('.checkout-success__close')) {
        this.view.closeCheckoutModal();
      }
      if (e.target.id === 'checkoutModal') {
        this.view.closeCheckoutModal();
      }
    });
  }

  onCategoryChange(categoryItem) {
    const category =
      categoryItem.querySelector('.category__item-name')?.textContent || categoryItem.textContent;
    this.model.setCategory(category);
    this.view.setActiveCategory(category);
    this.syncProductList();
  }

  async onAddToCart(button) {
    const productItem = button.closest('.product__item');
    const id = Number(productItem.dataset.productId);
    const product = this.model.getProducts().find((p) => p.id === id);
    if (!product) {
      return;
    }
    await this.model.addToCart(product);
    await this.refreshCartFromServer();
  }

  onCartToggle() {
    this.view.toggleCart();
  }

  onCartClose() {
    this.view.closeCart();
  }

  async onOpenCheckout() {
    const state = await this.model.getCartState();
    if (state.count === 0) {
      return;
    }
    this.view.closeCart();
    this.view.openCheckoutModal();
  }

  async onCheckoutSubmit(formData) {
    const name = String(formData.get('name') || '');
    const phone = String(formData.get('phone') || '');
    const comment = String(formData.get('comment') || '');
    try {
      const data = await this.model.placeOrder({ name, phone, comment });
      await this.refreshCartFromServer();
      this.view.showCheckoutSuccess(data.orderId, data.total);
    } catch (err) {
      alert(err.message || 'Не удалось оформить заказ');
    }
  }
}
