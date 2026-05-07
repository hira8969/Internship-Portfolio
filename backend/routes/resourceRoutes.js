import { Router } from 'express';
import { authorize, protect } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validate.js';
import { blogSchema, commonSchemas, contactSchemas, passthroughBody, projectSchema } from '../validators/schemas.js';
import { createContact } from '../controllers/contactController.js';
import {
  blogController,
  categoryController,
  certificateController,
  contactController,
  experienceController,
  projectController,
  serviceController,
  skillController,
  testimonialController
} from '../controllers/resourceControllers.js';

const admin = [protect, authorize('admin')];

function crudRouter(controller, schema = passthroughBody, hasSlug = false) {
  const router = Router();
  router.get('/', validate(commonSchemas.list), controller.list);
  if (hasSlug) router.get('/:slug', validate(commonSchemas.slug), controller.get);
  else if (controller.get) router.get('/:id', validate(commonSchemas.id), controller.get);
  router.post('/', ...admin, validate(schema), controller.create);
  router.patch('/:id', ...admin, validate(passthroughBody), controller.update);
  router.delete('/:id', ...admin, validate(commonSchemas.id), controller.remove);
  return router;
}

export const projectRoutes = crudRouter(projectController, projectSchema, true);
export const skillRoutes = crudRouter(skillController);
export const blogRoutes = crudRouter(blogController, blogSchema, true);
export const testimonialRoutes = crudRouter(testimonialController);
export const categoryRoutes = crudRouter(categoryController);
export const serviceRoutes = crudRouter(serviceController);
export const experienceRoutes = crudRouter(experienceController);
export const certificateRoutes = crudRouter(certificateController);

export const contactRoutes = Router();
contactRoutes.post('/', validate(contactSchemas.create), createContact);
contactRoutes.get('/', ...admin, validate(commonSchemas.list), contactController.list);
contactRoutes.get('/:id', ...admin, validate(commonSchemas.id), contactController.get);
contactRoutes.patch('/:id', ...admin, validate(passthroughBody), contactController.update);
contactRoutes.delete('/:id', ...admin, validate(commonSchemas.id), contactController.remove);
