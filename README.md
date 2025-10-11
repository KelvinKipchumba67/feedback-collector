# Feedback Collector

A small feedback collection app with an Express + MongoDB backend and a Vite + React frontend. It allows users to submit feedback, view feedback items, resolve them, and delete them.

## Features

- Submit feedback (name optional)
- List feedback sorted newest-first
- Mark feedback as resolved
- Delete feedback
- Responsive UI with dark/light palette

## Requirements

- Node.js (16+ recommended)
- npm or yarn
- MongoDB (Atlas or local)

## Repository structure

```
package.json
backend/
  server.js
  controllers/
    feedbackController.js
  models/
    feedback.js
  routes/
    feedbackRoutes.js
frontend/
  package.json
  src/
    App.jsx
    main.jsx
    pages/
      Home.jsx
    components/
      FeedbackForm.jsx
      FeedbackList.jsx
      FeedbackItem.jsx
    App.css
    index.css
README.md
```

## Environment variables

Create a `.env` file in the project root (or set env vars in your environment):

```
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
```

## Setup

### Install dependencies

From the project root install backend + frontend dependencies (or separately in each folder):

```powershell
# From project root
npm install
# Then install frontend deps
cd frontend
npm install
cd ..
```

> Note: The project root `package.json` includes `nodemon` and points `main` to `backend/server.js` for convenience.

### Run backend

Start the backend server (from project root):

```powershell
node backend/server.js
# or for development with live reload
npx nodemon backend/server.js
```

The server will listen on `PORT` (defaults to 5000) and expects `MONGO_URI` to be set.

### Run frontend

From the `frontend` folder:

```powershell
cd frontend
npm run dev
```

Open the local Vite dev URL (usually `http://localhost:5173`) and the frontend will call the backend at `http://localhost:5000/api/feedback` by default.

## API

Base path: `/api/feedback`

- GET `/api/feedback` — list all feedback items (newest first)
- POST `/api/feedback` — submit new feedback
  - body: `{ name?: string, message: string }`
- DELETE `/api/feedback/:id` — delete feedback by id
- PUT `/api/feedback/:id/resolve` — mark a feedback item as resolved

All endpoints return JSON.

## Development tips

- Configure `MONGO_URI` to point to a MongoDB Atlas cluster for quick setup.
- If the frontend needs a different API root (e.g. deployed), change the fetch URLs in `frontend/src/pages/Home.jsx` to use an env var or a proxy.
- Add a `.env.example` to commit safe defaults (no secrets).

## Next steps / Improvements

- Add tests (Jest + supertest for backend, React Testing Library for frontend)
- Add a theme toggle (light/dark) and persist preference
- Add optimistic UI updates and loading states
- Add pagination or filtering for feedback
- Add confirmation dialog for delete and undo option

---
