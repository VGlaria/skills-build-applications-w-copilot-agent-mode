import mongoose from 'mongoose';
const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: '' },
    createdAt: { type: Date, default: () => new Date() },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
const Team = mongoose.model('Team', teamSchema);
export default Team;
