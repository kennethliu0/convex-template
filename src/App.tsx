import { SignInButton, UserButton } from "@clerk/react";
import {
  Authenticated,
  Unauthenticated,
  AuthLoading,
} from "convex/react";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <AuthLoading>
        <p className="text-muted-foreground">Loading...</p>
      </AuthLoading>
      <Unauthenticated>
        <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
        <p className="text-muted-foreground">Sign in to get started</p>
        <SignInButton mode="modal">
          <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Sign in
          </button>
        </SignInButton>
      </Unauthenticated>
      <Authenticated>
        <div className="flex items-center gap-4">
          <UserButton />
          <h1 className="text-4xl font-bold tracking-tight">
            You're in!
          </h1>
        </div>
        <p className="text-muted-foreground">
          Edit <code className="rounded bg-muted px-1.5 py-0.5 text-sm">src/App.tsx</code> to get started.
        </p>
      </Authenticated>
    </main>
  );
}

export default App;
