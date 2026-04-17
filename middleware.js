import { NextResponse } from "next/server";

export function middleware(req) {
  const isAuth = req.cookies.get("bloxet_session");

  const protectedRoutes = req.nextUrl.pathname.startsWith("/dashboard");

  if (protectedRoutes && !isAuth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
