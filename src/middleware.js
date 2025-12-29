import { NextResponse } from 'next/server';
import * as jose from 'jose';

export async function middleware(request) {
  const adminCookie = request.cookies.get('admin_token');
  const adminToken = adminCookie?.value;

  // console.log('--- Middleware Triggered ---');
  // console.log('Requested Path:', request.nextUrl.pathname);
  // console.log('Admin Token from Cookies:', adminCookie);

  let valid = null;

  if (adminToken) {
    try {
      valid = await jose.jwtVerify(adminToken, new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key'));
      // console.log('Token is valid:', valid.payload);
    } catch (err) {
      // console.log('Token verification failed:', err.message);
    }
  }

  const authPaths = ['/admin/dashboard'];

  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!valid && authPaths.includes(request.nextUrl.pathname)) {
      // console.log('Token invalid or missing. Deleting cookie and redirecting to login.');
      const response = NextResponse.redirect(new URL('/admin', request.url));
      response.cookies.delete('admin_token');
      return response;
    }

    if (valid && request.nextUrl.pathname === '/admin') {
      // console.log('User already logged in. Redirecting to dashboard.');
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
  }

  // console.log('Token valid or path not protected. Proceeding normally.');
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
