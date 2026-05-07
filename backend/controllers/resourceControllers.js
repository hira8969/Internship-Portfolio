import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Blog from '../models/Blog.js';
import Testimonial from '../models/Testimonial.js';
import Contact from '../models/Contact.js';
import Category from '../models/Category.js';
import Service from '../models/Service.js';
import Experience from '../models/Experience.js';
import Certificate from '../models/Certificate.js';
import { createOne, deleteOne, getOne, list, updateOne } from './crudFactory.js';

export const projectController = {
  list: list(Project, ['title', 'summary', 'category', 'tags']),
  get: getOne(Project, 'slug'),
  create: createOne(Project, 'Project'),
  update: updateOne(Project, 'Project'),
  remove: deleteOne(Project, 'Project')
};

export const skillController = {
  list: list(Skill, ['name', 'category']),
  get: getOne(Skill),
  create: createOne(Skill, 'Skill'),
  update: updateOne(Skill, 'Skill'),
  remove: deleteOne(Skill, 'Skill')
};

export const blogController = {
  list: list(Blog, ['title', 'excerpt', 'content', 'tags']),
  get: getOne(Blog, 'slug'),
  create: createOne(Blog, 'Blog'),
  update: updateOne(Blog, 'Blog'),
  remove: deleteOne(Blog, 'Blog')
};

export const testimonialController = {
  list: list(Testimonial, ['name', 'company', 'quote']),
  get: getOne(Testimonial),
  create: createOne(Testimonial, 'Testimonial'),
  update: updateOne(Testimonial, 'Testimonial'),
  remove: deleteOne(Testimonial, 'Testimonial')
};

export const contactController = {
  list: list(Contact, ['name', 'email', 'message']),
  get: getOne(Contact),
  update: updateOne(Contact, 'Contact'),
  remove: deleteOne(Contact, 'Contact')
};

export const categoryController = {
  list: list(Category, ['name', 'type']),
  create: createOne(Category, 'Category'),
  update: updateOne(Category, 'Category'),
  remove: deleteOne(Category, 'Category')
};

export const serviceController = {
  list: list(Service, ['name', 'description']),
  create: createOne(Service, 'Service'),
  update: updateOne(Service, 'Service'),
  remove: deleteOne(Service, 'Service')
};

export const experienceController = {
  list: list(Experience, ['title', 'company', 'description']),
  create: createOne(Experience, 'Experience'),
  update: updateOne(Experience, 'Experience'),
  remove: deleteOne(Experience, 'Experience')
};

export const certificateController = {
  list: list(Certificate, ['title', 'issuer']),
  create: createOne(Certificate, 'Certificate'),
  update: updateOne(Certificate, 'Certificate'),
  remove: deleteOne(Certificate, 'Certificate')
};
