import { Router } from 'express';
import { forgotPassword, login, logout, me, refresh, resetPassword } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validate.js';
import { authSchemas } from '../validators/schemas.js';

const router = Router();

router.post('/login', validate(authSchemas.login), login);
router.post('/refresh', refresh);
router.get('/me', protect, me);
router.post('/logout', logout);
router.post('/forgot-password', validate(authSchemas.forgot), forgotPassword);
router.post('/reset-password/:token', validate(authSchemas.reset), resetPassword);

export default router;
