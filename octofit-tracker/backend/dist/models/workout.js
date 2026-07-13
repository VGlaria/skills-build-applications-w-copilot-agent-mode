import mongoose from 'mongoose';
const workoutSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: { type: String, required: true },
    muscleGroups: [{ type: String }],
    createdAt: { type: Date, default: () => new Date() }
});
const Workout = mongoose.model('Workout', workoutSchema);
export default Workout;
