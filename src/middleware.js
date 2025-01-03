import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/globalPages/auth/login', req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const { payload } = await jwtVerify(token, secret);

    if (payload.email === 'brahimoubourrih@gmail.com') {
      if (req.nextUrl.pathname.startsWith('/globalPages/dashboard/admin-dashboard')) {
        return NextResponse.next(); 
      }
      return NextResponse.redirect(new URL('/globalPages/dashboard/admin-dashboard', req.url));
    } else {
      if (req.nextUrl.pathname.startsWith('/globalPages/dashboard/admin-dashboard')) {
        return NextResponse.redirect(new URL('/globalPages/dashboard/user-dashboard', req.url));
      }

      return NextResponse.next();
    }
  } catch (err) {
    console.error('Invalid or expired token:', err);
    return NextResponse.redirect(new URL('/globalPages/auth/login', req.url));
  }
}

export const config = {
  matcher: ['/globalPages/dashboard/admin-dashboard', '/globalPages/dashboard/admin-preview',  '/globalPages/dashboard/user-dashboard',] 
};
