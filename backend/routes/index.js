import { Router } from 'express';
import authRoutes from './authRoutes.js';
import analyticsRoutes from './analyticsRoutes.js';
import uploadRoutes from './uploadRoutes.js';
import {
  blogRoutes,
  categoryRoutes,
  certificateRoutes,
  contactRoutes,
  experienceRoutes,
  projectRoutes,
  serviceRoutes,
  skillRoutes,
  testimonialRoutes
} from './resourceRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/projects', projectRoutes);
router.use('/skills', skillRoutes);
router.use('/blogs', blogRoutes);
router.use('/testimonials', testimonialRoutes);
router.use('/contact', contactRoutes);
router.use('/contacts', contactRoutes);
router.use('/categories', categoryRoutes);
router.use('/services', serviceRoutes);
router.use('/experiences', experienceRoutes);
router.use('/certificates', certificateRoutes);
router.use('/uploads', uploadRoutes);
router.use('/analytics', analyticsRoutes);

export default router;
