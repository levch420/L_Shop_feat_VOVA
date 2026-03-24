import { Router } from 'express';

export const usersRouter = Router();

usersRouter.get('/me', (req, res) => {
  res.json({
    id: req.sessionID,
    role: 'guest',
  });
});
