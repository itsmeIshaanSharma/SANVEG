"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Users, Star, FileText, Sparkles as SparklesIcon } from "lucide-react"
import { Sparkles } from "@/components/sparkles"

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
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
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        toast.success("Registration successful!")
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
        })
      } else {
        toast.error("Registration failed. Please try again.")
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-background/50">
      {/* Sparkles Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
      <Sparkles
        id="tsparticles"
        background="transparent"
        minSize={1.5}
        maxSize={3}
        particleDensity={200}
        className="fixed inset-0 w-full h-full"
        particleColor="hsl(var(--primary))"
      />

      <div className="container relative z-10 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-8"
        >
          <div className="flex items-center justify-center gap-2">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Register for SANVEG 2024</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us for an exciting hackathon experience! Please fill out the registration form below.
            Make sure to read the <a href="/rules" className="text-primary hover:underline">rules</a> before registering.
          </p>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="max-w-4xl mx-auto backdrop-blur-md bg-background/80 border-primary/20 shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Participation Type */}
                <div className="space-y-3">
                  <label className="text-lg font-medium flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Participation Type
                  </label>
                  <RadioGroup
                    defaultValue="Team"
                    onValueChange={(value) => handleSelectChange("participationType", value)}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Team" id="team" />
                      <Label htmlFor="team">Team</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Solo" id="solo" />
                      <Label htmlFor="solo">Solo</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Team Name */}
                <div className="space-y-3">
                  <label className="text-lg font-medium flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Team Name
                  </label>
                  <Input
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    required
                    placeholder="Enter a unique team name"
                    className="bg-background/50 backdrop-blur-sm"
                  />
                </div>

                {/* Team Leader Details */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Team Leader Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Name</label>
                      <Input
                        name="leaderName"
                        value={formData.leaderName}
                        onChange={handleChange}
                        required
                        placeholder="Full name"
                        className="bg-background/50 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Contact Number</label>
                      <Input
                        name="leaderContact"
                        value={formData.leaderContact}
                        onChange={handleChange}
                        required
                        placeholder="Your active phone number"
                        className="bg-background/50 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Roll Number</label>
                      <Input
                        name="leaderRollNumber"
                        value={formData.leaderRollNumber}
                        onChange={handleChange}
                        required
                        placeholder="Your college roll number"
                        className="bg-background/50 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Course</label>
                      <Select
                        value={formData.leaderCourse}
                        onValueChange={(value) => handleSelectChange("leaderCourse", value)}
                      >
                        <SelectTrigger className="bg-background/50 backdrop-blur-sm">
                          <SelectValue placeholder="Select your course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="B.Tech. (CSE)">B.Tech. (CSE)</SelectItem>
                          <SelectItem value="B.Tech. (CSE) AI/ML">B.Tech. (CSE) AI/ML</SelectItem>
                          <SelectItem value="BCA">BCA</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Semester</label>
                      <Select
                        value={formData.leaderSemester}
                        onValueChange={(value) => handleSelectChange("leaderSemester", value)}
                      >
                        <SelectTrigger className="bg-background/50 backdrop-blur-sm">
                          <SelectValue placeholder="Select your semester" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2nd">2nd</SelectItem>
                          <SelectItem value="4th">4th</SelectItem>
                          <SelectItem value="6th">6th</SelectItem>
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
                      className="space-y-4"
                    >
                      <h3 className="text-lg font-medium flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Team Member 2
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <label className="text-sm font-medium">Name</label>
                          <Input
                            name="member2Name"
                            value={formData.member2Name}
                            onChange={handleChange}
                            placeholder="Full name"
                            className="bg-background/50 backdrop-blur-sm"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-medium">Roll Number</label>
                          <Input
                            name="member2RollNumber"
                            value={formData.member2RollNumber}
                            onChange={handleChange}
                            placeholder="College roll number"
                            className="bg-background/50 backdrop-blur-sm"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-medium">Course</label>
                          <Select
                            value={formData.member2Course}
                            onValueChange={(value) => handleSelectChange("member2Course", value)}
                          >
                            <SelectTrigger className="bg-background/50 backdrop-blur-sm">
                              <SelectValue placeholder="Select course" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="B.Tech. (CSE)">B.Tech. (CSE)</SelectItem>
                              <SelectItem value="B.Tech. (CSE) AI/ML">B.Tech. (CSE) AI/ML</SelectItem>
                              <SelectItem value="BCA">BCA</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-medium">Semester</label>
                          <Select
                            value={formData.member2Semester}
                            onValueChange={(value) => handleSelectChange("member2Semester", value)}
                          >
                            <SelectTrigger className="bg-background/50 backdrop-blur-sm">
                              <SelectValue placeholder="Select semester" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2nd">2nd</SelectItem>
                              <SelectItem value="4th">4th</SelectItem>
                              <SelectItem value="6th">6th</SelectItem>
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
                      className="space-y-4"
                    >
                      <h3 className="text-lg font-medium flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Team Member 3
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <label className="text-sm font-medium">Name</label>
                          <Input
                            name="member3Name"
                            value={formData.member3Name}
                            onChange={handleChange}
                            placeholder="Full name"
                            className="bg-background/50 backdrop-blur-sm"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-medium">Roll Number</label>
                          <Input
                            name="member3RollNumber"
                            value={formData.member3RollNumber}
                            onChange={handleChange}
                            placeholder="College roll number"
                            className="bg-background/50 backdrop-blur-sm"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-medium">Course</label>
                          <Select
                            value={formData.member3Course}
                            onValueChange={(value) => handleSelectChange("member3Course", value)}
                          >
                            <SelectTrigger className="bg-background/50 backdrop-blur-sm">
                              <SelectValue placeholder="Select course" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="B.Tech. (CSE)">B.Tech. (CSE)</SelectItem>
                              <SelectItem value="B.Tech. (CSE) AI/ML">B.Tech. (CSE) AI/ML</SelectItem>
                              <SelectItem value="BCA">BCA</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-medium">Semester</label>
                          <Select
                            value={formData.member3Semester}
                            onValueChange={(value) => handleSelectChange("member3Semester", value)}
                          >
                            <SelectTrigger className="bg-background/50 backdrop-blur-sm">
                              <SelectValue placeholder="Select semester" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2nd">2nd</SelectItem>
                              <SelectItem value="4th">4th</SelectItem>
                              <SelectItem value="6th">6th</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Registering..."
                    ) : (
                      <>
                        <SparklesIcon className="mr-2 h-5 w-5" />
                        Register Now
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

