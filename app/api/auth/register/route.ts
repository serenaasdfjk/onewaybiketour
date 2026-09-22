import { handleAuth } from "@/lib/supabase/auth-handler";

export async function POST(request: Request) {
  return handleAuth(request, true);
}
