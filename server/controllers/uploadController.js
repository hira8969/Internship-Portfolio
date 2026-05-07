import { asyncHandler } from '../utils/asyncHandler.js';
import { uploadBuffer } from '../services/cloudinaryService.js';

export const uploadAsset = asyncHandler(async (req, res) => {
  if (!req.file) {
    const error = new Error('No file uploaded');
    error.statusCode = 400;
    throw error;
  }
  const asset = await uploadBuffer(req.file, req.body.folder || 'portfolio');
  res.status(201).json({ success: true, data: { asset } });
});
