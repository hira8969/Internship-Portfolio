import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  coverImage: { url: String, publicId: String },
  category: { type: String, index: true },
  tags: [String],
  featured: { type: Boolean, default: false },
  status: { type: String, enum: ['draft', 'published'], default: 'published', index: true },
  publishedAt: Date
}, { timestamps: true });

export default mongoose.model('Blog', blogSchema);
