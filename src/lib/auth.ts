import type { User } from "@/types/social";

export interface LocalAuthUser extends User {
  email: string;
  password: string;
}

const AUTH_USER_KEY = "vertex.auth.user";
const AUTH_SESSION_KEY = "vertex.auth.session";

export function getStoredAuthUser(): LocalAuthUser | undefined {
  try {
    const raw = localStorage.getItem(AUTH_USER_KEY);
    return raw ? (JSON.parse(raw) as LocalAuthUser) : undefined;
  } catch {
    return undefined;
  }
}

export function getStoredSession(): User | undefined {
  try {
    const raw = localStorage.getItem(AUTH_SESSION_KEY);
    return raw ? (JSON.parse(raw) as User) : undefined;
  } catch {
    return undefined;
  }
}

export function saveAuthUser(user: LocalAuthUser) {
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  saveSession(user);
}

export function saveSession(user: User) {
  const { id, name, handle, avatarUrl, coverUrl, headline, location, bio, followers, following } =
    user;

  localStorage.setItem(
    AUTH_SESSION_KEY,
    JSON.stringify({
      id,
      name,
      handle,
      avatarUrl,
      coverUrl,
      headline,
      location,
      bio,
      followers,
      following,
    }),
  );
}

export function clearSession() {
  localStorage.removeItem(AUTH_SESSION_KEY);
}
