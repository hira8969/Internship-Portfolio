# Project Structure

This portfolio is organized as a full-stack project with a clear frontend and backend split.

```text
Persional-Portfolio/
  frontend/                 Frontend Vite React app
    public/
      images/               Static frontend assets
      resume.pdf            Public resume download
    src/
      components/           Reusable UI, layout, animation, form, and section components
      config/               Personal site configuration
      constants/            Portfolio content, education, skills, and project fallback data
      context/              Theme and authentication providers
      hooks/                Reusable frontend hooks
      pages/                Public and admin pages
      routes/               React Router route configuration
      services/             API client setup
      styles/               Global Tailwind CSS
  backend/                  Backend Express API
    config/                 Database and Cloudinary configuration
    constants/              Backend constants and roles
    controllers/            Request handlers and CRUD logic
    helpers/                Token helpers
    middleware/             Auth, upload, validation, and error middleware
    models/                 MongoDB Mongoose models
    routes/                 API route modules
    services/               Cloudinary and email services
    utils/                  Logger, seed scripts, async helpers
    validators/             Zod validation schemas
  docs/                     API, deployment, and structure documentation
```

Frontend runs with Vite and React. Backend runs with Node.js, Express, MongoDB, JWT auth, Cloudinary uploads, and REST APIs.
