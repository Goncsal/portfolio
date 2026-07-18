const n=`# Next.js Showcase\r
\r
Project Summary: An educational/demonstration app that showcases modern Next.js development patterns, including Server Components, Server Actions, and React 19 features.\r
Year: 2025\r
Tech: Next.js 16, React 19, TypeScript, Tailwind\r
Link: https://nextssshowcase.vercel.app/\r
\r
## Overview\r
\r
This is an educational/demonstration app that showcases modern Next.js development patterns. It's built with:\r
\r
- **Next.js 16** (App Router with Turbopack)\r
- **React 19**\r
- **TypeScript**\r
- **Tailwind CSS v4**\r
\r
## What the App Demonstrates\r
\r
The app includes interactive demos for these Next.js concepts:\r
\r
### 1. Server Components (\`/server-components\`)\r
- Demonstrates async data fetching on the server\r
- Shows Node.js version and timestamp without client-side JavaScript\r
\r
### 2. Client Components (\`/client-components\`)\r
- Interactive examples using \`useState\` and \`useEffect\`\r
- Counter, toggle buttons, mouse tracking, and controlled inputs\r
\r
### 3. Dynamic Routes (\`/dynamic-routes/posts/[slug]\`)\r
- URL parameter handling with \`[slug]\` syntax\r
- Static generation with \`generateStaticParams()\`\r
- Mock blog post examples\r
\r
### 4. API Routes (\`/api/users\`)\r
- RESTful API endpoints using Route Handlers\r
- GET and POST operations with \`NextResponse\`\r
- Live demo page to test API calls\r
\r
### 5. Server Actions (\`/server-actions\`)\r
- Todo app with \`"use server"\` functions\r
- Form mutations and data updates\r
- \`revalidatePath()\` for cache invalidation\r
- Optimistic UI updates with \`useTransition\`\r
\r
### 6. Data Fetching (\`/data-fetching\`)\r
- Parallel data fetching with Suspense\r
- Streaming with skeleton fallbacks\r
- Loading states demonstration\r
\r
### 7. Error Handling (\`/loading-demo/error-test\`)\r
- Error boundaries with \`error.tsx\`\r
- Recovery UI with "Try Again" functionality\r
\r
### 8. Navigation & Layouts\r
- Shared root layout with metadata\r
- Active route highlighting\r
- Glassmorphism UI effects\r
`;export{n as default};
