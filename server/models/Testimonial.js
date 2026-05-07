import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: String,
  company: String,
  quote: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  avatar: { url: String, publicId: String },
  featured: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Testimonial', testimonialSchema);
