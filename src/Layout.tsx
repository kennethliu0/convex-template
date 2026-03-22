import { Outlet, Link } from "react-router";
import { SignInButton, UserButton } from "@clerk/react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b px-6 py-3">
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Authenticated>
            <Link
              to="/dashboard"
              className="text-sm font-medium hover:text-primary"
            >
              Dashboard
            </Link>
          </Authenticated>
        </nav>
        <div>
          <AuthLoading>
            <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
          </AuthLoading>
          <Unauthenticated>
            <SignInButton mode="modal">
              <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Sign in
              </button>
            </SignInButton>
          </Unauthenticated>
          <Authenticated>
            <UserButton />
          </Authenticated>
        </div>
      </header>
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
    </div>
  );
}
