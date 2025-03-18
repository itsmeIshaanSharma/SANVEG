"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Download, LogOut, Users } from "lucide-react"

export default function AdminDashboard() {
  const router = useRouter()
  const [registrationCount, setRegistrationCount] = useState(0)

  useEffect(() => {
    // Check authentication status
    checkAuth()
    // Fetch registration count
    fetchRegistrationCount()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/check')
      const data = await response.json()
      
      if (!data.authenticated) {
        router.push('/admin')
      }
    } catch (error) {
      router.push('/admin')
    }
  }

  const fetchRegistrationCount = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      const data = await response.json()
      setRegistrationCount(data.count)
    } catch (error) {
      console.error('Failed to fetch stats')
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      router.push('/admin')
    } catch (error) {
      toast.error('Logout failed')
    }
  }

  const handleDownload = async () => {
    try {
      const response = await fetch('/api/admin/download')
      if (!response.ok) throw new Error('Download failed')
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'registrations.xlsx'
      document.body.appendChild(a)
      a.click()
      
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      toast.error('Failed to download registrations')
    }
  }

  return (
    <div className="container max-w-4xl py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="ghost" size="sm" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Total Registrations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{registrationCount}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-primary" />
              Download Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={handleDownload} className="w-full">
              Download Registrations
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
} 