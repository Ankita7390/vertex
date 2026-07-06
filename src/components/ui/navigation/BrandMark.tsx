import { Link } from "react-router-dom";

export function BrandMark() {
  return (
    <Link aria-label="Vertex home" className="flex items-center gap-3" to="/">
      <img
        alt=""
        className="size-10 rounded-2xl shadow-lg shadow-primary-600/25 transition duration-300 hover:rotate-3 hover:scale-105"
        src="/vertex-logo.svg"
      />
      <span className="hidden text-lg font-bold tracking-tight text-zinc-950 dark:text-white sm:block">
        Vertex
      </span>
    </Link>
  );
}
