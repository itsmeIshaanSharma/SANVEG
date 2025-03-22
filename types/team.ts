export interface TeamMember {
  name: string
  rollNumber: string
  course: string
  semester: string
}

export interface TeamRegistration {
  id?: string
  participationType: 'Team' | 'Solo'
  teamName: string
  leader: TeamMember & {
    contact: string
  }
  member2?: TeamMember
  member3?: TeamMember
  member4?: TeamMember
  createdAt?: string
  responseTime?: string
  registrationDate?: string
} 