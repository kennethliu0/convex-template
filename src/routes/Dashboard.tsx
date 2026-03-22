import { Authenticated, Unauthenticated } from "convex/react";
import { Navigate } from "react-router";

export default function Dashboard() {
  return (
    <>
      <Unauthenticated>
        <Navigate to="/" replace />
      </Unauthenticated>
      <Authenticated>
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">This is a protected route.</p>
        </div>
      </Authenticated>
    </>
  );
}
