import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verify } from 'jsonwebtoken'
import path from 'path'
import * as XLSX from 'xlsx'
import fs from 'fs/promises'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function GET() {
  try {
    // Verify token
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
      return NextResponse.json({ success: true, totalRegistrations: 0 })
    }

    // Read file
    const fileBuffer = await fs.readFile(filePath)
    const workbook = XLSX.read(fileBuffer)
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const data = XLSX.utils.sheet_to_json(worksheet)

    return NextResponse.json({
      success: true,
      totalRegistrations: data.length
    })
  } catch (error) {
    console.error('Stats error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to get stats' },
      { status: 500 }
    )
  }
} 