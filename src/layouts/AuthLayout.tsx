import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#FAFAFA] px-4 dark:bg-zinc-950">
      <Outlet />
    </div>
  );
}
