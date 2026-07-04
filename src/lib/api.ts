const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function registerUser(email: string, password: string, fullName: string) {
  const res = await fetch(`${API_URL}/api/v1/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, full_name: fullName }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || "Kayıt başarısız");
  }
  return res.json(); // { access_token, token_type, user }
}

export async function loginUser(email: string, password: string) {
  const body = new URLSearchParams();
  body.append("username", email);
  body.append("password", password);

  const res = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || "Giriş başarısız");
  }
  return res.json(); // { access_token, token_type, user }
}

export function saveToken(token: string) {
  localStorage.setItem("access_token", token);
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("access_token");
}

export function logout() {
  localStorage.removeItem("access_token");
}
