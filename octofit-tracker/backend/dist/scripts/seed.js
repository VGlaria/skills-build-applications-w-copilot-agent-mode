import mongoose from 'mongoose';
import User from '../models/user.js';
import Team from '../models/team.js';
import Activity from '../models/activity.js';
import Workout from '../models/workout.js';
import Leaderboard from '../models/leaderboard.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            User.deleteMany({}),
            Team.deleteMany({}),
            Activity.deleteMany({}),
            Workout.deleteMany({}),
            Leaderboard.deleteMany({})
        ]);
        const users = await User.create([
            { name: 'Avery Chen', email: 'avery.chen@example.com', role: 'member', totalWorkouts: 22, totalCalories: 10500 },
            { name: 'Mia Patel', email: 'mia.patel@example.com', role: 'member', totalWorkouts: 18, totalCalories: 9200 },
            { name: 'Jordan Lee', email: 'jordan.lee@example.com', role: 'coach', totalWorkouts: 32, totalCalories: 14500 }
        ]);
        const teams = await Team.create([
            { name: 'Sunrise Sprinters', description: 'A fast-paced running team focused on morning workouts.' },
            { name: 'Core Crushers', description: 'Strength and conditioning crew for intense full-body sessions.' }
        ]);
        teams[0].members = [users[0]._id, users[1]._id];
        teams[1].members = [users[2]._id];
        await Promise.all(teams.map((team) => team.save()));
        users[0].team = teams[0]._id;
        users[1].team = teams[0]._id;
        users[2].team = teams[1]._id;
        await Promise.all(users.map((user) => user.save()));
        const workouts = await Workout.create([
            {
                title: 'HIIT Sprint Circuit',
                description: 'High-intensity interval training with running and bodyweight exercises.',
                durationMinutes: 30,
                difficulty: 'Hard',
                muscleGroups: ['Legs', 'Core']
            },
            {
                title: 'Core Strength Builder',
                description: 'Workout designed to strengthen the core and improve stability.',
                durationMinutes: 45,
                difficulty: 'Medium',
                muscleGroups: ['Core', 'Back']
            }
        ]);
        await Activity.create([
            { user: users[0]._id, team: teams[0]._id, type: 'Running', durationMinutes: 40, caloriesBurned: 520, performedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
            { user: users[1]._id, team: teams[0]._id, type: 'Cycling', durationMinutes: 55, caloriesBurned: 620, performedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) },
            { user: users[2]._id, team: teams[1]._id, type: 'Strength Training', durationMinutes: 50, caloriesBurned: 710, performedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) }
        ]);
        await Leaderboard.create([
            { user: users[2]._id, rank: 1, score: 2450 },
            { user: users[0]._id, rank: 2, score: 2300 },
            { user: users[1]._id, rank: 3, score: 2150 }
        ]);
        console.log('Database seeding complete');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
