import { Router } from 'express';
import { uploadAsset } from '../controllers/uploadController.js';
import { authorize, protect } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';

const router = Router();

router.post('/', protect, authorize('admin'), upload.single('asset'), uploadAsset);

export default router;
