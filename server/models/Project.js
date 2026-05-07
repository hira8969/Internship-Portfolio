import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  summary: { type: String, required: true },
  description: String,
  category: { type: String, required: true, index: true },
  tags: [String],
  image: { url: String, publicId: String },
  gallery: [{ url: String, publicId: String }],
  videoUrl: String,
  githubUrl: String,
  liveUrl: String,
  featured: { type: Boolean, default: false },
  status: { type: String, enum: ['draft', 'published'], default: 'published', index: true },
  order: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
