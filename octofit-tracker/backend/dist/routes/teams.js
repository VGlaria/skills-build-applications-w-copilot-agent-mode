import { Router } from 'express';
const router = Router();
router.get('/', (_req, res) => {
    res.json({ message: 'Teams endpoint', teams: [] });
});
export default router;
