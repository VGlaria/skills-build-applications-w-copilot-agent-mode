import { Router } from 'express';
import User from '../models/user.js';
import Team from '../models/team.js';
import Activity from '../models/activity.js';
import Leaderboard from '../models/leaderboard.js';
import Workout from '../models/workout.js';
const router = Router();
router.get('/users', async (_req, res) => {
    const users = await User.find().populate('team', 'name');
    res.json({ users });
});
router.get('/teams', async (_req, res) => {
    const teams = await Team.find().populate('members', 'name email');
    res.json({ teams });
});
router.get('/activities', async (_req, res) => {
    const activities = await Activity.find().populate('user', 'name').populate('team', 'name');
    res.json({ activities });
});
router.get('/leaderboard', async (_req, res) => {
    const leaderboard = await Leaderboard.find().populate('user', 'name');
    res.json({ leaderboard });
});
router.get('/workouts', async (_req, res) => {
    const workouts = await Workout.find();
    res.json({ workouts });
});
export default router;
