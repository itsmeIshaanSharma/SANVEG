import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function GET() {
  try {
    const token = cookies().get('admin_token')?.value
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'No token found' },
        { status: 401 }
      )
    }

    try {
      verify(token, JWT_SECRET)
      return NextResponse.json({ success: true, message: 'Authenticated' })
    } catch (error) {
      return NextResponse.json(
        { success: false, message: 'Invalid token' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Auth check error:', error)
    return NextResponse.json(
      { success: false, message: 'Authentication check failed' },
      { status: 500 }
    )
  }
} 