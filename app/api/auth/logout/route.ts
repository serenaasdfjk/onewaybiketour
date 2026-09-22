import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) return Response.json({ error: "Request not allowed." }, { status: 403 });
  try {
    const { error } = await createClient().auth.signOut({ scope: "local" });
    if (error) throw error;
    return Response.json({ success: true }, { headers: { "Cache-Control": "no-store" } });
  } catch { return Response.json({ error: "Could not log out. Please try again." }, { status: 503 }); }
}
