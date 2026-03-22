# Convex + React Template

A full-stack template with [Convex](https://convex.dev) as the backend, [Clerk](https://clerk.com) for authentication, [shadcn/ui](https://ui.shadcn.com) components, and [Tailwind CSS v4](https://tailwindcss.com) — all wired together in a [Vite](https://vite.dev) + React + TypeScript project with [React Router](https://reactrouter.com) for client-side routing.

## Getting Started

1. Clone the repo and install dependencies:

```bash
pnpm install
```

2. Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

3. Set the `CLERK_JWT_ISSUER_DOMAIN` environment variable on your Convex deployment:

```bash
npx convex env set CLERK_JWT_ISSUER_DOMAIN https://your-clerk-domain.clerk.accounts.dev
```

4. Start the Convex dev server and Vite dev server:

```bash
npx convex dev
pnpm dev
```

## Project Structure

```
src/
├── main.tsx            # App entry — providers (Clerk, Convex, Router) and route definitions
├── Layout.tsx          # Shared layout with nav header and auth controls
├── routes/
│   ├── Home.tsx        # Landing page (/)
│   └── Dashboard.tsx   # Protected route (/dashboard)
├── components/ui/      # shadcn/ui components
├── lib/utils.ts        # Utility helpers (cn)
└── index.css           # Tailwind v4 + shadcn theme
convex/
├── auth.config.ts      # Clerk JWT auth provider config
└── _generated/         # Auto-generated Convex types and API
```

## Adding Routes

Create a new file in `src/routes/` and add a `<Route>` entry in `src/main.tsx`:

```tsx
<Route path="my-page" element={<MyPage />} />
```

## Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

Components are installed to `src/components/ui/`.

## Stack

- **React 19** with React Compiler enabled
- **Vite 8** for dev/build tooling
- **React Router** for client-side routing
- **Convex** for the real-time backend (database, serverless functions)
- **Clerk** for authentication (integrated with Convex via `ConvexProviderWithClerk`)
- **shadcn/ui** for UI components
- **Tailwind CSS v4** for utility-first styling
