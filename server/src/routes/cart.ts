import { Request, Router } from 'express';
import { getProductById } from '../data/products';

type CartLine = { productId: number; title: string; price: number; quantity: number };

function getCart(req: Request): CartLine[] {
  if (!req.session.cart) {
    req.session.cart = [];
  }
  return req.session.cart as CartLine[];
}

export const cartRouter = Router();

cartRouter.get('/', (req, res) => {
  const cart = getCart(req);
  const count = cart.reduce((s, l) => s + l.quantity, 0);
  const total = cart.reduce((s, l) => s + l.price * l.quantity, 0);
  res.json({ items: cart, count, total });
});

cartRouter.post('/items', (req, res) => {
  const productId = Number(req.body?.productId);
  const addQty = Math.max(1, Number(req.body?.quantity) || 1);
  if (!Number.isFinite(productId)) {
    res.status(400).json({ error: 'productId required' });
    return;
  }
  const product = getProductById(productId);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }
  const cart = getCart(req);
  const line = cart.find((l) => l.productId === productId);
  if (line) {
    line.quantity += addQty;
  } else {
    cart.push({
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity: addQty,
    });
  }
  res.json({ ok: true });
});

cartRouter.delete('/items/:productId', (req, res) => {
  const productId = Number(req.params.productId);
  const cart = getCart(req);
  req.session.cart = cart.filter((l) => l.productId !== productId);
  res.json({ ok: true });
});

cartRouter.delete('/', (req, res) => {
  req.session.cart = [];
  res.json({ ok: true });
});
