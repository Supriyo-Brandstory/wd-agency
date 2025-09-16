// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host");

  // Force www
  if (host && host.startsWith("websitedevelopmentagency.ae")) {
    url.host = `www.${host}`;
    return NextResponse.redirect(url, 301);
  }

  // OR force non-www
  if (host && host.startsWith("www.websitedevelopmentagency.ae")) {
    url.host = host.replace("www.", "");
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
