import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true, index: true },
  level: { type: Number, min: 0, max: 100, default: 75 },
  icon: String,
  color: String,
  featured: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Skill', skillSchema);
