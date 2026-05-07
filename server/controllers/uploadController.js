import { asyncHandler } from '../utils/asyncHandler.js';
import { isCloudinaryConfigured } from '../config/cloudinary.js';
import { uploadBuffer } from '../services/cloudinaryService.js';

export const uploadAsset = asyncHandler(async (req, res) => {
  if (!isCloudinaryConfigured()) {
    const error = new Error('Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.');
    error.statusCode = 503;
    throw error;
  }

  if (!req.file) {
    const error = new Error('No file uploaded');
    error.statusCode = 400;
    throw error;
  }
  const asset = await uploadBuffer(req.file, req.body.folder || 'portfolio');
  res.status(201).json({ success: true, data: { asset } });
});
