import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  type: { type: String, enum: ['project', 'blog', 'service'], required: true },
  description: String
}, { timestamps: true });

export default mongoose.model('Category', categorySchema);
