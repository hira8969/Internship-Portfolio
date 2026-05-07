# API Documentation

Base URL: `/api`

All protected routes require:

```http
Authorization: Bearer <access-token>
```

Refresh tokens are stored in signed HTTP-only cookies.

## Auth

- `POST /auth/login` body `{ "email": "...", "password": "..." }`
- `POST /auth/refresh`
- `GET /auth/me` protected
- `POST /auth/logout`
- `POST /auth/forgot-password` body `{ "email": "..." }`
- `POST /auth/reset-password/:token` body `{ "password": "..." }`

## Public Content

List endpoints support `page`, `limit`, `search`, `category`, `status`, and `sort`.

- `GET /projects`
- `GET /projects/:slug`
- `GET /skills`
- `GET /blogs`
- `GET /blogs/:slug`
- `GET /testimonials`
- `GET /services`
- `GET /experiences`
- `GET /certificates`
- `POST /contacts`

## Admin CRUD

Admin-only create/update/delete endpoints:

- `POST /projects`, `PATCH /projects/:id`, `DELETE /projects/:id`
- `POST /skills`, `PATCH /skills/:id`, `DELETE /skills/:id`
- `POST /blogs`, `PATCH /blogs/:id`, `DELETE /blogs/:id`
- `POST /testimonials`, `PATCH /testimonials/:id`, `DELETE /testimonials/:id`
- `GET /contacts`, `GET /contacts/:id`, `PATCH /contacts/:id`, `DELETE /contacts/:id`
- `POST /categories`, `PATCH /categories/:id`, `DELETE /categories/:id`
- `POST /services`, `PATCH /services/:id`, `DELETE /services/:id`
- `POST /experiences`, `PATCH /experiences/:id`, `DELETE /experiences/:id`
- `POST /certificates`, `PATCH /certificates/:id`, `DELETE /certificates/:id`

## Uploads

`POST /uploads` admin-only multipart form data:

- field `asset`: image or PDF, max 5MB
- optional field `folder`

Returns Cloudinary asset metadata.

## Analytics

`GET /analytics` admin-only.

Returns totals for projects, blogs, contacts, testimonials, skills, plus recent activity.

## Response Shape

Success:

```json
{
  "success": true,
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {}
}
```
