import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verify } from 'jsonwebtoken'
import path from 'path'
import fs from 'fs/promises'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function GET(request: Request) {
  try {
    // Verify token (additional security)
    const token = cookies().get('admin_token')?.value
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      )
    }

    try {
      verify(token, JWT_SECRET)
    } catch (error) {
      return NextResponse.json(
        { success: false, message: 'Invalid token' },
        { status: 401 }
      )
    }

    // Get file path
    const filePath = path.join(process.cwd(), 'registrations.xlsx')
    
    // Check if file exists
    try {
      await fs.access(filePath)
    } catch (error) {
      return NextResponse.json(
        { success: false, message: 'No registrations found' },
        { status: 404 }
      )
    }

    // Read file
    const fileBuffer = await fs.readFile(filePath)
    
    // Return file
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename=registrations.xlsx'
      }
    })
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json(
      { success: false, message: 'Download failed' },
      { status: 500 }
    )
  }
} 