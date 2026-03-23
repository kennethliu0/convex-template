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
- `src/routes/` — route folders, one per route (e.g. `src/routes/dashboard/`)
- `convex/auth.config.ts` — Clerk JWT issuer config for Convex auth
- `src/components/ui/` — shadcn/ui components (install more via `npx shadcn@latest add <name>`)
- `src/components/` — shared components used across multiple routes
- `src/lib/utils.ts` — `cn()` helper for class merging
- `src/index.css` — Tailwind v4 imports and shadcn theme variables

## Conventions

- Each route is a folder under `src/routes/` (e.g. `src/routes/dashboard/Dashboard.tsx`). Register the main component as a `<Route>` in `src/main.tsx`
- Extract non-trivial sub-components from route files into the same route folder (e.g. `src/routes/dashboard/StatsCard.tsx`). Route files should be thin — primarily composing extracted components
- Components shared across multiple routes go in `src/components/`
- Keep route files focused on layout and composition, not implementation details
- Use `@/` path alias for imports (e.g. `import { cn } from "@/lib/utils"`)
- Use `Authenticated`, `Unauthenticated`, `AuthLoading` from `convex/react` for auth-gated UI
- Use `SignInButton`, `UserButton` from `@clerk/react` for auth controls
- Environment variables for the client must be prefixed with `VITE_` (see `.env.example`)
- Convex backend env vars are set via `npx convex env set`
- After finishing a set of changes, run `pnpm lint` and fix any errors before considering the work done
