import { NextResponse } from 'next/server';
import * as jose from 'jose';

export async function middleware(request) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('admin_token')?.value;

    // 1. Skip internal Next.js requests, API routes, and static files
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/static') ||
        (pathname.includes('.') && !pathname.endsWith('.html'))
    ) {
        return NextResponse.next();
    }

    // 2. Admin Authentication Logic
    const isAdminPath = pathname.startsWith('/admin');
    const isDashboardPath = pathname.startsWith('/admin/dashboard');

    if (isAdminPath) {
        let isValid = false;
        if (token) {
            try {
                const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');
                await jose.jwtVerify(token, secret);
                isValid = true;
            } catch (err) {
                isValid = false;
            }
        }

        // If on the login page specifically and already valid, go to dashboard
        if (pathname === '/admin' && isValid) {
            return NextResponse.redirect(new URL('/admin/dashboard', request.url));
        }

        // If on a dashboard page and NOT valid, go to login
        if (isDashboardPath && !isValid) {
            const response = NextResponse.redirect(new URL('/admin', request.url));
            response.cookies.delete('admin_token');
            return response;
        }
    }

    // 3. Inject the pathname header for SEO and page requests
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', pathname);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
