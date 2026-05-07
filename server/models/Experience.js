import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: String,
  type: { type: String, enum: ['education', 'experience', 'achievement'], default: 'experience' },
  startDate: Date,
  endDate: Date,
  description: String,
  highlights: [String]
}, { timestamps: true });

export default mongoose.model('Experience', experienceSchema);
