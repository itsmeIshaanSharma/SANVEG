import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  try {
    // Delete the admin token cookie
    cookies().delete('admin_token')
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Logout failed' },
      { status: 500 }
    )
  }
} 