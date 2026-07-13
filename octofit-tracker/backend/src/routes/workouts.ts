import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Workouts endpoint', workouts: [] });
});

export default router;
