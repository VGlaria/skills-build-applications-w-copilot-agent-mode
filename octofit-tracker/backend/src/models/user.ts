import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  joinedAt: { type: Date, default: () => new Date() },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  totalWorkouts: { type: Number, default: 0 },
  totalCalories: { type: Number, default: 0 }
});

const User = mongoose.model('User', userSchema);
export default User;
