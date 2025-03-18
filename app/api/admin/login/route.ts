import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { sign } from 'jsonwebtoken'

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()
    
    // Validate credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Generate JWT token
      const token = sign({ username }, JWT_SECRET, { expiresIn: '1h' })
      
      // Set cookie
      cookies().set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 // 1 hour
      })
      
      return NextResponse.json({ success: true })
    }
    
    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Login failed' },
      { status: 500 }
    )
  }
} 