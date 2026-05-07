import cloudinary from '../config/cloudinary.js';

export function uploadBuffer(file, folder = 'portfolio') {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({ folder, resource_type: 'auto' }, (error, result) => {
      if (error) reject(error);
      else resolve({ url: result.secure_url, publicId: result.public_id, resourceType: result.resource_type });
    });
    stream.end(file.buffer);
  });
}
