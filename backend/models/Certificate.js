import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  credentialUrl: String,
  issuedAt: Date,
  image: { url: String, publicId: String }
}, { timestamps: true });

export default mongoose.model('Certificate', certificateSchema);
