# Enterprise Personal Portfolio Platform

Production-oriented full-stack portfolio platform built with React, Vite, Tailwind CSS, Framer Motion, GSAP-ready animation architecture, Three.js particles, Node.js, Express MVC, MongoDB, JWT auth, Cloudinary uploads, and secure REST APIs.

## Features

- Premium responsive portfolio UI with glassmorphism, aurora gradients, animated route transitions, smooth scrolling, particles, theme persistence, reusable cards/buttons, SEO metadata, and PWA manifest.
- Full Express MVC backend with controllers, models, routes, middleware, services, validators, helpers, and centralized error handling.
- MongoDB collections for users, projects, skills, blogs, testimonials, contacts, categories, services, experiences, certificates, and activity logs.
- JWT access tokens, signed refresh-token cookies, bcrypt password hashing, role authorization, protected admin routes, forgot/reset password endpoints, and session revocation support.
- CRUD APIs with pagination, search, filtering, validation, secure headers, CORS, rate limiting, Mongo sanitization, Cloudinary uploads, Nodemailer contact delivery, and analytics.

## Quick Start

```bash
npm install
cp .env.example .env
npm run seed:admin
npm run dev
```

Frontend: `http://localhost:5173`
Backend health: `http://localhost:5000/health`

## Environment

Set these before running production:

- `VITE_API_URL`
- `VITE_API_PROXY_TARGET`
- `VITE_SITE_URL`
- `MONGO_URI`
- `JWT_ACCESS_SECRET`
- `JWT_REFRESH_SECRET`
- `COOKIE_SECRET`
- `CLIENT_URL`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO_EMAIL`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

## Admin

Create the first admin with:

```bash
ADMIN_EMAIL=admin@example.com ADMIN_PASSWORD=AdminPass123! npm run seed:admin
```

Then visit `/admin/login`.

## Project Structure

```text
frontend/
  public/
  src/
    components/ common ui animations forms layouts sections
    pages/ routes/ hooks/ services/ context/ styles/ constants/ config/
backend/
  config/ controllers/ models/ routes/ middleware/ services/
  utils/ validators/ helpers/ uploads/ constants/ logs/
```

## Scripts

- `npm run dev` starts frontend and backend together.
- `npm run dev:client` starts Vite from `frontend/`.
- `npm run dev:server` starts Express from `backend/` with Nodemon.
- `npm run build` creates the frontend production build in `frontend/dist`.
- `npm start` starts the backend in production mode.
- `npm run server` starts the backend directly.
- `npm run seed:admin` creates the first admin user.

## Production Deployment

- Frontend: deploy on Vercel with build command `npm run build` and output directory `frontend/dist`.
- Backend/full-stack on Render: deploy with build command `npm install && npm run build` and start command `npm start`.
- Do not use `npm run dev` in production because it starts Vite, Nodemon, and Concurrently.

More details live in [API documentation](docs/API.md) and [deployment guide](docs/DEPLOYMENT.md).
See [project structure](docs/PROJECT_STRUCTURE.md) for the frontend/backend folder layout.
