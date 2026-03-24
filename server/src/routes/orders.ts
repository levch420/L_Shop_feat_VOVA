import { Request, Router } from 'express';

type CartLine = { productId: number; title: string; price: number; quantity: number };

function getCart(req: Request): CartLine[] {
  if (!req.session.cart) {
    req.session.cart = [];
  }
  return req.session.cart as CartLine[];
}

type StoredOrder = {
  id: string;
  total: number;
  items: CartLine[];
  customer: { name: string; phone: string; comment: string };
  createdAt: string;
};

const orders: StoredOrder[] = [];

export const ordersRouter = Router();

ordersRouter.post('/', (req, res) => {
  const cart = getCart(req);
  if (!cart.length) {
    res.status(400).json({ error: 'Корзина пуста' });
    return;
  }
  const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
  const phone = typeof req.body?.phone === 'string' ? req.body.phone.trim() : '';
  const comment = typeof req.body?.comment === 'string' ? req.body.comment.trim() : '';
  if (!name || !phone) {
    res.status(400).json({ error: 'Укажите имя и телефон' });
    return;
  }
  const total = cart.reduce((s, l) => s + l.price * l.quantity, 0);
  const id = `LS-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const order: StoredOrder = {
    id,
    total,
    items: cart.map((l) => ({ ...l })),
    customer: { name, phone, comment },
    createdAt: new Date().toISOString(),
  };
  orders.push(order);
  req.session.cart = [];
  res.json({ orderId: id, total });
});
