import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: String,
  features: [String],
  highlighted: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Service', serviceSchema);
