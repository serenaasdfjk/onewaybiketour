"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";

async function sendAuth(path: string, values: Record<string, string>) {
  const response = await fetch(path, {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Please try again.");
  return data as { needsConfirmation: boolean };
}

export function LoginForm() {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [error, setError] = useState(""); const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("confirmation") === "failed") {
      setError("The confirmation link could not sign you in. Try logging in below, or register again if the link expired.");
    }
  }, []);
  const submit = async (event: FormEvent) => {
    event.preventDefault(); if (loading) return; setError(""); setLoading(true);
    try {
      await sendAuth("/api/auth/login", { email, password });
      window.localStorage.removeItem("one-way-bike-tours-user");
      window.location.assign("/account");
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Could not connect. Please try again."); setLoading(false); }
  };
  return <AuthFrame eyebrow="Welcome back" title="Log in" footer={<>New here? <Link href="/register" className="font-bold text-orange">Create an account</Link></>}><form onSubmit={submit} className="mt-10 space-y-5"><label className="block text-xs font-bold">Email<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-full border border-ink/20 bg-transparent px-5 py-3 outline-none focus:border-orange" placeholder="you@example.com" /></label><label className="block text-xs font-bold">Password<input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-full border border-ink/20 bg-transparent px-5 py-3 outline-none focus:border-orange" placeholder="At least 6 characters" /></label>{error && <p role="alert" className="text-xs text-red-700">{error}</p>}<Button type="submit" disabled={loading}>{loading ? "Logging in..." : "Log in"} <span className="ml-3">↗</span></Button></form></AuthFrame>;
}

export function RegisterForm() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [confirm, setConfirm] = useState(""); const [error, setError] = useState(""); const [loading, setLoading] = useState(false);
  const submit = async (event: FormEvent) => {
    event.preventDefault(); if (loading) return; setError(""); setMessage("");
    if (password.length < 8) { setError("Password must be at least 8 characters."); return; }
    if (password !== confirm) { setError("Passwords do not match."); return; }
    setLoading(true);
    try {
      const result = await sendAuth("/api/auth/register", { name, email, password });
      if (result.needsConfirmation) {
        setMessage("Check your email for a confirmation link. Open it in this browser, then log in. If you already have an account, use Log in.");
        setPassword(""); setConfirm(""); setLoading(false);
      } else {
        window.localStorage.removeItem("one-way-bike-tours-user");
        window.location.assign("/account");
      }
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Could not connect. Please try again."); setLoading(false); }
  };
  return <AuthFrame eyebrow="Start your ride" title="Register" footer={<>Already a member? <Link href="/login" className="font-bold text-orange">Log in</Link></>}><form onSubmit={submit} className="mt-10 space-y-5"><label className="block text-xs font-bold">Name<input required value={name} onChange={(event) => setName(event.target.value)} className="mt-2 w-full rounded-full border border-ink/20 bg-transparent px-5 py-3" placeholder="Your name" /></label><label className="block text-xs font-bold">Email<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-full border border-ink/20 bg-transparent px-5 py-3" placeholder="you@example.com" /></label><label className="block text-xs font-bold">Password<input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-full border border-ink/20 bg-transparent px-5 py-3" placeholder="At least 8 characters" /></label><label className="block text-xs font-bold">Confirm password<input required type="password" value={confirm} onChange={(event) => setConfirm(event.target.value)} className="mt-2 w-full rounded-full border border-ink/20 bg-transparent px-5 py-3" placeholder="Repeat password" /></label>{message && <p role="status" className="text-sm text-ink">{message}</p>}{error && <p role="alert" className="text-xs text-red-700">{error}</p>}<Button type="submit" disabled={loading}>{loading ? "Creating..." : "Create account"} <span className="ml-3">↗</span></Button></form></AuthFrame>;
}

function AuthFrame({ eyebrow, title, footer, children }: Readonly<{ eyebrow: string; title: string; footer: React.ReactNode; children: React.ReactNode }>) { return <main className="grain flex min-h-screen items-start justify-center overflow-y-auto bg-[#dedad6] px-5 py-8 sm:items-center sm:py-10"><div className="w-full max-w-md"><Logo /><div className="mt-10 rounded-[2rem] bg-paper p-7 shadow-sm md:mt-20 md:p-12"><p className="eyebrow mb-5 text-orange">{eyebrow}</p><h1 className="display text-6xl font-bold">{title}<span className="text-orange">.</span></h1>{children}<p className="mt-8 text-xs text-ink/60">{footer}</p></div><Link href="/" className="mt-7 block text-center text-xs font-bold">← Back home</Link></div></main>; }
