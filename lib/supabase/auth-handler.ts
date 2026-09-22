import { createClient } from "./server";

export async function handleAuth(request: Request, register: boolean) {
  const reply = (body: object, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
  const origin = new URL(request.url).origin;
  if (request.headers.get("origin") && request.headers.get("origin") !== origin) return reply({ error: "Request not allowed." }, 403);
  let body;
  try { body = await request.json(); } catch { return reply({ error: "Invalid request." }, 400); }
  if (!body || typeof body !== "object") return reply({ error: "Invalid request." }, 400);
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !password || password.length > 1024) return reply({ error: "Enter a valid email and password." }, 400);
  if (register && (!name || name.length > 100 || password.length < 8)) return reply({ error: "Enter a name (up to 100 characters) and a password with at least 8 characters." }, 400);
  try {
    const supabase = createClient();
    const { data, error } = register
      ? await supabase.auth.signUp({ email, password, options: { data: { name }, emailRedirectTo: `${origin}/auth/callback` } })
      : await supabase.auth.signInWithPassword({ email, password });
    if (error) return reply({ error: error.status === 429 ? "Too many attempts. Please try again later." : register ? "Registration failed. Check your details and try again." : "Login failed. Check your email, password and email confirmation." }, error.status === 429 ? 429 : 400);
    return reply({ needsConfirmation: register && !data.session }, register ? 201 : 200);
  } catch { return reply({ error: "Authentication is unavailable. Please try again later." }, 503); }
}
