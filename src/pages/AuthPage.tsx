import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Input, Button, Card } from "@/components/ui";
import { routes } from "@/constants/routes";
import { users } from "@/data";
import { getStoredAuthUser, saveAuthUser, saveSession } from "@/lib/auth";
import { useUserStore } from "@/store/userStore";

const authSchema = z.object({
  name: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.string().min(2, "Enter your full name").optional(),
  ),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type AuthFormValues = z.infer<typeof authSchema>;

export default function AuthPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setCurrentUser } = useUserStore();
  const isRegister = pathname.includes("register");
  const fallbackUser = users[0];
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm<AuthFormValues>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  function onSubmit(values: AuthFormValues) {
    const parsed = authSchema.safeParse(values);
    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof AuthFormValues;
        setError(field, { message: issue.message });
      });
      return;
    }

    const formValues = parsed.data;

    if (isRegister) {
      const registeredUser = {
        ...fallbackUser,
        id: "u-priya",
        name: formValues.name?.trim() || fallbackUser.name,
        handle: formValues.email.split("@")[0],
        email: formValues.email,
        password: formValues.password,
        headline: "Vertex member building meaningful social circles",
        bio: "New Vertex member exploring conversations, creators, and communities.",
      };

      saveAuthUser(registeredUser);
      setCurrentUser(registeredUser);
      toast.success("Account created locally");
      navigate(routes.home);
      return;
    }

    const stored = getStoredAuthUser();
    const canLogin =
      stored?.email === formValues.email && stored.password === formValues.password;

    if (!canLogin) {
      toast.error("No local account found for those credentials");
      return;
    }

    saveSession(stored);
    setCurrentUser(stored);
    toast.success("Signed in locally");
    navigate(routes.home);
  }

  return (
    <Card className="w-full max-w-md p-8">
      <p className="text-sm font-semibold text-primary-600">Vertex</p>
      <h1 className="mt-3 text-3xl font-bold text-zinc-950 dark:text-zinc-50">
        {isRegister ? "Create your account" : "Welcome back"}
      </h1>
      <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
        {isRegister
          ? "Your profile is saved locally in this browser."
          : "Sign in with the local account you registered on this device."}
      </p>
      <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {isRegister ? (
          <div>
            <Input placeholder="Full name" {...register("name")} />
            {errors.name ? (
              <p className="mt-1 text-xs font-semibold text-red-600">{errors.name.message}</p>
            ) : null}
          </div>
        ) : null}
        <div>
          <Input placeholder="Email address" type="email" {...register("email")} />
          {errors.email ? (
            <p className="mt-1 text-xs font-semibold text-red-600">{errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <Input placeholder="Password" type="password" {...register("password")} />
          {errors.password ? (
            <p className="mt-1 text-xs font-semibold text-red-600">
              {errors.password.message}
            </p>
          ) : null}
        </div>
        <Button className="w-full" type="submit">
          {isRegister ? "Create account" : "Sign in"}
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        {isRegister ? "Already have a local account?" : "Need a local account?"}{" "}
        <Link
          className="font-bold text-primary-700 dark:text-primary-100"
          to={isRegister ? routes.login : routes.register}
        >
          {isRegister ? "Sign in" : "Register"}
        </Link>
      </p>
    </Card>
  );
}
