import Project from '../models/Project.js';
import Blog from '../models/Blog.js';
import Contact from '../models/Contact.js';
import Testimonial from '../models/Testimonial.js';
import Skill from '../models/Skill.js';
import ActivityLog from '../models/ActivityLog.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const analytics = asyncHandler(async (_, res) => {
  const [projects, blogs, contacts, testimonials, skills, recentActivity] = await Promise.all([
    Project.countDocuments(),
    Blog.countDocuments(),
    Contact.countDocuments(),
    Testimonial.countDocuments(),
    Skill.countDocuments(),
    ActivityLog.find().sort('-createdAt').limit(10)
  ]);
  res.json({ success: true, data: { totals: { projects, blogs, contacts, testimonials, skills }, recentActivity } });
});
