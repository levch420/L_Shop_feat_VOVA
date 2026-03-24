async function apiJson(path, options = {}) {
  const res = await fetch(path, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text();
    let msg = text || res.statusText;
    try {
      const j = JSON.parse(text);
      if (j.error) msg = j.error;
    } catch {
      /* use msg */
    }
    throw new Error(msg);
  }
  if (res.status === 204) {
    return null;
  }
  return res.json();
}

export default class Model {
  constructor() {
    this.categories = [];
    this.products = [];
    this.currentCategory = 'Все';
    this.searchQuery = '';
  }

  async init() {
    this.categories = await apiJson('/api/categories');
    this.products = await apiJson('/api/products');
    this.currentCategory = 'Все';
    this.searchQuery = '';
  }

  getCategories() {
    return this.categories;
  }

  getProducts() {
    return this.products;
  }

  setCategory(category) {
    this.currentCategory = category;
  }

  setSearch(query) {
    this.searchQuery = typeof query === 'string' ? query : '';
  }

  getVisibleProducts() {
    let list = this.products;
    if (this.currentCategory && this.currentCategory !== 'Все') {
      list = list.filter((p) => p.category === this.currentCategory);
    }
    const q = this.searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }
    return list;
  }

  async addToCart(product) {
    await apiJson('/api/cart/items', {
      method: 'POST',
      body: JSON.stringify({ productId: product.id, quantity: 1 }),
    });
  }

  async getCartState() {
    return apiJson('/api/cart');
  }

  async clearCart() {
    await apiJson('/api/cart', { method: 'DELETE' });
  }

  async placeOrder({ name, phone, comment }) {
    return apiJson('/api/orders', {
      method: 'POST',
      body: JSON.stringify({ name, phone, comment: comment || '' }),
    });
  }
}
