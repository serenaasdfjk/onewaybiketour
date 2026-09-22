import { createUser, getUserByEmail, hashPassword } from "@/lib/users";

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const password = String(body.password ?? "");

  if (!name || !email || !password) {
    return Response.json({ error: "Name, email and password are required" }, { status: 400 });
  }

  if (password.length < 6) {
    return Response.json({ error: "Password must be at least 6 characters long" }, { status: 400 });
  }

  if (getUserByEmail(email)) {
    return Response.json({ error: "User already exists" }, { status: 409 });
  }

  const user = createUser({
    name,
    email,
    passwordHash: hashPassword(password),
  });

  return Response.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  }, { status: 201 });
}
