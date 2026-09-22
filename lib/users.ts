import { randomUUID } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

export type UserRecord = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;
};

const dataDir = path.join(process.cwd(), "data");
const usersFile = path.join(dataDir, "users.json");

function ensureStore() {
  if (!existsSync(dataDir)) {
    mkdirSync(dataDir, { recursive: true });
  }

  if (!existsSync(usersFile)) {
    writeFileSync(usersFile, "[]", "utf-8");
  }
}

export function readUsers(): UserRecord[] {
  ensureStore();
  const raw = readFileSync(usersFile, "utf-8");
  return raw ? (JSON.parse(raw) as UserRecord[]) : [];
}

export function writeUsers(users: UserRecord[]) {
  ensureStore();
  writeFileSync(usersFile, JSON.stringify(users, null, 2), "utf-8");
}

export function getUserByEmail(email: string) {
  const normalized = email.trim().toLowerCase();
  return readUsers().find((user) => user.email === normalized) ?? null;
}

export function createUser({
  name,
  email,
  passwordHash,
}: {
  name: string;
  email: string;
  passwordHash: string;
}) {
  const users = readUsers();
  const user: UserRecord = {
    id: randomUUID(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    passwordHash,
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  writeUsers(users);
  return user;
}

export function hashPassword(password: string) {
  return require("node:crypto").createHash("sha256").update(password).digest("hex");
}
