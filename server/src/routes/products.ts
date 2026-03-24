import { Router } from 'express';
import { getProducts } from '../data/products';

export const productsRouter = Router();

productsRouter.get('/', (req, res) => {
  const category = typeof req.query.category === 'string' ? req.query.category : undefined;
  let search: string | undefined;
  if (typeof req.query.search === 'string') {
    search = req.query.search;
  } else if (typeof req.query.q === 'string') {
    search = req.query.q;
  }
  res.json(getProducts(category, search));
});
