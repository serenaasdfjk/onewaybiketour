import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  if (code) {
    try {
      const { error } = await createClient().auth.exchangeCodeForSession(code);
      if (!error) return NextResponse.redirect(new URL("/account", url.origin));
    } catch { /* Let the user retry login after email confirmation. */ }
  }
  return NextResponse.redirect(new URL("/login?confirmation=failed", url.origin));
}
