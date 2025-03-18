import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Only protect admin routes
  if (!request.nextUrl.pathname.startsWith('/admin') && 
      !request.nextUrl.pathname.startsWith('/api/admin')) {
    return NextResponse.next()
  }

  // Allow access to login page and login API
  if (request.nextUrl.pathname === '/admin' || 
      request.nextUrl.pathname === '/api/admin/login') {
    return NextResponse.next()
  }

  // Check for token
  const token = request.cookies.get('admin_token')?.value

  if (!token) {
    // Redirect to login if no token
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  try {
    // Verify token
    verify(token, JWT_SECRET)
    return NextResponse.next()
  } catch (error) {
    // Token is invalid or expired
    return NextResponse.redirect(new URL('/admin', request.url))
  }
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*',
  ],
} 