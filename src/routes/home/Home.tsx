import { Authenticated, Unauthenticated } from "convex/react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <Unauthenticated>
        <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
        <p className="text-muted-foreground">Sign in to get started.</p>
      </Unauthenticated>
      <Authenticated>
        <h1 className="text-4xl font-bold tracking-tight">You're in!</h1>
        <p className="text-muted-foreground">
          Head to the{" "}
          <Link to="/dashboard" className="underline hover:text-primary">
            dashboard
          </Link>{" "}
          or edit{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
            src/routes/Home.tsx
          </code>{" "}
          to get started.
        </p>
      </Authenticated>
    </div>
  );
}
