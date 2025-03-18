"use client"

import { motion } from "framer-motion"
import { Users, User, GraduationCap, Star, Lock, Hash } from "lucide-react"
import { Sparkles } from "@/components/sparkles"

export default function Rules() {
  const rules = [
    {
      icon: Users,
      title: "Team Size",
      description: "Up to 4 members per team",
      color: "text-blue-400"
    },
    {
      icon: User,
      title: "Solo Participation",
      description: "Register solo & get assigned a team",
      color: "text-green-400"
    },
    {
      icon: GraduationCap,
      title: "Year Diversity",
      description: "Members must be from different batches",
      color: "text-purple-400"
    },
    {
      icon: Star,
      title: "Team Leader",
      description: "One member handles communication",
      color: "text-yellow-400"
    },
    {
      icon: Lock,
      title: "No Changes",
      description: "Team members can't be changed after registration",
      color: "text-red-400"
    },
    {
      icon: Hash,
      title: "Unique Name",
      description: "Each team needs a distinct name",
      color: "text-cyan-400"
    }
  ]

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      <Sparkles />
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Rules & Guidelines
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Important information about team formation and participation in SANVEG 2025
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm p-6 rounded-xl shadow-glow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-white/5 ${rule.color}`}>
                  <rule.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{rule.title}</h3>
              </div>
              <p className="text-gray-400">{rule.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 