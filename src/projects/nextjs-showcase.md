# Next.js Showcase

Project Summary: An educational/demonstration app that showcases modern Next.js development patterns, including Server Components, Server Actions, and React 19 features.

Live: [nextssshowcase.vercel.app](https://nextssshowcase.vercel.app/)

## Overview

This is an educational/demonstration app that showcases modern Next.js development patterns. It's built with:

- **Next.js 16** (App Router with Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**

## What the App Demonstrates

The app includes interactive demos for these Next.js concepts:

### 1. Server Components (`/server-components`)
- Demonstrates async data fetching on the server
- Shows Node.js version and timestamp without client-side JavaScript

### 2. Client Components (`/client-components`)
- Interactive examples using `useState` and `useEffect`
- Counter, toggle buttons, mouse tracking, and controlled inputs

### 3. Dynamic Routes (`/dynamic-routes/posts/[slug]`)
- URL parameter handling with `[slug]` syntax
- Static generation with `generateStaticParams()`
- Mock blog post examples

### 4. API Routes (`/api/users`)
- RESTful API endpoints using Route Handlers
- GET and POST operations with `NextResponse`
- Live demo page to test API calls

### 5. Server Actions (`/server-actions`)
- Todo app with `"use server"` functions
- Form mutations and data updates
- `revalidatePath()` for cache invalidation
- Optimistic UI updates with `useTransition`

### 6. Data Fetching (`/data-fetching`)
- Parallel data fetching with Suspense
- Streaming with skeleton fallbacks
- Loading states demonstration

### 7. Error Handling (`/loading-demo/error-test`)
- Error boundaries with `error.tsx`
- Recovery UI with "Try Again" functionality

### 8. Navigation & Layouts
- Shared root layout with metadata
- Active route highlighting
- Glassmorphism UI effects
