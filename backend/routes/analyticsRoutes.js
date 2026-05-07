import { Router } from 'express';
import { analytics } from '../controllers/analyticsController.js';
import { authorize, protect } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', protect, authorize('admin'), analytics);

export default router;
