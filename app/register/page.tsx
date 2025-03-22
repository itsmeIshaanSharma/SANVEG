"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Users, Star, FileText, Sparkles as SparklesIcon, CheckCircle2 } from "lucide-react"
import { Sparkles } from "@/components/sparkles"
import Link from "next/link"
import { teamService } from "@/lib/services/team"
import { TeamRegistration } from "@/types/team"
import { FaUsers, FaUser, FaUserPlus, FaUserFriends, FaPaperPlane } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

// Success Modal Component
const SuccessModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-black/90 border border-blue-500/20 rounded-2xl p-8 max-w-md w-full mx-4 shadow-glow"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center"
          >
            <CheckCircle2 className="w-8 h-8 text-blue-400" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white">Registration Successful!</h3>
          <p className="text-gray-300">
            Thank you for registering for SANVEG 2024. Your team has been successfully registered.
          </p>
          <Button
            onClick={onClose}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Close
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function RegisterPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    participationType: "Team",
    teamName: "",
    leaderName: "",
    leaderContact: "",
    leaderRollNumber: "",
    leaderCourse: "",
    leaderSemester: "",
    member2Name: "",
    member2RollNumber: "",
    member2Course: "",
    member2Semester: "",
    member3Name: "",
    member3RollNumber: "",
    member3Course: "",
    member3Semester: "",
    member4Name: "",
    member4RollNumber: "",
    member4Course: "",
    member4Semester: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    // Add validation based on field type
    let validatedValue = value

    switch (name) {
      case 'leaderContact':
        // Only allow numbers and limit to 10 digits
        validatedValue = value.replace(/[^0-9]/g, '').slice(0, 10)
        break
      case 'leaderRollNumber':
      case 'member2RollNumber':
      case 'member3RollNumber':
      case 'member4RollNumber':
        // Only allow alphanumeric characters and limit length
        validatedValue = value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 20)
        break
      case 'leaderName':
      case 'member2Name':
      case 'member3Name':
      case 'member4Name':
        // Only allow letters and spaces
        validatedValue = value.replace(/[^a-zA-Z\s]/g, '')
        break
      case 'teamName':
        // Allow letters, numbers, spaces, and some special characters
        validatedValue = value.replace(/[^a-zA-Z0-9\s\-_]/g, '')
        break
    }

    setFormData(prev => ({ ...prev, [name]: validatedValue }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate required fields based on participation type
      const errors: string[] = []

      // Team Leader validation (required for both solo and team)
      if (!formData.leaderName?.trim()) errors.push("Team leader name is required")
      if (!formData.leaderRollNumber?.trim()) errors.push("Team leader roll number is required")
      if (!formData.leaderCourse) errors.push("Team leader course is required")
      if (!formData.leaderSemester) errors.push("Team leader semester is required")
      if (!formData.leaderContact?.trim()) errors.push("Team leader contact number is required")

      // Team-specific validations
      if (formData.participationType === "Team") {
        if (!formData.teamName?.trim()) errors.push("Team name is required")
        
        // Team Member 2 validation (required for team)
        if (!formData.member2Name?.trim()) errors.push("Team Member 2 name is required")
        if (!formData.member2RollNumber?.trim()) errors.push("Team Member 2 roll number is required")
        if (!formData.member2Course) errors.push("Team Member 2 course is required")
        if (!formData.member2Semester) errors.push("Team Member 2 semester is required")

        // Team Member 3 validation (if any field is filled, all are required)
        if (formData.member3Name?.trim() || formData.member3RollNumber?.trim() || 
            formData.member3Course || formData.member3Semester) {
          if (!formData.member3Name?.trim()) errors.push("Team Member 3 name is required")
          if (!formData.member3RollNumber?.trim()) errors.push("Team Member 3 roll number is required")
          if (!formData.member3Course) errors.push("Team Member 3 course is required")
          if (!formData.member3Semester) errors.push("Team Member 3 semester is required")
        }

        // Team Member 4 validation (if any field is filled, all are required)
        if (formData.member4Name?.trim() || formData.member4RollNumber?.trim() || 
            formData.member4Course || formData.member4Semester) {
          if (!formData.member4Name?.trim()) errors.push("Team Member 4 name is required")
          if (!formData.member4RollNumber?.trim()) errors.push("Team Member 4 roll number is required")
          if (!formData.member4Course) errors.push("Team Member 4 course is required")
          if (!formData.member4Semester) errors.push("Team Member 4 semester is required")
        }
      }

      // If there are validation errors, show them and stop submission
      if (errors.length > 0) {
        errors.forEach(error => toast.error(error))
        setIsSubmitting(false)
        return
      }

      // Check if team leader is already registered
      const existingTeam = await teamService.getTeamByRollNumber(formData.leaderRollNumber)
      if (existingTeam.success && existingTeam.data) {
        toast.error("You are already registered in a team!")
        setIsSubmitting(false)
        return
      }

      // Prepare team registration data
      const teamRegistration: Omit<TeamRegistration, 'id' | 'createdAt'> = {
        participationType: formData.participationType as 'Team' | 'Solo',
        teamName: formData.teamName,
        leader: {
          name: formData.leaderName.trim(),
          rollNumber: formData.leaderRollNumber.trim(),
          course: formData.leaderCourse,
          semester: formData.leaderSemester,
          contact: formData.leaderContact.trim()
        }
      }

      // Add team members if participation type is Team
      if (formData.participationType === "Team") {
        if (formData.member2Name && formData.member2RollNumber) {
          teamRegistration.member2 = {
            name: formData.member2Name.trim(),
            rollNumber: formData.member2RollNumber.trim(),
            course: formData.member2Course,
            semester: formData.member2Semester
          }
        }

        if (formData.member3Name && formData.member3RollNumber) {
          teamRegistration.member3 = {
            name: formData.member3Name.trim(),
            rollNumber: formData.member3RollNumber.trim(),
            course: formData.member3Course,
            semester: formData.member3Semester
          }
        }

        if (formData.member4Name && formData.member4RollNumber) {
          teamRegistration.member4 = {
            name: formData.member4Name.trim(),
            rollNumber: formData.member4RollNumber.trim(),
            course: formData.member4Course,
            semester: formData.member4Semester
          }
        }
      }

      // Register team in Supabase
      const result = await teamService.registerTeam(teamRegistration)

      if (result.success) {
        setShowSuccessModal(true)
        // Reset form
        setFormData({
          participationType: "Team",
          teamName: "",
          leaderName: "",
          leaderContact: "",
          leaderRollNumber: "",
          leaderCourse: "",
          leaderSemester: "",
          member2Name: "",
          member2RollNumber: "",
          member2Course: "",
          member2Semester: "",
          member3Name: "",
          member3RollNumber: "",
          member3Course: "",
          member3Semester: "",
          member4Name: "",
          member4RollNumber: "",
          member4Course: "",
          member4Semester: "",
        })
        // Refresh the page after modal is closed
        setTimeout(() => {
          router.refresh()
        }, 1000)
      } else {
        toast.error(result.error || "Registration failed. Please try again.")
      }
    } catch (error) {
      console.error('Registration error:', error)
      toast.error("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Add useEffect to reset form on page load
  useEffect(() => {
    setFormData({
      participationType: "Team",
      teamName: "",
      leaderName: "",
      leaderContact: "",
      leaderRollNumber: "",
      leaderCourse: "",
      leaderSemester: "",
      member2Name: "",
      member2RollNumber: "",
      member2Course: "",
      member2Semester: "",
      member3Name: "",
      member3RollNumber: "",
      member3Course: "",
      member3Semester: "",
      member4Name: "",
      member4RollNumber: "",
      member4Course: "",
      member4Semester: "",
    })
  }, [])

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      <Sparkles />
      <AnimatePresence>
        {showSuccessModal && (
          <SuccessModal onClose={() => setShowSuccessModal(false)} />
        )}
      </AnimatePresence>
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="h-10 w-10 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Register for SANVEG 2024
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join us for an exciting hackathon experience! Please fill out the registration form below.
            Make sure to read the <Link href="/rules" className="text-blue-400 hover:underline">rules</Link> before registering.
          </p>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="backdrop-blur-md bg-black/40 border-blue-500/20 shadow-glow">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Participation Type */}
                <div className="space-y-4">
                  <label className="text-xl font-medium flex items-center gap-2 text-blue-400">
                    <Users className="h-6 w-6" />
                    Participation Type *
                  </label>
                  <RadioGroup
                    defaultValue="Team"
                    onValueChange={(value) => handleSelectChange("participationType", value)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Team" id="team" className="text-blue-500" />
                      <Label htmlFor="team" className="text-gray-300 text-lg">Team</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Solo" id="solo" className="text-blue-500" />
                      <Label htmlFor="solo" className="text-gray-300 text-lg">Solo</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Team Name */}
                <div className="space-y-4">
                  <label className="text-xl font-medium flex items-center gap-2 text-blue-400">
                    <Star className="h-6 w-6" />
                    Team Name {formData.participationType === "Team" && <span className="text-red-500">*</span>}
                  </label>
                  <Input
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    required={formData.participationType === "Team"}
                    placeholder="Enter a unique team name"
                    pattern="[a-zA-Z0-9\s\-_]+"
                    maxLength={50}
                    className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 placeholder:text-gray-500 h-12 text-lg"
                  />
                  <p className="text-sm text-gray-400">Only letters, numbers, spaces, hyphens, and underscores allowed</p>
                </div>

                {/* Team Leader Details */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-medium flex items-center gap-2 text-blue-400">
                    <Star className="h-6 w-6" />
                    Team Leader (You) Details <span className="text-red-500">*</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <label className="text-base font-medium text-gray-300">Name <span className="text-red-500">*</span></label>
                      <Input
                        name="leaderName"
                        value={formData.leaderName}
                        onChange={handleChange}
                        required
                        placeholder="Full name"
                        pattern="[a-zA-Z\s]+"
                        maxLength={50}
                        className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 placeholder:text-gray-500 h-12 text-lg"
                      />
                      <p className="text-sm text-gray-400">Only letters and spaces allowed</p>
                    </div>
                    <div className="space-y-4">
                      <label className="text-base font-medium text-gray-300">Contact Number <span className="text-red-500">*</span></label>
                      <Input
                        name="leaderContact"
                        value={formData.leaderContact}
                        onChange={handleChange}
                        required
                        placeholder="Your active phone number"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 placeholder:text-gray-500 h-12 text-lg"
                      />
                      <p className="text-sm text-gray-400">Enter 10-digit mobile number</p>
                    </div>
                    <div className="space-y-4">
                      <label className="text-base font-medium text-gray-300">Roll Number <span className="text-red-500">*</span></label>
                      <Input
                        name="leaderRollNumber"
                        value={formData.leaderRollNumber}
                        onChange={handleChange}
                        required
                        placeholder="Your college roll number"
                        pattern="[a-zA-Z0-9]+"
                        maxLength={20}
                        className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 placeholder:text-gray-500 h-12 text-lg"
                      />
                      <p className="text-sm text-gray-400">Only letters and numbers allowed</p>
                    </div>
                    <div className="space-y-4">
                      <label className="text-base font-medium text-gray-300">Course <span className="text-red-500">*</span></label>
                      <Select
                        value={formData.leaderCourse}
                        onValueChange={(value) => handleSelectChange("leaderCourse", value)}
                      >
                        <SelectTrigger className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 h-12 text-lg">
                          <SelectValue placeholder="Select your course" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/90 border-blue-500/20">
                          <SelectItem value="B.Tech. (CSE)" className="text-gray-300 text-lg">B.Tech. (CSE)</SelectItem>
                          <SelectItem value="B.Tech. (CSE) AI/ML" className="text-gray-300 text-lg">B.Tech. (CSE) AI/ML</SelectItem>
                          <SelectItem value="BCA" className="text-gray-300 text-lg">BCA</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-base font-medium text-gray-300">Semester <span className="text-red-500">*</span></label>
                      <Select
                        value={formData.leaderSemester}
                        onValueChange={(value) => handleSelectChange("leaderSemester", value)}
                      >
                        <SelectTrigger className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 h-12 text-lg">
                          <SelectValue placeholder="Select your semester" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/90 border-blue-500/20">
                          <SelectItem value="2nd" className="text-gray-300 text-lg">2nd</SelectItem>
                          <SelectItem value="4th" className="text-gray-300 text-lg">4th</SelectItem>
                          <SelectItem value="6th" className="text-gray-300 text-lg">6th</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>

                {formData.participationType === "Team" && (
                  <>
                    {/* Team Member 2 */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 pt-6 border-t border-blue-500/20"
                    >
                      <h3 className="text-xl font-medium flex items-center gap-2 text-blue-400">
                        <Users className="h-6 w-6" />
                        Team Member 2 Details <span className="text-red-500">*</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <label className="text-base font-medium text-gray-300">Name <span className="text-red-500">*</span></label>
                          <Input
                            name="member2Name"
                            value={formData.member2Name}
                            onChange={handleChange}
                            required
                            placeholder="Full name"
                            pattern="[a-zA-Z\s]+"
                            maxLength={50}
                            className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 placeholder:text-gray-500 h-12 text-lg"
                          />
                          <p className="text-sm text-gray-400">Only letters and spaces allowed</p>
                        </div>
                        <div className="space-y-4">
                          <label className="text-base font-medium text-gray-300">Roll Number <span className="text-red-500">*</span></label>
                          <Input
                            name="member2RollNumber"
                            value={formData.member2RollNumber}
                            onChange={handleChange}
                            required
                            placeholder="College roll number"
                            pattern="[a-zA-Z0-9]+"
                            maxLength={20}
                            className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 placeholder:text-gray-500 h-12 text-lg"
                          />
                          <p className="text-sm text-gray-400">Only letters and numbers allowed</p>
                        </div>
                        <div className="space-y-4">
                          <label className="text-base font-medium text-gray-300">Course <span className="text-red-500">*</span></label>
                          <Select
                            value={formData.member2Course}
                            onValueChange={(value) => handleSelectChange("member2Course", value)}
                          >
                            <SelectTrigger className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 h-12 text-lg">
                              <SelectValue placeholder="Select course" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/90 border-blue-500/20">
                              <SelectItem value="B.Tech. (CSE)" className="text-gray-300 text-lg">B.Tech. (CSE)</SelectItem>
                              <SelectItem value="B.Tech. (CSE) AI/ML" className="text-gray-300 text-lg">B.Tech. (CSE) AI/ML</SelectItem>
                              <SelectItem value="BCA" className="text-gray-300 text-lg">BCA</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-4">
                          <label className="text-base font-medium text-gray-300">Semester <span className="text-red-500">*</span></label>
                          <Select
                            value={formData.member2Semester}
                            onValueChange={(value) => handleSelectChange("member2Semester", value)}
                          >
                            <SelectTrigger className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 h-12 text-lg">
                              <SelectValue placeholder="Select semester" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/90 border-blue-500/20">
                              <SelectItem value="2nd" className="text-gray-300 text-lg">2nd</SelectItem>
                              <SelectItem value="4th" className="text-gray-300 text-lg">4th</SelectItem>
                              <SelectItem value="6th" className="text-gray-300 text-lg">6th</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </motion.div>

                    {/* Team Member 3 */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 pt-6 border-t border-blue-500/20"
                    >
                      <h3 className="text-xl font-medium flex items-center gap-2 text-blue-400">
                        <Users className="h-6 w-6" />
                        Team Member 3 Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <label className="text-base font-medium text-gray-300">Name</label>
                          <Input
                            name="member3Name"
                            value={formData.member3Name}
                            onChange={handleChange}
                            placeholder="Full name"
                            pattern="[a-zA-Z\s]+"
                            maxLength={50}
                            className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 placeholder:text-gray-500 h-12 text-lg"
                          />
                          <p className="text-sm text-gray-400">Only letters and spaces allowed</p>
                        </div>
                        <div className="space-y-4">
                          <label className="text-base font-medium text-gray-300">Roll Number</label>
                          <Input
                            name="member3RollNumber"
                            value={formData.member3RollNumber}
                            onChange={handleChange}
                            placeholder="College roll number"
                            pattern="[a-zA-Z0-9]+"
                            maxLength={20}
                            className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 placeholder:text-gray-500 h-12 text-lg"
                          />
                          <p className="text-sm text-gray-400">Only letters and numbers allowed</p>
                        </div>
                        <div className="space-y-4">
                          <label className="text-base font-medium text-gray-300">Course</label>
                          <Select
                            value={formData.member3Course}
                            onValueChange={(value) => handleSelectChange("member3Course", value)}
                          >
                            <SelectTrigger className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 h-12 text-lg">
                              <SelectValue placeholder="Select course" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/90 border-blue-500/20">
                              <SelectItem value="B.Tech. (CSE)" className="text-gray-300 text-lg">B.Tech. (CSE)</SelectItem>
                              <SelectItem value="B.Tech. (CSE) AI/ML" className="text-gray-300 text-lg">B.Tech. (CSE) AI/ML</SelectItem>
                              <SelectItem value="BCA" className="text-gray-300 text-lg">BCA</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-4">
                          <label className="text-base font-medium text-gray-300">Semester</label>
                          <Select
                            value={formData.member3Semester}
                            onValueChange={(value) => handleSelectChange("member3Semester", value)}
                          >
                            <SelectTrigger className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 h-12 text-lg">
                              <SelectValue placeholder="Select semester" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/90 border-blue-500/20">
                              <SelectItem value="2nd" className="text-gray-300 text-lg">2nd</SelectItem>
                              <SelectItem value="4th" className="text-gray-300 text-lg">4th</SelectItem>
                              <SelectItem value="6th" className="text-gray-300 text-lg">6th</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </motion.div>

                    {/* Team Member 4 */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 pt-6 border-t border-blue-500/20"
                    >
                      <h3 className="text-xl font-medium flex items-center gap-2 text-blue-400">
                        <Users className="h-6 w-6" />
                        Team Member 4 Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <label className="text-base font-medium text-gray-300">Name</label>
                          <Input
                            name="member4Name"
                            value={formData.member4Name}
                            onChange={handleChange}
                            placeholder="Full name"
                            pattern="[a-zA-Z\s]+"
                            maxLength={50}
                            className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 placeholder:text-gray-500 h-12 text-lg"
                          />
                          <p className="text-sm text-gray-400">Only letters and spaces allowed</p>
                        </div>
                        <div className="space-y-4">
                          <label className="text-base font-medium text-gray-300">Roll Number</label>
                          <Input
                            name="member4RollNumber"
                            value={formData.member4RollNumber}
                            onChange={handleChange}
                            placeholder="College roll number"
                            pattern="[a-zA-Z0-9]+"
                            maxLength={20}
                            className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 placeholder:text-gray-500 h-12 text-lg"
                          />
                          <p className="text-sm text-gray-400">Only letters and numbers allowed</p>
                        </div>
                        <div className="space-y-4">
                          <label className="text-base font-medium text-gray-300">Course</label>
                          <Select
                            value={formData.member4Course}
                            onValueChange={(value) => handleSelectChange("member4Course", value)}
                          >
                            <SelectTrigger className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 h-12 text-lg">
                              <SelectValue placeholder="Select course" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/90 border-blue-500/20">
                              <SelectItem value="B.Tech. (CSE)" className="text-gray-300 text-lg">B.Tech. (CSE)</SelectItem>
                              <SelectItem value="B.Tech. (CSE) AI/ML" className="text-gray-300 text-lg">B.Tech. (CSE) AI/ML</SelectItem>
                              <SelectItem value="BCA" className="text-gray-300 text-lg">BCA</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-4">
                          <label className="text-base font-medium text-gray-300">Semester</label>
                          <Select
                            value={formData.member4Semester}
                            onValueChange={(value) => handleSelectChange("member4Semester", value)}
                          >
                            <SelectTrigger className="bg-black/40 backdrop-blur-sm border-blue-500/20 text-gray-300 h-12 text-lg">
                              <SelectValue placeholder="Select semester" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/90 border-blue-500/20">
                              <SelectItem value="2nd" className="text-gray-300 text-lg">2nd</SelectItem>
                              <SelectItem value="4th" className="text-gray-300 text-lg">4th</SelectItem>
                              <SelectItem value="6th" className="text-gray-300 text-lg">6th</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}

                <div className="flex justify-center pt-8">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-glow-hover h-12 px-8 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <SparklesIcon className="mr-2 h-6 w-6 animate-pulse" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <SparklesIcon className="mr-2 h-6 w-6" />
                        Submit Registration
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

