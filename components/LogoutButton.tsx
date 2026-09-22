"use client";
import { useState } from "react";

export function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function logout() {
    setLoading(true); setError("");
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      if (!response.ok) throw new Error();
      window.localStorage.removeItem("one-way-bike-tours-user");
      window.location.assign("/login");
    } catch { setError("Could not log out. Please try again."); setLoading(false); }
  }
  return <div><button disabled={loading} onClick={logout} className="rounded-lg bg-orange px-6 py-3 text-sm font-bold text-white disabled:opacity-50">{loading ? "Logging out..." : "Log out"}</button>{error && <p role="alert" className="mt-3 text-sm text-red-700">{error}</p>}</div>;
}
