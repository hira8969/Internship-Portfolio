# Deployment Guide

## MongoDB Atlas

1. Create a MongoDB Atlas project and cluster.
2. Create a database user with a strong password.
3. Allow network access for your deployment providers.
4. Copy the connection string into `MONGO_URI`.

## Backend on Render

1. Create a new Render Web Service from the repository.
2. Runtime: Node.
3. Build command: `npm install`
4. Start command: `npm start`
5. Add environment variables from `.env.example`.
6. Set `NODE_ENV=production`.
7. Set `CLIENT_URL` to the Vercel frontend domain.
8. Do not use `npm run dev` on Render. Production should run only the Express API with Node.

## Frontend on Vercel

1. Import the repository into Vercel.
2. Build command: `npm run build`
3. Output directory: `frontend/dist`
4. Set `VITE_API_URL=/api` when using the included Vercel rewrite, or set it to `https://your-render-service.onrender.com/api` if you do not use rewrites.
5. Set `VITE_SITE_URL=https://your-vercel-domain.vercel.app`
6. Keep the `/api/(.*)` rewrite before the SPA `/(.*)` rewrite so API POST requests are forwarded to Render instead of being handled as static frontend routes.

## Cloudinary

1. Create a Cloudinary account.
2. Copy `cloud_name`, API key, and API secret into environment variables.
3. Uploads are handled by `POST /api/uploads`.

## Production Checklist

- Use long random secrets for JWT and cookies.
- Use HTTPS domains for `CLIENT_URL` and `VITE_API_URL`.
- Seed a strong admin password, then rotate it after first login.
- Configure SMTP for contact notifications.
- Confirm CORS permits only your frontend domain.
- Run `npm run build` before deployment.
- Monitor Render logs and MongoDB Atlas metrics.
