"use client"

import { motion } from "framer-motion"
import { Clock, Coffee, Code, Flag, LightbulbIcon, PresentationIcon, Trophy, Users } from "lucide-react"
import { Sparkles } from "@/components/sparkles"

const scheduleItems = [
  {
    time: "08:00 AM",
    title: "Registration & Check-in",
    description: "Get your team registered and set up your workspace",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-gradient-to-br from-blue-500/20 to-blue-600/5"
  },
  {
    time: "09:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address and hackathon kickoff",
    icon: PresentationIcon,
    color: "text-purple-500",
    bgColor: "bg-gradient-to-br from-purple-500/20 to-purple-600/5"
  },
  {
    time: "10:00 AM",
    title: "Hacking Begins",
    description: "Start working on your innovative solutions",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-gradient-to-br from-green-500/20 to-green-600/5"
  },
  {
    time: "01:00 PM",
    title: "Lunch Break",
    description: "Recharge with delicious food and networking",
    icon: Coffee,
    color: "text-yellow-500",
    bgColor: "bg-gradient-to-br from-yellow-500/20 to-yellow-600/5"
  },
  {
    time: "02:00 PM",
    title: "Mentorship Sessions",
    description: "Get guidance from industry experts",
    icon: LightbulbIcon,
    color: "text-pink-500",
    bgColor: "bg-gradient-to-br from-pink-500/20 to-pink-600/5"
  },
  {
    time: "06:00 PM",
    title: "Project Submission",
    description: "Submit your projects for evaluation",
    icon: Flag,
    color: "text-red-500",
    bgColor: "bg-gradient-to-br from-red-500/20 to-red-600/5"
  },
  {
    time: "07:00 PM",
    title: "Project Presentations",
    description: "Present your solutions to the judges",
    icon: PresentationIcon,
    color: "text-cyan-500",
    bgColor: "bg-gradient-to-br from-cyan-500/20 to-cyan-600/5"
  },
  {
    time: "08:30 PM",
    title: "Awards Ceremony",
    description: "Celebration and recognition of top projects",
    icon: Trophy,
    color: "text-amber-500",
    bgColor: "bg-gradient-to-br from-amber-500/20 to-amber-600/5"
  }
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased relative pb-12">
      <Sparkles />
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center pt-8 pb-8"
      >
        <Clock className="w-12 h-12 text-blue-500 mx-auto mb-3" />
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Event Schedule
        </h1>
        <p className="text-gray-400 text-base max-w-2xl mx-auto px-4">
          A power-packed day of innovation, learning, and creation at SANVEG 2025
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {scheduleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`relative ${item.bgColor} rounded-xl backdrop-blur-sm border border-white/10 overflow-hidden group`}
            >
              {/* Time Badge */}
              <div className={`absolute top-3 right-3 px-2 py-1 rounded-full ${item.bgColor} border border-white/20 backdrop-blur-md`}>
                <span className={`text-xs font-medium ${item.color}`}>{item.time}</span>
              </div>

              <div className="p-4">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-full ${item.bgColor} border border-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

