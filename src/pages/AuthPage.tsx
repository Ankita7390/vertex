import { useLocation } from "react-router-dom";

import { Input, Button, Card } from "@/components/ui";

export default function AuthPage() {
  const { pathname } = useLocation();
  const isRegister = pathname.includes("register");

  return (
    <Card className="w-full max-w-md p-8">
      <p className="text-sm font-semibold text-primary-600">Vertex</p>
      <h1 className="mt-3 text-3xl font-bold text-zinc-950 dark:text-zinc-50">
        {isRegister ? "Create your account" : "Welcome back"}
      </h1>
      <div className="mt-8 space-y-4">
        {isRegister ? <Input placeholder="Full name" /> : null}
        <Input placeholder="Email address" type="email" />
        <Input placeholder="Password" type="password" />
        <Button className="w-full">{isRegister ? "Create account" : "Sign in"}</Button>
      </div>
    </Card>
  );
}
