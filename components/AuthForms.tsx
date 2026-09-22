"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";

async function sendAuth(path: string, values: Record<string, string>) {
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Please try again.");
  return data;
}

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (loading) return;

    setError("");
    setLoading(true);

    try {
      const data = await sendAuth("/api/auth/login", { email, password });
      if (!data.success) throw new Error("Login failed");
      window.localStorage.setItem("one-way-bike-tours-user", JSON.stringify({ name: data.user.name, email: data.user.email }));
      window.location.assign("/account");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not connect. Please try again.");
      setLoading(false);
    }
  };

  return (
    <AuthFrame eyebrow="Welcome back" title="Log in" footer={<>
      New here? <Link href="/register" className="font-bold text-orange">Create an account</Link>
    </>}>
      <form onSubmit={submit} className="mt-10 space-y-5">
        <label className="block text-xs font-bold">Email<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-full border border-ink/20 bg-transparent px-5 py-3 outline-none focus:border-orange" placeholder="you@example.com" /></label>
        <label className="block text-xs font-bold">Password<input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-full border border-ink/20 bg-transparent px-5 py-3 outline-none focus:border-orange" placeholder="At least 6 characters" /></label>
        {error && <p role="alert" className="text-xs text-red-700">{error}</p>}
        <Button type="submit" disabled={loading}>{loading ? "Logging in..." : "Log in"} <span className="ml-3">↗</span></Button>
      </form>
    </AuthFrame>
  );
}

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (loading) return;

    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const data = await sendAuth("/api/auth/register", { name, email, password });
      if (!data.success) throw new Error("Registration failed");
      window.localStorage.setItem("one-way-bike-tours-user", JSON.stringify({ name: data.user.name, email: data.user.email }));
      window.location.assign("/onboarding");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not connect. Please try again.");
      setLoading(false);
    }
  };

  return (
    <AuthFrame eyebrow="Start your ride" title="Register" footer={<>
      Already a member? <Link href="/login" className="font-bold text-orange">Log in</Link>
    </>}>
      <form onSubmit={submit} className="mt-10 space-y-5">
        <label className="block text-xs font-bold">Name<input required value={name} onChange={(event) => setName(event.target.value)} className="mt-2 w-full rounded-full border border-ink/20 bg-transparent px-5 py-3" placeholder="Your name" /></label>
        <label className="block text-xs font-bold">Email<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-full border border-ink/20 bg-transparent px-5 py-3" placeholder="you@example.com" /></label>
        <label className="block text-xs font-bold">Password<input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-full border border-ink/20 bg-transparent px-5 py-3" placeholder="At least 6 characters" /></label>
        <label className="block text-xs font-bold">Confirm password<input required type="password" value={confirm} onChange={(event) => setConfirm(event.target.value)} className="mt-2 w-full rounded-full border border-ink/20 bg-transparent px-5 py-3" placeholder="Repeat password" /></label>
        {error && <p role="alert" className="text-xs text-red-700">{error}</p>}
        <Button type="submit" disabled={loading}>{loading ? "Creating..." : "Create account"} <span className="ml-3">↗</span></Button>
      </form>
    </AuthFrame>
  );
}

function AuthFrame({ eyebrow, title, footer, children }: Readonly<{ eyebrow: string; title: string; footer: React.ReactNode; children: React.ReactNode }>) {
  return <main className="grain flex min-h-screen items-start justify-center overflow-y-auto bg-[#dedad6] px-5 py-8 sm:items-center sm:py-10"><div className="w-full max-w-md"><Logo /><div className="mt-10 rounded-[2rem] bg-paper p-7 shadow-sm md:mt-20 md:p-12"><p className="eyebrow mb-5 text-orange">{eyebrow}</p><h1 className="display text-6xl font-bold">{title}<span className="text-orange">.</span></h1>{children}<p className="mt-8 text-xs text-ink/60">{footer}</p></div><Link href="/" className="mt-7 block text-center text-xs font-bold">← Back home</Link></div></main>;
}

