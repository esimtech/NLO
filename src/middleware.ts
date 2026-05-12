import { NextRequest, NextResponse } from "next/server";
import { verify } from "@/lib/auth";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const cookie = req.cookies.get("nlo_admin_session");
    if (!cookie || !verify(cookie.value)) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
