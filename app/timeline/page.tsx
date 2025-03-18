"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function TimelinePage() {
  const timelineEvents = [
    { date: "June 15, 9:00 AM", event: "Check-in & Registration" },
    { date: "June 15, 10:00 AM", event: "Opening Ceremony" },
    { date: "June 15, 11:00 AM", event: "Team Formation" },
    { date: "June 15, 12:00 PM", event: "Hacking Begins" },
    { date: "June 16, 12:00 PM", event: "Midway Checkpoint" },
    { date: "June 17, 12:00 PM", event: "Hacking Ends" },
    { date: "June 17, 1:00 PM", event: "Project Presentations" },
    { date: "June 17, 4:00 PM", event: "Judging" },
    { date: "June 17, 5:00 PM", event: "Awards Ceremony" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center gap-2 mb-8"
      >
        <Clock className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Event Timeline</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Card className="border-border/40 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Schedule of Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative border-l border-border/40 ml-3 pl-8 space-y-8">
              {timelineEvents.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="absolute -left-11 mt-1.5 h-4 w-4 rounded-full bg-primary"
                  />
                  <p className="font-medium text-lg">{item.date}</p>
                  <p className="text-muted-foreground">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
} 