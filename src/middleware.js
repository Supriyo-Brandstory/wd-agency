// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host");

  // Redirect non-www to www
  if (host && !host.startsWith("www.")) {
    url.host = `www.${host}`;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
