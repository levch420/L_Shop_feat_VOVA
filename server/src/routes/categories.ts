import { Router } from 'express';
import { getCategories } from '../data/products';

export const categoriesRouter = Router();

categoriesRouter.get('/', (_req, res) => {
  res.json(getCategories());
});
