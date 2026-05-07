import { z } from 'zod';

const idParams = z.object({ id: z.string().min(12) });
const slugParams = z.object({ slug: z.string().min(1) });
const paginationQuery = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
  search: z.string().optional(),
  category: z.string().optional(),
  status: z.string().optional(),
  sort: z.string().optional()
});

export const authSchemas = {
  login: z.object({ body: z.object({ email: z.string().email(), password: z.string().min(8) }) }),
  forgot: z.object({ body: z.object({ email: z.string().email() }) }),
  reset: z.object({ params: z.object({ token: z.string().min(20) }), body: z.object({ password: z.string().min(8) }) })
};

export const commonSchemas = {
  id: z.object({ params: idParams }),
  slug: z.object({ params: slugParams }),
  list: z.object({ query: paginationQuery })
};

export const contactSchemas = {
  create: z.object({
    body: z.object({
      name: z.string().min(2).max(80),
      email: z.string().email(),
      subject: z.string().max(140).optional().or(z.literal('')),
      message: z.string().min(10).max(3000)
    })
  })
};

export const projectSchema = z.object({
  body: z.object({
    title: z.string().min(2),
    slug: z.string().min(2),
    summary: z.string().min(10),
    description: z.string().optional(),
    category: z.string().min(2),
    tags: z.array(z.string()).optional(),
    image: z.object({ url: z.string().url().optional(), publicId: z.string().optional() }).optional(),
    gallery: z.array(z.object({ url: z.string().url(), publicId: z.string().optional() })).optional(),
    videoUrl: z.string().url().optional().or(z.literal('')),
    githubUrl: z.string().url().optional().or(z.literal('')),
    liveUrl: z.string().url().optional().or(z.literal('')),
    featured: z.boolean().optional(),
    status: z.enum(['draft', 'published']).optional(),
    order: z.number().optional()
  })
});

export const blogSchema = z.object({
  body: z.object({
    title: z.string().min(2),
    slug: z.string().min(2),
    excerpt: z.string().min(10),
    content: z.string().min(10),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    status: z.enum(['draft', 'published']).optional()
  })
});

export const passthroughBody = z.object({ body: z.record(z.any()) });
