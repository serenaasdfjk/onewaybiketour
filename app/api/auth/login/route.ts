import { getUserByEmail, hashPassword } from "@/lib/users";

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email ?? "").trim().toLowerCase();
  const password = String(body.password ?? "");

  if (!email || !password) {
    return Response.json({ error: "Email and password are required" }, { status: 400 });
  }

  const user = getUserByEmail(email);
  if (!user) {
    return Response.json({ error: "Invalid email or password" }, { status: 401 });
  }

  if (user.passwordHash !== hashPassword(password)) {
    return Response.json({ error: "Invalid email or password" }, { status: 401 });
  }

  return Response.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
}
