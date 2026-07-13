import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rank: { type: Number, required: true },
  score: { type: Number, required: true },
  updatedAt: { type: Date, default: () => new Date() }
});

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);
export default Leaderboard;
