import { supabase } from '../supabase'
import { TeamRegistration } from '@/types/team'

export const teamService = {
  async registerTeam(registration: Omit<TeamRegistration, 'id' | 'createdAt'>) {
    try {
      // Get current date and time
      const now = new Date()

      // Check if team leader is already registered
      const { data: existingTeam, error: checkError } = await supabase
        .from('team_registrations')
        .select('*')
        .or(`leader->>rollNumber.eq.${registration.leader.rollNumber},member2->>rollNumber.eq.${registration.leader.rollNumber},member3->>rollNumber.eq.${registration.leader.rollNumber},member4->>rollNumber.eq.${registration.leader.rollNumber}`)
        .single()

      if (checkError && checkError.code !== 'PGRST116') {
        console.error('Error checking existing team:', checkError)
        return { success: false, error: 'Failed to check existing registration' }
      }

      if (existingTeam) {
        return { success: false, error: 'Team leader is already registered in a team' }
      }

      // If team registration, check if team name is unique
      if (registration.participationType === 'Team') {
        const { data: existingTeamName, error: nameError } = await supabase
          .from('team_registrations')
          .select('team_name')
          .eq('team_name', registration.teamName)
          .single()

        if (nameError && nameError.code !== 'PGRST116') {
          console.error('Error checking team name:', nameError)
          return { success: false, error: 'Failed to check team name' }
        }

        if (existingTeamName) {
          return { success: false, error: 'Team name already exists' }
        }
      }

      // Prepare the data for insertion with proper field names
      const insertData = {
        participation_type: registration.participationType,
        team_name: registration.teamName,
        leader: {
          name: registration.leader.name.trim(),
          rollNumber: registration.leader.rollNumber.trim(),
          course: registration.leader.course,
          semester: registration.leader.semester,
          contact: registration.leader.contact.trim()
        },
        member2: registration.member2 ? {
          name: registration.member2.name.trim(),
          rollNumber: registration.member2.rollNumber.trim(),
          course: registration.member2.course,
          semester: registration.member2.semester
        } : null,
        member3: registration.member3 ? {
          name: registration.member3.name.trim(),
          rollNumber: registration.member3.rollNumber.trim(),
          course: registration.member3.course,
          semester: registration.member3.semester
        } : null,
        member4: registration.member4 ? {
          name: registration.member4.name.trim(),
          rollNumber: registration.member4.rollNumber.trim(),
          course: registration.member4.course,
          semester: registration.member4.semester
        } : null,
        created_at: now.toISOString()
      }

      // Insert the registration
      const { data, error } = await supabase
        .from('team_registrations')
        .insert(insertData)
        .select()
        .single()

      if (error) {
        // Log the full error object for debugging
        console.error('Supabase error details:', JSON.stringify(error, null, 2))
        
        // Return a user-friendly error message
        return { 
          success: false, 
          error: error.message || 'Failed to register team. Please try again.' 
        }
      }

      if (!data) {
        return { 
          success: false, 
          error: 'No data returned from registration. Please try again.' 
        }
      }

      return { success: true, data }
    } catch (error) {
      // Log the full error object for debugging
      console.error('Unexpected error:', error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'An unexpected error occurred' 
      }
    }
  },

  async getTeamByRollNumber(rollNumber: string) {
    try {
      const { data, error } = await supabase
        .from('team_registrations')
        .select('*')
        .or(`leader->>rollNumber.eq.${rollNumber},member2->>rollNumber.eq.${rollNumber},member3->>rollNumber.eq.${rollNumber},member4->>rollNumber.eq.${rollNumber}`)
        .single()

      if (error) {
        if (error.code === 'PGRST116') {
          return { success: true, data: null }
        }
        console.error('Error fetching team:', error)
        return { success: false, error: error.message }
      }

      return { success: true, data }
    } catch (error) {
      console.error('Error in getTeamByRollNumber:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }
} 