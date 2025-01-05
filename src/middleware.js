import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/globalPages/auth/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/globalPages/dashboard/admin-dashboard', '/globalPages/dashboard/admin-preview',  '/globalPages/dashboard/user-dashboard',] 
};
