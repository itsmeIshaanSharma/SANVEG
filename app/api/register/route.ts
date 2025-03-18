import { NextResponse } from 'next/server'
import { appendToExcel, Registration } from '@/app/utils/excel'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
    // Add timestamp to the registration data
    const registrationData: Registration = {
      ...formData,
      timestamp: new Date().toISOString()
    }
    
    // Append to Excel file
    await appendToExcel(registrationData)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Registration successful' 
    })
    
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Registration failed' 
      },
      { status: 500 }
    )
  }
}

// Add an endpoint to download the Excel file
export async function GET() {
  try {
    const fs = require('fs')
    const path = require('path')
    const filePath = path.join(process.cwd(), 'registrations.xlsx')
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { success: false, message: 'No registrations found' },
        { status: 404 }
      )
    }

    // Read the file
    const fileBuffer = await fs.promises.readFile(filePath)
    
    // Return the file
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