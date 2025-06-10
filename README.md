
# Mr.Brainly

## Description

Mr.Brainly is your digital second brain - a modern note-taking application that helps you organize and access your digital content in one place. Save and manage various types of content including tweets, YouTube videos, web links, and documents. With Mr.Brainly, you can easily store, categorize, and retrieve your digital knowledge base.

## Project Structure


```bash
  project/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   │   └── db.ts
│   │   ├── middlewares/
│   │   │   └── userCheckJwt.ts
│   │   ├── routes/
│   │   │   ├── content.ts
│   │   │   ├── linkRoute.ts
│   │   │   ├── signinRoutes.ts
│   │   │   └── signupRoute.ts 
│   │   ├── statusCode/
│   │   └── index.ts
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── icons/
    │   │   └── ui/ 
    │   ├── hooks/
    │   ├── pages/
    │   ├── app.tsx
    │   ├── index.css
    │   └── main.tsx
    ├── public/
    ├── index.html
    └── package.json
```
    
## Features

```bash
# Save and organize multiple content types:
# - Web links
# - Tweets
# - YouTube videos
# - Documents

# Content categorization with tags

# Full-text search

# Secure user authentication

# Responsive design
```

## Tech Stack

```bash
# Frontend:
# - React
# - TypeScript
# - Tailwind CSS

# Backend:
# - Node.js
# - Express
# - TypeScript

# Database:
# - MongoDB

# Authentication:
# - JWT (JSON Web Token)
```


## Backend Setup

### Navigate to backend directory

```bash
  cd backend
```

### Install dependencies:

```bash
  npm install
```

### Create .env file:

```bash
  Add your environment variables like DB_URI, JWT_SECRET, etc.
```

### Frontend Setup

```bash
  cd frontend
```
### Install dependencies:

```bash
  npm install
```

### Create .env file:

```bash
  Add your environment variables like VITE_API_URL, etc.
```
### Start development server:
```bash
    npm run dev
```

