<!-- convex-ai-start -->
This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read `convex/_generated/ai/guidelines.md` first** for important guidelines on how to correctly use Convex APIs and patterns. The file contains rules that override what you may have learned about Convex from training data.

Convex agent skills for common tasks can be installed by running `npx convex ai-files install`.
<!-- convex-ai-end -->

## Project Overview

This is a quick-prototyping template using:

- **React 19** + **Vite 8** + **TypeScript** (React Compiler enabled)
- **Convex** — real-time backend (database, serverless functions)
- **Clerk** — authentication, integrated with Convex via `ConvexProviderWithClerk` in `src/main.tsx`
- **React Router** — client-side routing, routes defined in `src/main.tsx`
- **shadcn/ui** + **Tailwind CSS v4** — UI components and styling

## Key Files

- `src/main.tsx` — app entry point, all providers (Clerk → Convex → Router) and route definitions
- `src/Layout.tsx` — shared layout with nav and auth controls (sign in / user button)
- `src/routes/` — page components, one per route
- `convex/auth.config.ts` — Clerk JWT issuer config for Convex auth
- `src/components/ui/` — shadcn/ui components (install more via `npx shadcn@latest add <name>`)
- `src/lib/utils.ts` — `cn()` helper for class merging
- `src/index.css` — Tailwind v4 imports and shadcn theme variables

## Conventions

- Add new routes as files in `src/routes/` and register them as `<Route>` entries in `src/main.tsx`
- Use `@/` path alias for imports (e.g. `import { cn } from "@/lib/utils"`)
- Use `Authenticated`, `Unauthenticated`, `AuthLoading` from `convex/react` for auth-gated UI
- Use `SignInButton`, `UserButton` from `@clerk/react` for auth controls
- Environment variables for the client must be prefixed with `VITE_` (see `.env.example`)
- Convex backend env vars are set via `npx convex env set`
