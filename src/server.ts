import express from 'express';
import path from 'path';

const app = express();
const port = 3010;

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
};

const products: Product[] = [
  { id: 1, title: 'Milka', price: 150, category: 'Шоколад' },
  { id: 2, title: 'Haribo', price: 220, category: 'Мармелад' },
  { id: 3, title: 'Oreo', price: 180, category: 'Печенье' },
  { id: 4, title: 'Raffaello', price: 350, category: 'Конфеты' }
];

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/api/products', (_req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Raw shop is running on http://localhost:${port}`);
});
