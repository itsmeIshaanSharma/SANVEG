import * as XLSX from 'xlsx'
import { writeFile } from 'fs/promises'
import path from 'path'

export interface Registration {
  participationType: "Team" | "Solo"
  teamName: string
  // Team Leader Details
  leaderName: string
  leaderContact: string
  leaderRollNumber: string
  leaderCourse: "B.Tech. (CSE)" | "B.Tech. (CSE) AI/ML" | "BCA"
  leaderSemester: "2nd" | "4th" | "6th"
  // Team Member 2 Details (optional)
  member2Name?: string
  member2RollNumber?: string
  member2Course?: "B.Tech. (CSE)" | "B.Tech. (CSE) AI/ML" | "BCA"
  member2Semester?: "2nd" | "4th" | "6th"
  // Team Member 3 Details (optional)
  member3Name?: string
  member3RollNumber?: string
  member3Course?: "B.Tech. (CSE)" | "B.Tech. (CSE) AI/ML" | "BCA"
  member3Semester?: "2nd" | "4th" | "6th"
  timestamp: string
}

export async function appendToExcel(data: Registration) {
  const filePath = path.join(process.cwd(), 'registrations.xlsx')
  let workbook: XLSX.WorkBook
  let registrations: Registration[] = []

  try {
    // Try to read existing file
    const buffer = await readFile(filePath)
    workbook = XLSX.read(buffer)
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    registrations = XLSX.utils.sheet_to_json(worksheet)
  } catch (error) {
    // If file doesn't exist, create new workbook
    workbook = XLSX.utils.book_new()
    workbook.SheetNames.push('Registrations')
  }

  // Add new registration
  registrations.push(data)

  // Create worksheet
  const worksheet = XLSX.utils.json_to_sheet(registrations)

  // Add column headers if this is a new file
  if (registrations.length === 1) {
    XLSX.utils.sheet_add_aoa(worksheet, [
      [
        'Participation Type',
        'Team Name',
        'Team Leader Name',
        'Team Leader Contact',
        'Team Leader Roll Number',
        'Team Leader Course',
        'Team Leader Semester',
        'Member 2 Name',
        'Member 2 Roll Number',
        'Member 2 Course',
        'Member 2 Semester',
        'Member 3 Name',
        'Member 3 Roll Number',
        'Member 3 Course',
        'Member 3 Semester',
        'Timestamp'
      ]
    ], { origin: 'A1' })
  }

  // Update workbook
  workbook.Sheets['Registrations'] = worksheet

  // Write to file
  const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' })
  await writeFile(filePath, buffer)

  return filePath
}

async function readFile(filePath: string): Promise<Buffer> {
  try {
    const fs = require('fs')
    return await fs.promises.readFile(filePath)
  } catch (error) {
    throw new Error('File not found')
  }
} 