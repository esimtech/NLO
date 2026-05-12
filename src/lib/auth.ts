import { cookies } from "next/headers";
import crypto from "crypto";

const SESSION_COOKIE = "nlo_admin_session";

function sign(value: string): string {
  const secret = process.env.SESSION_SECRET || "fallback-secret";
  const mac = crypto.createHmac("sha256", secret).update(value).digest("hex");
  return `${value}.${mac}`;
}

function verify(signed: string): string | null {
  const parts = signed.split(".");
  if (parts.length < 2) return null;
  const mac = parts.pop()!;
  const value = parts.join(".");
  const expected = crypto.createHmac("sha256", process.env.SESSION_SECRET || "fallback-secret").update(value).digest("hex");
  if (!crypto.timingSafeEqual(Buffer.from(mac, "hex"), Buffer.from(expected, "hex"))) return null;
  return value;
}

export async function getSession(): Promise<{ admin: boolean }> {
  const jar = await cookies();
  const cookie = jar.get(SESSION_COOKIE);
  if (!cookie) return { admin: false };
  const value = verify(cookie.value);
  return { admin: value === "admin" };
}

export async function createSession(): Promise<string> {
  return sign("admin");
}

export function checkPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD || "admin123";
  return password === expected;
}

export const SESSION_COOKIE_NAME = SESSION_COOKIE;
export { sign, verify };
