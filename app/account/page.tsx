import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Logo } from "@/components/Logo";
import { LogoutButton } from "@/components/LogoutButton";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const { data: { user }, error } = await createClient().auth.getUser();
  if (error || !user) redirect("/login");
  return <main className="mx-auto max-w-xl px-5 py-10"><Logo /><h1 className="mt-12 text-3xl font-bold">Your account</h1><p className="mt-5 break-words">{typeof user.user_metadata.name === "string" ? user.user_metadata.name : "Rider"}</p><p className="mt-2 break-all text-sm text-ink/60">{user.email}</p><div className="my-8 flex flex-wrap gap-6 text-sm font-bold"><Link href="/tours">Explore tours</Link><Link href="/onboarding">Plan your ride</Link></div><LogoutButton /></main>;
}
